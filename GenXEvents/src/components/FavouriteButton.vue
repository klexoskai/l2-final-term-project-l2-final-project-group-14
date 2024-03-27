<template>
    <button class="favourite-button" @click="toggleFavourite">
      <img :src="isFavourited ? 'IconFavourited.png' : 'IconToFavourite.png'" alt="Favourite" />
      {{ isFavourited ? 'Remove from Favourites' : 'Add to Favourite' }}
    </button>
  </template>
  
  <script>
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  
  export default {
    name: 'FavouriteButton',
    props: {
      eventId: String
    },
    data() {
      return {
        isFavourited: false
      };
    },
    mounted() {
      this.checkFavouriteStatus();
    },
    methods: {
      async toggleFavourite() {
        const db = firebase.firestore();
        const favouriteRef = db.collection('favourites').doc(this.eventId);
  
        // Check current status and toggle
        const doc = await favouriteRef.get();
        if (doc.exists) {
          // It's already favourited, remove it
          await favouriteRef.delete();
          this.isFavourited = false;
        } else {
          // It's not a favourite yet, add it
          await favouriteRef.set({ eventId: this.eventId, userId: firebase.auth().currentUser.uid });
          this.isFavourited = true;
        }
      },
      async checkFavouriteStatus() {
        const db = firebase.firestore();
        const favouriteRef = db.collection('favourites').doc(this.eventId);
        const doc = await favouriteRef.get();
        this.isFavourited = doc.exists;
      }
    }
  }
  </script>

<style>
@import '../assets/FavouriteButton.css';
</style>