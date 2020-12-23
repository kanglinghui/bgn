<template>
    <div class="beauty">
        
        <transition name="fade">
            <div v-show="main">
                <div class="top" ref="top">
                    <img src="../../assets/images/beauty.jpg" style="width:100%;" alt="">
                </div>
                <div class="main">
                <a-card hoverable style="margin-bottom:20px;" @click="skinClick">
                    <img
                        slot="cover"
                        alt="example"
                        src="../../assets/images/Beautiful/3_03.jpg"
                        />
                    <a-card-meta title="化妆水你真的用对了吗？">
                        <template slot="description">
                            护肤美妆知识
                        </template>
                    </a-card-meta>
                </a-card>
                <a-card hoverable style="margin-bottom:20px;" @click="bluClick">
                    <img
                        slot="cover"
                        alt="example"
                        src="../../assets/images/Beautiful/3_05.jpg"
                        />
                    <a-card-meta title="世界保健日 远离肌肤亚健康">
                        <template slot="description">
                            蓝光危害
                        </template>
                    </a-card-meta>
                </a-card>
                <a-card hoverable style="margin-bottom:20px;" @click="makeupClick">
                    <img
                        slot="cover"
                        alt="example"
                        src="../../assets/images/Beautiful/3_07.jpg"
                        />
                    <a-card-meta title="2020-2021最新秋冬底妆趋势：肤色">
                        <template slot="description">
                            底妆趋势
                        </template>
                    </a-card-meta>
                </a-card>
                <a-card hoverable style="margin-bottom:20px;" @click="camberClick">
                    <img
                        slot="cover"
                        alt="example"
                        src="../../assets/images/Beautiful/3_09.jpg"
                        />
                    <a-card-meta title="现在流行的眉形适合我吗？">
                        <template slot="description">
                            当季眉形趋势
                        </template>
                    </a-card-meta>
                </a-card>
            </div>
            </div>
         </transition>
        <transition name="fade">
            <BluRayUI v-show="bluRay" @back="bluBack"/>
        </transition>
        <transition name="fade">
            <CamberUI v-show="camber" @back="camberBack"/>
        </transition>
        <transition name="fade">
            <MakeupUI v-show="makeup" @back="makeBack"/>
        </transition>
        <transition name="fade">
            <SkinCareUI v-show="skinCare" @back="skinBack"/>
        </transition>
    </div>
</template>
<script>
import BluRayUI from "./components/BluRay";
import CamberUI from "./components/Camber";
import MakeupUI from "./components/Makeup";
import SkinCareUI from "./components/SkinCare";
import router from "@/router";
export default {
    components:{
        BluRayUI,
        CamberUI,
        MakeupUI,
        SkinCareUI
    },
    data(){
        return {
            skinCare:false,
            bluRay:false,
            camber:false,
            makeup:false,
            main:true,
            scroll:0
        }
    },
    mounted() {
        // router.beforeEach((to,from,next)=>{
        //     if(!this.main){
        //         this.main = true;
        //         this.skinCare = false,
        //         this.bluRay = false,
        //         this.camber = false,
        //         this.makeup = false,
        //         next(false)
        //         this.$nextTick(()=>{
        //             window.scrollTo(0,this.scroll);
        //         })
        //     }else{
        //         next()
        //     }
        // })
        
        window.addEventListener("popstate", (e)=> {//监听浏览器返回
                if(!this.main){
                    this.$router.push('/beauty');
                    this.main = true;
                    this.skinCare = false,
                    this.bluRay = false,
                    this.camber = false,
                    this.makeup = false,
                    this.$nextTick(()=>{
                        window.scrollTo(0,this.scroll);
                    })
                }
        },false)
    },
    methods: {
        skinClick(){
            this.skinCare = true;
            this.main = false;
            this.scroll = parseInt(window.scrollY);
            this.$nextTick(()=>{
                window.scrollTo(0,0);
            })
        },
        skinBack(){
            this.main = true;
            this.skinCare = false;
            this.$nextTick(()=>{
                window.scrollTo(0,this.scroll);
            })
        },
        bluClick(){
            this.bluRay = true;
            this.main = false;
            this.scroll = parseInt(window.scrollY);
            this.$nextTick(()=>{
                window.scrollTo(0,0);
            })
        },
        bluBack(){
            this.main = true;
            this.bluRay = false;
            this.$nextTick(()=>{
                window.scrollTo(0,this.scroll);
            })
        },
        makeupClick(){
            this.makeup = true;
            this.main = false; 
            this.scroll = parseInt(window.scrollY);
            this.$nextTick(()=>{
                window.scrollTo(0,0);
            })
        },
        makeBack(){
            this.main = true;
            this.makeup = false;
            this.$nextTick(()=>{
                window.scrollTo(0,this.scroll);
            })
        },
        camberClick(){
            this.camber = true;
            this.main = false; 
            this.scroll = parseInt(window.scrollY);
            console.log(window.scrollY)
            this.$nextTick(()=>{  
                window.scrollTo(0,0);
            })
        },
        camberBack(){
            this.main = true; 
            this.camber = false;
            console.log(this.scroll)
            this.$nextTick(()=>{
                window.scrollTo(0,this.scroll);
            })
        }
    },
}
</script>
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: .8s;
  transform:scale(1);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
  transform: scale(0);
}
    .main{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding:50px 20px;
        p{
            text-align: center;
            font-size:12px;
            color:#909399;
            line-height: 20px;
        }
        h3{
             text-align: center;
             color:#303133;
             line-height: 40px;
             cursor: pointer;
             transition: .5s;
             font-size:.14rem;
             &:hover{
                 color:#fbc9b9;
             }
        }
    }
</style>