<template>
<!-- pagination area  -->
<div class="portfolio__pagination-wrapper">
    <div class="container">
        <div class="pagination-border pt-40 pb-40">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div class="portfolio__pagination">
                        <NuxtLink to="/Project" class="link-btn-2">
                            <i>
                                <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" /></i>
                            {{nextText}}
                        </NuxtLink>
                    </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div class="portfolio__pagination text-end">
                        <NuxtLink to="/Project" class="link-btn-2">
                            {{prevText}}
                            <i>
                                <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" /></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- pagination area  end-->
</template>

<script>
export default {
    name: 'Pagination',
    data() {
        return {
            nextText: 'Next',
            prevText: 'Prev',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
