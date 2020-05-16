class CreateDiaryFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :diary_foods do |t|
      t.references :diary, null: false, foreign_key: true
      t.references :food,  null: false, foreign_key: true
      t.timestamps
    end
  end
end
