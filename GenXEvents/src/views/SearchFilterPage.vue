<template>
    <div>
      <v-container>
        <div class="row">
          <div class="col-md-3 col-sm-3 col-xs-12">
            <Card>
              <template #title>Filters</template>
              <Divider />
              <template #content>
                <Tree 
                  v-model:selectionKeys="selectedKeys" 
                  :value="items" 
                  selection-mode="checkbox"
                  @node-toggle="onNodeToggle"
                  ></Tree>
              </template>

              <Divider />
              <v-card-title>Price</v-card-title>
              <v-range-slider
                v-model="range"
                :max="max"
                :min="min"
                :height="10"
                class="align-center"
                dense
              ></v-range-slider>
              <v-row class="pa-2" dense>
                <v-col cols="12" sm="5">
                  <v-text-field
                    :value="range[0]"
                    label="Min"
                    outlined
                    dense
                    @change="$set(range, 0, $event)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="2">
                  <p class="pt-2 text-center">TO</p>
                </v-col>
                <v-col cols="12" sm="5">
                  <v-text-field
                    :value="range[1]"
                    label="Max"
                    outlined
                    dense
                    @change="$set(range, 1, $event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <Divider />
              <v-card-title class="pb-0">Customer Rating</v-card-title>
              <v-container class="pt-0"  fluid>
                <v-checkbox append-icon="mdi-star" label="4 & above" hide-details dense></v-checkbox>
                <v-checkbox append-icon="mdi-star" label="3 & above" hide-details dense></v-checkbox>
                <v-checkbox append-icon="mdi-star" label="2 & above" hide-details dense></v-checkbox>
                <v-checkbox append-icon="mdi-star" label="1 & above" hide-details dense></v-checkbox>
              </v-container>
              <Divider />
              <v-card-title class="pb-0">Size</v-card-title>
              <v-container class="pt-0" fluid>
                <v-checkbox  label="XS" hide-details dense></v-checkbox>
                <v-checkbox  label="S" hide-details dense></v-checkbox>
                <v-checkbox  label="M" hide-details dense></v-checkbox>
                <v-checkbox  label="L" hide-details dense></v-checkbox>
                <v-checkbox  label="XL" hide-details dense></v-checkbox>
                <v-checkbox  label="XXL" hide-details dense></v-checkbox>
                <v-checkbox  label="XXXL" hide-details dense></v-checkbox>
              </v-container>
  
            </Card>
          </div>
          <div
            class="col-md-9 col-sm-9 col-xs-12"
          >
  
            <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
  
            <v-row dense>
              <v-col cols="12" sm="8" class="pl-6 pt-6">
                <small>Showing 1-12 of 200 products</small>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px;" outlined dense></v-select>
              </v-col>
            </v-row>
  
            <Divider />
  
            <div class="row text-center">
              <div class="col-md-3 col-sm-6 col-xs-12" :key="activity['Activity ID']" v-for="activity in activities">

                  <Card 
                    class="mx-auto d-flex flex-column"
                    color="grey lighten-4"
                    max-width="600"

                    @click="accessPage(activity)"
                    style="width: 100%; max-width: 300px; height: 300px; margin-bottom: 10px; margin-top: 10px;"
                  >
                    <!-- <template #header>
                      <img class="w-100"
                      alt="activity image"
                      :src= "activity.Image" />
                    </template> -->

                    <template #title>{{activity.Type}} </template>
                    <template #subtitle>{{activity.Location}} </template>
                    <template #content>
                      <p class="m-0">
                        {{activity.Description}}
                      </p>
                    </template>
                    <template #footer>
                      Price: ${{activity.Cost}}
                    </template>
                  </Card>

              </div>
            </div>
            <div class="text-center mt-12">
              <v-pagination
                v-model="page"
                :length="6"
              ></v-pagination>
            </div>
          </div>
        </div>
      </v-container>
    </div>
</template>
  
