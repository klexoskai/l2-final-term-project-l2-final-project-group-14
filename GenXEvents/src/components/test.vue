<template>
    <div>
      <v-container>
        <div class="row">
          <div class="col-md-3 col-sm-3 col-xs-12">
            <Card>
              <template #title>Filters</template>
              <Divider />
              <template #content>
                <Tree :value="items" selection-mode="checkbox"></Tree>
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
              <div class="col-md-3 col-sm-6 col-xs-12" :key="pro.id" v-for="pro in products">

                  <Card
                    class="mx-auto d-flex flex-column"
                    color="grey lighten-4"
                    max-width="600"
                  >
                    <template #header>
                      <img class="w-100"
                      :src= "pro.src" />
                    </template>

                    <template #title>{{pro.name}} </template>
                    <template #subtitle>{{pro.location}} </template>
                    <template #content>
                      <p class="m-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      </p>
                    </template>
                    <template #footer>
                      Price: ${{pro.price}}
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
    
    import Divider from 'primevue/divider';

    export default {
        data: () => ({
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
              items: [
                  {
                      id: 1,
                      label: 'Interests',
                      children: [
                            { id: 2, label: 'Arts & Craft' },
                            { id: 3, label: 'Cooking' },
                            { id: 4, label: 'Culture' },
                            { id: 5, label: 'Music' },
                            { id: 6, label: 'Photography' },
                            { id: 7, label: 'Sports' },
                            { id: 8, label: 'Technology' },
                            { id: 9, label: 'Wellness' },

                      ],
                  },
                  {
                      id: 2,
                      label: 'Price',
                      children: [
                            { id: 5, label: 'Free' },
                            { id: 6, label: '$1 - $10' },
                            { id: 7, label: '$11 - $20' },
                            { id: 8, label: '$21 - $30' },
                            { id: 9, label: '$31 - $40' },
                            { id: 10, label: '$40+' },

                      ],
                  },
                  {
                      id: 3,
                      label: 'Location',
                      children: [
                            { id: 11, label: 'Central' },
                            { id: 12, label: 'East' },
                            { id: 13, label: 'North' },
                            { id: 14, label: 'North East' },
                            { id: 15, label: 'West' },

                      ],
                  },

              ],
              products:[
                {
                id: 1,
                name: "Peranakan Food",
                type: "Cooking",
                price: 23,
                location: "North East",
                src: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                },

                {
                id: 2,
                name: "Singapore History",
                type: "Culture",
                price: 45,
                location: "North",
                src: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                },

                {
                id: 3,
                name: "Guitar Lessons",
                type: "Music",
                price: 12,
                location: "Central",
                src: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                },

                {
                id: 4,
                name: "How to Whatsapp",
                type: "Technology",
                price: 5,
                location: "East",
                src: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                },

                {
                id: 5,
                name: "Meditation 101",
                type: "Wellness",
                price: 35,
                location: "North East",
                src: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                },

                {
                id: 6,
                name: "Cycling",
                type: "Sports",
                price: 18,
                location: "West",
                src: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                },

                {
                id: 7,
                name: "Beginner Origami",
                type: "Arts & Craft",
                price: 50,
                location: "Central",
                src: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                },

                {
                id: 8,
                name: "Nature Photography",
                type: "Photography",
                price: 42,
                location: "North",
                src: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                },

                {
                id: 9,
                name: "Singapore History",
                type: "Culture",
                price: 7,
                location: "West",
                src: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                },

                {
                id: 10,
                name: "Master your iPhone",
                type: "Technology",
                price: 30,
                location: "East",
                src: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                },

                {
                id: 11,
                name: "Bake with Love",
                type: "Cooking",
                price: 48,
                location: "North",
                src: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                },

                {
                id: 12,
                name: "Animal Photography",
                type: "Photography",
                price: 15,
                location: "Central",
                src: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                },
              ]
          }),
      }
  </script>
  