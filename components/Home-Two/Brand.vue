<template>
<!-- brand area start here -->
<div class="brand-area pt-100 pb-100 bg-heading">
    <div class="container">
        <div class="brand-active">
            <client-only>
                <swiper ref="mySwiper" class="swiper" :options="swiperOptions" @ready="onSwiperRedied" @clickSlide="onSwiperClickSlide">
                    <swiper-slide v-for="item in brand" :key="item.id">
                        <div class="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".3s" data-swiper-autoplay="10000">
                            <a :href="item.url"><img :src="require('../../public/assets/img/brand/' + item.image)" class="img-fluid" alt="img"></a>
                        </div>
                    </swiper-slide>
                </swiper>
            </client-only>
        </div>
    </div>
</div>
<!-- brand area end here -->
</template>

<script>
//import 'swiper/swiper.scss';

export default {
    name: 'swiper-slider8',
    data() {
        return {
            brand: [{
                    id: '1',
                    image: 'brand-6.png',
                    url: '#',
                },
                {
                    id: '2',
                    image: 'brand-7.png',
                    url: '#',
                },
                {
                    id: '3',
                    image: 'brand-8.png',
                    url: '#',
                },
                {
                    id: '4',
                    image: 'brand-9.png',
                    url: '#',
                },
                {
                    id: '5',
                    image: 'brand-10.png',
                    url: '#',
                },
                {
                    id: '6',
                    image: 'brand-9a.png',
                    url: '#',
                }
            ],
            swiperOptions: {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: false
                },
                breakpoints: {
                    550: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    }
                }
            }
        }
    },
    methods: {
      onSwiperRedied(swiper) {
        console.log('Swiper redied!', swiper)
      },
      onSwiperClickSlide(index, reallyIndex) {
        console.log('Swiper click slide!', reallyIndex)
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
