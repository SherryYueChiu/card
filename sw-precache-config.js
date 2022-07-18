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
        handler: 'fastest'
    }],
    swFile: 'service-worker.js'
};