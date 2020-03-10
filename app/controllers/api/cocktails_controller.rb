module Api
  class CocktailsController < ApplicationController
    def index
      cocktails = Cocktail.order(created_at: :desc)
      ingredients = Ingredient.all
      render json: { status: 'SUCCESS', message: 'Loaded posts', cocktails: cocktails, ingredients: ingredients }
    end
  end
end