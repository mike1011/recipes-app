class AddClapsToRecipes < ActiveRecord::Migration[5.1]
  def change
    add_column :recipes, :claps, :integer, default: 0
  end
end
