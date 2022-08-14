<template>
    <footer :style="{backgroundImage: 'url('+require('../../public/assets/img/bg/footer-bg.jpg') +')'}" class="pt-95 position-relative">
        <div class="common-shape-wrapper wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div class="common-shape-inner wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
        </div>
        <div class="footer-area pb-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="widget mb-30">
                            <div class="footer-logo mb-25">
                                <NuxtLink to="/"><img src="../../public/assets/img/logo/logo-white.png" class="img-fluid" alt="footer-logo"></NuxtLink>
                            </div>
                            <p class="mb-20 pr-35">There are many vari of pass of lorem ipsum availab but the majority have suffered in some form by injected humour or words.</p>
                            <div class="footer-social">
                                <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']"/></a>
                                <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']"/></a>
                                <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
                                <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="widget mb-30">
                            <h4 class="widget-title mb-35">Links</h4>
                            <ul>
                                <li><NuxtLink to="/service">Our Services</NuxtLink></li>
                                <li><NuxtLink to="/about">Meet Our Team</NuxtLink></li>
                                <li><NuxtLink to="/project">Our Portfolio</NuxtLink></li>
                                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                                <li><NuxtLink to="/contact">Help</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="widget widget-contact mb-30">
                            <h4 class="widget-title mb-35">Contact</h4>
                            <ul>
                                <li class="pb-10">2107 Walter Todd Road, Clarendon <br>North Carolina, USA</li>
                                <li><img src="../../public/assets/img/icon/footer-icon-1.png" class="img-fluid" alt="icon-img"><a href="mailto:needhelp@company.com">support@netcraft.io</a></li>
                                <li><img src="../../public/assets/img/icon/footer-icon-2.png" class="img-fluid" alt="icon-img"><a href="tel:9102091884">910-209-1884</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="widget mb-30">
                            <h4 class="widget-title mb-30">Newsletter</h4>
                            <p class="mb-20">Subscribe to Our Newsletter for Daily News and Updates</p>
                            <div class="widget-newsletter">
                                <form action="#">
                                    <input type="email" placeholder="Email Address">
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
           <div class="container">
                <div class="copyright-bg">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="copyright">
                                <span>Copyright ©2022 NetCraft. All Rights Reserved</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="privacy-text text-center text-md-end"> 
                                <ul>
                                    <li>
                                        <NuxtLink to="/contact">Terms & Condition</NuxtLink>
                                        <NuxtLink to="/contact">Privacy Policy</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'PageFooter'
    
}
</script>

<style lang="scss" scoped>

</style>











