<script>


import Logininfo from "./Logininfo";
import Header from "../Common/Header";
import PageFooter from "../Common/PageFooter";



export default {
    name: "app",
    components: {

        Header,
        Logininfo,
        PageFooter,

    }
};
</script>

<template>
<main>
  <!-- header-area-start -->
  <Header />
    <!-- header-area-end -->

    <!-- Contact area  -->
    <Logininfo />
    <!-- Contact area end -->
    
   <!-- PageFooter area start here -->
   <PageFooter />
    <!-- PageFooter area end here -->

</main>
</template>

<style scoped>

</style>
