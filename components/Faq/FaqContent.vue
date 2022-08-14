<template>
<main>
    <!-- faq area start -->
    <section class="faq-area pt-120 pb-100 bg-grey fix">
        <div class="container z-index">
            <div class="row">
                <div class="col-lg-6">
                    <div class="faq-wrapper">
                        <div class="choose-right" data-aos="fade-left" data-aos-duration="1000">
                            <div class="accordion" role="tablist">
                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab">
                                        <b-button block v-b-toggle.accordion-1 variant="info">{{ tabTitle1 }}</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text>{{ text1 }}</b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab">
                                        <b-button block v-b-toggle.accordion-2 variant="info">{{ tabTitle2 }}</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text>{{ text2 }}</b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab">
                                        <b-button block v-b-toggle.accordion-3 variant="info">{{ tabTitle3 }}</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text>{{ text3 }}</b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab">
                                        <b-button block v-b-toggle.accordion-4 variant="info">{{ tabTitle4 }}</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text>{{ text4 }}</b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab">
                                        <b-button block v-b-toggle.accordion-5 variant="info">{{ tabTitle5 }}</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text>{{ text5 }}</b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="faq-wrapper faq-wrapper-right">
                        <div class="choose-right" data-aos="fade-left" data-aos-duration="1000">
                            <div class="accordion" role="tablist2">
                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab2">
                                        <b-button block v-b-toggle.accordion-6 variant="info">{{ tabTitle6 }}</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-6" accordion="my-accordion1" role="tabpanel2">
                                        <b-card-body>
                                            <b-card-text>{{ text6 }}</b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab2">
                                        <b-button block v-b-toggle.accordion-7 variant="info">{{ tabTitle7 }}</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-7" accordion="my-accordion1" role="tabpanel2">
                                        <b-card-body>
                                            <b-card-text>{{ text7 }}</b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab2">
                                        <b-button block v-b-toggle.accordion-8 variant="info">{{ tabTitle8 }}</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-8" accordion="my-accordion1" role="tabpanel2">
                                        <b-card-body>
                                            <b-card-text>{{ text8 }}</b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab2">
                                        <b-button block v-b-toggle.accordion-9 variant="info">{{ tabTitle9 }}</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-9" accordion="my-accordion1" role="tabpanel2">
                                        <b-card-body>
                                            <b-card-text>{{ text9 }}</b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab2">
                                        <b-button block v-b-toggle.accordion-10 variant="info">{{ tabTitle10 }}</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-10" accordion="my-accordion1" role="tabpanel2">
                                        <b-card-body>
                                            <b-card-text>{{ text10 }}</b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab2">
                                        <b-button block v-b-toggle.accordion-11 variant="info">{{ tabTitle11 }}</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-11" accordion="my-accordion1" role="tabpanel2">
                                        <b-card-body>
                                            <b-card-text>{{ text11 }}</b-card-text>
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
    <!-- faq area end -->

    <!-- faq form start -->
    <section class="faq-form pt-110 pb-160">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="faq-form-title-wrapper text-center">
                        <h3 class="faq-form-title">Still stuck ask directly</h3>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="contact-form">
                        <form action="#" id="contact-form" method="POST">
                            <div class="row">
                                <div class="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                    <input name="name" type="text" placeholder="Your Name" />
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                    <input name="email" type="email" placeholder="Email Adress" />
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                    <input name="phone" type="text" placeholder="Phone" />
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                    <input name="subject" type="text" placeholder="Subject" />
                                </div>
                                <div class="col-xxl-12 col-xl-12 col-md-12 mb-20">
                                    <textarea placeholder="Write Massage" name="massage" cols="30" rows="9"></textarea>
                                </div>
                                <div class="col-xxl-12 col-xl-12 mb-20">
                                    <button type="button" class="theme-btn border-btn">Send a message</button>
                                </div>
                            </div>
                        </form>
                        <p class="ajax-response"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- faq form end -->
</main>
</template>

<script>
export default {
    data() {
        return {
            tabTitle1: 'How to process the funtion for development?',
            tabTitle2: 'Where should I incorporate my business?',
            tabTitle3: 'How there are many variations of passages?',
            tabTitle4: 'Everything to keep in mind when designing?',
            tabTitle5: 'Different Ways To Design Digital Product?',
            tabTitle6: 'As designers, we are often burdened by the responsibility?',
            tabTitle7: 'How To Organize Product-Related Assets?',
            tabTitle8: 'Choosing A New Serverless Database Technology?',
            tabTitle9: 'Improving Your Team’s Communication?',
            tabTitle10: 'How To Boost Media Performance On A Budget?',
            tabTitle11: 'How To Make More Money Selling Shopify?',

            text1: 'There are many variations of passages of available but the majority have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable.',
            text2: 'Web fonts are often terrible for web performance and none of the font loading strategies are particularly effective to address that. Upcoming font options may finally deliver on the promise.',
            text3: 'Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.',
            text4: 'Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.',
            text5: 'Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.',
            text6: 'There are many variations of passages of available but the majority have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable.',
            text7: 'Web fonts are often terrible for web performance and none of the font loading strategies are particularly effective to address that. Upcoming font options may finally deliver on the promise.',
            text8: 'Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.',
            text9: 'Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.',
            text10: 'Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.',
            text11: 'Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.',
        };
    },
};
</script>

<style lang="scss" scoped>

</style>
