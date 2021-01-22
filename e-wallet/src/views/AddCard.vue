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
            placeholder="XXXXXXXXXXXXXXXX"
            v-model="DefaultCard.number"
            />
            <label for="cardholderName">cardholder name</label>
          <input
            type="text"
            name="cardholderName"
            class="cardholder-name"
            placeholder="FULL NAME"
             v-model="DefaultCard.holder"
            />
            <div class="valid-cvc">
            <div class="valid-part">
              <label for="validMonth" class="valid-label">Valid</label>
              <div class="valid-input">
                  <select name="Month" v-model="DefaultCard.validMonth">
            <option >1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
             <option >5</option>
            <option >6</option>
            <option >7</option>
            <option >8</option>
             <option >9</option>
            <option >10</option>
            <option >11</option>
            <option >12</option>

          </select>
           <select name="Month" v-model="DefaultCard.validYear">
            <option >21</option>
            <option >22</option>
            <option >23</option>
            <option >24</option>
             <option >25</option>
         
             </select>
          
              </div>
            </div>
           </div>
        
            <select name="vendor" v-model="DefaultCard.vendor">
            <option value="bitcoin">Bitcoin</option>
            <option value="ninja">Ninja</option>
            <option value="blockchain">Blockchain</option>
            <option value="evil">Evil</option>
          </select>
          <button>ADD CARD</button>
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
  if (this.$refs.form.vendor.value == "bitcoin") {
        this.DefaultCard.bgColor = "#F9B449";
        this.DefaultCard.textColor = "#2c3e50";
      }
      if (this.$refs.form.vendor.value == "evil") {
        this.DefaultCard.bgColor = "#DF2E4C";
        this.DefaultCard.textColor = "#ECE6DF";
      }
      if (this.$refs.form.vendor.value == "blockchain") {
        this.DefaultCard.bgColor = "#8050E5";
        this.DefaultCard.textColor = "#ECE6DF";
      }
      if (this.$refs.form.vendor.value == "ninja") {
        this.DefaultCard.bgColor = "#3A3A3A";
        this.DefaultCard.textColor = "#ECE6DF";
      }
 
}
}
}
</script>
<style lang="scss" scoped>

</style>
