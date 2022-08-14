<script>
import HeaderTwo from "../Common/HeaderTwo";
import PageFooter from "../Common/PageFooter";
import CommonCta from "../Common/CommonCta";
import MainSlider from "./MainSlider";
import Brand from "./Brand";
import Intro from "./Intro";
import Service from "./Service";
import Trust from "../Common/Trust";
import Team from "./Team";
import WhyWe from "./WhyWe";
import ProjectTwo from "./ProjectTwo";
import Fact from "./Fact";
import Benefits from "./Benefits";
import BlogTwo from "./BlogTwo";

export default {
    name: "app",
    components: {
        HeaderTwo,
        PageFooter,
        CommonCta,
        MainSlider,
        Brand,
        Intro,
        Service,
        Trust,
        Team,
        WhyWe,
        ProjectTwo,
        Fact,
        Benefits,
        BlogTwo
    }
};
</script>

<template>
<main>
    <!-- header-area-start -->
    <HeaderTwo />
    <!-- header-area-end -->

    <!-- slider area start here -->
    <MainSlider />
    <!-- slider area end here -->

    <!-- brand area start here -->
    <Brand />
    <!-- brand area end here -->

    <!-- Intro area start here -->
    <Intro />
    <!-- Intro area end here -->

    <!-- service area start here -->
    <Service />
    <!-- service area end here -->

    <!-- trust area start here -->
    <Trust />
    <!-- trust area end here -->
    
    <!-- team area start here -->
    <Team />
    <!-- team area end here -->

    <!-- about area start here -->
    <WhyWe />
    <!-- about area end here -->

    <!-- project area start here -->
    <ProjectTwo />
    <!-- project area end here -->

    <!-- fact area start here -->
    <Fact />
    <!-- fact area end here -->

    <!-- benefits area start here -->
    <Benefits />
    <!-- benefits area end here -->

    <!-- blog area end here -->
    <BlogTwo />
    <!-- blog area start here -->

    <!-- cta area start here -->
    <CommonCta />
    <!-- cta area end here -->

    <!-- PageFooter area start here -->
     <PageFooter />
    <!-- PageFooter area end here -->
</main>
</template>

<style scoped>

</style>
