<template>
    <div class="banner-box">
      <swiper :options="swiperOption">
        <swiper-slide>
            <img :src="require(`@/components/BannerBox/image/banner01.jpg`)">
        </swiper-slide>
        <swiper-slide>
            <img :src="require(`@/components/BannerBox/image/banner02.jpg`)">
        </swiper-slide>
        <swiper-slide>
            <img :src="require(`@/components/BannerBox/image/banner03.jpg`)">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data: function () {
            return {
                swiperOption: {
                    loop: true,
                    pagination: {el: '.swiper-pagination'},
                    autoplay: {delay: 1000, disableOnInteraction: false}
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style lang="stylus" scoped>
.banner-box {
    width: 100%;
}
</style>
