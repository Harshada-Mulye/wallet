<template>
  <div class="container">
    <header>
      <Top :header="header"/>
    </header>
    <main>
      
           <article class="active-card">
        <h6>ACTIVE CARD</h6>
        <div class="the-card">
          <Card :card="Cards[this.position]" />
        </div>
      </article>
      <section class="conatiner2">
      <article class="card-stack">
     
                  <CardStack
          v-for="(card, index) in Cards"
          :key="index"
          :card="Cards[index]"
          @actived="actived(index)"
          class="cardStack"
         
        />
      </article>
   </section>
      <div class="btn">
        <router-link to="AddCard" class="add-card-btn">
          add a card
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>


import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";
export default {
  name: "Home",

  data() {
    return {
      header: "e-wallet",
      position:0
     
    }
  },
  methods:{
     actived(index) {
       console.log(index);
         this.position = index;
       console.log("hi");
     
  },
  
  },
  created:function()
  
  {
    console.log(this.$root.$data.cards)
    console.log('hi')
  },
  
  components: {
    Top,
    Card,
    CardStack
  },
  computed: {
    Cards() {
      return this.$root.$data.cards;
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  main {
    
    max-width: 375px;
    margin: auto;
    .active-card {
      h6 {
        margin: 0 0 5px 0;
      }
    }
     .card-stack {
      margin-top: 200px;
      margin-bottom: 50px;
        .cardStack {
        margin-top: -170px;
      }
    }
    
  .the-card{
    margin-bottom: 50px;
  }
 

  .btn {
      display: flex;
      width: 350px;
      margin: auto;
      margin-top:20px;
      border-radius: 5px;
      justify-content: center;
      text-transform: uppercase;
      border: 1px solid black;
      .add-card-btn {
        width: 100%;
        color: black;
        font-weight: bold;
        padding: 10px 20px;
     
      }
      .add-card-btn:hover {
        background-color: #000;
        border: none;
        color: aliceblue;
        transition: 200ms;
        cursor: pointer;
      }
}
}
}
</style>
