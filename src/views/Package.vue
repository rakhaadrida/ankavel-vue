<template>
  <div class="home">
    <Navbar />
    <PackageDetails />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import PackageDetails from "@/components/packages/PackageDetails.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Navbar,
    PackageDetails,
    Footer
  }
}
</script>
