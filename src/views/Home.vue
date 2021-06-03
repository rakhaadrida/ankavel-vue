<template>
  <div class="home">
    <Navbar />
    <Banner />
    <Stats />
    <Popular />
    <PopularContent />
    <Partner />
    <Testimoni />
    <TestiContent />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/home/Banner.vue";
import Stats from "@/components/home/Stats.vue";
import Popular from "@/components/home/Popular.vue";
import PopularContent from "@/components/home/PopularContent.vue";
import Partner from "@/components/home/Partner.vue";
import Testimoni from "@/components/home/Testimoni.vue";
import TestiContent from "@/components/home/TestiContent.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Navbar,
    Banner,
    Stats,
    Popular,
    PopularContent,
    Partner,
    Testimoni,
    TestiContent,
    Footer
  }
}
</script>
