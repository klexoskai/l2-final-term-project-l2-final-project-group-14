<template>
    <button class="favourite-button" @click="toggleFavourite">
      <img :src="isFavourited ? './src/assets/IconFavourited.png' : './src/assets/IconToFavourite.png'" alt="Favourite" />
      {{ isFavourited ? 'Remove from Favourites' : 'Add to Favourite' }}
    </button>
  </template>
  
  <script>
  // import firebase from 'firebase/app';
  // import 'firebase/firestore';
  
  export default {
    name: 'FavouriteButton',
    // props: {
    //   activityId: String
    // },
    data() {
      return {
        isFavourited: true
      };
    },
    mounted() {
      this.checkFavouriteStatus();
    },
    methods: {
      async toggleFavourite() {
        // const db = firebase.firestore();
        // const favouriteRef = db.collection('favourites').doc(this.eventId);
  
        // Check current status and toggle
        // const doc = await favouriteRef.get();
        if (this.isFavourited == false) {
        //if (doc.exists) {
        //   // It's already favourited, remove it
        //   await favouriteRef.delete();
          this.isFavourited = true;
        } else {
          // It's not a favourite yet, add it
          // await favouriteRef.set({ eventId: this.eventId, userId: firebase.auth().currentUser.uid });
          this.isFavourited = false;
        }
      },
      async checkFavouriteStatus() {
        return false;
        // const db = firebase.firestore();
        // const favouriteRef = db.collection('favourites').doc(this.eventId);
        // const doc = await favouriteRef.get();
        // this.isFavourited = doc.exists;
      }
    }
  }
  </script>

<style>
.favourite-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #ffcc00;
    border: none;
    cursor: pointer;
    padding: 8px 16px;
    transition: background-color 0.3s, transform 0.1s;
    font-size: 1rem;
    color: #333;
    font-weight: bold;
  }
  
  .favourite-button img {
    width: 24px;
    margin-right: 8px;
  }
  
  .favourite-button:hover {
    background-color: #ffc400;
  }
  
  .favourite-button:active {
    transform: scale(0.96);
  }


</style>