class CreateCocktails < ActiveRecord::Migration[5.1]
  def change
    create_table :cocktails do |t|
      t.string :name
      t.string :description
      t.integer :sourness
      t.integer :bitterness
      t.integer :sweetness
      t.integer :alcohol

      t.timestamps
    end
  end
end
