<template>
<section class="why-we bg-grey pt-125 pb-75 position-relative fix">
    <div class="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div class="common-shape-inner"></div>
    </div>
    <div class="container z-index">
        <div class="row justify-content-between">
            <div class="col-xl-6 col-lg-6 col-md-12">
                <div class="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                    <div class="section-title-wrapper">
                        <h5 class="section-subtitle mb-20">{{ sectionSubTitle }}</h5>
                        <h2 class="section-title mb-35">{{ sectionTitle }}</h2>
                    </div>
                    <p>{{ sectionTitleContent }}</p>
                    <div class="why-tab-list">
                        <ul>
                            <li v-for="item in whyTabList" :key="item.List"><i>
                                    <font-awesome-icon :icon="['fas', 'check']" /></i> {{ item.List }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="col-xl-6 col-lg-6 col-md-12">
                <div class="faq-wrapper">
                    <div class="choose-right" data-aos="fade-left" data-aos-duration="1000">
                        <div class="accordion" role="tablist">
                            <b-card no-body>
                                <b-card-header header-tag="header" role="tab">
                                    <b-button block v-b-toggle.accordion-1 variant="info">{{ tabTitle1 }}</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>{{ Text1 }}</b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body>
                                <b-card-header header-tag="header" role="tab">
                                    <b-button block v-b-toggle.accordion-2 variant="info">{{ tabTitle2 }}</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>{{ Text2 }}</b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body>
                                <b-card-header header-tag="header" role="tab">
                                    <b-button block v-b-toggle.accordion-3 variant="info">{{ tabTitle3 }}</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>{{ Text3 }}</b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            sectionSubTitle: 'All Categories List',
            sectionTitle: 'Why Choose our agency',
            sectionTitleContent: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',

            whyTabList: [{
                    List: 'Refresing to get such a personal touch.',
                },
                {
                    List: 'Duis aute irure dolor in reprehenderit in voluptate.',
                },
                {
                    List: 'Velit esse cillum dolore eu fugiat nulla pariatur.',
                }
            ],
            tabTitle1: 'How to process the funtion for development?',
            tabTitle2: 'Where should I incorporate my business?',
            tabTitle3: 'How there are many variations of passages?',

            Text1: 'There are many variations of passages of available but the majority have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable.',
            Text2: 'Web fonts are often terrible for web performance and none of the font loading strategies are particularly effective to address that. Upcoming font options may finally deliver on the promise.',
            Text3: 'Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.',
        };
    },
};
</script>

<style lang="scss" scoped>

</style>
