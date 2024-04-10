<template>
    <div class="activity-detail-card">
      <h2 class="activity-title">{{ activity.title }}</h2>
      <p class="activity-date">{{ activity.date }}</p>
      <p class="activity-description">{{ activity.description }}</p>
      <p class="activity-location-title">Location:</p>
      <p class="activity-location">{{ activity.location }}</p>
      <button class="sign-up-button" @click="onSignUp">Go to Sign up Page</button>
    </div>
  </template>
  
  <script>

import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'ActivityDetailCard',
  props: {
    activityId: String
  },
  data() {
    return {
      activity: null,
      loading: false
    }
  },
  mounted() {
    this.fetchActivityDetails();
  },
  methods: {
    async onSignUp() {
      if (!this.activity || !this.activity.signUpLink) {
        alert("Sign up link is not available.");
        return;
      }

      this.loading = true;
      try {
        // Assuming signUpLink is the field in the document where the URL is stored
        const signUpUrl = this.activity.signUpLink;

        // Redirect to the sign-up URL
        window.location.href = signUpUrl;
      } catch (error) {
        console.error("Failed to navigate to the sign-up page", error);
        alert("There was an error navigating to the sign-up page.");
      } finally {
        this.loading = false;
      }
    },
    async fetchActivityDetails() {
      this.loading = true;
      const db = firebase.firestore();
      const activityRef = db.collection('activities').doc(this.activityId);
      
      try {
        const doc = await activityRef.get();
        if (doc.exists) {
          this.activity = doc.data();
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error("Error fetching activity details: ", error);
      } finally {
        this.loading = false;
      }
    }
  }
}

</script>

<style>
@import 'GenXEvents/src/assets/activity-detail-card.css';
</style>