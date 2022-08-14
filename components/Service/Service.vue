<script>
import Header from "../Common/Header";
import Breadcrumb from "./Breadcrumb";
import Feature from "./Feature";
import About from "./About";
import ServiceCat from "./ServiceCat";
import Brand from "./Brand";
import Quality from "../Home/Quality";
import PageFooter from "../Common/PageFooter";

export default {
    name: "app",
    components: {
        Header,
        Breadcrumb,
        Feature,
        About,
        ServiceCat,
        Quality,
        Brand,
        PageFooter
    }
};
</script>


<template>
    <main>
        <!-- header area start here -->
        <Header />
        <!-- header area end here -->

        <!-- page title area  -->
        <Breadcrumb />
        <!-- page title area end -->

        <!-- service area start here -->
        <Feature />
        <!-- service area end here -->

        <!-- about area start here -->
        <About />
        <!-- about area end here -->

        <!-- service area start here -->
        <ServiceCat />
        <!-- service area end here -->

        <!-- brand area end here -->
        <Brand />
        <!-- brand area end-->

        <!-- quality area start here -->
        <Quality />
        <!-- quality area start here -->

        <!-- PageFooter area start here -->
         <PageFooter />
        <!-- PageFooter area end here -->
    </main>
</template>

<style scoped>

</style>