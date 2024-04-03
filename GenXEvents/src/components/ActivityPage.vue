<template>
    
        <div class= "content-wrapper">
            <div class="activity-details">
            <div class="left-column">
                <div class="header">
                    <h2>{{ sessionTitle }}</h2>
                    <div class="rating">
                        <p>Rating: {{ sessionRating }}</p>
                    </div>
                </div>
  
                <div class="session-details">
                    <p>Upcoming Date: {{ upcomingDate }}, {{ dateOfWeek }}</p>
                    <p>Time: {{ happeningTime }}</p>
                    <div class="activity-images">
                        <!-- <img :src="activityImageUrl" alt="Activity Image1" /> -->
                        <img src="@/assets/sample-activity-img.jpg" alt="Activity Image" />
                    </div>
                        <p>{{ sessionDescription }}</p>
                        <div class="location">
                            <i class="pi pi-map-marker"></i>
                            <p>Location: {{ location }}, {{ locationEstate }}</p>
                        </div>

                        <div class="other-dates">
                            <h3>Other Upcoming Dates</h3>
                            <p v-for="(date, index) in otherDates" :key="index">{{ date }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="right-column">
                <div class="actions">
                    <Button label="Add to Favourite" icon="pi pi-heart" class="p-button-warning"></Button>
                    <Button label="Go to Sign up Page" class="p-button-success signup-button"></Button>
                </div>
            <div class="comments">
                <h3>Rate this activity and leave a comment</h3>
                <CommentsForm />
            </div>
            <div class="user-comments">
                <h3>Users’ rating and comments</h3>
                <div class="comment">
                    <CommentsSection />
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Rating from 'primevue/rating';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import CommentsForm from './CommentsForm.vue';
import CommentsSection from './CommentsSection.vue';
import FavouriteButton from './FavouriteButton.vue';
import ToggleButton from 'primevue/togglebutton';
import { activitiesCollection } from '../firebase';
import { db } from '../firebase'; 
import { getDocs, doc } from "firebase/firestore";

  
// const activitiesRef = setDoc(); // Reference to the "activities" collection
  
  export default {
    components: {
      Rating,
      Button,
      Textarea,
      CommentsForm,
      CommentsSection,
      FavouriteButton,
      ToggleButton
    },
    setup() {
      
    // Define reactive variables for your data
    const sessionTitle = ref('Dino Origami Session');
    const sessionRating = ref(4.2);
    const upcomingDate = ref('23rd March, 4pm');
    const dateOfWeek = ref('Monday');
    const happeningTime = ref('6:00am - 8:00am');
    const activityImageUrl = ref('@/assets/sample-activity-img.jpg'); // You will need to adjust this after fetching from Firestore
    const sessionDescription = ref('Join us for a roaring good time as we fold, crease, and create our way into the Mesozoic era at the Dinosaur Origami Workshop! Secure your spot now for a memorable and crafty adventure. 🦕✨');
    const location = ref('Potong Pasir CC');
    const locationEstate = ref('Potong Pasir');
    const otherDates = ref(['No other upcoming dates.']); // Example if there are multiple dates
    const activitiesRef = doc(db, 'activities', '1');
    const fetchDataFromFirestore = async () => {
      try {
        const querySnapshot = await getDocs(activitiesCollection);
        querySnapshot.forEach(doc => {
          const data = doc.data();
          sessionTitle.value = data.Type;
          sessionRating.value = data.Rating;
          upcomingDate.value = data.Date;
          happeningTime.value = data.Time;
          dateOfWeek.value = data.Day;
          activityImageUrl.value = data.ImageUrl;
          sessionDescription.value = data.Description;
          location.value = data.Location;
          locationEstate.value = data['Location Estate'];
          otherDates.value = data.OtherDates || [];
        });
      } catch (error) {
        console.error('Error fetching activities: ', error);
      }
    };

    onMounted(() => {
      fetchDataFromFirestore();
    });

    return {
      sessionTitle,
      sessionRating,
      upcomingDate,
      happeningTime,
      dateOfWeek,
      activityImageUrl,
      sessionDescription,
      location,
      locationEstate,
      otherDates
    };
  }
};
</script>
  
<style scoped>
  .content-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Adjust the gap between columns as necessary */
}

.left-column {
  flex: 2; /* Adjust the ratio between left and right columns as needed */
  max-width: 1000px;
}

.right-column {
  flex: 0 1 300px; /* Adjust the ratio between left and right columns as needed */
  /* max-width:300px;
  padding: 1em; */
  margin-right: auto;
}



  .activity-details {
    font-family: 'Arial', sans-serif;
    max-width: 800px;
    margin-left: auto;
    border: 1px solid #ddd;
    padding: 1em;
    border-radius: 8px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  
  .rating {
  background-color: #ffcc00; /* A yellow background */
  padding: 8px 12px; /* Some padding for spacing */
  border-radius: 5px; /* Rounded corners */
  display: inline-block; /* Makes the div inline so it only takes up as much space as needed */
  margin: 0; /* Adjust the margin as necessary */
  line-height: 1; /* Adjust line height to ensure it looks good with your font-size */
}

.rating p {
  margin: 0; /* Remove default paragraph margin */
  color: #333; /* Dark text for contrast */
  font-weight: bold; /* Optional: makes the text bold */
}

  .session-details {
    margin-top: 1em;
  }
  
  .activity-images {
  text-align: center;
  margin: 16px 0;
  width: 100%; /* Adjust to desired maximum width */
  max-width: 1000px; /* Set a max-width if necessary */
  height: auto; /* Height is set to auto to maintain aspect ratio */
  position: relative; /* Positioned relative for absolute positioning of ::before pseudo-element */
  overflow: hidden; /* Ensures no spillover if the image is larger than the container */
}

.activity-images::before {
  content: '';
  display: block;
  padding-top: 66.66%; /* This percentage controls the aspect ratio; 66.66% for 3:2 ratio */
  /* for a 16:9 ratio, use padding-top: 56.25%; */
}

.activity-images img {
  position: absolute; /* Absolute positioning to fit into the container */
  top: 0;
  left: 0;
  width: 100%; /* Image will scale to the width of the container */
  height: 100%; /* Image will scale to the height of the container */
  object-fit: cover; /* Ensures the image covers the container, maintaining its aspect ratio */
}
  
  .location {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 1em;
  }
  
  .pi-map-marker {
    font-size: 1.5em;
    color: #ff9900;
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    color:#ff9900;
  }
  
  .p-button {
    font-weight: bold;
  }
  
  .signup-button {
  background-color: grey; /* Change background to grey */
  border-color: grey; /* Optional: change border to grey if there is one */
  box-shadow: lightgrey;
}

/* For overriding PrimeVue styles specifically, you might need to target inner elements */
.signup-button .p-button-label {
  color: #fff; /* This would make the text color white, for example */
}

/* .signup-button: {
  background-color: #f0f0f0 !important; /* Very light grey 
  border-color: #f0f0f0 !important; 
  
} */

  .comments,
  .user-comments {
    margin-top: 2em;
  }
  
  .comment {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 0.5em;
    margin-top: 1em;
  }
  
  .other-dates {
    margin-top: 1em;
    padding: 1em;
    background-color: #f0f0f0;
    border-radius: 8px;
  }
  </style>
  
  ./CommentsForm.vue