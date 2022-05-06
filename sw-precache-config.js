module.exports = {
    staticFileGlobs: [
        './',
        './images/**.*',
        './app.js',
        './style.css',
        './index.html',
        './*.ttf'
    ],
    runtimeCaching: [{
        urlPattern: /.*/,
        handler: 'networkFirst'
    }],
    swFile: 'service-worker.js'
};