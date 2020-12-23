<template>
    <div class="to-join">
        <img  style="width:100%;" src="../../assets/images/fxqd.jpg" alt="" />
        <div class="main">
            <!-- <div style="width:95%;margin:0 auto;padding-top:.1rem;">
                <a-table :columns="columns" :data-source="data" bordered >
                    <a slot="name" slot-scope="text">{{ text }}</a>
                     <a-alert slot="status"  slot-scope="scope" :message="scope" :type="scope == '待开发'?'error': scope == '搭线中' ?'info':scope == '开发店铺'?'warning':'success'" />
                </a-table>
            </div> -->
            <a-divider><h3 class="h3">分销渠道</h3></a-divider>
            <div class="hz">
                <img src="../../assets/images/fx.jpg" alt="" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods: {

    },
}
</script>
<style lang="less" scoped>
    .err{
        color:#ffa39e;
    }
    .warning{
        color:#ffe58f;
    }
    .info{
        color:#91d5ff;
    }
    .success{
        color:#b7eb8f;
    }
    .h3{
        text-align:center;
        color:#303133;
        font-weight: 600;
        font-size:.14rem;
    }
</style>