<template>
    <header :class="mobile?'mobile-header':'header'">
        <h1 v-show="false" id="baonige">宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格宝妮格</h1>
        <div class="logo">
            <img src="../../assets/images/LOGO.png" alt="logo">
            <!-- <span class="logo-name">宝妮格</span> -->
        </div>
        <div v-if="mobile" class="menu-mobile" :style="menuShow?'color:#c40000':''">
            <a-icon type="menu" @click="mobile_menu"/>
        </div>
        <div class="menus-ul" v-else>
            <ul style="margin:0;">
                <li v-for="(item,i) in menuList" :key="item.label" :class="item.active?'menu-li menu-active':'menu-li'" @click="menuClick(i,item.url)">
                    <div style="line-height:12px;">{{item.label}}</div>
                    <div style="font-size:8px;line-height:12px;padding-top:5px;">{{item.en}}</div>
                </li>
            </ul>
        </div>
        <transition name="fades">
            <div class="menulist-mobile" v-if="menuShow" @click="mo">
                <ul>
                    <li v-for="(item,i) in menuList" :key="item.label" :class="item.active?'menu-li menu-active':'menu-li'" @click="menuClick(i,item.url)">
                        <span>{{item.label}}</span>
                    </li>
                </ul>
            </div>
        </transition>
    </header>
</template>
<script>
export default {
    data(){
        return {
            menuList:[
                {label:"首页",en:"HOME",active:true,url:'/'},
                {label:"明星产品",en:"STAR PRODUCT",active:false,url:'/star'},
                {label:"产品介绍",en:"INFORMATION",active:false,url:'/brand'},
                {label:"关于我们",en:"ABOUT US",active:false,url:'/contact'},
                {label:"分销渠道",en:"NETWORK",active:false,url:'/to_join'},
                {label:"美丽指南",en:"BEAUTY MAGAZINE",active:false,url:'/beauty'},
                
            ],
            mobile:false,
            menuShow:false
        }
    },
    watch: {
        $route(to,from){
            for(let i=0;i<this.menuList.length;i++){
                if(to.path == this.menuList[i].url){
                    this.menuList[i].active = true;
                }else{
                    this.menuList[i].active = false;
                }
            }
        }
    },
    mounted() {
        if(window.innerWidth < 1000){
            this.mobile = true;
        }
    },
    methods: {
        menuClick(idx,route){
            for(let i=0;i<this.menuList.length;i++){
                this.menuList[i].active = false;
            }
            this.menuList[idx].active = true;
            if(route == this.$route.path){
                return;
            }
            this.$router.push(route);
            if(this.menuShow){
                this.menuShow = false;
            }
        },
        mobile_menu(){
            this.menuShow = !this.menuShow;
            if(this.menuShow){
                this.stop();
            }else{
                this.move();
            } 
        },
        mo(){
            this.menuShow = false;
            this.move();
        },
        stop(){
            let mo=function(e){e.preventDefault();};
            document.body.style.overflow='hidden';
            document.addEventListener("touchmove",mo,false);//禁止页面滑动
        },
        move(){
            let mo=function(e){e.preventDefault();};
            document.body.style.overflow='';//出现滚动条
            document.removeEventListener("touchmove",mo,false);
        }
    },
}
</script>
<style lang="less" scoped>
.fades-enter-active, .fades-leave-active {
  transition: opacity .6s;
}
.fades-enter, .fades-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.mobile-header{
    display: flex; 
    justify-content: space-between;
    height:80px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding:0 20px;
    position: relative;
    z-index:101;
    .logo{
        margin-top:22px;
        img{
            height:.25rem;
            width:0.7rem;
        }
        .logo-name{
                display: inline-block;
                height:60px;
                line-height: 60px;
                // position: relative;
                // top:-26px;
                font-size:14px;
                font-weight: 600;
                color:#420465;
            }
    }
    .menu-mobile{
        line-height: 80px;
        font-size:18px;
    }
    .menulist-mobile{
        
        height:calc(100vh - 80px);
        position:absolute;
        background-color: rgba(0, 0, 0, 0.3);
        width:100%;
        top:80px;
        left:0;
        z-index:99;
        ul{
            background-color: #fff;
            padding:0 20px;
            
            .menu-li{
                border-top:.5px solid rgba(0, 0, 0, 0.3);
                font-size:14px;
                line-height: 32px;
                text-indent: 2em;
            }
            .menu-active{
                color:#fbc9b9;
            }
        }
    }
}
    .header{
        display: flex;
        justify-content: space-evenly;
        height:120px;
        margin-bottom:1px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        .logo{
            // margin-left:40px;
            margin-top:20px;
            img{
                width:1rem;
                height:.35rem;
            }
            .logo-name{
                display: inline-block;
                height:80px;
                line-height: 80px;
                // position: relative;
                // top:-36px;
                font-size:14px;
                font-weight: 600;
                color:#420465;
            }
        }
        .menus-ul{
            margin-top:33px;
            // margin-right:50px;
            ul{
                // display: flex;
                .menu-li{
                    list-style: none;
                    float:left;
                    padding:10px 22px;
                    border-radius:24px;
                    cursor: pointer;
                    margin-left:5px;
                    font-size:14px;
                    text-align: center;
                    &:hover{
                        transition:.5s;
                        background-color:#fbc9b9;
                        color:#fff;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
                    }
                }
                .menu-active{
                    background-color:#fbc9b9;
                    color:#fff;
                    border-radius:24px;
                }
            }
            
        }
    }
</style>