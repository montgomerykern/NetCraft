<template>
<!-- slider area start here -->
<section class="slider-area fix position-relative">
    <div class="slider-active slider-active-2">
        <client-only>
            <swiper ref="mySwiper" class="swiper" :options="swiperOptions" @ready="onSwiperRedied" @clickSlide="onSwiperClickSlide">
                <swiper-slide v-for="item in sliders" :key="item.id">
                    <div class="single-slider slider-height-2 swiper-slide d-flex align-items-center" data-swiper-autoplay="10000">
                        <div class="slide-bg" :style="{backgroundImage: 'url('+require('../../public/assets/img/slider/'+ item.image ) +')'}"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="kslider kslider-2 z-index text-center">
                                        <h4 class="kslider--subtitle__two mb-15" data-animation="fadeInUp" data-delay="0.3s">{{ item.subtitle }}</h4>
                                        <h2 class="kslider--title__two mb-35" data-animation="fadeInUp" data-delay="0.5s" v-html="item.title">{{ item.title }}</h2>
                                        <div class="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                            <NuxtLink :to="item.url" class="theme-btn">{{ item.button }}</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="common-shape-wrapper common-shape-wrapper2">
                            <div class="common-shape-inner common-shape-inner2"></div>
                        </div>
                    </div>
                </swiper-slide>

                <!-- If we need pagination -->
                <div class="slider-paginations slide-dots"></div>
            </swiper>
        </client-only>
    </div>
</section>
<!-- slider area end here -->
</template>

<script>

export default {
    name: 'swiper-slider77',
    data() {
        return {
            sliders: [{
                    id: '1',
                    image: 'slider-3.jpg',
                    subtitle: 'Welcome to digital agency',
                    title: 'Digital Marketing <br>Business',
                    button: 'Discover more',
                    url: '/service',
                },
                {
                    id: '2',
                    image: 'slider-1.jpg',
                    subtitle: 'Welcome to digital agency',
                    title: 'Web Development <br>Business',
                    button: 'Discover more',
                    url: '/service',
                },
                {
                    id: '3',
                    image: 'slider-2.jpg',
                    subtitle: 'Welcome to digital agency',
                    title: 'App Development <br>Business',
                    button: 'Discover more',
                    url: '/service',
                }
            ],
            swiperOptions: {
                loop: true,
                effect: 'fade',
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 0,
                paginationClickable: true,
                autoplay: {
                    delay: 10000
                },
                pagination: {
                    el: '.slider-paginations',
                    clickable: true,
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
