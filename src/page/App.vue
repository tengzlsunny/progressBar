<template>
    <div class="progress">
        <div class="progress_1">
            <div class="pro_per1"></div>
            <div class="pro_bk1"></div>
            <p>{{num1}}%</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num1: 0
        }
    },
    mounted() {
        this.progress1()
    },
    methods: {
        progress1() {
            let that = this,
            pro_bk1 = document.querySelector('.pro_bk1'),
            timer = null;

            timer = setInterval(() => {
                that.num1++
                pro_bk1.style.width = (100 - that.num1) + '%'
                if (that.num1 == 100) {
                    clearInterval(timer)
                }
            },100)

        }
    }
}
</script>
<style lang="scss" scoped>
    .progress > div {
        width: 90%;
        margin: 0 auto;
        height: 60px;
        margin-top: 100px;
        position: relative;
        overflow: hidden;
    }
    .pro_per1 {
        width: 100%;
        height: 20px;
        border-radius: 10px;
        background: -webkit-linear-gradient(to right, #ff9569 0%, #e92758 100%); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(to right, #ff9569 0%, #e92758 100%); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(to right, #ff9569 0%, #e92758 100%); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #ff9569 0%, #e92758 100%); /* 标准的语法 */
    }
    .pro_bk1 {
        width: 100%;
        height: 20px;
        position: absolute;
        border-radius: 10px;
        top: 0;
        right: 0;
        background: #ccc;
        background: radial-gradient(circle at 0 10px, transparent 10px, #ccc 10px) top left, radial-gradient(circle at 0 0, transparent 0, #ccc 0) right top;
        background-size: 52% 100%;
        background-repeat: no-repeat;
        border-radius: 0 10px 10px 0;
    }
    .progress_1 p {
        position: absolute;
        right: 0;
        top: 5px;
        font-size: 12px;
        color: #ff9569;
    }
</style>


