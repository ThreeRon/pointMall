<template>
    <div class="msg-box" v-if="options.show">
        <div class="box">
            <p class="title" v-if="options.showTitle">{{options.title}}
            <p class="content">{{options.content}}
            <div class="control">
                <span class="cancle" v-if="options.showCancle" @click="cancleAction">取消</span>
                <span class="other" @click="otherAction">{{options.actionName}}</span>
            </div>    
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'msg',
        data: function() {
            return {
                options: {
                    show: false,
                    showTitle: true,
                    showCancle: true,
                    title: '提示！',
                    content:'内容',
                    actionName: '确定',
                    action: function() {}
                }
            }
        },
        mounted () {

        },
        methods: {
            show (options) {
                
                if (options.hasOwnProperty('show'))  Vue.set(this.options,'show', options.show)
                else Vue.set(this.options,'show', false)

                if (options.hasOwnProperty('showTitle'))  Vue.set(this.options,'showTitle', options.showTitle)
                else Vue.set(this.options,'showTitle', true)

                if (options.hasOwnProperty('showCancle')) Vue.set(this.options,'showCancle', options.showCancle)
                else Vue.set(this.options,'showCancle', true)

                if (options.hasOwnProperty('title'))  Vue.set(this.options,'title', options.title)
                else Vue.set(this.options,'title', '提示！')

                if (options.hasOwnProperty('content'))  Vue.set(this.options,'content', options.content)
                else Vue.set(this.options,'content', '')

                if (options.hasOwnProperty('actionName'))  Vue.set(this.options,'actionName', options.actionName)
                else Vue.set(this.options,'actionName', '确定')

                if (options.hasOwnProperty('action'))  Vue.set(this.options,'action', options.action)
                else Vue.set(this.options,'action', () => {})

                  this.$nextTick(() => {
                      this.$root.$el.querySelector('.yo-scroll').style.overflow = 'hidden';
                })

            },
            cancleAction () {
                this.$root.$el.querySelector('.yo-scroll').style.overflow = 'auto';
                this.options.show = false
            },
            otherAction () {
                this.options.action()
                this.cancleAction()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .msg-box {
        position: fixed;
        left:0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        overflow: hidden;
        z-index: 9999;
        .box {
            position: fixed;
            width: 80%;
            left: 0;
            right: 0;
            top: 35%;
            margin: auto;
            border-radius: 4px;
            background: #fff;
            .title {
                padding: 5px 0 0 0;
                text-align: center;
                font-weight: bold;
                font-size: 1.1rem;
                margin: 10px 0 -14px 0;
            }
            .content {
                padding: 15px 25px 10px 25px;
                margin: 12px 0;
            }
            .control {
                display: flex;
                text-align: center;
                border-top: 1px solid #ddd;
            }
            .cancle {
                flex: 1;
                padding: 10px;
                border-right: 1px solid #ddd;
            }
            .other {
                padding: 10px;
                flex: 1;
                color: green;
            }
        }
    }
</style>
