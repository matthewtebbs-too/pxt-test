/*
    MIT License

    Copyright (c) 2018 MuddyTummy Software LLC
*/

/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts"/>

namespace test {
    const defaultToolboxXml = ``;

    export function initExtensionsAsync(opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
        const result: pxt.editor.ExtensionResult = {
            toolboxOptions: {
                // blocklyXml: defaultToolboxXml,
            },
        };

        return Promise.resolve(result);
    }
}

pxt.editor.initExtensionsAsync = test.initExtensionsAsync;
