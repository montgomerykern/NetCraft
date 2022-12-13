<template>
<!-- cta area start here -->
<section class="cta-area mt--60 z-index" data-aos="fade-up">
    <div class="container">
        <div class="cta-bg bg-theme">
            <div class="cta-number">
                <div class="cta-number-icon mr-30">
                    <img :src="require('../../public/assets/img/icon/cta-icon.png')" class="img-fluid z-index" alt="about-img">
                </div>
                <div class="cta-number-text fix">
                    <span class="uppercase">{{ subtitle }}</span>
                    <h3><a href="tel:910-209-1884">{{ numberText }}</a></h3>
                </div>
            </div>
            <div class="cta-description">
                <p>{{ description }}</p>
            </div>
            <div class="cta-btn">
                <NuxtLink :to="ctaLinkUrl" class="theme-btn black-btn">{{ ctaLinkText }}</NuxtLink>
            </div>
        </div>
    </div>
</section>
<!-- cta area end here -->
</template>

<script>
export default {
    name: 'Cta',
    data(){
        return {
            subtitle: 'Get in Contact',
            numberText: '910 209 1884',
            description: 'Contact Us and find out what we can do for your business.',
            ctaLinkText: 'Discover More +',
            ctaLinkUrl: '/service',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
