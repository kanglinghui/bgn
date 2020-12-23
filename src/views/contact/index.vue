<template>
    <div class="contact">
        <div class="c-head">
            <img style="width:100%;" src="../../assets/images/gywm.jpg" alt="" />
        </div>
        <div class="mains" style="height:3rem">
            <div class="margin" :style="mobile?'width:95%':'width:80%'">
                <div class="left">
                    <div class="text-title">
                        <h3 :style="mobile?'':'font-size:30px;'">品牌故事</h3>
                        <p :style="mobile?'':'font-size:22px;'">走进宝妮格</p>
                    </div>
                    <div class="l-img">
                        <img src="../../assets/images/concat.jpg" alt="">
                    </div>
                </div>
                <div class="right">
                    <!-- <div class="img1">
                        <img src="../../assets/images/kh1.jpg" alt="">
                    </div>
                    <div class="img2">
                        <img src="../../assets/images/kh2.jpg" alt="">
                    </div>
                    <div class="img3">
                        <img src="../../assets/images/kh3.jpg" alt="">
                    </div> -->
                    <p :style="mobile?'':'font-size:16px;'">宝妮格诞生于魔都上海，是一个新锐的国货彩妆品牌。宝妮格秉承“以养代妆”的美学精神，倡导“轻彩妆、健康肌”理念。宝妮格推崇自然、高级感的清透裸妆，将植物精粹融入彩妆研发，打造出更适合亚洲女性的全新妆养家族彩妆产品。</p>
                </div>
            </div>
            <!-- <div class="content">
                <h3>品牌故事</h3>
                <p>女生因为是混合型肤质，所以经常因为选不对化妆品而导致卡粉，所以在公司经常被嘲笑！这样女生十分失落，男生知道后，决心帮女朋友解决这个困扰，他跑遍了几个大城市的生产厂家，一直没有找到很好的解决办法，这时候一位老中医的话给了男生很大的启发，他找到一家工厂，希望对方可以在粉底液中加入覆盆子和薰衣草花水的成分，希望可以增加清透持久性的同时可以保持水油平衡！让女生重新焕发自信，男生因为将女生视若珍宝，所以格外重视！所以取名宝妮格！</p>
            </div> -->
        </div>
        <div class="main" :style="mobile?'width:95%':'width:80%'">
            
            <div class="left">
                <div class="text-title">
                    <h3 :style="mobile?'':'font-size:30px;'">联系我们</h3>
                    <p :style="mobile?'':'font-size:22px;'">如有任何问题请联系我们，我们竭诚为您服务</p>
                </div>
                <div class="content">
                    <p :style="mobile?'':'font-size:14px;'">联系邮箱：fanjianwen@taoletec.cn</p>
                    <p :style="mobile?'':'font-size:14px;'">联系电话：021-6333 2600</p>
                    <p :style="mobile?'':'font-size:14px;'">联系地址：上海市徐汇区田林路388号</p>
                </div>
            </div>
            <div class="right">
                <!-- <img src="../../assets/images/c1.jpg" alt="" /> -->
            </div>
            
        </div>
        <div :class="mobile?'mobile-icon':'icon'">
            <div>
                <img src="../../assets/images/emil.png" alt="">
                <p :style="mobile?'':'font-size:14px;'">联系邮箱：<a href="mailto:fanjianwen@taoletec.cn">fanjianwen@taoletec.cn</a></p>
            </div>
            <div>
                <img src="../../assets/images/phone.png" alt="">
                <p :style="mobile?'':'font-size:14px;'">联系电话：021-6333 2600</p>
            </div>
            <div>
                <img src="../../assets/images/city.png" alt="">
                <p :style="mobile?'':'font-size:14px;'">联系地址：上海市徐汇区田林路388号</p>
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
    padding-top:.22rem;
    margin-bottom: .2rem;
    line-height: .18rem;
    font-size:.14rem;
}
.mains{
     background: url("../../assets/images/kk.png") no-repeat;
    background-size: 100% 100%;
    background-color: rgba(253,226,217,1);
    position:relative;
    .text-title{
    border-left:.02rem solid #fbc9b9;
    margin-bottom:.2rem;
}
.text-title h3,p{
    margin-left:.2rem;
}
.text-title h3{
    font-size:.24rem;
    font-weight: 600;
}
.text-title p{
    // line-height: .4rem;
    font-size:.14rem;
}
p.text{
    padding-top:.2rem;
    width:1.8rem;
    font-size:.1rem;
    line-height: .16rem;
    color:#999;
}
.margin{
    width:95%;
    margin:0 auto;
    padding-top:.2rem;
    display: flex;
    justify-content:space-around;
}
.right{
    width:2.3rem;
    p{
        border-radius: 2px;
        font-size:.1rem;
        padding:.06rem;
        color:rgba(0,0,0,.65);
        line-height: .18rem;
        background-color: #fff1f0;
        border: 1px solid #ffa39e;
        // text-shadow: 6px 6px 10px rgba(0,0,0,.3);
    }
}
.right .img1{
    width:.6rem;
    position:relative;
    top:0px;
    left:.3rem;
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
 .right .img2{
    position:relative;
    top:-.3rem;
    left:-.3rem;
}

 .right .img3{
    position:relative;
    top:-25%;
    left:.2rem
}
.l-img img{
    width:1.05rem;
    height:1.2rem;
}
.content{
    // position:absolute;
    // bottom:6%;
    // right:28%;

    padding:.1rem;
    // width:1.8rem;
    color:#5c5c5c;
    z-index:99;
    h3{
        font-size:.16rem;
        padding-top:.2rem;
        font-weight: 600;
        color:#000;
        text-align: center;
        margin-bottom:.2rem;
    }
    p{
        margin:0;
        color:#fff;
        font-size:.08rem;
        line-height: .14rem;
        font-weight: 600;
        text-shadow: 2px 4px 4px #666;
    }
}
}
.main{
    padding:.4rem 0;
    width:95%;
    margin:0 auto;
    display: flex;
    justify-content:space-around;
}
.content{
    p{
        font-size:.08rem;
        line-height: .16rem;
        color:#999;
    }
    
}
.right{
    img{
        width:1.5rem;
        height:1rem;
    }
}
.icon{
    background-color:#f2f2f2 ;
    padding:.3rem .1rem;
    display: flex;
    justify-content: space-around;
    div{
        text-align: center;
        img{
            margin-bottom:.05rem;
        }
        p{
            margin-left:0;
            font-size:.08rem;
            color:#5c5c5c;
        }
    }
}
.mobile-icon{
    background-color:#f2f2f2 ;
    padding:.3rem .1rem;
    div{
        text-align: center;
        img{
            margin-bottom:.05rem;
            width:.5rem;
            height:.5rem;
        }
        p{
            font-size:.1rem;
            color:#5c5c5c;
        }
    }
}
</style>