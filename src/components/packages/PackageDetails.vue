<template>
  <main>
    <section class="section-details-header"></section>
    <section class="section-details-content">
      <div class="container">
        <div class="row">
          <div class="col p-0">
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">Package</li>
                <li class="breadcrumb-item active">Details</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 pl-lg-0">
            <div class="card card-details">
              <h1>{{ packageDetails.title }}</h1>
              <p>{{ packageDetails.location }}</p>
              <div class="gallery">
                <div class="xzoom-container">
                  <img 
                    :src="picDefault" 
                    alt="Details Bajo" 
                    class="xzoom"
                    id="xzoom-default"
                    xoriginal=""
                  />
                  <div class="xzoom-thumbs" v-if="packageDetails.gallery.length > 0">
                    <img 
                      v-for="ss in packageDetails.gallery.slice(1)" 
                      :key="ss.id" 
                      @click="changePic(ss.image)"
                      :src="ss.image" 
                      alt="Details Bajo"
                      class="xzoom-gallery"
                      width="131"
                      xpreview=""
                    />
                  </div>
                </div>
              </div>
              <h2>About this Place</h2>
              <p>
                {{ packageDetails.about }}
              </p>
              <div class="features row"> 
                <div class="col-md-4">
                    <img src="images/icons/ic_event.png" alt="" class="features-image">
                    <div class="description">
                      <h3>Featured Events</h3>
                      <p>{{ packageDetails.event }}</p>
                    </div>
                </div>
                <div class="col-md-4 border-left">
                  <div class="description">
                    <img src="images/icons/ic_language.png" alt="" class="features-image">
                    <div class="description">
                      <h3>Language</h3>
                      <p>{{ packageDetails.language }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 border-left">
                  <div class="description">
                    <img src="images/icons/ic_foods.png" alt="" class="features-image">
                    <div class="description">
                      <h3>Foods</h3>
                      <p>{{ packageDetails.food }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-details card-right">
              <h2>Members are Going</h2>
              <div class="members my-2">
                <img src="images/bajo_details/members-1.png" alt="" class="member-image mr-1" />
                <img src="images/bajo_details/members-2.png" alt="" class="member-image mr-1" />
                <img src="images/bajo_details/members-3.png" alt="" class="member-image mr-1" />
                <img src="images/bajo_details/members-4.png" alt="" class="member-image mr-1" />
                <img src="images/bajo_details/members-5.png" alt="" class="member-image mr-1" />
                <img src="images/bajo_details/members-6.png" alt="" class="member-image mr-1" />
              </div>
              <hr>
              <h2>Information</h2>
              <table class="trip-information">
                <tr>
                  <th width="50%">Date of Departure</th>
                  <td width=:50% class="text-right">
                    {{ packageDetails.departure_date }}
                  </td>
                </tr>
                <tr>
                  <th width="50%">Duration</th>
                  <td width=:50% class="text-right">{{ packageDetails.duration }} Days</td>
                </tr>
                <tr>
                  <th width="50%">Type</th>
                  <td width=:50% class="text-right">{{ packageDetails.type }}</td>
                </tr>
                <tr>
                  <th width="50%">Price</th>
                  <td width=:50% class="text-right">${{ packageDetails.price }} / Person</td>
                </tr>
              </table>
            </div>
            <div class="join-container">
              <router-link v-bind:to="'/checkout/'+packageDetails.id" class="btn btn-block btn-join-now mt-5 py-2">
                JOIN NOW
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {    
  name: "Details",
  data() {
    return {
      picDefault: "",
      packageDetails: []
    };
  },
  methods: {
    changePic(srcPic) {
      this.picDefault = srcPic;
    },
    setDataPicture(data) {
      this.packageDetails = data;
      this.picDefault = data.gallery[1].image;
    }
  },
  mounted() {
    axios
      .get("http://ankavel.test/public/api/packages", {
        params: {
          id: this.$route.params.id
        }
      })
      .then((res) => (this.setDataPicture(res.data.data)))
      
      .catch((err) => console.log(err));
  }
};
</script>
