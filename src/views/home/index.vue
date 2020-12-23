<template>
    <main class="home">
        <h1 v-show="false" id="baonige">宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格</h1>
        <div class="swiper">
            <a-carousel arrows autoplay>
                <div
                slot="prevArrow"
                slot-scope="props"
                class="custom-slick-arrow"
                style="left: 10px;zIndex: 1"
                >
                <a-icon type="left-square" />
                </div>
                <div slot="nextArrow" slot-scop="props" class="custom-slick-arrow" style="right: 10px">
                <a-icon type="right-square" />
                </div>
                <div class="banner">
                    <a class="link" href="https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-23169426936.12.30aa5bf5ex02XL&id=630338978325" target="_blank"></a>
                    <img src="../../assets/images/banner/banner77.jpg" alt="">
                </div>
                <div class="banner">
                    <a class="link" target="_blank" href="https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-23169426936.12.30aa5bf5ex02XL&id=630338978325"></a>
                    <img src="../../assets/images/banner/banner11.jpg" alt="">
                </div>
                <div class="banner">
                    <a class="link" target="_blank" href="https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-23169426936.24.30aa5bf5ex02XL&id=631623290579"></a>
                    <img src="../../assets/images/banner/banner22.jpg" alt="">
                </div>
                <div class="banner">
                    <a class="link" target="_blank" href="https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-23169426936.9.30aa5bf5ex02XL&id=629799612815"></a>
                    <img src="../../assets/images/banner/banner33.jpg" alt="">
                </div>
                <div class="banner">
                    <a class="link" target="_blank" href="https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-23169426936.18.30aa5bf5ex02XL&id=631244319861"></a>
                    <img src="../../assets/images/banner/banner44.jpg" alt="">
                </div>
                <div class="banner">
                    <a class="link" href="https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-23169426936.30.30aa5bf5ex02XL&id=632389112950" target="_blank" ></a>
                    <img src="../../assets/images/banner/banner55.png" alt="">
                </div>
                <div class="banner">
                    <a class="link" href="https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-23169426936.9.30aa5bf5ex02XL&id=629799612815" target="_blank"></a>
                    <img src="../../assets/images/banner/banner66.jpg" alt="">
                </div>
                <!-- <div class="banner">
                    <img src="../../assets/images/banner/banner5.jpg" alt="">
                </div>
                <div class="banner">
                    <img src="../../assets/images/banner/banner6.jpg" alt="">
                </div> -->
            </a-carousel>
        </div>
        <div class="main">
            <div class="one">
                <div class="margin" :style="mobile?'width:95%':'width:80%'">
                    <div class="left">
                         <div class="img">
                            <img src="../../assets/images/one.png" alt="">
                        </div>
                        <div class="text-title">
                            <h3 :style="mobile?'':'font-size:30px;'">明星产品</h3>
                            <p  :style="mobile?'':'font-size:22px;'">抵御蓝光 妆养合一</p>
                        </div>
                        <p class="text"  :style="mobile?'':'font-size:14px;'">
                            粉底液心机裸感小方瓶粉底液，添加了天然胡萝卜籽油、胡萝卜根提取物、β-胡萝卜素萃取混合提取物，能有效对抗因蓝光形成的自由基、黑色素沉淀、肌肤暗沉等问题，以阻绝电子产品带来的蓝光老化伤害。
                        </p>
                    </div>
                    <div class="right">
                        <div class="r-img">
                            <img style="width:1.62rem;height:1.9rem;" src="../../assets/images/l3.jpg" alt="">
                        </div>
                    </div>
                   <!-- <div class='right'>
                       <div class="img1">
                           <img src="../../assets/images/kh1.jpg" alt="">
                       </div>
                       <div class="img2">
                           <img src="../../assets/images/kh2.jpg" alt="">
                       </div>
                       <div class="img3">
                           <img src="../../assets/images/kh3.jpg" alt="">
                       </div>
                   </div> -->
                </div>
            </div>
            
            <div class="two">
                <div class="margin" :style="mobile?'width:95%':'width:80%'">
                    <div class="left">
                        <div class="two-img">
                            <img src="../../assets/images/two-1.jpg" alt="">
                        </div>
                    </div>
                    <div class="right">
                        <div class="img">
                            <img src="../../assets/images/2.png" alt="">
                        </div>
                         <div class="text-title">
                            <h3  :style="mobile?'':'font-size:30px;'">美丽指南</h3>
                            <p :style="mobile?'':'font-size:22px;'">健康护肤 养肤彩妆</p>
                        </div>
                        <p class="text"  :style="mobile?'':'font-size:14px;'">
                           对美的追求不单单只是一阵的潮流，它早已逐渐发展成为现代消费者对生活的态度，对追求健康护肤，养肤彩妆的一项标准。如果，想要皮肤获得真正意义上的“自由”与“重生”，宝妮格所倡导的护肤大趋势“以养代妆”将必须是首选必修课！
                        </p>
                    </div>
                </div>
            </div>
            <div class="three">
                <div class="margin" :style="mobile?'width:95%':'width:80%'">
                    <div class="left">
                        <div class="left-img1">
                            <img src="../../assets/images/3.png" alt="">
                        </div>
                        <div class="text-title">
                            <h3  :style="mobile?'':'font-size:30px;'">品牌介绍</h3>
                            <p :style="mobile?'':'font-size:22px;'">关于我们</p>
                        </div>
                        <p class="text" :style="mobile?'':'font-size:14px;'">
                            宝妮格诞生于魔都上海，是一个新锐的国货彩妆品牌。宝妮格秉承“以养代妆”的美学精神，倡导“轻彩妆、健康肌”理念。宝妮格推崇自然、高级感的清透裸妆，将植物精粹融入彩妆研发，打造出更适合亚洲女性的全新妆养家族彩妆产品。
                        </p>
                        <!-- <div class="left-img2">
                            <img src="../../assets/images/l1.jpg" alt="">
                        </div> -->
                    </div>
                    <!-- <div class="center"> -->
                        <!-- <div class="c-img">
                            <img src="../../assets/images/l2.jpg" alt="">
                        </div> -->
                         <!-- <div class="text-title">
                            <h3>品牌介绍</h3>
                            <p>走进宝妮格</p>
                        </div>
                        <p class="text">
                            让女生重新焕发自信，男生因为将女生视若珍宝，所以格外重视！所以取名宝妮格！
                        </p> -->
                    <!-- </div> -->
                    <div class="right">
                        <div class="r-img">
                            <img style="width:1.62rem;height:1.7rem;" src="../../assets/images/k.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <h3 :style="mobile?'':'font-size:30px;'">宝妮格 以养代妆</h3>
            <p :style="mobile?'':'font-size:16px;'">宝妮格“以养代妆”，将纯天然、绿色的植物养肤成分，融入其护肤、彩妆品之中，为客户带来“更天然、更安全”的全新概念彩妆。目前，宝妮格品牌拥有面膜、粉底液、眉笔等，护肤、彩妆两条线的产品系列。有别于其他彩妆品牌，宝妮格在彩妆产品的用途、成分、品牌定位上更为细分。美白、保湿、抗蓝光、抗衰老这些概念将带给更多的消费者，以满足大众消费者在日常生活中所有的客观功能需求。未来，宝妮格将践行“以养代妆”的品牌理念，持续推出“养肤家族”产品，向世界传递一种属于中国的美妆新风尚。</p>
        </div>
    </main>
