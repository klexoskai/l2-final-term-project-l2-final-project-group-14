<template>
    <h2 id="Explore">Just For You</h2>
    <div class="recommendation-list">
        <div v-for="recommendation in recommendations" :key="recommendation['Activity ID']" class="recommendation-item">
          <Card @click="accessPage(recommendation)" class="custom-card">
            <template #header>
              <img alt="activity image" :src = 'recommendation.Image'/>
            </template>
            <template #title>
              <h3>{{ recommendation.Type }}</h3>
            </template>
            <template #content>
              <p>{{ recommendation.Date }}</p>
              <p>{{ recommendation.Time }}</p>
          </template>
          </Card>
        </div>
    </div>
</template>

<script>
import Card from 'primevue/card';
import firebaseTools from '../firebase.js';
import { collection, getDocs } from 'firebase/firestore';
const db = firebaseTools.db;

export default {
    components: {
      Card
    },
    data() {
      return {
        recommendations: null
      };
    },
    mounted() {
      this.retrieveData();
    },
    methods:{
      // get data of activites from database
      async retrieveData() {
        const activityCollection = collection(db, 'activities');
        const querySnapshot = await getDocs(activityCollection);
        this.recommendations = querySnapshot.docs.map(doc => doc.data());
      },
      // to access page upon clicking the activity
      accessPage(recommendation) {
        console.log("Directed to the activity page");
        this.$router.push({ 
          name: 'Activity Page', 
          query: {
            id: recommendation["Activity ID"]
          } 
        })
      }
    }
}
</script>

<style>
@import '../assets/ExplorePage.css';
</style>