<template>
<!-- about area start here -->
<section class="why-we bg-grey pt-120 pb-70 position-relative fix">
    <div class="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div class="common-shape-inner wow slideInleft animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
    </div>
    <div class="container z-index">
        <div class="row justify-content-between">
            <div class="col-xl-6">
                <div class="why-we-left mb-40 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                    <div class="section-title-wrapper">
                        <h5 class="section-subtitle mb-20">{{ sectionSubTitle }}</h5>
                        <h2 class="section-title mb-35">{{ sectionTitle }}</h2>
                        <p>{{ sectionDescription }}</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 ">
                <b-card no-body class="why-we-tab">
                    <b-tabs card>
                        <b-tab no-body title="Full satisfaction">
                            <p class="mb-30" v-html="satisfactionDesc">{{ satisfactionDesc }}</p>
                            <div class="why-tab-wrapper">
                                <div class="why-tab-img">
                                    <img :src="require('../../public/assets/img/about/' + satisfactionImage)" class="img-fluid" alt="about-img">
                                </div>
                                <div class="why-tab-list fix">
                                    <ul>
                                        <li v-for="item in satisfaction" :key="item.satisfactionList"><i><font-awesome-icon :icon="['fas', 'check']" /></i> {{ item.satisfactionList }}</li>
                                    </ul>
                                </div>
                            </div>
                        </b-tab>

                        <b-tab no-body title="Expert Team">
                            <p class="mb-30" v-html="expartDesc">{{ expartDesc }}</p>
                            <div class="why-tab-wrapper">
                                <div class="why-tab-img">
                                    <img :src="require('../../public/assets/img/about/' + expartImage)" class="img-fluid" alt="about-img">
                                </div>
                                <div class="why-tab-list fix">
                                    <ul>
                                        <li v-for="item in expart" :key="item.expartList"><i><font-awesome-icon :icon="['fas', 'check']" /></i> {{ item.expartList }}</li>
                                    </ul>
                                </div>
                            </div>
                        </b-tab>

                        <b-tab no-body title="Mission & Vissions">
                            <p class="mb-30" v-html="missionDesc">{{ missionDesc }}</p>
                            <div class="why-tab-wrapper">
                                <div class="why-tab-img">
                                    <img :src="require('../../public/assets/img/about/' + missionImage)" class="img-fluid" alt="about-img">
                                </div>
                                <div class="why-tab-list fix">
                                    <ul>
                                        <li v-for="item in mission" :key="item.missionList"><i><font-awesome-icon :icon="['fas', 'check']" /></i> {{ item.missionList }}</li>
                                    </ul>
                                </div>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div>
    </div>
</section>
<!-- about area end here -->
</template>

<script>
export default {
    name: 'Fact',
    data() {
        return {
            sectionSubTitle: 'Why we are good',
            sectionTitle: 'you can Get the best all design solutions',
            sectionDescription: 'There are many variations of passages of but the lipsum not free as you know majority have in some form by injected humou or words which do not look even slightly believable of but the majority have suffered.',

            satisfactionDesc: 'Discover which SVG patterns we should avoid and which patterns are the most inclusive when comparing different combinations of OSs, browsers, and screen readers.',
            satisfactionImage: 'about-img-3.jpg',
            satisfaction: [{
                    satisfactionList: 'Nsectetur cing elit',
                },
                {
                    satisfactionList: 'Suspe ndisse suscipit sagittis leo',
                },
                {
                    satisfactionList: 'Entum estibulum dignissim posuere',
                },
                {
                    satisfactionList: 'Lorem Ipsum on the tend to repeat',
                }
            ],

            expartDesc: 'There are many variations of passages of but the majority have in some form, by injected humou or words which do not look even slightly believable of but the majority have suffered.',
            expartImage: 'about-img-8.jpg',
            expart: [{
                    expartList: 'Entum estibulum dignissim posuere',
                },
                {
                    expartList: 'Lorem Ipsum on the tend to repeat',
                },
                {
                    expartList: 'Nsectetur cing elit',
                },
                {
                    expartList: 'Suspe ndisse suscipit sagittis leo',
                }
            ],

            missionDesc: 'Mistakes. These cruel villains do not even stop at the beautiful world of software development. But although we cannot avoid making mistakes, we can learn to undo them!',
            missionImage: 'about-img-9.jpg',
            mission: [{
                    missionList: 'Nsectetur cing elit',
                },
                {
                    missionList: 'Suspe ndisse suscipit sagittis leo',
                },
                {
                    missionList: 'Entum estibulum dignissim posuere',
                },
                {
                    missionList: 'Lorem Ipsum on the tend to repeat',
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
