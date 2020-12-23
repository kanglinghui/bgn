<template>
    <div class="makeup">
        <div class="img">
            <img style="padding:0;width:100%;" src="../../../assets/images/start_banner.jpg" alt="">
        </div>
        <div class="content" :style="mobile?'width:100%;':''">
            <h3>2020-2021最新秋冬底妆趋势：肤色</h3>
            <p>2020-2021年最新底妆趋势出炉，纽约，伦敦，米兰和巴黎，四大时装周的妆容向我们揭示了，贴合肌肤本真水润质感的“肤色”将成为今年秋冬底妆的关键词。当谈到肤色趋势时，我们注意到这里有很大的发挥空间，艺术家们展示了两种基于伪装的技术来真正完善基础，而也有人则在崇尚裸露的肤色。</p>
            
            <img src="../../../assets/images/makeup/1.jpg" alt="">
            <h4>【1】没有基础</h4>
            <p>在许多秀场上，化妆师都延续了完全跳过粉底，使肤色尽可能裸露的趋势。当然，这并不是什么新鲜事，“光泽”美学已经连续几个季度出现在秀场上了。Proenza Schouler的设计意图是极简主义。也许有一种隐秘的暗示，但总的来说，脸上闪耀着一丝亮光，看起来干净自然。</p>
            <p>在Salvatore Ferragamo，化妆师法拉·霍米迪（Fara Homidi）选择了一种她称之为“坚强”的造型，裸露的脸，加上一点自然的唇色，让衣服真正为自己说话。克里斯托弗·凯恩、罗切斯和马蒂·博文的裸脸妆容更多。</p>
            <img src="../../../assets/images/makeup/2.jpg" alt="">
            <h4>【2】露水肤色</h4>
            <p>我有点担心，但看起来像露水的肤色没有任何用处，光泽亮丽的亮点将在2020年秋季美容潮流中回归。在某些情况下，露水皮肤是裸露趋势的延伸，而在其他情况下，这只是一种让化妆后的皮肤看起来不那么像化过妆的一种方式。Marine Serre的露水肤色效果是通过将传统荧光笔涂在脸上的光泽上而实现的，从而使面部看起来自然健康。在Balmain，结合了很多保湿剂和淡淡的荧光笔，当然还有极少或没有定型的粉末，可以达到露水般的肤色。</p>
            <p>我们还在The Row，Loewe，Victoria Beckham和Gucci看到了发光的皮肤。</p>
            <img src="../../../assets/images/makeup/3.jpg" alt="">
            <h4>【3】虚构肤色</h4>
            <p>轻盈和几乎不化妆的皮肤在秀场上占主导地位，但有趣的是，也看到一些化妆师对粉底，轮廓和高光等产品的使用更为沉重。</p>
            <p>在Brandon Maxwell，汤姆·佩奇（Tom Pecheux）专注于打造迷人的外观，这意味着完美而不是僵硬的皮肤，淡淡的温暖古铜色，并通过频闪霜获得了些许光泽。阿尔伯塔·费雷蒂（Alberta Ferretti）的皮肤也经过了适当的古铜色处理，尤其是颧骨下方和太阳穴。我们在马克·雅各布、理查德·马龙和范思哲也看到了稍微浓重的脸妆。</p>
            <img src="../../../assets/images/makeup/4.jpg" alt="">
            <h4>【4】经典无妆彩妆</h4>
            <p>自然的妆容真的不会出错。完善和增强，但看不到痕迹，这对每个人来说都是充满诱惑，而且完全是永恒的。</p>
            <p>Burberry的外观依靠Burberry品牌的妆容获得自然外观。粉底液涂了薄薄的一层，看起来不可见，还有裸色唇膏和眼部睫毛膏。香奈儿（Chanel）的大多数模特都戴着真正的无妆妆容，几乎没有粉底，淡淡的睫毛膏和柔和的玫瑰色腮红。在亚历山大·麦昆（Alexander McQueen），重点是使脸部看起来新鲜，略带腮红，但底妆或眼妆最少。</p>
            <img src="../../../assets/images/makeup/5.jpg" alt="">
            <h4>【5】红润</h4>
            <p>在脸颊或眼睑上抹上一点中性粉色，是让肤色看起来更年轻、更活泼的一种快速简便的方法，这是抵御寒冷天气的完美方法。这是2020秋冬淡妆或裸妆趋势中最可爱的一个。在Michael Kors，腮红被慷慨地涂在脸颊上，而其余的妆容仍然非常柔和和自然。米索尼（Missoni）的外观是古铜色的玫瑰烟熏眼，双唇相配，没有睫毛膏。为了使它具有艺术气息，一些模特在其下睫毛线下方还画了一条细长的眼线。Bora Aksu的粉红色和橙色眼影组合具有俏皮效果，因为从远处看，两个明亮的色调可以协同工作，以使它们看起来更柔和，即使它们各自都很生动。</p>
            <img src="../../../assets/images/makeup/6.jpg" alt="">
            <p>关于2020-2021年秋/冬化妆趋势，我还会分享关于眼妆、唇彩等相关内容，因篇幅问题，将在下回继续分解，想了解更多关于秋冬化妆趋势的问题，记得持续关注。</p>
        </div>
        <div class="btn" style="position:fixed;bottom:1rem;left:.05rem;"><a-button type="primary" @click="back"> <a-icon type="left" />返 回</a-button></div>
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
        if(window.innerWidth < 450){
            this.mobile = true;
        }
    },
    methods: {
        back(){
            this.$emit('back')
        }
    },
}
</script>
<style lang="less" scoped>
.makeup{
    .content{
        width:60%;
        margin:0 auto;
        padding:50px 10px;
        text-align: center;
    }
}
    h3{
        font-size:.14rem;
        font-weight: 700;
        line-height: .5rem;
        color:#303133;
        text-align: left;
    }
    h4{
        font-size:.13rem;
        font-weight: 700;
        line-height: .5rem;
        color:#303133;
        text-align: center;
    }
    p{
        font-size:.08rem;
        line-height: .16rem;
        margin:0;
        color:#606266;
        text-align: left;
    }
    p.center{
        text-align: center;
        color:#303133;
    }
    img{
        padding:20px 0;
        text-align: center;
    }
</style>