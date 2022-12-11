<template>
<!-- slider area start here -->
<section class="slider-area fix position-relative">
    <div class="slider-active">
        <client-only>
            <swiper ref="mySwiper" class="swiper" :options="swiperOptions" @ready="onSwiperRedied"  @clickSlide="onSwiperClickSlide">
                <swiper-slide v-for="item in sliders" :key="item.id">
                    <div class="single-slider slider-height swiper-slide" data-swiper-autoplay="10000">
                    <div class="slide-bg" :style="{backgroundImage: 'url('+require('../../public/assets/img/slider/'+ item.image ) +')'}"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="kslider z-index">
                                    <h5 class="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.3s">{{ item.subtitle }}</h5>
                                    <h2 class="kslider--title mb-40" data-animation="fadeInUp" data-delay="0.5s" v-html="item.title">{{ item.title }}</h2>
                                    <div class="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                        <NuxtLink :to="item.url" class="theme-btn">{{ item.button }}</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide-shape shape-1"><img :src="require('../../public/assets/img/slider/' + item.shape1)" class="img-fluid" alt="shape-img"></div>
                    <div class="slide-shape shape-2"><img :src="require('../../public/assets/img/slider/' + item.shape2)" class="img-fluid" alt="shape-img"></div>    
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
//import 'swiper/swiper.scss';

export default {
    name: 'swiper-slider4',
    data() {
        return {
            sliders: [{
                    id: '1',
                    image: 'slider-1.jpg',
                    subtitle: 'Welcome to NetCraft',
                    title: 'Web Design <br>Agency',
                    button: 'Discover more',
                    url: '/about',
                    shape1: 'slider-shape-1.png',
                    shape2: 'slider-shape-2.png',
                },
                { 
                    id: '2',
                    image: 'slider-2.jpg',
                    subtitle: 'Welcome to NetCraft',
                    title: 'Web Development <br>Agency',
                    button: 'Discover more',
                    url: '/about',
                    shape1: 'slider-shape-1.png',
                    shape2: 'slider-shape-2.png',
                },
                { 
                    id: '3',
                    image: 'slider-3.jpg',
                    subtitle: 'Welcome to NetCraft',
                    title: 'App Design <br>Agency',
                    button: 'Discover more',
                    url: '/about',
                    shape1: 'slider-shape-1.png',
                    shape2: 'slider-shape-2.png',
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