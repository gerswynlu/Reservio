<template>
    <div class="gallery-page">
      <Header />
      <div class="gallery-content">
        <div class="restaurant-card">
          <h3 class="heading">Gallery by Chele</h3>
          <img src="../image/gallery-by-chele.jpg" alt="Gallery Image" class="restaurant-image">
          <div class="restaurant-info">
            <h3>"Curated local produce, Inspired by traditions"</h3>
            <p>Gallery by Chele, formerly Gallery VASK, is a modern restaurant that uses 
                local ingredients to create a dining experience that is rooted in 
                Filipino heritage but not bound by it. It takes its roots from the world-class standards of fine food and service that 
                its previous degustation-only Gallery VASK was known for.</p>
    
            <p>Inspired by the Philippines and the Southeast Asian region, the European Chef Chele Gonzalez 
                collaborates with the Filipino Chef Carlos Villaflor and the rest of Team Gallery to welcome 
                all lovers of good food (and good times!) at Gallery by Chele. The restaurant’s interiors, conceptualized by 
                partner-owner architect Carlo Calma, feature warm wood textures and furniture designed 
                by Kenneth Cobonpue to create an organic and cozy setting. </p>
            
            <div class="menu-description">Menu</div>
            <img src="../image/gallerymenu.jpg" alt="Menu Image" class="menu-image">
            <div class="button" @click="handleBooking(2)">
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
  .gallery-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  
  .gallery-content {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  
  .restaurant-card {
    width: 90%;
    background-color: #a16e10;
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
  