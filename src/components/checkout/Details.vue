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
                <li class="breadcrumb-item">Details</li>
                <li class="breadcrumb-item active">Checkout</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 pl-lg-0">
            <div class="card card-details">
              <h1>Who is Going?</h1>
              <p>Trip to {{ packageDetails.title }}, {{ packageDetails.location }}</p>
              <div class="attendee">
                <table class="table table-responsive-sm text-center">
                  <thead>
                    <tr>
                      <td>Picture</td>
                      <td>Name</td>
                      <td>Nationality</td>
                      <td>VISA</td>
                      <td>Passport</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="member in listMember" :key="member.username">
                      <td>
                        <img :src="'https://ui-avatars.com/api/?name='+member.username" 
                          height="60px" class="rounded-circle" />
                      </td>
                      <td class="align-middle">{{ member.username }}</td>
                      <td class="align-middle">{{ member.nationality }}</td>
                      <td class="align-middle">{{ member.is_visa == 0 ? 'N/A' : '30 Days' }}</td>
                      <td class="align-middle">{{ member.doe_passport }}</td>
                      <td class="align-middle">
                        <img @click="removeItem(member.username)" src="images/icons/ic_remove.png" height="20px" />
                      </td>
                    </tr>
                    <!-- <tr>
                      <td colspan=6 class="text-center">No Visitor Added</td>
                    </tr> -->
                  </tbody>
                </table>
              </div>
              <div class="member mt-3">
                <h2>Add Member</h2>
                <form class="form-inline" method="POST" action="" >
                  <label for="username" class="sr-only" required>Name</label>
                  <input 
                    type="text" style="width: 160px"
                    class="form-control mb-2 mr-sm-2" 
                    id="username"
                    v-model="dataMember.username"
                    placeholder="Username" 
                  />

                  <label for="is_visa" class="sr-only">VISA</label>
                  <select id="is_visa" required class="custom-select mb-2 mr-sm-2" v-model="dataMember.is_visa">
                    <option value="VISA" selected>VISA</option>
                    <option value="0">N/A</option>
                    <option value="1">30 Days</option>
                  </select>

                  <label for="nationality" class="sr-only" style="width: 50px" required>Nat</label>
                  <input 
                    type="text" style="width: 55px"
                    class="form-control mb-2 mr-sm-2" 
                    id="nationality"
                    v-model="dataMember.nationality"
                    placeholder="Nat" 
                  />

                  <label for="doe_passport" class="sr-only" required>DOE Passport</label>
                  <div class="input-group mb-2 mr-sm-2">
                    <input 
                      type="text" 
                      class="form-control datepicker" 
                      id="doe_passport"
                      v-model="dataMember.doe_passport" 
                      placeholder="DOE Passport"
                    >
                  </div>

                  <a @click="addMember()" href="#" class="btn btn-add-now mb-2 px-4">
                    Add Now
                  </a>
                </form>
                <h3 class="mt-2 mb-0">Note</h3>
                <p class="disclaimer mb-0">
                  You only can add member that already registered in Ankavel
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-details card-right">
              <h2>Checkout Information</h2>
              <table class="trip-information">
                <tr>
                  <th width="50%">Members</th>
                  <td width=:50% class="text-right">{{ listMember.length }} Persons</td>
                </tr>
                <tr>
                  <th width="50%">Additional VISA</th>
                  <td width=:50% class="text-right">${{ biayaVisa }}.00</td>
                </tr>
                <tr>
                  <th width="50%">Trip Price</th>
                  <td width=:50% class="text-right">${{ packageDetails.price }} / Person</td>
                </tr>
                <tr>
                  <th width="50%">Total Price</th>
                  <td width=:50% class="text-right">${{ totalHarga }}.00</td>
                </tr>
                <tr>
                  <th width="50%">Total Price + VISA</th>
                  <td width=:50% class="text-right text-total">
                    <span class="text-blue">${{ totalBiaya }}.00</span>
                  </td>
                </tr>
              </table>
              <hr>
              <h2>Payment Instructions</h2>
              <p class="payment-instructions">
                Please complete your payment to one of these account
              </p>
              <div class="bank">
                <div class="bank-item pb-3">
                  <img src="images/icons/ic_bank_2.png" class="bank-image">
                  <div class="description">
                    <h3>PT ANKAVEL TRIP</h3>
                    <p>
                      Bank Mandiri
                      <br>
                      1433-7685-09723
                    </p>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <div class="bank-item pb-3">
                  <img src="images/icons/ic_bank_2.png" class="bank-image">
                  <div class="description">
                    <h3>PT ANKAVEL TRIP</h3>
                    <p>
                      Bank HSBC
                      <br>
                      3390-8765-18744
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="join-container">
              <!-- <router-link to="/success"> -->
                <a @click="checkout()" href="#" class="btn btn-block btn-join-now mt-5 py-2">I HAVE MADE PAYMENT</a>
              <!-- </router-link> -->
            </div>
            <div class="text-center mt-3">
              <a href="" class="text-muted">
                CANCEL BOOKING
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
// import $ from "jquery";

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

