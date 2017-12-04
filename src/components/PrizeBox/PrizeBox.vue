<template>
  <div class="prize-box">
    <div class="header">正在兑换中的奖品</div>
    <!--无数据-->
    <p  v-if="total===0" class="none-data">...</p>
    <!--有数据-->
    <ul class="prize-row" v-for="(prizeRow, index) in goodsData">
      <li class="prize-item" v-for="(prize, i) in prizeRow" :key="i" @click="prizeItemAction(prize)">
        <img :src="prize.img" class="pz-img">
        <p class="pz-title">{{prize.title}}</p>
        <p class="pz-txt">兑换积分&nbsp;<span class="pz-point">{{prize.requirePoints}}</span></p>
        <p>剩余数量&nbsp;{{prize.surplusNum}}</p>
      </li>
      <li class="prize-item blank" v-if="index=== goodsData.lenght-1 && goodsData[goodsData.length-1].length%2!==0"></li>
    </ul>
    <ul class="prize-row" v-for="(prizeRow, index) in downdata" >
      <li class="prize-item" v-for="(prize, i) in prizeRow" :key="i" @click="prizeItemAction(prize)">
        <img :src="prize.img" class="pz-img">
        <p class="pz-title">{{prize.title}}</p>
        <p class="pz-txt">兑换积分&nbsp;<span class="pz-point">{{prize.requirePoints}}</span></p>
        <p>剩余数量&nbsp;{{prize.surplusNum}}</p>
      </li>
      <li class="prize-item blank" v-if="index=== downdata.length-1 && downdata[downdata.length-1].length%2!==0"></li>
    </ul>
  </div>
</template>

<script>
import {exchangeGoods} from '@/api/api'
import MsgBox from '@/components/MsgBox/MsgBox'
import LoadMoreCom from '@/components/LoadMoreCom/LoadMoreCom'
export default {
  computed: {
    userData () {return this.$store.state.User.userData},
    goodsData () {return this.$store.state.Goods.goodsData},
    total () {return this.$store.state.Goods.total},
    downdata () {return this.$store.state.Goods.downdata},
  },
  data: function () {
    return {}
  },
  methods:{
            // 点击兑换商品项事件
            prizeItemAction (prize) {
              let self = this
              let cmsObj = self.$parent.$parent.$refs.cmsg
              if (prize.surplusNum <= 0) {
                // 库存不足
                cmsObj.show({
                  show: true,
                  content : '当前商品库存不足',
                  actionName: '关闭',
                  showCancle: false,
                  showTitle: false})
                return
              }
              if (this.userData.point < prize.requirePoints) {
                    // Case1：积分不够
                    cmsObj.show({
                      show: true,
                      content : '需要更多的积分才可以兑换这个商品哦',
                      actionName: '赚积分',
                      action : () => { this.$router.push({path:'/articles'})}})
                  } else {
                    // Case2： 兑换
                    cmsObj.show(
                    {
                      show: true,
                      showTitle:false,
                      content : `是否确定兑换${prize.title}`,
                      action : function() {
                                // 兑换商品
                                exchangeGoods({goodsId: prize.id}).then((res) => {
                                  if (res.data.code === 0) {
                                    let userNewPoint = res.data.data
                                    // 更新userData积分数据
                                    self.$store.commit('update_userData', {userId: self.userData.userId, point: userNewPoint})
                                    self.$store.commit('update_goodsItem', prize)
                                    cmsObj.show({
                                      show: true,
                                      title: '恭喜您!!!',
                                      content: '兑换成功，工作人员将在1至5个工作日联系您。',
                                      showCancle: false,
                                      actionName: '关闭'})
                                  }
                                })
                              }
                            }
                            )
                  }
                }
              },

              components: {
                cMsg: MsgBox,
                cScroll: LoadMoreCom
              }
            }
            </script>

            <style lang="stylus" scoped>
            .prize-box{
              position: relative;
              min-height: 300px;
              .header {
                padding: .2em 0;
                line-height: 1.9rem;
                font-size: 1.4rem;
                color: #42484e;
                background: #fff;
                &:before {
                 content: '';
                 display: inline-block;
                 width: .5rem;
                 height: 1.9rem;
                 vertical-align: top;
                 margin-right: .6rem;
                 background: #e40077;
               }
             }
             .none-data {
              margin: 15px;
              text-align: center;
              color: #666;
            }
            .prize-row {
              display: flex;
              justify-content: center;
              background:#f5f5f5;
              .prize-item {
                flex: 1;
                padding: .6rem;
                box-sizing: border-box;
                margin: .8rem .5rem .8rem .5rem;
                text-align: center;
                background: #fff;
                font-size: 10px;
                .pz-img {
                  width: 100%;
                }
                .pz-title {
                  margin-top: 5px;
                  font-size: 14px;
                  white-space:nowrap;
                  overflow: hidden;
                  text-overflow:ellipsis;
                }
                .pz-txt {
                  line-height: 2.2rem;
                  margin-top: 10px;
                }
                .pz-point {
                  color: #e40077;
                  font-family: Arial;
                  font-size: 1.2rem;
                  font-weight: 900;
                  vertical-align: bottom;
                }
              }
              .blank {
                background: #f5f5f5;
              }
            }
          }
          </style>
