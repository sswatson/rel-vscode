// provides completions and signature helps using dynamic information

import * as vscode from "vscode";
import core from "../documentation/rel-core";
import stdlib from "../documentation/stdlib";

function getCompletionMap(map: Map<String, any>) {
  const items: vscode.CompletionItem[] = [];
  const completionMap = new Map();
  map.forEach((value, key) => {
    for (let i = 1; i < key.length; i++) { 
      const fragment = key.substring(0, i);
      completionMap.set(fragment, [...(completionMap.get(fragment) || []), {
        label: key,
        documentation: value,
      }]);
    }
  });
  return completionMap;
}

const coreCompletionMap = getCompletionMap(core);
const stdlibCompletionMap = getCompletionMap(stdlib);

const selector = [
  { language: "rel", scheme: "untitled" },
  { language: "rel", scheme: "file" },
];

export function activate(context: vscode.ExtensionContext) {
  const completionSubscription = (
    vscode.languages.registerCompletionItemProvider(
      selector, 
      completionItemProvider()
    )
  );
  context.subscriptions.push(completionSubscription);
}

function completionItemProvider(): vscode.CompletionItemProvider {
  return {
    provideCompletionItems: async (document, position, token, context) => {
      const completionPromise = (async () => {
        const range = document.getWordRangeAtPosition(position);
        let word = document.getText(range);

        return {
          items: [
            ...coreCompletionMap.get(word) || [],
            ...stdlibCompletionMap.get(word) || [],
          ],
          isIncomplete: true,
        };
      })();

      return completionPromise;
    },
  };
}
