<template>
  <div class="china-page">
    <Header />
    <div class="china-content">
      <div class="restaurant-card">
        <div class="back-button" @click="goBack">
          <button>Back</button>
        </div>
        <h3 class="heading">China Blue By Jereme Leung  </h3>
        <img src="../image/chinablue.jpg" alt="China Blue Image" class="restaurant-image">
        <div class="restaurant-info">
          <h3>"Artful, innovative, and undeniably delicious modern Chinese fare in a stylish contemporary establishment"</h3>

          <p>The premier Chinese restaurant of Conrad Manila. Conrad Manila has partnered
             with Chinese celebrity master chef, Jereme Leung, who is responsible for
              creating the menu for the restaurant. China Blue by Jereme Leung features dishes 
              prepared using traditional Chinese cooking techniques with
               a modern approach to presentation.</p>


          <p>Indulge in meticulously crafted dim sum, hearty roasts, and other 
            regional Chinese specialities, and elevate your meal with some 
            decadent wines or refined teas from their extensive collection.</p>
          
          <div class="menu-description">Menu</div>
          <img src="../image/chinamenu.png" alt="Menu Image" class="menu-image">
          <div class="button" @click="handleBooking(3)">
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Swal from "sweetalert2";

export default {
  name: "Gallery",
  components: {
    Header,
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },

    goBack() {
      this.$router.push("/restaurants");
    },

    handleBooking(bookNum) {
      let url = "";
      if (bookNum === 1) {
        url = "https://main.wolfgangssteakhouse.ph/reservation/";
      } else if (bookNum === 2) {
        url = "https://gallerybychele.com/reservations/";
      } else if (bookNum === 3) {
        url = "https://eatdrinkhilton.com/china-blue-by-jereme-leung-conrad-manila/";
      } else if (bookNum === 4) {
        url = "https://hq.hero-cloud.com/accounts/shangrilagroup/eng/tms/booking/main/226";
      }

      Swal.fire({
        title: 'You are about to make a reservation.',
        text: "Do you want to proceed?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(url, '_blank');
        }
      });
    },
  },
};
</script>

<style scoped>
.china-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.china-content {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.restaurant-card {
  width: 90%;
  background-color: #167674;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  padding: 20px;
  margin-top: 50px;
  position: relative;
}

.restaurant-card img.restaurant-image {
  width: 80%;
  height: auto;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 130px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.back-button {
  position: absolute;
  top: 20px; /* Adjust the top position */
  left: 20px; /* Adjust the left position */
}

.back-button button {
  background-color: #54575a;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.heading {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
}

.restaurant-info {
  text-align: center;
}

.restaurant-info h3 {
  margin: 0;
  color: white;
}

.restaurant-info p {
  margin-top: 10px;
  color: white;
}

.menu-description {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
}

.menu-image {
  width: 50%;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
  margin-top: 20px;
}

.button button {
  display: inline-block;
  padding: 15px;
  background-color: #54575a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  height: 50px;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  margin-right: 10px;
}

.button button:hover {
  background-color: #44464a;
}
</style>