</template>
<script>

export default {
    data(){
        return {
           mobile:false
        }
    },
    mounted(){
        if(window.innerWidth < 500){
            this.mobile = true;
        }else{
            this.mobile = false;
        }
    }
}
</script>
<style scoped>
.banner{
    cursor: pointer;
    position:relative;
    width:100%;
}
.banner a.link{
    display:inline-block;
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    z-index: 999;
}
.banner img{
    width:100%;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  /* height: 160px;
  line-height: 160px; */
  /* height:calc(100vh - 200px); */
  background: rgba(255,255,255,0);
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: .36rem;
  height: .36rem;
  font-size: .36rem;
  color: #fff;
  /* border-radius: 50%; */
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.6;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.margin{
    display: flex;
    justify-content: space-around;
    width:80%;
    margin:0 auto;
}
.margin .right .img1{
    width:.6rem;
    position:relative;
    top:0px;
    left:.5rem;
}
.right .img1 img{
    width:0.6rem;
    height:1rem;
}
.right .img2 img{
    width:0.8rem;
    height:1.1rem;
}
.right .img3 img{
    width:1rem;
    height:1.2rem;
}
.margin .right .img2{
    position:relative;
    top:-.5rem;
    /* left:-.3rem; */
}

.margin .right .img3{
    position:relative;
    top:-25%;
    left:.2rem
}
.main .one{
    background: url("../../assets/images/kk.png") no-repeat;
    background-size: 100% 100%;
    /* height:500px; */
    padding:.2rem 0;
}
.main .one .img{
    margin:.3rem 0 .2rem .5rem;
}
.main .one .img img{
    width:1rem;
    height:.8rem;
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
.two{
    padding:.2rem 0;
    background:#f2f2f2;
}
.two .right{
    margin-left:.1rem;
}
.two .left .two-img{
   position:relative;
   top:50%;
   transform: translateY(-50%);
}
.two .right .img{
    margin-bottom:.1rem;
}
.two .right .img img{
    width:1rem;
    height:.8rem;
}
.three{
    padding:.2rem 0;
}
.three .left .left-img1 img{
    width:1rem;
    height:.8rem;
}
.three .left .left-img1{
    margin-bottom:.1rem;
}
.three .left .left-img2 img{
    width:1rem;
    height:1.1rem;
}
.three .center{
    margin-left:.05rem;
}
.three .center .c-img{
    margin-bottom:.1rem;
}
.three .center .c-img img{
    width:1.2rem;
    height:1.38rem;
}
.three .right .r-img img{
    width:1rem;
    height:1.1rem;
}
.three .right .r-img{
    
}
.bottom{
    background:url("../../assets/images/b1.jpg") no-repeat;
    background-size: 100% 100%;
    padding:.2rem 0;
}
.bottom h3{
    font-weight: 600;
    font-size:.16rem;
    color:#fff;
    line-height: .5rem;
    text-align: center;
}
.bottom p{
    color:#fff;
    font-size:.10rem;
    line-height: .16rem;
    /* text-align: center; */
    width: 80%;
    margin:0 auto;
}
</style>