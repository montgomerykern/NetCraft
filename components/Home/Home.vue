<script>
import Header from "../Common/Header";
import PageFooter from "../Common/PageFooter";
import MainSlider from "./MainSlider";
import Services from "./Services";
import CommonCta from "../Common/CommonCta";
import About from "./About.vue";
import Project from "./Project.vue";
import Video from "./Video.vue";
import Testimonial from "./Testimonial";
import Brand from "./Brand.vue";
import Trust from "../Common/Trust";
import Blog from "./Blog";
import Quality from "./Quality";
import Map from "./Map";

export default {
    name: "app",
    components: {
        Header,
        PageFooter,
        MainSlider,
        Services,
        CommonCta,
        About,
        Project,
        Video,
        Testimonial,
        Brand,
        Trust,
        Blog,
        Quality,
        Map,
    }
};
</script>

<template>
<main>
    <!-- header-area-start -->
    <Header />
    <!-- header-area-end -->

    <!-- slider area start here -->
    <MainSlider />
    <!-- slider area start end -->

    <!-- service area start here -->
    <Services />
    <!-- service area end here -->

    <!-- cta area start here -->
    <CommonCta />
    <!-- cta area end here -->

    <!-- about area start here -->
    <About />
    <!-- about area end here -->

    <!-- project area strat here -->
    <Project />
    <!-- project area end here -->

    <!-- video area start here -->
    <Video />
    <!-- video area end here -->

    <!-- testimonial area start here -->
    <Testimonial />
    <!-- testimonial area end here -->

    <!-- brand area end here -->
    <Brand />
    <!-- brand area start here -->

    <!-- trust area start here -->
    <Trust />
    <!-- trust area end here -->

    <!-- blog area start here -->
    <Blog />
    <!-- blog area end here -->

    <!-- quality area start here -->
    <Quality />
    <!-- quality area end here -->

    <!-- map area start here -->
    <Map />
    <!-- map area end here -->

    <!-- PageFooter area start here -->
    <PageFooter />
    <!-- PageFooter area end here -->

</main>
</template>

<style scoped>
</style>
