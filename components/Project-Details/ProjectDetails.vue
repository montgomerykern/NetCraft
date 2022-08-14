<script>
import Header from "../Common/Header";
import Breadcrumb from "./Breadcrumb";
import ProjectItems from "./ProjectItems";
import ProjectDetailsContent from "./ProjectDetailsContent";
import Pagination from "./Pagination";
import PageFooter from "../Common/PageFooter";

export default {
    name: "app",
    components: {
        Header,
        Breadcrumb,
        ProjectItems,
        ProjectDetailsContent,
        Pagination,
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

    <!-- project details area start  -->
    <ProjectDetailsContent />
    <!-- project detials area end  -->

    <!-- pagination area  -->
    <Pagination />
    <!-- pagination area  end-->

    <!-- project area start  -->
    <ProjectItems />
    <!-- project area end  -->

    <!-- Header area  -->
     <PageFooter />
    <!-- Header area end -->
</main>
</template>

<style scoped>

</style>
