<template>
  <div class="container">
     <header>
      <Top :title="FormTitle" />
    </header>
    <main>
      <section class="default-card">
      <card :card="DefaultCard"/>
        </section>
        <section class="add-card-form">
          <form class="submit-card" @submit.prevent="send" ref="form">
            <label for="cardNumber">Card Number</label>
            <the-mask  mask="#### #### #### ####"
            type="text"
            name="cardNumber"
            class="card-number"
            placeholder="XXXXXXXXXXXXXXXX"/>
            </form>

          </section>
      </main>
  </div>
</template>
<script>
import Top from "../components/Top";
import Card from "../components/Card";
export default {
  components: {
   Top,Card
},
data()
{
  return{
    FormTitle: "add a new card",
     DefaultCard: {
        id: "432984728397",
        holder: "firstname lastname",
        vendor: "bitcoin",
        number: "XXXX XXXX XXXX XXXX",
        validMonth: "MM",
        validYear: "YY",
        bgColor: "#D8D8D8",
        textColor: "#2c3e50",
        img: "bitcoin",
      },
  }
},
methods:{
send(){
  this.DefaultCard.number=this.$refs.form.cardNumber.value;
}
}
}
</script>
<style lang="scss" scoped>

</style>
