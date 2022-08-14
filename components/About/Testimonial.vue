<template>
<!-- testimonial area start here -->
<section class="testimonial-area pb-85 pt-85">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title-wrapper text-center mb-45">
                    <h5 class="section-subtitle mb-20">{{ sectionSubTitle }}</h5>
                    <h2 class="section-title mb-35">{{ sectionTitle }}</h2>
                </div>
            </div>
        </div>

        <div class="testimonial-active">
            <client-only>
                <swiper ref="mySwiper" class="swiper" :options="swiperOptions" @ready="onSwiperRedied"  @clickSlide="onSwiperClickSlide">
                    <swiper-slide v-for="item in testimonialContent" :key="item.id">
                        <div class="ktestimonial mb-30 swiper-slide">
                            <div class="ktestimonial-text">
                                <p>{{ item.description }}</p>
                            </div>
                            <div class="ktestimonial-author">
                                <div class="ktestimonial-author-img">
                                    <img :src="require('../../public/assets/img/testimonial/' + item.image)" class="img-fluid" alt="client_img">
                                </div>
                                <div class="ktestimonial-author-text">
                                    <h5 class="uppercase">{{ item.clientName }}</h5>
                                    <span class="uppercase">{{ item.clientStatus }}</span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </client-only>
        </div>
    </div>
</section>
<!-- testimonial area end here -->
</template>

<script>
export default {
    name: 'swiper-slider2',
    data() {
        return {
            sectionSubTitle: 'client testimonials',
            sectionTitle: 'What they say?',
            testimonialContent: [{
                    id: '1',
                    image: 'testimonial-img-1.jpg',
                    description: 'I was very impresed by the kimox service lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum.',
                    clientName: 'Jessica Brown',
                    clientStatus: 'Customer',
                },
                {
                    id: '2',
                    image: 'testimonial-img-2.jpg',
                    description: 'Reliable accessible UI components: :focus styles, content sliders, dark mode, date pickers, navigation, modals, radio buttons Neque porro est qui.',
                    clientName: 'Mike Hardson',
                    clientStatus: 'Customer',
                },
                {
                    id: '3',
                    image: 'testimonial-img-3.jpg',
                    description: 'Useful CSS tools for animations, border-radius, CSS shadows, cubic-bezier curves, easing gradients, filters, placeholders, CSS Grid.',
                    clientName: 'Sarah Albert',
                    clientStatus: 'Customer',
                },
                {
                    id: '4',
                    image: 'testimonial-img-4.jpg',
                    description: 'I was very impresed by the kimox service lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum.',
                    clientName: 'Melinda Brown',
                    clientStatus: 'Customer',
                },
                {
                    id: '5',
                    image: 'testimonial-img-5.jpg',
                    description: 'Core Web Vitals, CrUX, Lighthouse, performance budgets, CSS & JavaScript performance, assets optimizations, build optimizations.',
                    clientName: 'Andrew Tye',
                    clientStatus: 'Customer',
                }
            ],
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                infinite: false,
                centeredSlides: true,
                autoplay: {
                    delay: 5000,
                },
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: false
                },
                // Navigation arrows
                navigation: {
                    nextEl: '.test-button-next',
                    prevEl: '.test-button-prev',
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1400: {
                        slidesPerView: 3,
                    },
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
