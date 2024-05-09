<template>
  <div class="wolfgang-page">
    <Header />
    <div class="wolfgang-content">
      <div class="restaurant-card">
        <h3 class="heading">Wolfgang Steakhouse</h3>
        <img src="../image/wolfgang.jpeg" alt="Wolfgang Image" class="restaurant-image">
        <div class="restaurant-info">
          <h3>THE BEST STEAKHOUSE IN MANILA</h3>
          <p>
            Just like a well-cooked steak, the restaurant boasts of masculine and old-world charm. It incorporates
            the same design elements of original locations in New York, such as a long, mahogany solid wood bar,
            wooden planked floors, wood wainscoting, alabaster chandeliers and mosaic tile ceiling reminiscent of the
            original Gustavino tile ceiling of the first location in New York.
          </p>
          <p>
            Wolfgang’s Steakhouse’s menu has something to please every palate with their famous mouth-watering steaks, and other excellent entree selections including lamb, sashimi grade tuna, fresh Norwegian salmon, Maine lobsters, and more. Wolfgang’s Steakhouse classic side offerings such as Creamed Spinach and German Potatoes complement any meal, and tempting appetizers such as Shrimp and Lobster Cocktails, Fresh Oysters on the Half Shell, Sizzling Canadian Bacon, and crisp, fresh salads are the perfect prelude to any main course.
          </p>
          <div class="menu-description">Menu</div>
          <img src="../image/wolfgangmenu.jpg" alt="Menu Image" class="menu-image">
          <div class="button" @click="handleBooking(1)">
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
  name: "Wolfgang",
  components: {
    Header,
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
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
.wolfgang-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.wolfgang-content {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.restaurant-card {
  width: 90%;
  background-color: #800000;
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
