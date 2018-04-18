(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt-Test/",
    "workerjs": "/pxt-Test/worker.js",
    "tdworkerjs": "/pxt-Test/tdworker.js",
    "monacoworkerjs": "/pxt-Test/monacoworker.js",
    "pxtVersion": "3.10.3",
    "pxtRelId": "",
    "pxtCdnUrl": "/pxt-Test/",
    "commitCdnUrl": "/pxt-Test/",
    "blobCdnUrl": "/pxt-Test/",
    "cdnUrl": "/pxt-Test/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "test",
    "simUrl": "/pxt-Test/simulator.html",
    "partsUrl": "/pxt-Test/siminstructions.html",
    "runUrl": "/pxt-Test/run.html",
    "docsUrl": "/pxt-Test/docs.html",
    "isStatic": true
};

    var scripts = [
        "/pxt-Test/highlight.js/highlight.pack.js",
        "/pxt-Test/bluebird.min.js",
        "/pxt-Test/semantic.js",
        "/pxt-Test/marked/marked.min.js",
        "/pxt-Test/target.js",
        "/pxt-Test/pxtembed.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt-Test/jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
