import { defineConfig } from 'vite';
import monacoEditorPlugin from 'vite-plugin-monaco-editor/dist/index';
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";

export default defineConfig({
    plugins: [
        monacoEditorPlugin.default({}),
    wasm(),
    topLevelAwait()],
    build: {
        target: "esnext"
    }
});