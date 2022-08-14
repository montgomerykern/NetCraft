<template>
<!-- benefits area start here -->
<section class="benefits-area position-relative pt-120">
    <div class="benefit-img mb-30 wow slideInLeft" data-wow-duration=".5s">
        <img :src="require('../../public/assets/img/about/' + image)" class="img-fluid" alt="benefit-img">
        <div class="benefit-img-level">
            <span>{{projectText}}</span>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-8">
                <div class="benefit-text mb-30 wow slideInRight" data-wow-duration=".5s">
                    <div class="section-title-wrapper mb-45">
                        <h5 class="section-subtitle mb-20">{{sectionSubTitle}}</h5>
                        <h2 class="section-title">{{sectionTitle}}</h2>
                    </div>
                    <div class="mb-45">
                        <h5 class="benefit-subtitle">{{benefitTitle}}</h5>
                        <p>{{benefitContent}}</p>
                    </div>
                    <div class="benefit-progress">
                        <div class="progress_wrapper pbar_1 pr-25">
                            <div class="progress_circle" data-percentage="90">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">
                                    <div>
                                        90%
                                    </div>
                                </div>
                            </div>
                            <span class="afford">Affordable <br>Cost</span>
                        </div>
                        <div class="progress_wrapper pbar_2">
                            <div class="progress_circle" data-percentage="70">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">
                                    <div>
                                        70%
                                    </div>
                                </div>
                            </div>
                            <span class="afford">Quality of <br>Work</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- benefits area end here -->
</template>

<script>
export default {
    name: 'Service',
    data() {
        return {
            image: 'about-img-5.jpg',
            projectText: '3600 Projects are completed',
            sectionSubTitle: 'our benefits',
            sectionTitle: 'We’re here to grow your business',
            benefitTitle: 'Outsourced digital Businesses',
            benefitContent: 'Lorem Ipsum is simply free text available in your not dummy text of the printing and typesetting industry.'
        }
    }
}
</script>

<style scoped>

</style>
