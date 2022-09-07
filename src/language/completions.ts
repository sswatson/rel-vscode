// provides completions and signature helps using dynamic information

import * as vscode from "vscode";
import core from "../documentation/rel-core";
import { getUnicodeMap } from "../documentation/unicode-data";
import { getStdlibMap } from "../documentation/stdlib-data";

function getCompletionMap<V>(
  map: Map<string, V>,
  transform: (key: string, value: V) => vscode.CompletionItem
): Map<string, vscode.CompletionItem[]> {
  const completionMap = new Map<string, vscode.CompletionItem[]>();
  map.forEach((value, key) => {
    for (let i = 1; i < key.length + 1; i++) {
      const fragment = key.substring(0, i);
      completionMap.set(fragment, [
        ...(completionMap.get(fragment) || []),
        transform(key, value),
      ]);
    }
  });
  return completionMap;
}

const selector = [
  { language: "rel", scheme: "untitled" },
  { language: "rel", scheme: "file" },
];

export function activate(context: vscode.ExtensionContext) {

  const completionSubscription =
    vscode.languages.registerCompletionItemProvider(
      selector,
      completionItemProvider()
    );
  context.subscriptions.push(completionSubscription);
}


function completionItemProvider(): vscode.CompletionItemProvider {
  const coreCompletionMap = getCompletionMap(core, (key, value) => ({
    label: key,
    documentation: new vscode.MarkdownString(value),
  }));
  const unicodeCompletionMap = getCompletionMap(
    getUnicodeMap(),
    (key, value) => ({
      label: value.label,
      documentation: new vscode.MarkdownString(value.info),
      insertText: value.apply,
    })
  );
  const stdlibCompletionMap = getCompletionMap(getStdlibMap(), (key, value) => ({
    label: key,
    documentation: new vscode.MarkdownString(value.docstring),
  }));
  return {
    provideCompletionItems: async (document, position, token, context) => {
      const completionPromise = (async () => {
        let range = document.getWordRangeAtPosition(position);
        let range2: vscode.Range | undefined;
        let word = document.getText(range);

        // deal with prompts that start with a backslash, for unicode completions: 
        if (range && range.start.character > 0) {
          const range2 = new vscode.Range(
            new vscode.Position(range.start.line, range.start.character - 1),
            range.end
          );
          const word2 = document.getText(range2);
          if (word2[0] === "\\") {
            range = range2; 
            word = word2;
          }
        }

        const addRange = (item: vscode.CompletionItem) => {
          return {
            ...item,
            range
          };
        };

        return {
          items: [
            ...(coreCompletionMap.get(word) || []).map(addRange),
            ...(unicodeCompletionMap.get(word) || []).map(addRange),
            ...(stdlibCompletionMap.get(word) || []).map(addRange),
          ],
          isIncomplete: true,
        };
      })();

      return completionPromise;
    },
  };
}

vscode.CompletionItem