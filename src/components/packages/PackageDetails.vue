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
              <h1>Labuan Bajo</h1>
              <p>NTB, Indonesia</p>
              <div class="gallery">
                <div class="xzoom-container">
                  <img 
                    src="images/bajo_details/bajo-1.png" 
                    alt="Details Bajo" 
                    class="xzoom"
                    id="xzoom-default"
                    xoriginal=""
                  />
                  <div class="xzoom-thumbs">
                    <a href="">
                      <img 
                        src="images/bajo_details/bajo-2.png" 
                        alt="Details Bajo"
                        class="xzoom-gallery"
                        width="128"
                        xpreview=""
                      />
                    </a>
                    <a href="">
                      <img 
                        src="images/bajo_details/bajo-3.png" 
                        alt="Details Bajo"
                        class="xzoom-gallery"
                        width="128"
                        xpreview=""
                      />
                    </a>
                    <a href="">
                      <img 
                        src="images/bajo_details/bajo-4.png" 
                        alt="Details Bajo"
                        class="xzoom-gallery"
                        width="128"
                        xpreview=""
                      />
                    </a>
                    <a href="">
                      <img 
                        src="images/bajo_details/bajo-5.png" 
                        alt="Details Bajo"
                        class="xzoom-gallery"
                        width="128"
                        xpreview=""
                      />
                    </a>
                    <a href="">
                      <img 
                        src="images/bajo_details/bajo-6.png" 
                        alt="Details Bajo"
                        class="xzoom-gallery"
                        width="128"
                        xpreview=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <h2>About this Place</h2>
              <p>
                Lokasi Wisata Terbaik
              </p>
              <div class="features row"> 
                <div class="col-md-4">
                    <img src="images/icons/ic_event.png" alt="" class="features-image">
                    <div class="description">
                      <h3>Featured Events</h3>
                      <p>Tari Kecak</p>
                    </div>
                </div>
                <div class="col-md-4 border-left">
                  <div class="description">
                    <img src="images/icons/ic_language.png" alt="" class="features-image">
                    <div class="description">
                      <h3>Language</h3>
                      <p>Indonesia</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 border-left">
                  <div class="description">
                    <img src="images/icons/ic_foods.png" alt="" class="features-image">
                    <div class="description">
                      <h3>Foods</h3>
                      <p>Local</p>
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
                    10 Jun 2021
                  </td>
                </tr>
                <tr>
                  <th width="50%">Duration</th>
                  <td width=:50% class="text-right">3 Days</td>
                </tr>
                <tr>
                  <th width="50%">Type</th>
                  <td width=:50% class="text-right">Business</td>
                </tr>
                <tr>
                  <th width="50%">Price</th>
                  <td width=:50% class="text-right">$300 / Person</td>
                </tr>
              </table>
            </div>
            <div class="join-container">
              <form action="" method="post">
                <router-link to="/checkout" class="btn btn-block btn-join-now mt-5 py-2" type="submit">
                  JOIN NOW
                </router-link>
              </form>
              <!-- <a href="" class="btn btn-block btn-join-now mt-5 py-2">
                JOIN NOW
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>