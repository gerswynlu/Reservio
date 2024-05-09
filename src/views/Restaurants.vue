<template>
  <div class="header-container">
    <Header/>
    

    <div class="top-restaurants">
      <h2>Partner Restaurants</h2>
      <div class="restaurant-cards">
        <!-- Restaurant Card 1 -->
        <router-link to="/wolfgang">
          <div class="restaurant-card">
            <img src="../image/wolfgang.jpeg" alt="Wolfgang Image">
            <div class="restaurant-info">
              <h3>Wolfgang Steakhouse</h3>
              <p>Just like a well-cooked steak, the restaurant boasts of masculine and old-world charm. It incorporates the same design elements of original locations in New York, such as a long, mahogany solid wood bar, wooden planked floors, wood wainscoting, alabaster chandeliers and mosaic tile ceiling reminiscent of the original Gustavino tile ceiling of the first location in New York.</p>
            </div>
            
          </div>
        </router-link>
        <!-- Restaurant Card 2 -->
        <router-link to="/gallery">
        <div class="restaurant-card">
          <img src="../image/gallery-by-chele.jpg" alt="Gallery Image">
          <div class="restaurant-info">
            <h3>Gallery by Chele</h3>
            <p>Gallery by Chele, formerly Gallery VASK, is a modern restaurant that uses local ingredients to create a dining experience that is rooted in Filipino heritage but not bound by it.</p>
            <p> It takes its roots from the world-class standards of fine food and service that its previous degustation-only Gallery VASK was known for.</p>
          </div>
          
        </div>
      </router-link>
        <!-- Restaurant Card 3 -->
        <div class="restocard">
          <div class="restaurant-card">
          <img src="../image/chinablue.jpg" alt="China Blue Image">
          <div class="restaurant-info">
            <h3>China Blue by Jereme Leung</h3>
            <p>The premier Chinese restaurant of Conrad Manila. Conrad Manila has partnered with Chinese celebrity master chef, Jereme Leung, who is responsible for creating the menu for the restaurant. China Blue by Jereme Leung features dishes prepared using traditional Chinese cooking techniques with a modern approach to presentation.</p>
          </div>
       
        </div>
        </div>
        <!-- Restaurant Card 4 -->
        <div class="restaurant-card">
          <img src="../image/senju.jpg" alt="Senju Image">
          <div class="restaurant-info">
            <h3>Senju</h3>
            <p>Artistically created and presented by a team of talented chefs that aim to bring out the real flavours of Japan, Senju’s gourmet creations will have you spellbound. The dishes use fresh, quality ingredients and are prepared in a cooking style that preserves each ingredient’s flavour and balances overall taste.</p>
          </div>
      
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
 .restocard{
  flex-wrap: wrap;
 }

 button { /* Home, restaurants button */
  padding: 10px 20px; /* Adjust padding as needed */
  margin: 0 10px; /* Adjust margin as needed */
  background-color: #dde1e6; /* Button background color */
  color: rgb(95, 62, 62); /* Text color */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Cursor style */
  font-size: 16px; /* Font size */
}

 .header-container {
   position: absolute;
   top: 0;
   left: 0;
   width: 100vw; /* Make the container full width of viewport */
   height: 100vh; /* Make the container full height of viewport */
   z-index: 1; /* Set a higher z-index to ensure it's displayed on top */
   overflow-y: auto;
 }
 
 .header-image {
   position: relative; /* Positioning context for the image */
   height: 60%; /* Adjust as needed */
   width: 100%; /* Make the image container fill the width of its parent */
   overflow: hidden; /* Ensures the image does not overflow the div */
   z-index: 1; /* Set a higher z-index to ensure it's displayed on top */
 }
 
 .header-image img {
   width: 100%; /* Make the image fill the width of the container */
   height: 100%; /* Make the image fill the height of the container */
   object-fit: cover; /* Make the image cover the entire container */
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
   z-index: 2; /* Set a higher z-index to ensure it's displayed on top of other content */
 }
 
 nav ul {
   list-style-type: none;
   display: flex;
   justify-content: center;
   padding: 0;
   margin: 0;
 }
 
 nav ul li {
   margin: 0 20px; /* Adjust as needed */
 }
 
 nav ul li a {
  text-decoration: none;
  color: #ffffff; /* Change the default link color to white */
  font-size: 28px; /* Increase font size further */
  font-weight: 700; /* Make the font bolder */
  font-family: "Garamond", serif; /* Use a fancy font */
}

nav ul li a:hover {
  color: #ffffff; /* Change color on hover */
  text-shadow: 0 0 10px #ededed; /* Add a glowing effect */
  font-size: 30px; /* Increase font size on hover */
  outline: none; /* Remove the outline */
}

 
 .top-restaurants {
  position: relative;
  padding: 20px;
  text-align: center; /* Center the text */
  font-family: "Garamond", serif; /* Use a fancy font */
  font-weight: bolder; /* Make the font bold */
  font-size: x-large;
}
 
 .restaurant-cards {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 20px;
   font-size: small;
 }
 
 .restaurant-card {
  color: black;
   width: 300px;
   background-color: #f4f4f4;
   border-radius: 10px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   overflow: hidden;
   display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
 }
 
 .restaurant-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
 
 .restaurant-info {
   padding: 10px;
 }
 
 .restaurant-info h3 {
   margin: 0;
 }
 
 .restaurant-info p {
   margin-top: 10px;
 }
 
 .button button {
  display: inline-block; /* Change display to inline-block */
  padding: 15px; /* Adjust padding as needed */
  background-color: #54575a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  height: 50px; /* Set a fixed height for all buttons */
  line-height: 20px; /* Adjust line height for proper text alignment */
  text-align: center; /* Center text within the button */
  text-decoration: none; /* Remove default underline */
  margin-right: 10px; /* Add margin between buttons */
}

.button button:hover {
  background-color: #44464a; /* Darken color on hover */
}

.restaurant-card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.restaurant-card:hover {
  transform: scale(1.05);
}

 </style>
