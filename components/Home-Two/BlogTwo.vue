<template>
<!-- blog area start here -->
<section class="blog-2 pt-75 pb-60">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title-wrapper text-center mb-50">
                    <h5 class="section-subtitle mb-20">{{ sectionSubTitle }}</h5>
                    <h2 class="section-title">{{ sectionTitle }}</h2>
                </div>
            </div>
        </div>
        <div class="blog-active swiper-container mb-120">
            <div class="swiper-wrapper">
                <client-only>
                    <swiper ref="mySwiper" class="swiper" :options="swiperOptions" @ready="onSwiperRedied" @clickSlide="onSwiperClickSlide">
                        <swiper-slide v-for="item in blogs" :key="item.id">
                            <div class="kblog swiper-slide">
                                <div class="kblog-img">
                                    <NuxtLink :to="item.imageUrl"><img :src="require('../../public/assets/img/blog/' + item.image)" class="img-fluid" alt="blog-img"></NuxtLink>
                                    <span>{{ item.date }}</span>
                                </div>
                                <div class="kblog-text">
                                    <div class="kblog-meta">
                                        <NuxtLink :to="item.metaAdminUrl">
                                            <font-awesome-icon :icon="['far', 'user-circle']" /> {{ item.metaAdmin }}</NuxtLink>
                                        <NuxtLink :to="item.metaCommentUrl">
                                            <font-awesome-icon :icon="['far', 'comments']" /> {{ item.metaComment }}</NuxtLink>
                                    </div>
                                    <h3 class="kblog-text-title mb-20">
                                        <NuxtLink :to="item.titleUrl"> {{ item.title}}</NuxtLink>
                                    </h3>
                                    <div class="kblog-text-link">
                                        <NuxtLink :to="item.blogLinkUrl">{{ item.blogLink }}
                                            <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </client-only>
            </div>
        </div>
    </div>
</section>
<!-- blog area end here -->
</template>

<script>
export default {
    name: 'swiper-slider7',
    data() {
        return {
            sectionSubTitle: 'recent blog posts',
            sectionTitle: 'News & Articles',
            blogs: [{
                    id: '1',
                    image: 'blog-img-1.jpg',
                    imageUrl: '/blogdetails',
                    date: '20 May',
                    metaAdmin: 'by Admin',
                    metaAdminUrl: '/blogdetails',
                    metaComment: '2 Comments',
                    metaCommentUrl: '/blogdetails',
                    title: 'Our Strategy Create Business Growth',
                    titleUrl: '/blogdetails',
                    blogLink: 'Read more',
                    blogLinkUrl: '/blogdetails',
                },
                {
                    id: '2',
                    image: 'blog-img-2.jpg',
                    imageUrl: '/blogdetails',
                    date: '21 May',
                    metaAdmin: 'by Admin',
                    metaAdminUrl: '/blogdetails',
                    metaComment: '2 Comments',
                    metaCommentUrl: '/blogdetails',
                    title: 'We work with change oriented executives',
                    titleUrl: '/blogdetails',
                    blogLink: 'Read more',
                    blogLinkUrl: '/blogdetails',
                },
                {
                    id: '3',
                    image: 'blog-img-3.jpg',
                    imageUrl: '/blogdetails',
                    date: '22 May',
                    metaAdmin: 'by Admin',
                    metaAdminUrl: '/blogdetails',
                    metaComment: '2 Comments',
                    metaCommentUrl: '/blogdetails',
                    title: 'From banking and insurance to wealth',
                    titleUrl: '/blogdetails',
                    blogLink: 'Read more',
                    blogLinkUrl: '/blogdetails',
                },
                {
                    id: '4',
                    image: 'blog-img-4.jpg',
                    imageUrl: '/blogdetails',
                    date: '23 May',
                    metaAdmin: 'by Admin',
                    metaAdminUrl: '/blogdetails',
                    metaComment: '2 Comments',
                    metaCommentUrl: '/blogdetails',
                    title: 'Our Strategy Create Business Growth',
                    titleUrl: '/blogdetails',
                    blogLink: 'Read more',
                    blogLinkUrl: '/blogdetails',
                },
                {
                    id: '5',
                    image: 'blog-img-5.jpg',
                    imageUrl: '/blogdetails',
                    date: '24 May',
                    metaAdmin: 'by Admin',
                    metaAdminUrl: '/blogdetails',
                    metaComment: '2 Comments',
                    metaCommentUrl: '/blogdetails',
                    title: 'We work with change oriented executives',
                    titleUrl: '/blogdetails',
                    blogLink: 'Read more',
                    blogLinkUrl: '/blogdetails',
                }
            ],
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                infinite: false,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: false
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

<style scoped>

</style>
