class CreateDiaryFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :diary_foods do |t|
      t.references :diary, foreign_key: true
      t.references :food,  foreign_key: true
      t.timestamps
    end
  end
end
