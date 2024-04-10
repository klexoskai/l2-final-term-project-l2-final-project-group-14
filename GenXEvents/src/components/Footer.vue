<template>
  <!-- 2 blocks on the page, left copyright, right: buttons to other pages-->
  <footer class="footer">
    <div class="left-group">
      <p class="title">GenXEventsSG</p>
      <p class="tagline">Your go to event platform for Gen Xers</p>
      <p>GenXEventsSG © 2024</p>
    </div>
    <div class="right-group">
      <p>Support</p>
      <p>Help Centre</p>
      <p>Customer</p>
      <p>User Manual</p>
      <p>Contact Support</p>
    </div>
  </footer>
</template>
  
<script>
  export default{
    name: 'Footer',
  }
</script>
  
<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f0f0f0;
  color: #333;
  font-size: 0.8rem;
}

.left-group{
  text-align : left;
}

.right-group{
  text-align : right;
}

.title{
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0;
}

.tagline{
  font-size: 1.0rem;
  margin-top: 0.5rem;
}

</style>