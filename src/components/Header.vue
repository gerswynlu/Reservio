<template>
  <div class="header-header">
    <div>
      <!-- Make the logo clickable -->
      <a href="/">
        <img src="/logo.png" class="logo"/>
      </a>
    </div>
    <nav>
      <button @click="goTo('/')">Home</button>
      <button @click="goTo('/restaurants')">Restaurants</button>
      <button @click="goTo('/faq')">FAQs</button>
      <button @click="goTo('/contact')">Contact Us</button>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
.header-header {
  background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../src/image/1.jpg');
  color: #fff; /* Text color */
  padding: 10px 50px; /* Padding */
  height: 140px;
  display: flex; 
  align-items: center;
  justify-content: space-between;
}

button:hover {
  background-color: #bababa; 
  color: #000000; 
 
  transform: scale(1.1);

}

button { /* Home, restaurants button */
  padding: 10px 20px; /* Adjust padding as needed */
  margin: 0 20px; /* Adjust margin as needed */
  background-color: #535353; /* Button background color */
  color: rgb(95, 62, 62); /* Text color */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Cursor style */
  font-size: 16px; /* Font size */
}

.logo {
  width: 180px;
  height: auto;
  margin-top: 7px;
  margin-left: 50px;
 
}

nav {
  display: flex; /* Use flexbox for layout */
  margin-right: 70px;
}

nav button {
  color: #fff; /* Button text color */
  text-decoration: none; /* Remove underline */
   /* Add spacing between links */
}
</style>
