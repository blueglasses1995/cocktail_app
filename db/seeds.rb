# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cocktail.create(:name => 'PinkLady', :description => 'おいしい', :sourness => 3, :bitterness => 3, :sweetness => 1, :alcohol => 20)
Cocktail.create(:name => 'Mojito', :description => 'キューバのお酒です', :sourness => 1, :bitterness => 3, :sweetness => 3, :alcohol => 15)
Ingredient.create(:name => 'Lemon Juice', :is_alcohol => false)
Ingredient.create(:name => 'Apple Juice', :is_alcohol => false)
Ingredient.create(:name => 'Tequila', :is_alcohol => true)
Ingredient.create(:name => 'Wodka', :is_alcohol => true)
CocktailIngredient.create(:cocktail_id => 1, :ingredient_id => 1, :amount => 50)
CocktailIngredient.create(:cocktail_id => 1, :ingredient_id => 2, :amount => 50)
CocktailIngredient.create(:cocktail_id => 1, :ingredient_id => 3, :amount => 30)
CocktailIngredient.create(:cocktail_id => 1, :ingredient_id => 1, :amount => 100)
CocktailIngredient.create(:cocktail_id => 1, :ingredient_id => 4, :amount => 40)