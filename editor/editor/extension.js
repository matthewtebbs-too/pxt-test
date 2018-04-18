var test;
(function (test) {
    var defaultToolboxXml = "";
    function initExtensionsAsync(opts) {
        var result = {
            toolboxOptions: {},
        };
        return Promise.resolve(result);
    }
    test.initExtensionsAsync = initExtensionsAsync;
})(test || (test = {}));
pxt.editor.initExtensionsAsync = test.initExtensionsAsync;
