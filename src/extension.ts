import * as vscode from 'vscode';
import * as completions from './language/completions';
import { getStdlibMap } from './documentation/stdlib-data';
import core from './documentation/rel-core';

export function activate(context: vscode.ExtensionContext) {

	const stdlibMap = getStdlibMap();
	
	const disposable = vscode.languages.registerHoverProvider(['rel'], {
		provideHover(document, position) {
			const range = document.getWordRangeAtPosition(position);
			let word = document.getText(range);

			const startChar = range?.start?.character;

			if (startChar && startChar > 0) {
				const range2 = new vscode.Range(
					new vscode.Position(range.start.line, range.start.character - 1), range.end
				);
				const word2 = document.getText(range2);
				if (word2[0] === '@') {
					word = word2;
				}
		}

		let hoverText = core.get(word) || stdlibMap.get(word)?.name || "";

		return new vscode.Hover(hoverText);
		}
	});

	context.subscriptions.push(disposable);

	completions.activate(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}
