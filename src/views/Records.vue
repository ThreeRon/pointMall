<template>
    <div class="record-page">
        <ul class="info-list">
            <li class="info-item" v-for="(info, index) in infoData" :key="index">
                <p class="info-content">{{info.msg}}</p>
                <p>
                    <span class="info-status">申请状态：{{info.statusCh}}</span>
                    <span class="info-status">处理结果：{{info.result}}</span>
                </p>
            </li>
        </ul>
        <div class="msg" v-if="recordData.length===0">您目前还没有兑奖记录哦</div>
    </div>
</template>

<script>
    export default {
        computed: {
            recordData () {
                 return this.$store.state.Record.recordData
            },
            infoData: function () {
                return this.recordData.map(function (record) {
                    return {
                        msg: `您在${record.createTime}使用${record.point}积分申请兑换了：${record.goodsName}`,
                        statusCh: record.statusCh,
                        result: record.result
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .record-page {
        font-size: .8rem;
        .msg {
            text-align: center;
            margin: 40% auto;
            color: rgb(136, 136, 136);
            font-size: 20px;
        }
        .info-list {
            .info-item {
                padding: 15px;
                border-bottom: 1px solid #ddd;
                .info-content {
                    margin-bottom: 12px;
                    color: #666;
                }
                .info-status{
                    &:first-of-type {
                        padding-right: .4rem;
                        border-right: 1px solid #ccc;
                     }
                    &:last-of-type {
                        padding-left: .4rem;
                    }
                }
            }
        }
    }
</style>
