class Ingredient < ApplicationRecord
  has_many :cocktail_ingredients
  has_many :cocktail, through: :cocktail_ingredients
end
