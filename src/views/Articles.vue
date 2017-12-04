<template>
    <div class="article-page">
        <ul class="article-list">
            <li class="article-item" v-for="(article, index) in articleData">
              <router-link to="/">
                <div class="ac-info">
                    <p class="ac-title">{{article.title}}</p>
                    <p class="ac-msg">
                        <span>已被分享{{article.readNum}}</span>
                        <span>+&nbsp;分享赚<span class="point">{{pointRule.sharePoint}}积分</span></span>
                        <span>好友浏览<span class="point">{{pointRule.viewPoint}}积分</span></span>
                    </p>
                </div>
                <img :src="article.img" class="ac-img">
              </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getArticles} from '@/api/api'
    export default {
      computed: {
        articleData () {
          return this.$store.state.Article.articleData
        },
        pointRule () {
          return this.$store.state.Article.pointRule
        }
      },
      mounted: function () {},
      methods: {},
      components: {}
    }
</script>

<style lang="stylus" scoped>
    .article-page {
        .article-list {
            .article-item {
                position: relative;
                border-bottom: 1px solid #ccc;
                .ac-img {
                    width: 4rem;
                    height: 4rem;
                    position: absolute;
                    right: 8px;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                }
                .ac-info {
                    width: 80%;
                    margin-right: 2%;
                    .ac-title {
                        width: 90%;
                        padding: .9rem 0 .5rem .3rem;
                        overflow: hidden;
                        font-size: 1rem;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .ac-msg {
                        padding: .3rem .3rem .5rem .3rem;
                        font-size: .7rem
                        color: #aaa;
                    }
                    .point {
                        display: inline-block;
                        margin-left:2px;
                        color:red;
                        line-height: 1.2;
                        border: 1px solid red;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
</style>
