<template>
  <section class="section-popular-content" id="popularcontent">
    <div class="container">
      <div class="section-popular-travel row justify-content-center" v-if="content.length > 0">
        <div class="col-sm-6 col-md-4 col-lg-3" v-for="itemContent in content" :key="itemContent.id">
          <div class="card-travel text-center d-flex flex-column" v-bind:style="{ backgroundImage: 'url(' + itemContent.gallery[0].image + ')' }">
            <div class="travel-country">{{ itemContent.location }}</div>
            <div class="travel-location">{{ itemContent.title }}</div>
            <div class="travel-button mt-auto">
              <router-link v-bind:to="'/packages/'+itemContent.id" class="btn btn-travel-explore px-4">Explore</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12" v-else>
        <p>Data Produk Tidak Ditemukan</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "PopularContent",
  data() {
    return {
      content: [],
    };
  },
  mounted() {
    axios
      .get("http://ankavel.test/public/api/packages")
      .then((res) => (this.content = res.data.data.data))
      
      .catch((err) => console.log(err));
  }
};
</script>