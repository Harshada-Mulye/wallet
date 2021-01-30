<template>
  <div class="container">
    
     <header>
      <Top :header="FormTitle" />
    </header>
    <main>
      <CardForm/>
    
      </main>
  </div>
</template>
<script>
import Top from "../components/Top";

import CardForm from "../components/CardForm";
export default {
  components: {
   Top,CardForm
},
data()
{
  return{
    FormTitle: "add a new card"
    
}
}
}

</script>
<style lang="scss" scoped>
.container {
  header {
    max-width: 220px;
    margin: auto;
  }
   main {
    max-width: 375px;
    margin: auto;
   }
  }

</style>
