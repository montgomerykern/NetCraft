<template>
<!-- contact area  -->
<section class="contact-area pt-120 pb-145 fix">
    <div class="container">
    </div>
        <div class="row">
            <div class="col-xxl-5 col-xl-6 col-lg-6">
                <div class="section-title-wrapper mb-15">
                    <h5 class="section-subtitle mb-20">{{sectionSubTitle}}</h5>
                    <h2 class="section-title">{{sectionTitle}}</h2>
                </div>
                <div class="contact-info mr-50 mr-xs-0  mr-md-0">
                    <div class="single-contact-info d-flex align-items-center" v-for="item in contactInfo" :key="item.infoTitle">
                        <div class="contact-info-icon">
                            <a href="#"><i><font-awesome-icon :icon="item.f_icon" /></i></a>
                        </div>
                        <div class="contact-info-text mt-10">
                            <span>{{item.infoTitle}}</span>
                            <h5><a href="#">{{item.infoContent}}</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-7 col-xl-6 col-lg-6">
                <div class="contact-form">
                        <div class="row">
                         
                            <form action="https://formeezy.com/api/v1/forms/639e7707aa4cca0008ca1096/submissions" method="POST" enctype="multipart/form-data">
  <input type="email" name="email" placeholder="Enter email" required></input>
  <textarea placeholder="Enter message" name="message" required></textarea>
  <input type="file" name="my-file"></input>
  <input name="bot-field" type="text" style="display: none;"></input>
  <button type="submit">Send</button>
</form>
  </form>
                        </div>
                </div>
            </div>
        </div>
</section>
<!-- contact area end -->
</template>



<style lang="scss" scoped>

</style>
