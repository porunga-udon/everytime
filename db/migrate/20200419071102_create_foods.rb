class CreateFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :foods do |t|
      t.text      :name
      t.integer   :calorie
      t.integer   :carbo
      t.integer   :fat
      t.integer   :protein
      t.text      :quantity

      t.timestamps
    end
  end
end
