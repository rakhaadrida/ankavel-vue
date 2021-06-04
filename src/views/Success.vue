<template>
  <div class="home">
    <NavbarAlter />
    <main>
      <div class="section-success d-flex align-items-center">
        <div class="col text-center">
          <img src="images/icons/ic_mail_2.png" alt="">
          <h1>Yay! Success</h1>
          <p>
            We sent you email for this trip instruction 
            <br>
            please read it well
          </p>
          <a href="" class="btn btn-home-page mt-3 px-5">
            Home Page
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavbarAlter from "@/components/NavbarAlter.vue";

export default {
  name: 'Home',
  components: {
    NavbarAlter
  }
}
</script>
