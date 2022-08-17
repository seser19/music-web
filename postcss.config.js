module.exports = {
    plugins: {
        'postcss-pxtorem': {
            //能够把所有元素的px单位转成rem
            //rootValue：转换px的基准值
            //例如一个元素宽是75px，则换成rem之后就是2rem
            rootValue: 37.5,
            propList:['*']
        }
    }
}
// postcss技术：webpack的插件（转化/降级css的代码）
// postcss-pxtorem插件：把px转成rem

// UI设计图          2倍图
// 基准：IPhone6     总结宽度750px
// flexibel.js -> 375 / 10
// rem转换基准值（html的font-size）：37.5px

// 使用
// 2倍图量出 标签宽度 100px， 50/37.5 = 1.3rem
//公式：量出宽度 / 当前基准html的font-size