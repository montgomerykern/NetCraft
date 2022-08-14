<template>
<header>
    <fixed-header :threshold="150">
        <div class="transparent-header navbar">
            <div class="container-fluid">
                <div class="header-space">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-3 col-md-3 col-8 order-1 order-xl-1">
                            <div class="header-logo">
                                <NuxtLink to="/"><img :src="require('../../public/assets/img/logo/logo-white.png')" class="img-fluid" alt="logo-img"></NuxtLink>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-1 col-md-2 col-4 order-3 order-xl-2">
                            <div class="main-menu d-none d-xl-block">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li class="menu-item-has-children">
                                            <NuxtLink to="/">Home</NuxtLink>
                                            <ul class="sub-menu">
                                                <li>
                                                    <nuxt-link to="/">Home Style 1</nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/index-2">Home Style 2</nuxt-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <nuxt-link to="/about">About</nuxt-link>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <NuxtLink to="/service">Services</NuxtLink>
                                            <ul class="sub-menu">
                                                <li>
                                                    <NuxtLink to="/service">Services</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/servicedetails">Services Details</NuxtLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <NuxtLink to="/project">Project</NuxtLink>
                                            <ul class="sub-menu">
                                                <li>
                                                    <NuxtLink to="/project">Project</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/projectdetails">Project Details</NuxtLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <NuxtLink to="/blog">Blog</NuxtLink>
                                            <ul class="sub-menu">
                                                <li>
                                                    <NuxtLink to="/blog">Blog</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/blogdetails">Blog Details</NuxtLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages</a>
                                            <ul class="sub-menu">
                                                <li>
                                                    <NuxtLink to="/pricing">Pricing</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/faq">Faq</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/about">About</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/project">Project</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/projectdetails">Project Details</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/contact">Contact</NuxtLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="d-block d-xl-none text-end">
                                <div class="menu-bar">
                                    <button class="bars" v-on:click="menuOption.menuShow=!menuOption.menuShow">
                                        <font-awesome-icon :icon="['fas', 'bars']" /></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-8 col-md-7 d-none d-md-block order-2 order-xl-3">
                            <div class="header-right text-end">
                                <div class="header-social">
                                    <a href="#" target="_blank">
                                        <font-awesome-icon :icon="['fab', 'twitter']" /></a>
                                    <a href="#" target="_blank">
                                        <font-awesome-icon :icon="['fab', 'facebook']" /></a>
                                    <a href="#" target="_blank">
                                        <font-awesome-icon :icon="['fab', 'pinterest-p']" /></a>
                                    <a href="#" target="_blank">
                                        <font-awesome-icon :icon="['fab', 'instagram']" /></a>
                                </div>
                                <div class="header-search">
                                    <a class="search-btn nav-search search-trigger" href="#" v-on:click="menuOption.menuSearch=!menuOption.menuSearch">
                                        <font-awesome-icon :icon="['fas', 'search']" /></a>
                                </div>
                                <div class="header-btn">
                                    <NuxtLink to="/about" class="theme-btn theme-btn-small">Free Estimate</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </fixed-header>

    <!-- Mobile Menu Start -->
    <div class="fix">
        <div class="side-mobile-menu" v-bind:class="[menuOption.menuShow === true ?  'active' : '']">
            <button class="close-mobile-menu" v-on:click="menuOption.menuShow=!menuOption.menuShow">
                <font-awesome-icon :icon="['far', 'times-circle']" /></button>
            <div class="side-info-content sidebar-menu mm-menu">
                <ul>
                    <li class="menu-item-has-children has-droupdown" v-bind:class="[menuOption.homeDropdown === true ?  'active' : '' ]">
                        <a v-on:click="menuOption.homeDropdown=!menuOption.homeDropdown">Home</a>
                        <ul class="sub-menu" v-bind:class="[menuOption.homeDropdown === true ?  'active' : '' ]">
                            <li>
                                <NuxtLink to="/">Home Style 1</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/index-2">Home Style 2</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li class="menu-item-has-children has-droupdown" v-bind:class="[menuOption.serviceDropdown === true ?  'active' : '' ]">
                        <a v-on:click="menuOption.serviceDropdown=!menuOption.serviceDropdown">Services</a>
                        <ul class="sub-menu" v-bind:class="[menuOption.serviceDropdown === true ?  'active' : '' ]">
                            <li>
                                <NuxtLink to="/service">Services</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/servicedetails">Services Details</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children has-droupdown" v-bind:class="[menuOption.projectDropdown === true ?  'active' : '' ]">
                        <a v-on:click="menuOption.projectDropdown=!menuOption.projectDropdown">Project</a>
                        <ul class="sub-menu" v-bind:class="[menuOption.projectDropdown === true ?  'active' : '' ]">
                            <li>
                                <NuxtLink to="/project">Project</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/projectdetails">Project Details</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children has-droupdown" v-bind:class="[menuOption.blogDropdown === true ?  'active' : '' ]">
                        <a v-on:click="menuOption.blogDropdown=!menuOption.blogDropdown">Blog</a>
                        <ul class="sub-menu" v-bind:class="[menuOption.blogDropdown === true ?  'active' : '' ]">
                            <li>
                                <NuxtLink to="/blog">Blog</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blogdetails">Blog Details</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li class="has-droupdown" v-bind:class="[menuOption.aboutDropdown === true ?  'active' : '' ]">
                        <a v-on:click="menuOption.aboutDropdown=!menuOption.aboutDropdown">Pages</a>
                        <ul class="sub-menu" v-bind:class="[menuOption.aboutDropdown === true ?  'active' : '' ]">
                            <li>
                                <NuxtLink to="/pricing">Pricing</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/faq">Faq</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about">About</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/project">Project</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/projectdetails">Project Details</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact">Contact</NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="contact-infos mb-30">
                <div class="contact-list mb-30">
                    <h4>Contact Info</h4>
                    <div class="mobile-search">
                        <form action="#">
                            <input type="text" placeholder="Search here...">
                            <button type="submit">
                                <font-awesome-icon :icon="['fas', 'search']" /></button>
                        </form>
                    </div>
                    <ul>
                        <li><img src="../../public/assets/img/icon/sidebar-icon-1.png" class="img-fluid" alt="icon-img">86 broklyn street road, New York</li>
                        <li><img src="../../public/assets/img/icon/footer-icon-1.png" class="img-fluid" alt="icon-img"><a href="mailto:info@sycho24.com">needhelp@company.com</a></li>
                        <li><img src="../../public/assets/img/icon/footer-icon-2.png" class="img-fluid" alt="icon-img"><a href="tel:926668880000">92 666 888 0000</a></li>
                    </ul>
                    <div class="sidebar__menu--social">
                        <a href="#" target="_blank">
                            <font-awesome-icon :icon="['fab', 'twitter']" /></a>
                        <a href="#" target="_blank">
                            <font-awesome-icon :icon="['fab', 'facebook']" /></a>
                        <a href="#" target="_blank">
                            <font-awesome-icon :icon="['fab', 'pinterest-p']" /></a>
                        <a href="#" target="_blank">
                            <font-awesome-icon :icon="['fab', 'instagram']" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="body-overlay" v-bind:class="[menuOption.menuShow === true ?  'active' : '']"></div>
    <!-- Mobile Menu End -->

    <!-- Menu Search start -->
    <div class="search-wrap" v-bind:class="[menuOption.menuSearch === true ?  'active' : '']">
        <div class="search-inner">
            <i class="search-close" id="search-close" v-on:click="menuOption.menuSearch=!menuOption.menuSearch">
                <font-awesome-icon :icon="['far', 'times-circle']" /></i>
            <div class="search-cell">
                <form method="get">
                    <div class="search-field-holder">
                        <input type="search" class="main-search-input" placeholder="Search here...">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Menu Search End -->
</header>
</template>

<script>
import FixedHeader from 'vue-fixed-header'

export default {
    name: "Front_Header",
    components: {
        FixedHeader
    },
    data() {
        return {
            menuOption: {
                menuShow: false,
                menuSearch: false,
                homeDropdown: false,
                serviceDropdown: false,
                projectDropdown: false,
                blogDropdown: false,
                aboutDropdown: false,
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.navbar {
    display: inherit;
    padding: 0px;
}
.navbar.vue-fixed-header--isFixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: rgb(36, 38, 41);
}
</style>
