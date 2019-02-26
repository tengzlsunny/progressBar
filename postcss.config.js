module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-pxtorem')({
            rootValue: 32,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: ['background-position-y', 'background-position-x'],
            replace: true,
            mediaQuery: false,
            minPixelValue: 6
        }),
    ]
}
