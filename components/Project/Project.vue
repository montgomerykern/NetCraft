<script>
import Header from "../Common/Header";
import Breadcrumb from "./Breadcrumb";
import ProjectItem from "./ProjectItem";
import PageFooter from "../Common/PageFooter";

export default {
    name: "app",
    components: {
        Header,
        Breadcrumb,
        ProjectItem,
        PageFooter
    }
};
</script>

<template>
<main>

    <!-- Header area  -->
    <Header />
    <!-- Header area end -->

    <!-- page title area  -->
    <Breadcrumb />
    <!-- page title area end -->

    <!-- project area start  -->
    <ProjectItem />
    <!-- project area end  -->

    <!-- Header area  -->
     <PageFooter />
    <!-- Header area end -->
</main>
</template>

<style scoped>

</style>
