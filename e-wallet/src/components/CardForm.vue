<template>
  <div class="container">
     <router-link to="/" class="back"
      >
    </router-link>
    
    <main>
      
      <section>
         
      <Card :card="DefaultCard"/>
        </section>
        <section class="add-card-form">
          <form class="submit-card" @submit.prevent="addForm" ref="form">
            <label for="cardNumber">Card Number</label>
            <the-mask  mask="#### #### #### ####"
            type="text"
            name="cardNumber"
            placeholder="XXXXXXXXXXXXXXXX"
            v-model="DefaultCard.number"
            />
            <label for="cardholderName">cardholder name</label>
          <input
            type="text"
            name="cardholderName"
           
            placeholder="FULL NAME"
             v-model="DefaultCard.holder"
            />
            <div class="valid-cvc">
           
              
              <div class="valid-month">
                <label for="validMonth" >Month</label>
                </div>
                <div>
                  <select name="validMonth" v-model="DefaultCard.validMonth">
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
          </div>
          <div class="validYear">
           <label for="validYear" >Year</label>
           </div>
           <div>
           <select name="validYear" v-model="DefaultCard.validYear">
            <option >21</option>
            <option >22</option>
            <option >23</option>
            <option >24</option>
             <option >25</option>
         
             </select>
          
              </div>
            </div>
           
        
            <select name="vendor" v-model="DefaultCard.vendor" @change="change">
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

import Card from "./Card.vue";

export default {
  components: {
   Card,
},
data()
{
  return{
    FormTitle: "add a new card",
     DefaultCard: {
        id: "10",
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
change(){
  if (this.$refs.form.vendor.value == "bitcoin") {
        this.DefaultCard.bgColor = "#F9B449";
        this.DefaultCard.img="bitcoin";
        this.DefaultCard.textColor = "#2c3e50";
      }
      if (this.$refs.form.vendor.value == "evil") {
        this.DefaultCard.bgColor = "#DF2E4C";
        this.DefaultCard.img="evil";
        this.DefaultCard.textColor = "#2c3e50";
      }
      if (this.$refs.form.vendor.value == "blockchain") {
        this.DefaultCard.bgColor = "#8050E5";
        this.DefaultCard.img="blockchain";
        this.DefaultCard.textColor = "#ECE6DF";
      }
      if (this.$refs.form.vendor.value == "ninja") {
        this.DefaultCard.bgColor = "#3A3A3A";
        this.DefaultCard.img="ninja";
        this.DefaultCard.textColor = "#ECE6DF";
      }
 
},
addForm()
{
    if (
        this.$refs.form.cardNumber.value.length == 0 ||
        this.$refs.form.cardholderName.value.length == 0 ||
        this.$refs.form.validYear.length == 0 ||
        this.$refs.form.validMonth.length == 0
      ) {
        alert("Please fill all input");
        this.DefaultCard.number = "XXXX XXXX XXXX XXXX";
        this.DefaultCard.holder = "firstname lastname";
        this.DefaultCard.vendor = "bitcoin";
        this.DefaultCard.bgColor = "#D8D8D8";
        this.DefaultCard.validMonth = "MM";
        this.DefaultCard.validYear = "YY";
      }
     
      this.$root.$data.cards.push(this.DefaultCard)
      this.$router.push("/");
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
    .add-card-form {
      form {
        max-width: 352px;
        margin: 50px auto 0 auto;
        display: flex;
        flex-direction: column;
        label {
          text-transform: uppercase;
          font-size: 0.7rem;
          text-align: left;
          margin: 4px 0;
        }
        input {
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
          border: 1px solid #000;
        }
        .valid-cvc {
          display: flex;
          justify-content: space-between;
        }
        
          .cvc-part {
            text-align: left;
            width: 49%;
          }
        }
        select {
          border-radius: 4px;
          padding: 10px;
        }
        button {
          background-color: #000;
          color: #fff;
          font-weight: bold;
          border-radius: 6px;
          margin-top: 22px;
          padding: 15px;
          border: 1px solid #000;
        }
        button:hover {
          cursor: pointer;
          transition: 220ms;
          background-color: #fff;
          color: black;
          border: 1px solid #000;
        }
      }
    }
    
  }
  .back {
    float: left;
    font-size: 2rem;
    color: black;
  }

</style>
