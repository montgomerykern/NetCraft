<script>
import Header from "../Common/Header";
import Breadcrumb from "./Breadcrumb";
import Mission from "./Mission";
import PageFooter from "../Common/PageFooter";
import Testimonial from "./Testimonial";
import Fact from "./Fact";
import WhyWe from "./WhyWe";
import Team from "../Home-Two/Team";
import Brand from "./Brand";

export default {
    name: "app",
    components: {
        Header,
        Breadcrumb,
        Mission,
        PageFooter,
        Testimonial,
        Fact,
        WhyWe,
        Team,
        Brand
    }
};
</script>

<template>

<main>
    <!-- header-area-start -->
    <Header />
    <!-- header-area-end -->

    <!-- page title area  -->
    <Breadcrumb />
    <!-- page title area end -->

    <!-- mission area  -->
    <Mission />
    <!-- mission area end  -->

    <!-- testimonial area start here -->
    <Testimonial />
    <!-- testimonial area end here -->

    <!-- fact area start here -->
    <Fact />
    <!-- fact area end here -->

    <!-- about area start here -->
    <WhyWe />
    <!-- about area end here -->

    <!-- team area start here -->
    <Team />
    <!-- team area end here -->

    <!-- brand area end here -->
    <Brand />
    <!-- brand area start here -->

   <!-- PageFooter area start here -->
     <PageFooter />
    <!-- PageFooter area end here -->
</main>

</template>

<style scoped>

</style>
