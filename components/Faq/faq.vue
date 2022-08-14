<script>
import Header from "../Common/Header";
import Breadcrumb from "./Breadcrumb";
import CommonCta from "../Common/CommonCta";
import PageFooter from "../Common/PageFooter";

export default {
    name: "app",
    components: {
        Header,
        Breadcrumb,
        CommonCta,
        PageFooter
    }
};
</script>

<template>
<main>
    <!-- Header area  -->
    <Header />
    <!-- Header area end -->

    <!-- Breadcrumb area  -->
    <Breadcrumb />
    <!-- Breadcrumb area end -->

    <!-- Faq area -->
    <FaqContent />
    <!-- Faq area end -->

    <!-- CommonCta area -->
    <CommonCta/>
    <!-- CommonCta area end -->

    <!-- PageFooter area  -->
    <PageFooter />
    <!-- PageFooter area end -->
</main>
</template>

<style scoped>

</style>
