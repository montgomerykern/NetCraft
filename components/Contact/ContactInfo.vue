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
                            <form @submit.prevent="handleSubmit"><form action="https://formeezy.com/api/v1/forms/639e7707aa4cca0008ca1096/submissions" method="POST" enctype="multipart/form-data">

                            <div class="col-xxl-6 col-xl-6 col-sm-6 mb-20">
                                <input v-model="form.name" type="text" name="name" placeholder="Enter name" required>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-sm-6 mb-20">
                                <input v-model="form.email" type="email" name="email" placeholder="Enter email" required>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-sm-6 mb-20">
                                <input v-model="form.phone" type="phone" name="phone" placeholder="Enter phone" required>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-sm-6 mb-20">
                                <input v-model="form.subject" type="subject" name="subject" placeholder="Enter subject" required>
                            </div>
                            <div class="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                                <textarea v-model="form.message" placeholder="Enter message" name="message" required></textarea>
                            </div>
                            <div class="col-xxl-12 col-xl-12 mb-20">
                                <button type="Submit" class="theme-btn border-btn">Send +</button>
                            </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
</form>
</section>
<!-- contact area end -->
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'ContactForm',
    data() {
      return {
        form: {
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        },
      };
    },
    methods: {
      handleSubmit: async function() {
        const formData = new FormData();

        for (let [key, value] of Object.entries(this.form)) {
          formData.append(key, value);
        }

        await axios
          .post("{Formeezy-Endpoint}", formData)
          .then(({ data }) => {
            const { redirect } = data;
            // Redirect used for reCAPTCHA and/or thank you page
            window.location.href = redirect;
          })
          .catch((e) => {
            window.location.href = e.response.data.redirect;
          });
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
