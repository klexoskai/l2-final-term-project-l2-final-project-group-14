<template>
    <div class="rating-component">
      <div class="interactive-rating-input">
        <!-- Render star icons for rating -->
        <img
          v-for="star in 5"
          :key="star"
          :src="star <= currentRating ? require('@/assets/star-filled.png') : require('@/assets/star-empty.png')"
          class="star"
          @click="setCurrentRating(star)"
          alt="Rating star"
        />
      </div>
      
      <button class="submit-rating" @click="submitRating">Submit Rating</button>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  
  export default {
    name: 'RatingComponent',
    props: {
      activityId: String,
    },
    data() {
      return {
        currentRating: 0, // Temporary rating before submitting
      };
    },
    methods: {
      setCurrentRating(rating) {
        this.currentRating = rating;
      },
      async submitRating() {
        if (!this.activityId) {
          console.error('Activity ID is required.');
          return;
        }
        if (this.currentRating === 0) {
          alert('Please select a rating.');
          return;
        }
        
        try {
          const db = firebase.firestore();
          // Example path: 'activities/{activityId}/ratings/{userId}'
          
          const ratingRef = db.collection('activities').doc(this.activityId).collection('ratings').doc(firebase.auth().currentUser.uid);
          
          await ratingRef.set({
            rating: this.currentRating,
            userId: firebase.auth().currentUser.uid,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
  
          alert('Rating submitted successfully!');
          this.currentRating = 0; // Reset after submission
        } catch (error) {
          console.error('Error submitting rating:', error);
          alert('Error submitting rating. Please try again later.');
        }
      },
    },
  }
  </script>
  
  <style scoped>
  @import './RatingComponent.css';
  </style>
  