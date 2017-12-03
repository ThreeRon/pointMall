<template>
    <div class="menu-box">
        <ul class="menu-list">
           <li class="menu-item">
               <router-link to="/articles">
                   <i class="icon point"></i>
                   <span>赚取积分</span>
               </router-link>
           </li>
            <li class="menu-item">
                <router-link to="/records">
                    <i class="icon record"></i>
                    <span>兑换记录</span>
                </router-link>
            </li>
            <li class="menu-item">
                <router-link to="/rules">
                    <i class="icon rule"></i>
                    <span>详细规则</span>
                </router-link>
            </li>
            <li class="menu-item">
                <i class="icon more"></i>
                <span>敬请期待</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" scoped>
    .menu-box {
        margin: -.3rem 0;
        padding-top: .6rem;
        padding-bottom: .8rem;
        background: #fff;
        .menu-list {
            display: flex;
            .menu-item {
                flex: 1;
                text-align: center;
                font-size: 0.8rem;
                color: #666;
                .point {
                    background: #8fc320;
                    background-image: url(image/point-icon.png);
                }
                .record {
                    background: #f89a1f;
                    background-image: url(image/record-icon.png);
                }
                .rule {
                    background: #9966FF;
                    background-image: url(image/rule-icon.png);
                }
                .more {
                    background: #dbdbdb;
                    background-image: url(image/prize-icon.png);
                }
                .icon {
                    display: block;
                    width: 3.4rem;
                    height: 3.4rem;
                    margin:3px auto;
                    padding: 2px;
                    border-radius: 50%;
                    background-size: 50% 51%;
                    background-position: center;
                    background-origin: content-box;
                    background-repeat: no-repeat;
                }
            }
        }
    }
</style>
