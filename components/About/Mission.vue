<template>
<section class="mission-area pt-120 fix">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6">
                <div class="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30" data-aos="fade-left" data-aos-duration="1000">
                    <div class="section-title-wrapper mb-25">
                        <h5 class="section-subtitle mb-20">{{ sectionSubTitle }}</h5>
                        <h2 class="section-title mb-35">{{ sectionTitle }}</h2>
                        <p>{{ sectionContent }}</p>
                    </div>
                    <p class="mb-45">{{ sectionContent2 }}</p>
                    <div class="ktrust-btn">
                        <NuxtLink :to="buttonUrl" class="theme-btn border-btn">{{ buttonText }}</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6">
                <div class="kintro-img mb-30" data-aos="fade-right" data-aos-duration="1000">
                    <img :src="require('../../public/assets/img/about/' + image)" class="img-fluid" alt="about-img">
                    <div class="mission-img-text">
                        <h4>{{imageTitle}}</h4>
                        <NuxtLink :to="imageBtnUrl">{{ imageBtn }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Fact',
    data() {
        return {
            sectionSubTitle: 'get to know us',
            sectionTitle: 'Our Mission is to become the best agency',
            sectionContent: 'Lorem Ipsum is simply dummy text of the printing available in the market for free uses.',
            sectionContent2: 'Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum is not estibulum dignissim posuere cubilia durae. Leo sit met entum cubilia crae. but also the leap into electronic typesetting.',
            buttonText: 'Discover more',
            buttonUrl: '/service',
            image: 'about-img-6.jpg',
            imageTitle: 'We’re committed to trusted Agency',
            imageBtn: 'Get Started',
            imageBtnUrl: '/project',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
