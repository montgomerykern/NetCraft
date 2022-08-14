<template>
<!-- team area start here -->
<section class="team-area pt-115 pb-120">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title-wrapper text-center mb-50">
                    <h5 class="section-subtitle mb-20">{{ sectionSubTitle }}</h5>
                    <h2 class="section-title mb-35">{{ sectionTitle }}</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="team-space">
            <div class="team-active swiper-container">
                <div class="swiper-wrapper">
                    <client-only>
                        <swiper ref="mySwiper" class="swiper" :options="swiperOptions" @ready="onSwiperRedied" @clickSlide="onSwiperClickSlide">
                            <swiper-slide v-for="item in team" :key="item.id">
                                <div class="kteam swiper-slide">
                                    <div class="kteam-img">
                                        <img :src="require('../../public/assets/img/team/' + item.image)" class="img-fluid" alt="team-img">
                                        <div class="kteam-img-social">
                                            <a :href="item.url">
                                                <font-awesome-icon :icon="['fab', 'twitter']" /></a>
                                            <a :href="item.url">
                                                <font-awesome-icon :icon="['fab', 'facebook']" /></a>
                                            <a :href="item.url">
                                                <font-awesome-icon :icon="['fab', 'pinterest-p']" /></a>
                                            <a :href="item.url">
                                                <font-awesome-icon :icon="['fab', 'instagram']" /></a>
                                        </div>
                                    </div>
                                    <div class="kteam-text text-center">
                                        <h4 class="kteam-title">{{ item.name }}</h4>
                                        <span class="uppercase">{{ item.designation }}</span>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </client-only>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- team area end here -->
</template>

<script>
export default {
    name: 'Team',
    data() {
        return {
            sectionSubTitle: 'professional people',
            sectionTitle: 'Meet the team',
            team: [{
                    id: '1',
                    image: 'team-img-1.jpg',
                    name: 'sarah albert',
                    designation: 'designer',
                    url: '#',
                },
                {
                    id: '2',
                    image: 'team-img-2.jpg',
                    name: 'Mike Hardson',
                    designation: 'developer',
                    url: '#',
                },
                {
                    id: '3',
                    image: 'team-img-3.jpg',
                    name: 'Christine eve',
                    designation: 'Programmer',
                    url: '#',
                },
                {
                    id: '4',
                    image: 'team-img-4.jpg',
                    name: 'John Smith',
                    designation: 'artist',
                    url: '#',
                },
                {
                    id: '5',
                    image: 'team-img-5.jpg',
                    name: 'melinda albert',
                    designation: 'writter',
                    url: '#',
                }
            ],
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                infinite: true,
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
                    nextEl: '.blog-button-next',
                    prevEl: '.blog-button-prev',
                },

                breakpoints: {
                    480: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1400: {
                        slidesPerView: 4,
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
