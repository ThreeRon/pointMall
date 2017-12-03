<template>
    <div class="Home">
        <c-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
        <c-user-box></c-user-box>
        <c-banner-box></c-banner-box>
        <c-menu-box></c-menu-box>
        <c-prize-box></c-prize-box>
        </c-scroll>

    </div>
</template>

<script>
  import LoadMoreCom from '@/components/LoadMoreCom/LoadMoreCom'
    import UserInfoBox from '@/components/UserInfoBox/UserInfoBox'
    import BannerBox from '@/components/BannerBox/BannerBox'
    import MenuBox from '@/components/MenuBox/MenuBox'
    import PrizeBox from '@/components/PrizeBox/PrizeBox'
    export default {
        data: function () {
            return {}
        },
        computed: {
          totalPage () {return this.$store.getters.totalPage},
          page () {return this.$store.state.Goods.page},
          loading () {return this.$store.state.Goods.loading}
        },
        methods: {
          onRefresh(done) {
            done()
          },
          onInfinite(done) {
            console.log('当前loading:', this.loading, '当前page:',this.page)
            if (this.page >= this.totalPage){
              this.$el.querySelector('.load-more').style.display = 'none';
              return
            } else if (this.loading) {
              console.log('当前有内容loading中')
              done()
            } else{
              this.$store.commit('update_loading', true);
              this.$store.dispatch('get_goodsData', {page: this.page+1, pageSize: 2});
              done()
            }
          },
        },
        components: {
            CUserBox: UserInfoBox,
            CBannerBox: BannerBox,
            CMenuBox: MenuBox,
            CPrizeBox: PrizeBox,
          cScroll: LoadMoreCom
        }
    }
</script>

<style lang="stylus" scoped>
    .Home {
        background: #f5f5f5;
    }
</style>
