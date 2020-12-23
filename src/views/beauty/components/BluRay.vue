<template>
    <div class="blu">
        <div class="img">
            <img style="padding:0;width:100%;" src="../../../assets/images/start_banner.jpg" alt="">
        </div>
        <div class="content" :style="mobile?'width:100%;':''">
            <h3>世界保健日 远离肌肤亚健康</h3>
            <p>随着城市工作节奏的加快，当代都市女性越来越受到电子产品所带来的“蓝光”侵害。10月13日是世界保健日，宝妮格为现代女性远离肌肤亚健康，隆重推出一款「心机裸感小方瓶」粉底液，帮助城市女性效抵御蓝光伤害导致的各种肌肤细纹与老化问题。</p>
            <h4>什么是蓝光？</h4>
            <img src="../../../assets/images/bluRay/1.png" alt="">
            <br/>
            <img src="../../../assets/images/bluRay/2.gif" alt="">
            <p>波长最短、能量最高。蓝光是光波长在(400nm～500nm)之间的高能短波光，这种光线在人眼的可见光范围（380nm～780nm）内，人眼观察为蓝色，所以被称为蓝光。</p>
            <h4>蓝光的来源？</h4>
            <img src="../../../assets/images/bluRay/3.jpg" alt="">
            <p>自然蓝光</p>
            <p>自然光，又称天然光，按波长可分为红、橙、黄、绿、蓝、靛、紫。因为蓝光的波长较短且能量较高，所以大部分蓝光在遇到大气中的微粒时，会发生散射和反射，致使天空呈蓝色。</p>
            <img src="../../../assets/images/bluRay/4.gif" alt="">
            <p>人造蓝光</p>
            <p>人造蓝光主要由电子产品发出，如手机、电脑和电视等，甚至还有路灯以及室内节能灯等，主要发光部件为发光二极管，俗称LED灯。</p>
            <p class="center">蓝光对皮肤的危害，</p>
            <p class="center">主要表现为诱发色素沉着，</p>
            <p class="center">同时加速皮肤衰老、松弛。</p>
            <p>可穿透至皮肤真皮层，在蓝光照射下，细胞中线粒体会产生活性氧自由基，并与线粒体、DNA以及含有脂质的细胞结构，如细胞膜、线粒体膜、溶酶体等发生氧化反应，损伤线粒体和DNA，造成细胞膜功能障碍影响细胞生长发育，破坏细胞结构，引起细胞损伤导致细胞凋亡。</p>
            <h4>如何抵御蓝光侵害？</h4>
            <img src="../../../assets/images/bluRay/5.gif" alt="">
            <img src="../../../assets/images/bluRay/6.gif" alt="">
            <p>抗氧化剂：排除自由基</p>
            <p>白藜芦醇、维生素C、维生素E等，保护细胞免受氧化损伤。</p>
            <p>蓝光吸收剂：抵抗蓝光</p>
            <p>类胡萝卜素如叶黄素有两个吸收峰分别位于446 nm 以及476 nm、玉米黄质的吸收峰为460 nm，均可吸收蓝光。</p>
            <h4>心机裸感小方瓶粉底液</h4>
            <a-card hoverable style="width:3.5rem;margin:0 auto;">
                <img
                slot="cover"
                alt="example"
                src="../../../assets/images/bluRay/7.jpg"
                />
                <a-card-meta title="宝妮格彩妆全球明星单品">
                <template slot="description">
                    #抗蓝光小方瓶#
                </template>
                </a-card-meta>
            </a-card>
            <div style="margin-bottom:20px;"></div>
            <a-card hoverable style="width:3.5rem;margin:0 auto;">
                <img
                slot="cover"
                alt="example"
                src="../../../assets/images/bluRay/8.jpg"
                />
                <a-card-meta title="宝妮格彩妆全球明星单品">
                <template slot="description">
                    <div>水润轻盈<a-divider type="vertical" />轻透裸感</div>
                    <div>持妆长久<a-divider type="vertical" />妆养合一</div>
                    <div>抵御蓝光 远离肌肤亚健康</div>
                </template>
                </a-card-meta>
            </a-card>
            <div style="margin-bottom:20px;"></div>
            <a-card hoverable style="width:3.5rem;margin:0 auto;">
                <img
                slot="cover"
                alt="example"
                src="../../../assets/images/bluRay/9.jpg"
                />
            </a-card>
            <div style="margin-bottom:20px;"></div>
            <a-card hoverable style="width:3.5rem;margin:0 auto;">
                <img
                slot="cover"
                alt="example"
                src="../../../assets/images/bluRay/10.jpg"
                />
            </a-card>
            <div style="margin-bottom:20px;"></div>
            <!-- <img src="../../../assets/images/bluRay/9.jpg" alt="">
            <img src="../../../assets/images/bluRay/10.jpg" alt=""> -->
            <p>集养肤、美妆于一体的粉底液，含天然薰衣草花水、覆盆子提取物等补水因子；富含维他命E衍生物，有效抗氧化，使肌肤充满弹性；特别萃取的胡萝卜籽油、β-胡萝卜素，胡萝卜根提取物，可对蓝光进行强效吸收，防御。</p>
        
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
.blu{
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
    .content img{
        padding:20px 0;
        text-align: center;
    }
</style>