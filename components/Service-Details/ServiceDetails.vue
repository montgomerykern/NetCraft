<script>
import Header from "../Common/Header";
import Breadcrumb from "./Breadcrumb";
import ServiceContent from "./ServiceContent";
import CommonCta from "../Common/CommonCta";
import PageFooter from "../Common/PageFooter";

export default {
    name: "app",
    components: {
        Header,
        Breadcrumb,
        ServiceContent,
        CommonCta,
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

    <!-- service details area start here -->
    <ServiceContent />
    <!-- service details area end here -->

    <!-- cta area  -->
    <CommonCta />
    <!-- cta area end  -->

    <!-- PageFooter area start here -->
     <PageFooter />
    <!-- PageFooter area end here -->
</main>
</template>

<style scoped>

</style>
