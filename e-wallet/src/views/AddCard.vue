<template>
  <div class="container">
     <router-link to="/" class="back"
      >
    </router-link>
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
           <select name="validYear" v-model="DefaultCard.validYear">
            <option >21</option>
            <option >22</option>
            <option >23</option>
            <option >24</option>
             <option >25</option>
         
             </select>
          
              </div>
            </div>
           </div>
        
            <select name="vendor" v-model="DefaultCard.vendor" @change="changeColor">
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
changeColor(){
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
 
},
send()
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
        .for-valid-cvc {
          display: flex;
          justify-content: space-between;
        }
        .valid-cvc {
          @extend .for-valid-cvc;
          .valid-part {
            width: 49%;
            text-align: left;
            .valid-input {
              @extend .for-valid-cvc;
              input {
                width: 35%;
              }
            }
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
          margin-top: 20px;
          padding: 15px;
          border: 1px solid #000;
        }
        button:hover {
          cursor: pointer;
          transition: 200ms;
          background-color: #fff;
          color: black;
          border: 1px solid #000;
        }
      }
    }
    .preview-btn {
      width: 352px;
      background-color: #000;
      color: #fff;
      font-weight: bold;
      border-radius: 6px;
      margin-top: 20px;
      padding: 15px;
      border: 1px solid #000;
    }
    .preview-btn:hover {
      cursor: pointer;
      transition: 200ms;
      background-color: #fff;
      color: black;
      border: 1px solid #000;
    }
  }
  .back {
    float: left;
    font-size: 2rem;
    color: black;
  }
}
</style>
