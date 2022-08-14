<template>
<!-- video area start here -->
<section class="video-area z-index">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title-wrapper mb-45 text-center">
                    <h5 class="section-subtitle mb-20">{{ sectionSubTitle }}</h5>
                    <h2 class="section-title mb-35">{{ sectionTitle }}</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="kvideo-wrapper" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="kvideo" :style="{backgroundImage: 'url('+require('../../public/assets/img/bg/video-bg.jpg') +')'}">
                        <div class="kvideo-sign text-center">
                            <b-button v-b-modal.modal-center>
                                <font-awesome-icon :icon="['fas', 'play']" />
                            </b-button>
                            <h2>{{ watchTitle }}</h2>
                        </div>
                        <div class="kvideo-number">
                            <span>{{ numTitle }}</span>
                            <a href="tel:6668880000">{{ number }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>

        <!-- vue bootstrap modal -->
        <div class="video-modal-wrapper">
            <b-modal id="modal-center" centered title="BootstrapVue">
                <p><video-embed src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed></p>
            </b-modal>
        </div>
        <!-- vue bootstrap modal -->
    </div>
</section>
<!-- video area end here -->
</template>

<script>
export default {
    name: 'Video',
    data() {
        return {
            sectionSubTitle: 'one minute video',
            sectionTitle: 'Watch video work',
            watchTitle: 'Watch Video',
            numTitle: 'get estimate',
            number: '666 888 0000',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