export default {
  name: "Checkout",
  data() {
    return {
      packageDetails: [],
      listMember: [],
      dataMember: {
        username: "",
        nationality: "",
        is_visa: "",
        doe_passport: "" 
      },
      tanggal: date
    };
  },
  methods: {
    addMember() {
      var memberStored = {
        "username": this.dataMember.username,
        "nationality": this.dataMember.nationality,
        "is_visa": this.dataMember.is_visa,
        "doe_passport": this.dataMember.doe_passport
      }

      if(this.dataMember.username != '') {
        this.listMember.push(memberStored);
        const parsed = JSON.stringify(this.listMember);
        localStorage.setItem('listMember', parsed);
      }
    },
    removeItem(idx) {
      let listMemberStorage = JSON.parse(localStorage.getItem("listMember"));
      let itemlistMemberStorage = listMemberStorage.map(itemlistMemberStorage => itemlistMemberStorage.username);
      let index = itemlistMemberStorage.findIndex(id => id == idx)
      this.listMember.splice(index, 1);

      const parsed = JSON.stringify(this.listMember);
      localStorage.setItem("listMember", parsed);
    },
    checkout() {
      let usernames = this.listMember.map(function(memberx) {
        return memberx.username
      });
      let nationalitys = this.listMember.map(function(memberx) {
        return memberx.nationality
      });
      let is_visas = this.listMember.map(function(memberx) {
        return memberx.is_visa
      });
      let doe_passports = this.listMember.map(function(memberx) {
        return memberx.doe_passport
      });

      let checkoutData = {
        "travel_packages_id": this.packageDetails.id,
        "users_id": "1",
        "additional_visa": this.biayaVisa,
        "total": this.totalHarga,
        "status": "PENDING",
        "username": usernames,
        "nationality": nationalitys,
        "is_visa": is_visas,
        "doe_passport": doe_passports,
      };

      axios
      .post("http://ankavel.test/public/api/checkout", checkoutData)
      .then(() => this.$router.push("../success"))

      .catch(err => console.log(err));
    }
  },
  mounted() {
    if (localStorage.getItem('listMember')) {
      try {
        this.listMember = JSON.parse(localStorage.getItem('listMember'));
      } catch(e) {
        localStorage.removeItem('listMember');
      }
    }
    axios
      .get("http://ankavel.test/public/api/packages", {
        params: {
          id: this.$route.params.id
        }
      })
      .then((res) => (this.packageDetails = res.data.data))
      .catch((err) => console.log(err));

    // $(document).ready(function() {
    //   $('.datepicker').datepicker({
    //     format: 'yyyy-mm-dd',
    //     uiLibrary: 'bootstrap4',
    //     icons: {
    //       rightIcon: '<img src="images/icons/ic_calendar.png" />'
    //     }
    //   });
    // });
  },
  computed: {
    totalHarga() {
      return this.listMember.length * this.packageDetails.price;
    },
    biayaVisa() {
      return this.listMember.reduce(function(items, data) {
        return items + (100 - (data.is_visa * 100));
      }, 0);
    },
    totalBiaya() {
      return (this.listMember.length * this.packageDetails.price) + this.biayaVisa;
    }
  }
}
</script>
