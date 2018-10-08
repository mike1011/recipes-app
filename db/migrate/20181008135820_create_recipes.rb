class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :description
      t.integer :preparation_time
      t.integer :total_people
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