<style>
    .v-card--reveal {
      align-items: center;
      bottom: 0;
      justify-content: center;
      opacity: .8;
      position: absolute;
      width: 100%;
    }
</style>

<script>
    import Card from 'primevue/card';
    import Divider from 'primevue/divider';
    import firebaseTools from '../firebase.js';
    import { collection, getDocs } from 'firebase/firestore';
    const db = firebaseTools.db;

    export default {
    async mounted() {
      await this.retrieveData();
    },
    watch: {
  selectedTags() {
    this.retrieveData();
  },
},
    methods:{
      // get data of activites from database
      async retrieveData() {
        const activityCollection = collection(db, 'activities');
        try {
          const querySnapshot = await getDocs(activityCollection);
          const allActivities = querySnapshot.docs.map(doc => doc.data());
          this.activities = allActivities.filter(activity => {
            // Check if the activity's tags contain all the selectedTags
            return this.selectedTags.every(tag => activity.Tags.includes(tag));
          });
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle the error, e.g., show a message to the user or retry fetching data
        }
      },


  async onNodeToggle(event) {
    const { node } = event;
    if (this.selectedKeys.includes(node.key)) {
      // Node is already selected, so remove it from selectedKeys
      this.selectedKeys = this.selectedKeys.filter(key => key !== node.key);
    } else {
      // Node is not selected, so add it to selectedKeys
      this.selectedKeys.push(node.key);
    }
    if (this.selectedTags.includes(node.label)) {
      // Node is already selected, so remove it from selectedTags
      this.selectedTags = this.selectedTags.filter(tag => tag !== node.label);
    } else {
      // Node is not selected, so add it to selectedTags
      this.selectedTags.push(node.label);
    }
  },

      // to access page upon clicking the activity
      accessPage(activity) {
        console.log("Directed to the activity page");
        this.$router.push({ 
          name: 'Activity Page', 
          query: {
            id: activity["Activity ID"]
          } 
        })
      },
      
    },
        data: () => ({
            selectedKeys: [],
            selectedTags: [],
              range: [0, 10000],
              select:'Popularity',
              options: [
                  'Default',
                  'Popularity',
                  'Relevance',
                  'Price: Low to High',
                  'Price: High to Low',
              ],
              page:1,
              breadcrums: [
                  {
                      text: 'Home',
                      disabled: false,
                      href: 'breadcrumbs_home',
                  },
                  {
                      text: 'Clothing',
                      disabled: false,
                      href: 'breadcrumbs_clothing',
                  },
                  {
                      text: 'T-Shirts',
                      disabled: true,
                      href: 'breadcrumbs_shirts',
                  },
              ],
              min:0,
              max:10000,
              activities: null,
              items: [
                  {
                      key: '1',
                      label: 'Interests',
                      children: [
                            { key: '1-2', label: 'Art' },
                            { key: '1-3', label: 'Cooking' },
                            { key: '1-4', label: 'Cultural' },
                            { key: '1-5', label: 'Music' },
                            { key: '1-6', label: 'Photography' },
                            { key: '1-7', label: 'Sports' },
                            { key: '1-8', label: 'Technology' },
                            { key: '1-9', label: 'Wellness' },

                      ],
                  },
                  {
                      key: '2',
                      label: 'Price',
                      children: [
                            { key: '2-1', label: 'Free' },
                            { key: '2-2', label: '$1 - $10' },
                            { key: '2-3', label: '$11 - $20' },
                            { key: '2-4', label: '$21 - $30' },
                            { key: '2-5', label: '$31 - $40' },
                            { key: '2-6', label: '$40+' },

                      ],
                  },
                  {
                      key: '3',
                      label: 'Location',
                      children: [
                            { key: '3-1', label: 'Central' },
                            { key: '3-2', label: 'East' },
                            { key: '3-3', label: 'North' },
                            { key: '3-4', label: 'North East' },
                            { key: '3-5', label: 'West' },

                      ],
                  },

              ],
          }),
      }
  </script>
  