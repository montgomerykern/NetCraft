<template>
<section class="page-title-area breadcrumb-spacing" :style="{backgroundImage: 'url('+require('../../public/assets/img/bg/breadcrumb-bg.jpg') +')'}">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xxl-9">
                <div class="page-title-wrapper text-center">
                    <h3 class="page-title mb-25">{{ breadcrumbTitle }}</h3>
                    <div class="breadcrumb-menu">
                        <nav aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs">
                            <ul class="trail-items">
                                <li class="trail-item trail-begin">
                                    <NuxtLink to="/"><span>{{ menu1 }}</span></NuxtLink>
                                </li>
                                <li class="trail-item trail-end"><span>{{ menu2 }}</span></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Breadcrumb',
    data() {
        return {
            breadcrumbTitle: 'Project Details',
            menu1: 'Home',
            menu2: 'Project Details',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
