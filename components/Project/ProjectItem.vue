<template>
<!-- project area start  -->
<section class="project-2 pt-115 pb-90 fix">
    <div class="container">
        <div class="aportfolio-active">
            <b-card no-body>
                <b-tabs card>
                    <b-tab no-body title="All">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 grid-item cat1 cat3" v-for="item in projectContent" :key="item.title">
                                <div class="kproject kproject-2 mb-30">
                                    <img :src="require('../../public/assets/img/project/' + item.image)" class="img-fluid" alt="project_img">
                                    <div class="kproject-text kproject-text-2">
                                        <div class="kproject-text-content">
                                            <span>{{ item.category }}</span>
                                            <h5 class="kproject-text-title">
                                                <NuxtLink :to="item.titleUrl">{{ item.title }}</NuxtLink>
                                            </h5>
                                        </div>
                                        <div class="kproject-text-icon">
                                            <NuxtLink :to="item.projectLinkUrl" class="kproject-text-icon-arrow">
                                                <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-tab>

                    <b-tab no-body title="Branding">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 grid-item cat1 cat3" v-for="item in projectContent.slice(3, 6)" :key="item.title">
                                <div class="kproject kproject-2 mb-30">
                                    <img :src="require('../../public/assets/img/project/' + item.image)" class="img-fluid" alt="project_img">
                                    <div class="kproject-text kproject-text-2">
                                        <div class="kproject-text-content">
                                            <span>{{ item.category }}</span>
                                            <h5 class="kproject-text-title">
                                                <NuxtLink :to="item.titleUrl">{{ item.title }}</NuxtLink>
                                            </h5>
                                        </div>
                                        <div class="kproject-text-icon">
                                            <NuxtLink :to="item.projectLinkUrl" class="kproject-text-icon-arrow">
                                                <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-tab>

                    <b-tab no-body title="illustration">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 grid-item cat1 cat3" v-for="item in projectContent.slice(0, 4)" :key="item.title">
                                <div class="kproject kproject-2 mb-30">
                                    <img :src="require('../../public/assets/img/project/' + item.image)" class="img-fluid" alt="project_img">
                                    <div class="kproject-text kproject-text-2">
                                        <div class="kproject-text-content">
                                            <span>{{ item.category }}</span>
                                            <h5 class="kproject-text-title">
                                                <NuxtLink :to="item.titleUrl">{{ item.title }}</NuxtLink>
                                            </h5>
                                        </div>
                                        <div class="kproject-text-icon">
                                            <NuxtLink :to="item.projectLinkUrl" class="kproject-text-icon-arrow">
                                                <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-tab>

                    <b-tab no-body title="Photography">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 grid-item cat1 cat3" v-for="item in projectContent.slice(0, 6)" :key="item.title">
                                <div class="kproject kproject-2 mb-30">
                                    <img :src="require('../../public/assets/img/project/' + item.image)" class="img-fluid" alt="project_img">
                                    <div class="kproject-text kproject-text-2">
                                        <div class="kproject-text-content">
                                            <span>{{ item.category }}</span>
                                            <h5 class="kproject-text-title">
                                                <NuxtLink :to="item.titleUrl">{{ item.title }}</NuxtLink>
                                            </h5>
                                        </div>
                                        <div class="kproject-text-icon">
                                            <NuxtLink :to="item.projectLinkUrl" class="kproject-text-icon-arrow">
                                                <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-tab>

                    <b-tab no-body title="Web Design">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 grid-item cat1 cat3" v-for="item in projectContent.slice(4, 9)" :key="item.title">
                                <div class="kproject kproject-2 mb-30">
                                    <img :src="require('../../public/assets/img/project/' + item.image)" class="img-fluid" alt="project_img">
                                    <div class="kproject-text kproject-text-2">
                                        <div class="kproject-text-content">
                                            <span>{{ item.category }}</span>
                                            <h5 class="kproject-text-title">
                                                <NuxtLink :to="item.titleUrl">{{ item.title }}</NuxtLink>
                                            </h5>
                                        </div>
                                        <div class="kproject-text-icon">
                                            <NuxtLink :to="item.projectLinkUrl" class="kproject-text-icon-arrow">
                                                <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</section>
<!-- project area end  -->
</template>

<script>
export default {
    name: 'portfolio',
    data() {
        return {
            projectContent: [{
                    image: 'project-img-5.jpg',
                    category: 'Graphic',
                    title: 'Fimlor Experience',
                    titleUrl: '/projectdetails',
                    projectLinkUrl: '/projectdetails',
                },
                {
                    image: 'project-img-6.jpg',
                    category: 'Design',
                    title: 'Using SWR React',
                    titleUrl: '/projectdetails',
                    projectLinkUrl: '/projectdetails',
                },
                {
                    image: 'project-img-7.jpg',
                    category: 'Development',
                    title: 'Incremental Static',
                    titleUrl: '/projectdetails',
                    projectLinkUrl: '/projectdetails',
                },
                {
                    image: 'project-img-8.jpg',
                    category: 'Networking',
                    title: 'Developer Decisions',
                    titleUrl: '/projectdetails',
                    projectLinkUrl: '/projectdetails',
                },
                {
                    image: 'project-img-9.jpg',
                    category: 'Graphic',
                    title: 'Process of Taking',
                    titleUrl: '/projectdetails',
                    projectLinkUrl: '/projectdetails',
                },
                {
                    image: 'project-img-10.jpg',
                    category: 'Design',
                    title: 'Interactive Learning',
                    titleUrl: '/projectdetails',
                    projectLinkUrl: '/projectdetails',
                },
                {
                    image: 'project-img-11.jpg',
                    category: 'Devolopment',
                    title: 'Refactoring CSS',
                    titleUrl: '/projectdetails',
                    projectLinkUrl: '/projectdetails',
                },
                {
                    image: 'project-img-12.jpg',
                    category: 'Networking',
                    title: 'Regression Testing',
                    titleUrl: '/projectdetails',
                    projectLinkUrl: '/projectdetails',
                },
                {
                    image: 'project-img-13.jpg',
                    category: 'Graphic',
                    title: 'Cumulative Layout',
                    titleUrl: '/projectdetails',
                    projectLinkUrl: '/projectdetails',
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
