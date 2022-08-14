<template>
<!-- about area start here -->
<section class="about-area pt-120 pb-70 fix">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="kabout-img mb-50 mr-70" data-aos="zoom-out-up" data-swiper-autoplay="10000">
                    <div class="kabout-img-shape"></div>

                    <img :src="require('../../public/assets/img/about/' + image1)" class="img-fluid z-index" alt="about-img">

                    <div class="kabout-img-small">
                        <img :src="require('../../public/assets/img/about/' + image2)" class="img-fluid" alt="about-img">
                        <div class="kabout-img-small-icon play_btn">
                            <span>
                                <i><img :src="require('../../public/assets/img/icon/about-icon.png')" class="img-fluid z-index" alt="about-img"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="kabout mb-50" data-aos="zoom-out-down" data-swiper-autoplay="10000">
                    <div class="section-title-wrapper mb-45">
                        <h5 class="section-subtitle mb-20">{{ setionSubTitle }}</h5>
                        <h2 class="section-title mb-35" v-html="setionTitle">{{ setionTitle }}</h2>
                        <p>{{ setionDescription}}</p>
                    </div>
                    <div class="row">
                        <div class="col-sm-6" v-for="item in aboutService" :key="item.title">
                            <div class="kabout-service mb-30">
                                <h4 class="kabout-service-title">{{ item.title }}</h4>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                    <ul class="mt-20 mb-55">
                        <li v-for="item in aboutServiceList" :key="item.list"><i>
                                <font-awesome-icon :icon="['fas', 'check']" /></i>{{ item.list }}</li>
                    </ul>
                    <div class="kabout-btn">
                        <NuxtLink :to="buttonUrl" class="theme-btn border-btn">{{ buttonText }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- about area end here -->
</template>

<script>
export default {
    name: 'about',
    data() {
        return {
            image1: 'about-img-1.jpg',
            image2: 'about-img-2.jpg',

            setionSubTitle: 'get to know us',
            setionTitle: 'Welcome to digital <br>agency',
            setionDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown was popularised.',

            aboutService: [{
                    title: 'The Best Services',
                    description: 'Lorem ipsum dolor sited amet, consectetur notted.',
                },
                {
                    title: 'Expert Designers',
                    description: 'Lorem ipsum dolor sited amet, consectetur notted.',
                }
            ],

            aboutServiceList: [{
                    list: 'Entum estibulum dignissim posuere.',
                },
                {
                    list: 'If you are going to use a passage.',
                },
                {
                    list: 'Lorem Ipsum generators on the tend to repeat.',
                }
            ],

            buttonText: 'Discover more',
            buttonUrl: '/service',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
