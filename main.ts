import { Plugin } from "obsidian";
import {lineNumbersRelative} from "codemirror-line-numbers-relative";

export default class RelativeLineNumbers extends Plugin {
  async onload() {
		this.registerEditorExtension(lineNumbersRelative());
	}
}
