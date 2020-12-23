<template>
    <div class="star_product">
        <div class="banner">
            <img style="width:100%;" src="../../assets/images/fdy.jpg" alt="">
        </div>
        <div class="main">
            <div class="margin">
                <div class="top">
                    <div class="t_img">
                        <img src="../../assets/images/js1.jpg" alt="">
                    </div>
                    <div>
                        <div class="text-title">
                            <h3 :style="mobile?'':'font-size:30px;'">明星产品</h3>
                            <p :style="mobile?'':'font-size:22px;'">心机裸感小方瓶粉底液</p>
                        </div>
                        <p class="text" :style="mobile?'width:1.6rem;':'width:2.2rem;font-size:14px;'">
                            针对蓝光污染，宝妮格推出一款可以抵御外界蓝光侵害的“小方瓶”粉底液。粉底液中添加了天然胡萝卜籽油、胡萝卜根提取物、β-胡萝卜素萃取混合提取物，能有效对抗因蓝光形成的自由基、黑色素沉淀、肌肤暗沉等问题，以阻绝电子产品带来的蓝光老化伤害。粉底液中含有75%的精华水成分，包含薰衣草花水、维生素E、覆盆子叶提取物、向日葵籽油等植物护肤因子，质地水润轻薄，延展性强，超强贴服，极易上妆，且长效持妆不脱妆，打造0毛孔柔雾妆面。
                        </p>
                    </div>
                </div>
                <!-- <div class="center">
                    <div>
                        <div class="text-title">
                            <h3>明星产品</h3>
                            <p>净透焕颜水散粉</p>
                        </div>
                        <p class="text">
                            加入补水因子让皮肤水润自然，远离卡粉脱妆，重现宝宝肌！柔滑细致！
                        </p>
                    </div>
                    <div class="c_img">
                        <img src="../../assets/images/l2.jpg" alt="">
                    </div>
                </div> -->
                <!-- <div class="bottom">
                    <div>
                        <div class="img-t">
                            <img src="../../assets/images/i1.jpg" alt="">
                            <img src="../../assets/images/i2.jpg" alt="">
                            <img src="../../assets/images/i3.jpg" alt=""> 
                        </div>
                    </div>
                    <div>
                        <div class="img-b">
                            <img src="../../assets/images/i4.jpg" alt="">
                            <img src="../../assets/images/i5.jpg" alt="">
                            <img src="../../assets/images/i6.jpg" alt=""> 
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            mobile:false
        }
    },
    mounted() {
        if(window.innerWidth < 1000){
            this.mobile = true;
        }
    },
}
</script>
<style lang="less" scoped>
    .star_product{
        .main{
            // background: url("../../assets/images/star.jpg") no-repeat;
            // background-size: 100% 100%;
            background: url("../../assets/images/kk.png") no-repeat;
            background-size: 100% 100%;
            padding:.69rem 0;
            .margin{
                width:90%;
                margin:0 auto;
                .top{
                    display: flex;
                    justify-content:center;
                    .t_img{
                        margin-right:.1rem;
                        img{
                            width:1.6rem;
                            height:1.6rem;
                        }
                    }
                }
                .center{
                    padding:.2rem 0;
                    display: flex;
                    justify-content: space-around;
                    .c_img{
                        img{
                            width:1.3rem;
                            height:1.5rem;
                        }
                    }
                }
                .bottom{
                    img{
                        width:30%;
                        &:hover{
                            transition: .5s;
                            transform: translateX(.1rem);
                        }
                    }
                }
            }
        }
    }
.text-title{
    border-left:.02rem solid #fbc9b9;
}
.text-title h3,p{
    margin-left:.2rem;
}
.text-title h3{
    font-size:.24rem;
    font-weight: 600;
}
.text-title p{
    line-height: .4rem;
    font-size:.14rem;
}
p.text{
    padding-top:.2rem;
    width:2rem;
    font-size:.1rem;
    line-height: .16rem;
    color:#606266;
}
</style>