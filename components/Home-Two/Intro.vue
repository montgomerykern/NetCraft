<template>
<!-- about area start here -->
<section class="intro-area z-index fix">
    <img :src="require('../../public/assets/img/about/intro-bg.png')" class="intro-bg img-fluid" alt="intro-bg">
    <div class="intro-space pt-120">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="kintro-img mb-40" data-aos="fade-right" data-aos-duration="1000">
                        <img :src="require('../../public/assets/img/about/' + introimg)" class="img-fluid" alt="about-img">
                        <div class="kintro-img-text">
                            <div class="kintro-img-text-icon mr-20">
                                <img :src="require('../../public/assets/img/icon/about-icon-2.png')" class="img-fluid" alt="author-img">
                            </div>
                            <h5 v-html="introSubtitle">{{ introSubtitle}}</h5>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="kintro-text ml-70" data-aos="fade-left" data-aos-duration="1000">
                        <div class="section-title-wrapper mb-25">
                            <h5 class="section-subtitle mb-20">Our introduction</h5>
                            <h2 class="section-title mb-35" v-html="sectionTitle">{{sectionTitle}}</h2>
                            <p>{{sectionDescription}}</p>
                        </div>
                        <p class="mb-45">{{sectionDescription2}}</p>
                        <div class="skill--content" v-for="item in skill" :key="item.title">
                            <div class="skill__wrapper mb-20">
                                <div class="skill--title__wrapper">
                                    <h5 class="skill--title">{{item.skilltitle}}</h5>
                                    <span>{{item.skillparcent}}</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-theme wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s" role="progressbar" style="width: 90%; visibility: visible; animation-duration: 1s; animation-delay: 0.5s; animation-name: slideInLeft;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>

                        <div class="kservice-author pt-40">
                            <div class="kservice-author-img mr-30">
                                <img :src="require('../../public/assets/img/service/' + authorImg)" class="img-fluid" alt="author-img">
                            </div>
                            <div class="kservice-author-sign kservice-author-sign-2">
                                <span>{{authorName}}</span>
                            </div>
                        </div>
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
    name: 'Introduction',
    data() {
        return {
            introimg: 'about-img-4.jpg',
            introSubtitle: 'Trusted by <br>8800 Clients',
            sectionTitle: 'largest business <br>experts',
            sectionDescription: 'Lorem Ipsum is simply dummy text of the printing available in the market for free uses.',
            skill: [{
                    skilltitle: 'Web Design',
                    skillparcent: '90%',
                },
                {
                    skilltitle: 'Web Development',
                    skillparcent: '68%',
                }
            ],
            authorImg: 'service-author.png',
            authorName: 'Jessica Brown',
            sectionDescription2: 'Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown was popularised.',
        }
    }
}
</script>

<style scoped>

</style>
