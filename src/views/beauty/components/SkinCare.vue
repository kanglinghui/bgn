<template>
    <div class="skin">
        <div class="img">
            <img style="padding:0;width:100%;" src="../../../assets/images/start_banner.jpg" alt="">
        </div>
        <div class="content" :style="mobile?'width:100%;':''">
            <h3>化妆水你真的用对了吗？</h3>
            <p>众所周知，化妆水是护肤的第一个步骤，可你真的用对化妆水了吗？你知道使用化妆水也黄金时间吗？究竟如何使用化妆水才能针对自己的皮肤，让其发挥真正的功效，继续看下去吧。</p>
            <h4>该用化妆棉还是手？</h4>
            <p>化妆水该用化妆棉还是手这个问题，大概是很多人都会有疑问的，不过答案却是不是单一的，而是视乎你的肤质、习惯和化妆水的性质。简单来说，对于油性皮肤的人来说，使用化妆棉搭配化妆水，尤其是带有去角质功效的化妆水，就可以有二次清洁的作用，减少皮肤上的油脂分泌；而对于乾性皮肤来说，用手拍上化妆水就可以加强皮肤的吸收，增加保湿的功效。</p>
            <h4>越大力拍越容易吸收？</h4>
            <p>很多人受著广告的影响，都认为用手把化妆水大力拍上脸就可以令皮肤吸收得更好，然而，过份用力拍打皮肤其实也是一种刺激，而且对于护肤品的吸收是没有帮助的。相反，先把化妆水倒在手掌心，然后双手搓揉再轻轻按压上脸部不同位置，手掌的热力可以令皮肤更容易吸收，而且亦可以增加脸部的血液循环。</p>
            <h4>化妆水的成份</h4>
            <p>化妆水作为第一步的护肤，其实可以有很多不同的功效，除了保湿，还可以镇静皮肤、去角质、甚至美白、抗炎等。不过，在选择化妆水时，可以留意成份中是否含有神经酰胺、透明质酸等，因为这些成分可以为皮肤中设置锁水屏障，做到深层保湿。</p>
            <p>另外，很多人都喜欢使用化妆水湿敷上脸，当作急救保湿面膜，然而并非所有化妆水的成分都适合湿敷。通常选择成分天然的配方会比较适合湿敷，而成份含有果酸、酒精又或是质感过于浓稠的化妆水用作湿敷的话，就反而会对皮肤造成伤害。</p>
            <h4>使用化妆水的黄金时间</h4>
            <p>化妆水也有黄金时间，就是在洗脸后大概 3 分钟内，趁著皮肤还在湿润的状态，就应该使用化妆水，把水份锁住。另外，在化妆前也可以利用化妆棉湿敷在睑，来一个快速的保湿。</p>
            <p>事实上，化妆水并不一定要只使用一次，很多日韩女生都会在护肤过程中使用多次化妆水，加强保湿的效用。在乾燥的秋冬季节，你也不妨试试这种方法呢！</p>
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
.skin{
    .content{
        width:60%;
        margin:0 auto;
        padding:50px 10px;
    }
}
    h3{
        font-size:.14rem;
        font-weight: 700;
        line-height: .5rem;
        color:#303133;
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
    }
</style>