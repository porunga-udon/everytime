class CreateDiaries < ActiveRecord::Migration[5.2]
  def change
    create_table :diaries do |t|
      t.date       :registration_date,     null: false
      t.integer    :meal_id,               null: false, foreign_key: true
      t.references :user,                  null: false, foreign_key: true
      t.timestamps
    end
  end
end
