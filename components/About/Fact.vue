<template>
<!-- fact area start here -->
<section class="fact-area pb-85" :style="{backgroundImage: 'url('+require('../../public/assets/img/bg/fact-bg.jpg') +')'}">
    <div class="container">
        <div class="fun-fact text-center pb-80">
            <span>{{factTitle}}</span>
        </div>
    </div>
    <div class="container">
        <div class="row gx-0 kfact-border">
            <div class="col-lg-3 col-sm-6" v-for="item in fact" :key="item.count">
                <div class="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".3s">
                    <div class="kfact-icon mb-25">
                        <img :src="require('../../public/assets/img/icon/' + item.icon)" class="img-fluid" alt="client_img">
                    </div>
                    <h2 class="kfact-title counter">{{item.count}}</h2>
                    <span>{{item.content}}</span>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- fact area end here -->
</template>

<script>
export default {
    name: 'Fact',
    data() {
        return {
            factTitle: 'Our fun facts',
            fact: [{
                count: '3456',
                content: 'Project completed',
                icon: 'fact-icon-1.png',
            },
            {
                count: '2842',
                content: 'Happy Client',
                icon: 'fact-icon-2.png',
            },
            {
                count: '3178',
                content: 'Total Project',
                icon: 'fact-icon-3.png',
            },
            {
                count: '1845',
                content: 'Our Employee',
                icon: 'fact-icon-4.png',
            }]
        }
    }
}
</script>

<style scoped>

</style>
