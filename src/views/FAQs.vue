<template>
  <div class="header-container">
    <Header/>

    <div class="contact-container">
      <div class="card">  
        <h2>What is Reservio?</h2>
        <img src="/logo.png" alt="Reservio Logo" class="reservio-logo">
        <div class="contact-info">
          <div class="mission-vision">
            <p><b>Mission:</b></p>
            <p>"At Reservio, our mission is to simplify the dining experience by providing a seamless online reservation platform that connects diners directly to their favorite restaurants' reservation forms. We strive to make dining out effortless and convenient, empowering customers to easily search for and book tables at their preferred restaurants."</p>
            <p><b>Vision:</b></p>
            <p>"Our vision at Reservio is to become the go-to destination for diners seeking hassle-free restaurant reservations. We aim to revolutionize the way people dine out by offering a comprehensive platform that features all partnered restaurants, making it effortless for customers to find and book tables at their favorite eateries. By streamlining the reservation process, we envision a future where dining out is always a delightful experience."</p>
          </div>

          <!-- Add space above this paragraph -->
          <p style="margin-top: 20px;"><b>We would like to thank our sponsors:</b></p> 

          <!-- First Sponsor Image with Hyperlink -->
          <a href="https://www.shangri-la.com/">
            <img src="../image/shang.png" alt="Sponsor Image" class="sponsor-image">
          </a>
          <!-- Second Sponsor Image with Hyperlink -->
          <a href="https://www.hilton.com/en/hotels/mnlmbci-conrad-manila/">
            <img src="../image/conrad.png" alt="Another Sponsor Image" class="sponsor-image">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name:'Contact',
  components:{
    Header
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
.button {
  text-align: center;
  margin-top: 20px;
}

.button button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #54575a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.contact-container {
  margin-top: 20px;
  text-align: center;
  font-family: "Garamond", serif;
  font-size: x-large;
}

.card {
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 100px;
  margin-bottom: 100px;
}

.reservio-logo {
  display: block;
  margin: 20px auto; /* Adjust the margin as needed */
  max-width: 200px; /* Adjust the maximum width of the logo */
}

/* Styling for Sponsor Image */
.sponsor-image {
  display: inline-block;
  margin: 20px; /* Adjust the margin as needed */
  max-width: 100px; /* Adjust the maximum width of the sponsor image */
  cursor: pointer; /* Change cursor to pointer on hover */
}

.contact-info {
  margin-top: 20px;
}

.mission-vision {
  text-align:center;
}

.contact-info p {
  margin: 5px 0;
}

.header-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow-y: auto;
}

.header-image {
  position: relative;
  height: 60%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
}

.header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  z-index: 2;
}

nav ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 0 20px;
}

nav ul li a {
  text-decoration: none;
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  font-family: "Garamond", serif;
}

nav ul li a:hover {
  color: #ffffff;
  text-shadow: 0 0 10px #bfff00;
  font-size: 30px;
  outline: none;
}
</style>
