module Api
  class CocktailsController < ApplicationController
    def index
      cocktailsList = []
      cocktails = Cocktail.order(created_at: :desc)
      ingredientsList = []
      for co in cocktails do
        ingredients = []
        ingredientsAmount = []
        for ing in co.cocktail_ingredients do
          ingredientAmount = {"name" => ing.ingredient.name, "amount" => ing.amount}
          ingredients.push(ing.ingredient.name)
          ingredientsList.push(ing.ingredient.name)
          ingredientsAmount.push(ingredientAmount)
        end
        cocktail_hash = {"info" => co, "ingredients" => ingredients,"ingredientsAmount" => ingredientsAmount}
        cocktailsList.push(cocktail_hash)
      end
      ingredients = Ingredient.all
      render json: { status: 'SUCCESS', message: 'Loaded posts', cocktails: cocktailsList, ingredients: ingredientsList.uniq }
    end
  end
end