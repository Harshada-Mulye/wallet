<template>
  <section class="card" :style="{ backgroundColor: card.bgColor }" @click="$emit('actived')">
  
       <div class="start-card">
      <img src="../assets/chip-light.svg" alt="chip" class="chip-card" />
      <img
        v-bind:src="require('../assets/vendor-' + card.img + '.svg')"
        alt="logo"
        class="logo"
      />
       </div>
        <div class="middle-card">
      <h2 :style="{ color: card.textColor }">{{ formatNumber}}</h2>
    </div>
    <div class="bottom-card">
      <div class="cardholder-name">
        <label for="name" :style="{ color: card.textColor }"
          >Cardholder name</label
        >
        <h5 :style="{ color: card.textColor }">{{ card.holder }}</h5>
      </div>
    </div>
      <div class="valid">
        <label for="valid" :style="{ color: card.textColor }">Valid</label>
        <div class="date">
          <h4 class="year" :style="{ color: card.textColor }">
            {{ card.validYear }}
          </h4>
          <h4 :style="{ color: card.textColor }">/</h4>
          <h4 class="month" :style="{ color: card.textColor }">
            {{ card.validMonth }}
          </h4>
        </div>
      </div>
  </section>  
</template>
<script>
export default {
    props:{
        card:Object
    },
    computed:{
     formatNumber() {
      let formattedNum = ""
      if (this.card.number) {
for (let i = 0; i < this.card.number.length; i++) {
        if (i % 4 === 0) {
          formattedNum = formattedNum + " " + this.card.number[i]
        }
        else {
          formattedNum += this.card.number[i]
        }
      }
      }
      
      return formattedNum
    }
  }
  
    };
    
     
   
    
    
  

</script>
<style lang="scss" scoped>
section.card{
  padding:15px;
  cursor:pointer;
   max-width: 310px;
  height: 247px;
   margin: auto;
   box-shadow: 5px 10px #888888;
   background-color: rgb(216, 216, 216);
    .start-card {
    display: flex;
    justify-content: space-between;
    .chip-card {
      width: 42px;
      height: 62px;
    }
    .logo {
      width: 24px;
      height: 58px;
    }
  }
  .middle-card {
    text-align: center;
  }
  .bottom-card{
    display: flex;
    justify-content: space-between;
     label {
      font-size: 0.7rem;
      font-family: 'Courier New', Courier, monospace;
    }
    .cardholder-name {
      text-transform: uppercase;
      text-align: left;
      h4 {
        margin: auto;
         font-family: 'Courier New', Courier, monospace;
         font-size: 18px;
      }
      
    }
  }
  
  .valid{
    text-align: right;
       text-transform: uppercase;
      .date {
        display: flex;
        align-items: flex-end;
      flex-wrap: wrap;
          margin: auto;
          justify-content: flex-end;
         
        }
      }
  }



</style>