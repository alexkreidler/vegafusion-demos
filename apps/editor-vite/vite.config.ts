import { defineConfig } from 'vite';
import monacoEditorPlugin from 'vite-plugin-monaco-editor/dist/index';
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";
import requireTransform from 'vite-plugin-require-transform';

export default defineConfig({
    plugins: [
        requireTransform(),
        monacoEditorPlugin.default({}),
    wasm(),
    topLevelAwait()],
    build: {
        target: "esnext"
    }
});