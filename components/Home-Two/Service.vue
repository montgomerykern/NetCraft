<template>
<!-- service area start here -->
<section class="service-2 pt-75 pb-90">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title-wrapper text-center mb-45">
                    <h5 class="section-subtitle mb-20">{{ setionSubTitle }}</h5>
                    <h2 class="section-title">{{ setionTitle }}</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-sm-6" v-for="item in service" :key="item.title">
                <div class="kservice-2 mb-30 wow fadeInUp" data-wow-duration=".3s">
                    <div class="kservice-text-2">
                        <span>{{ item.category }}</span>
                        <h4 class="kservice-title-2">
                            <NuxtLink :to="item.titleurl" v-html="item.title">{{ item.title }}</NuxtLink>
                        </h4>
                        <div>
                            <img :src="require('../../public/assets/img/icon/' + item.icon)" class="img-fluid" alt="service-img">
                        </div>
                    </div>
                    <div class="kservice-img-2">
                        <img :src="require('../../public/assets/img/service/' + item.image)" class="img-fluid" alt="service-img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- service area end here -->
</template>

<script>
export default {
    name: 'Service',
    data() {
        return {

            setionSubTitle: 'Services providing',
            setionTitle: 'What we’re offering',
            service: [{
                    category: 'Services',
                    title: 'Website <br>Development',
                    titleurl: '/servicedetails',
                    image: 'service-img-1.jpg',
                    iconclass: 'flaticon-stats',
                    icon: 'service-icon-1.png',
                },
                {
                    category: 'Services',
                    title: 'Graphic <br>designing',
                    titleurl: '/servicedetails',
                    image: 'service-img-2.jpg',
                    iconclass: 'flaticon-digital-marketing',
                    icon: 'service-icon-2.png',
                },
                {
                    category: 'Services',
                    title: 'SEO & Content <br>writting',
                    titleurl: '/servicedetails',
                    image: 'service-img-3.jpg',
                    iconclass: 'flaticon-website',
                    icon: 'service-icon-3.png',
                },
                {
                    category: 'Services',
                    title: 'digital <br>marketing',
                    titleurl: '/servicedetails',
                    image: 'service-img-4.jpg',
                    iconclass: 'flaticon-idea',
                    icon: 'service-icon-4.png',
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
