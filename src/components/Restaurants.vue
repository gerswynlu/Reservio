<template>
    <div class="restaurant-card">
      <button class="book-now-button">Book Now</button>
      <div class="restaurant-info">
        <h2 class="restaurant-name">{{ restaurant.name }}</h2>
        <p class="restaurant-description">{{ restaurant.description }}</p>
        <p class="restaurant-hours">{{ restaurant.hours }}</p>
        <p class="restaurant-cuisine">{{ restaurant.cuisine }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        restaurant: {
        }
    }
}
  }