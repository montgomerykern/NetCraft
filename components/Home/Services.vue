<template>
<!-- service area start here -->
<section class="service-area pt-120 pb-130" :style="{backgroundImage: 'url('+require('../../public/assets/img/service/service-bg.jpg') +')'}">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-xl-5 col-lg-6">
                <div class="kservice-text mb-50" data-aos="fade-right" data-aos-duration="1000">
                    <h5 class="kservice-text-subtitle mb-15">{{ subtitle }}</h5>
                    <h2 class="kservice-text-title mb-40" v-html="title"></h2>
                    <p class="mb-45">{{ description }}</p>
                    <div class="kservice-author">
                        <div class="kservice-author-img mr-30">
                            <img :src="require('../../public/assets/img/service/' + authorImg)" class="img-fluid" alt="author-img">
                        </div>
                        <div class="kservice-author-sign">
                            <span>{{ authorName }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6">
                <div class="row custom-mar-20" data-aos="fade-down" data-aos-duration="1000">
                    <div class="col-sm-6 custom-pad-20" v-for="item in serviceBox" :key="item.title">
                        <div class="kservice text-center mb-20">
                            <div class="kservice-icon">
                                <i><font-awesome-icon :icon="item.f_icon" /></i>
                            </div>
                            <div class="kservice-content">
                                <h5 class="kservice-content-title">
                                    <NuxtLink :to="item.url" v-html="item.serviceBoxTitle"></NuxtLink>
                                </h5>
                            </div>
                        </div>
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
            subtitle: 'We are Crafters',
            title: 'The Services <br>We Offer',
            description: 'There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour.',
            authorImg: 'service-author.png',
            authorName: 'Montgomery James Kern',
            serviceBox: [{
                    serviceBoxTitle: 'Website <br>Crafting',
                    url: '/servicedetails',
                    f_icon: ['far', 'edit'],
                },
                {
                    serviceBoxTitle: 'Graphic <br>Crafting',
                    url: '/servicedetails',
                    f_icon: ['far', 'paper-plane'],
                },
                {
                    serviceBoxTitle: 'SEO & Content <br>Crafting',
                    url: '/servicedetails',
                    f_icon: ['far', 'chart-bar']
                },
                {
                    serviceBoxTitle: 'Digital <br>marketing',
                    url: '/servicedetails',
                    f_icon: ['far', 'handshake']
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
