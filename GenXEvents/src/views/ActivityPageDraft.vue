<template>
    <div v-if="activity">
        <h1>{{ activity.Type }}</h1>
        <img style="width: 50%;" alt="activity image" :src = "getImage(this.id)"/>
        <p>Upcoming Date: {{ activity.DateTime }}</p>
        <p>{{ activity.Description }}</p>
        <p>Location: {{ activity.Location }}</p>
        <h4>Other Upcoming Dates</h4>
        <p>No other upcoming dates.</p>
    </div>
    <div v-else>
        <h1>Activity not found</h1>
    </div>
</template>

<script>
import firebaseTools from '../firebase.js';
import { collection, getDoc, doc } from 'firebase/firestore';
const db = firebaseTools.db;

export default {
    name: 'Activity Page',
    data() {
        return {
            activity: null,
            id: null
        }
    },
    mounted() {
        this.fetchActivity();
    },
    methods: {
        async fetchActivity() {
            try {
                const activityId = this.$route.query.id;
                console.log(activityId);
                const activitiesCollection = collection(db, 'activities');
                const docRef = doc(activitiesCollection, activityId);
                const activityDoc = await getDoc(docRef);
                console.log(activityDoc.data());
                if (activityDoc) {
                    this.activity = activityDoc.data();
                    this.id = activityId;
                } else {
                    console.error('Activity not found');
                }
            } catch (error) {
                console.error('Error fetching activity:', error);
            }
        },

        getImage(id) {
            return `https://nus-392633763.imgix.net/img_${id}.jpeg`;
        }
    }
}
</script>

<style>
</style>