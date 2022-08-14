<script>
import Header from "../Common/Header";
import Breadcrumb from "./Breadcrumb";
import ContactInfo from "./ContactInfo";
import CommonCta from "../Common/CommonCta";
import PageFooter from "../Common/PageFooter";

export default {
    name: "app",
    components: {
        Header,
        Breadcrumb,
        ContactInfo,
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

    <!-- Contact area  -->
    <ContactInfo />
    <!-- Contact area end -->

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
