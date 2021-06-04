<template>
  <div class="home">
    <NavbarAlter />
    <Details />
    <Footer />
  </div>
</template>

<script>
import NavbarAlter from "@/components/NavbarAlter.vue";
import Details from "@/components/checkout/Details.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    NavbarAlter,
    Details,
    Footer
  }
}
</script>
