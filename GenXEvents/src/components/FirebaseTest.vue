<!-- <template>
    <div>
      <h2>Test Firestore Fetch</h2>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { db, collection, getDocs } from '../firebase'; // Adjust the import path
  
  export default {
    name: 'TestFirestoreFetch',
    setup() {
      const items = ref([]);
  
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'activities')); // Adjust collection name
          items.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      onMounted(fetchData);
  
      return {
        items
      };
    }
  };
  </script>
   -->