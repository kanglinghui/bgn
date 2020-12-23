<template>
    <div class="brand">
        <div class="top">
            <img src="../../assets/images/zh.jpg" style="width:100%;" alt="">
        </div>
        <div class="main">
            <div class="margin">
                <div class="bottom">
                    <div>
                        <div class="img-t">
                            
                            <a-card hoverable style="width: 45%">
                
                                <img class='l' src="../../assets/images/js1.jpg" slot="cover"
                                alt="心机裸感小方瓶粉底液">
                                <a-card-meta title="心机裸感小方瓶粉底液">
                                <template slot="description">
                                    彩妆
                                </template>
                                </a-card-meta>
                            </a-card>
                            
                            <a-card hoverable style="width: 45%">
                
                                <img class='l' src="../../assets/images/js2.jpg" slot="cover"
                                alt="立体双头防水眉笔">
                                <a-card-meta title="立体双头防水眉笔">
                                <template slot="description">
                                    彩妆
                                </template>
                                </a-card-meta>
                            </a-card>
                            <!-- <img src="../../assets/images/i3.jpg" alt="">  -->
                        </div>
                    </div>
                    <div>
                        <div class="img-b">
                            <!-- <img class="l" src="../../assets/images/js3.jpg" alt="宝妮格美妆蛋"> -->
                            <a-card hoverable style="width: 45%">
                
                                <img class='l' src="../../assets/images/js3.jpg" slot="cover"
                                alt="海绵彩妆美妆蛋">
                                <a-card-meta title="海绵彩妆美妆蛋">
                                <template slot="description">
                                    美容工具
                                </template>
                                </a-card-meta>
                            </a-card>
                            <a-card hoverable style="width: 45%">
                
                                <img class='l' src="../../assets/images/js4.jpg" slot="cover"
                                alt="烟酰胺臻颜莹润面膜"> 
                                <a-card-meta title="烟酰胺臻颜莹润面膜">
                                <template slot="description">
                                    护肤
                                </template>
                                </a-card-meta>
                            </a-card>
                            <!-- <img src="../../assets/images/js4.jpg" alt="宝妮格面膜"> -->
                            <!-- <img src="../../assets/images/i6.jpg" alt="">  -->
                        </div>
                    </div>
                    <div style="padding-top:.1rem;">
                        <div class="img-b">
                            <a-card hoverable style="width: 45%">
                
                                <img class='l' src="../../assets/images/hzm.jpg" slot="cover"
                                alt="亲肤双效化妆棉"> 
                                <a-card-meta title="亲肤双效化妆棉">
                                <template slot="description">
                                    美容工具
                                </template>
                                </a-card-meta>
                            </a-card>
                            <div style="width:45%;"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<style lang="less" scoped>
.main{
            // background: url("../../assets/images/star.jpg") no-repeat;
            // background-size: 100% 100%;
            padding:.2rem 0;
            .margin{
                width:80%;
                margin:0 auto;
                .top{
                    display: flex;
                    justify-content: center;
                    .t_img{
                        margin-right:.1rem;
                        img{
                            width:1.3rem;
                            height:1.4rem;
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
                    .img-t,.img-b{
                        display: flex;
                        justify-content: space-around;
                    }
                    .img-t{
                        margin-bottom:.1rem;
                    }
                    img{
                        // width:45%;
                    //     &:hover{
                    //         transition: .5s;
                    //         transform: translateX(.1rem);
                    //     }
                    // }
                    // .l{
                    //     &:hover{
                    //         transition: .5s;
                    //         transform: translateX(-.1rem);
                    //     }
                    }
                }
            }
        }
</style>