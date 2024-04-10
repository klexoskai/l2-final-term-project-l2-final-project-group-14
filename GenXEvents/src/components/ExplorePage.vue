<template>
    <h2 id="Explore">Just For You</h2>
    <div class="recommendation-list">
        <div v-for="recommendation in recommendations" :key="recommendation.id" class="recommendation-item">
          <div class="box">
            <text class="heading">{{ recommendation.title }}</text>
            <p>{{ recommendation.description }}</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        recommendations: [
          { id: 1, title: "Recommendation 1", description: "Description of recommendation 1" },
          { id: 2, title: "Recommendation 2", description: "Description of recommendation 2" },
          { id: 3, title: "Recommendation 3", description: "Description of recommendation 3" },
          { id: 4, title: "Recommendation 4", description: "Description of recommendation 4" },
          { id: 5, title: "Recommendation 5", description: "Description of recommendation 5" },
          { id: 6, title: "Recommendation 6", description: "Description of recommendation 6" },
          { id: 7, title: "Recommendation 7", description: "Description of recommendation 7" },
          { id: 8, title: "Recommendation 8", description: "Description of recommendation 8" },
          // Note: data will be in the form of components (Activity Pages)
        ]
      };
    }
}
</script>

<style>
#Explore {
    text-align: left;
    color: black;
    margin-left: 100px;
}

html {
    background-color: rgb(255, 213, 0);
}

.heading {
  font-weight: bold;
}

.box {
  width: 200px;
  height: 100px;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  background-color: white;
  float: left;
}

.recommendation-item {
    margin-left: 90px;
}
</style>