<template>
    <div id="app">
      <header-component></header-component>
      
      <!-- Exciting Upcoming Events Section -->
      <section class="upcoming-events">
        <h2>Exciting Upcoming Events</h2>
        <div class="events-container">
          <event-card
            v-for="event in events"
            :key="event.id"
            :event="event"
          ></event-card>
        </div>
      </section>
      
      <!-- Choose Events by Your Interests Section -->
      <section class="events-by-interest">
        <h2>Choose events by your interests</h2>
        <div class="interests-container">
          <interest-card
            v-for="interest in interests"
            :key="interest.tag"
            :interest="interest"
            @click.native="filterEventsByInterest(interest.tag)"
          ></interest-card>
        </div>
      </section>
      
      <!-- Footer -->
      <footer>
        <p>GenXEventsSG</p>
        <p>Your go-to event platform for Gen Xers!</p>
        <!-- Add more footer content here -->
      </footer>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import HeaderComponent from './HeaderComponent.vue';
  import EventCard from './EventCard.vue';
  import InterestCard from './InterestCard.vue';
  
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      EventCard,
      InterestCard
    },
    data() {
      return {
        events: [],
        interests: [
          { tag: 'Fitness', image: 'fitness.jpg' },
          // Add more interests here
        ],
      };
    },
    created() {
      this.fetchEvents();
    },
    methods: {
      fetchEvents() {
        const eventsRef = firebase.firestore().collection('events');
        eventsRef.get().then(snapshot => {
          snapshot.forEach(doc => {
            this.events.push({ id: doc.id, ...doc.data() });
          });
        }).catch(error => {
          console.error("Error fetching events: ", error);
        });
      },
      filterEventsByInterest(tag) {
        // Logic to filter events by tag
      }
    }
  };
  </script>
  
  <style>
  /* Add styles here */
  </style>
  