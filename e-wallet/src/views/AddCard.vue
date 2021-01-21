<template>
  <div class="container">
     <header>
      <Top :title="FormTitle" />
    </header>
    <main>
      </main>
  </div>
</template>
<script>
import Top from "../components/Top";
export default {
  components: {
   Top
},
data()
{
  return{
    FormTitle: "add a new card",
  }
}
}
</script>
<style lang="scss" scoped>

</style>
