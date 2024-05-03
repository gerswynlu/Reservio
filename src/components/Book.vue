<template>
    <div>
       <h2>Book a Reservation</h2>
       <div>
         <label for="name">Name:</label>
         <input type="text" id="name" v-model="booking.name" required>
       </div>
       <div>
         <label for="email">Email:</label>
         <input type="email" id="email" v-model="booking.email" required>
       </div>
       <div>
         <label for="contact">Contact Number:</label>
         <input type="tel" id="contact" v-model="booking.contact" required>
       </div>
       <div>
         <label for="people">Number of People:</label>
         <input type="number" id="people" v-model="booking.people" required>
       </div>
       <div>
         <label for="date">Date:</label>
         <input type="date" id="date" v-model="booking.date" required>
       </div>
       <div>
         <label for="time">Time:</label>
         <input type="time" id="time" v-model="booking.time" required>
       </div>
       <button @click="submitBooking">Book Now</button>
    </div>
   </template>
   
   <script>
   export default {
    data() {
       return {
         booking: {
           name: '',
           email: '',
           contact: '',
           people: '',
           date: '',
           time: '',
         },
       };
    },
    methods: {
       submitBooking() {
         if (this.booking.name && this.booking.email && this.booking.contact && this.booking.people && this.booking.date && this.booking.time) {
           alert(Booking submitted for ${this.booking.name} on ${this.booking.date} at ${this.booking.time});
           // Here you would typically send the booking data to a server
         } else {
           alert('Please fill out all fields.');
         }
       },
    },
   };
   </script>