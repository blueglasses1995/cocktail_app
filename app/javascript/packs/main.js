//import Vue from 'vue';
import router from './router/router';
import axios from 'axios';

var app = new Vue({
  el: '#app',
  router,
  data () {
    return {
      allCocktailsData: [],
      cocktailList: [],
      ingredientList: [],
      baseList: ['ALL', 'Tequila', 'Wodka', 'Rum', 'Whiskey'],
      searchName: '',
      searchWord: '',
      baseToSearch: '',
      ingredientsToSearch: [],
      alcoholToSearch: [0, 50],
      sournessToSearch: [0, 5],
      sweetnessToSearch: [0, 5],
      bitternessToSearch: [0, 5],
    }
  },
  mounted () {
    this.getCocktailList();
  },
  methods: {
    getCocktailList: function() {
      axios.get('/api/cocktails')
        .then(response => (
          this.allCocktailsData = response.data.cocktails,
          this.cocktailList = response.data.cocktails,
          this.ingredientList = response.data.ingredients
          //this.abstruct()
        )
      )
      //for (var i = 0; i < this.ingredientList.length; i++) {
        //if (this.ingredientList[i].is_alcohol == true) {
        //  this.baseList[this.baseList.length] = this.ingredientList[i];  
        //};
      //};
    },
    abstruct: function() {
      this.cocktailList = []
      for (var i=0;i<this.allCocktailsData.length;i++) {
        if (this.allCocktailsData[i].name.indexOf(this.searchName) !== -1) {
          if ((this.allCocktailsData[i].name.indexOf(this.searchWord) !== -1) || (this.allCocktailsData[i].description.indexOf(this.searchWord) !== -1)) {
            if ((this.allCocktailsData[i].alcohol >= this.alcoholToSearch[0]) && (this.allCocktailsData[i].alcohol <= this.alcoholToSearch[1])) {
              if ((this.allCocktailsData[i].sourness >= this.sournessToSearch[0]) && (this.allCocktailsData[i].sourness <= this.sournessToSearch[1])) {
                if ((this.allCocktailsData[i].sweetness >= this.sweetnessToSearch[0]) && (this.allCocktailsData[i].sweetness <= this.sweetnessToSearch[1])) {
                  if ((this.allCocktailsData[i].bitterness >= this.bitternessToSearch[0]) && (this.allCocktailsData[i].bitterness <= this.bitternessToSearch[1])) {
                    this.cocktailList.push(this.allCocktailsData[i]);
                  }
                }
              }
            }
          }
        }
      }   
    }
  }
});  