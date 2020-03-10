class AddForeignKeys < ActiveRecord::Migration[5.1]
  def change
    add_foreign_key :cocktail_ingredients, :cockrails, column: :cockrail_id, on_delete: :cascade
    add_foreign_key :cocktail_ingredients, :ingredients, column: :ingredient_id, on_delete: :cascade
  end
end
