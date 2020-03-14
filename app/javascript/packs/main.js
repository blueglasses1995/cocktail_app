//import Vue from 'vue';
import router from './router/router';
import axios from 'axios';

var app = new Vue({
  el: '#app',
  router,
  data () {
    return {
      searchShown: false,
      mypageShown: false,
      data: [],
      allCocktailsData: [],
      cocktailList: [],
      ingredientList: [],
      baseList: ['ALL', 'Tequila', 'Wodka', 'Rum', 'Whiskey'],
      searchName: '',
      searchWord: '',
      baseToSearch: 'ALL',
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
        if (this.allCocktailsData[i]["info"].name.indexOf(this.searchName) !== -1) {
          if ((this.allCocktailsData[i]["info"].name.indexOf(this.searchWord) !== -1) || (this.allCocktailsData[i]["info"].description.indexOf(this.searchWord) !== -1)) {
            if ((this.allCocktailsData[i]["info"].alcohol >= this.alcoholToSearch[0]) && (this.allCocktailsData[i]["info"].alcohol <= this.alcoholToSearch[1])) {
              if ((this.allCocktailsData[i]["info"].sourness >= this.sournessToSearch[0]) && (this.allCocktailsData[i]["info"].sourness <= this.sournessToSearch[1])) {
                if ((this.allCocktailsData[i]["info"].sweetness >= this.sweetnessToSearch[0]) && (this.allCocktailsData[i]["info"].sweetness <= this.sweetnessToSearch[1])) {
                  if ((this.allCocktailsData[i]["info"].bitterness >= this.bitternessToSearch[0]) && (this.allCocktailsData[i]["info"].bitterness <= this.bitternessToSearch[1])) {
                    if ((this.baseToSearch == 'ALL') || (this.allCocktailsData[i]["ingredients"].indexOf(this.baseToSearch) >= 0)) {
                      var num = 0;
                      for (var n=0; n<this.ingredientsToSearch.length; n++) {
                        if (this.allCocktailsData[i]["ingredients"].indexOf(this.ingredientsToSearch[n]) >= 0) {
                          num += 1
                        }
                      }
                      if (this.ingredientsToSearch.length == num) {
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
    }
  }
});  