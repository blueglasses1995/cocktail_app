//import Vue from 'vue';
import router from './router/router';
import axios from 'axios';

var app = new Vue({
  el: '#app',
  router,
  data () {
    return {
      isChartMode: false,
      headers: [
          {
            text: 'Cocktails',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Alcohol', value: 'alcohol' },
          { text: 'Sourness', value: 'sourness' },
          { text: 'Sweetness', value: 'sweetness' },
          { text: 'Bitterness', value: 'bitterness' }
        ],
      searchShown: false,
      mypageShown: false,
      selectedShown: false,
      detailShown: false,
      detailedCocktail: 0,
      pagination: {
        sortBy: 'name'
      },
      selectedCocktails: [],
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
          this.ingredientList = response.data.ingredients,
          this.detailedCocktail = response.data.cocktails[0]
          //this.abstruct()
        )
      )
      //for (var i = 0; i < this.ingredientList.length; i++) {
        //if (this.ingredientList[i].is_alcohol == true) {
        //  this.baseList[this.baseList.length] = this.ingredientList[i];  
        //};
      //};
    },
    toggleAll () {
      if (this.selectedCocktails.length) this.selected = []
      else this.selectedCocktails = this.cocktailList.slice()
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    selectCocktail (cocktail) {
      var num = 0;
      for (var i=0;i<this.selectedCocktails.length;i++) {
        if (this.selectedCocktails[i]["info"].name != cocktail["info"].name) {
          num++;
        }
      }
      if (this.selectedCocktails.length == num) {
        this.selectedCocktails.push(cocktail);
      }
    },
    showDetail (cocktail) {
      this.detailShown = true;
      this.detailedCocktail = cocktail;
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