class CreateDiaries < ActiveRecord::Migration[5.2]
  def change
    create_table :diaries do |t|
      t.date       :registration_date,     null: false
      t.references :user,                  null: false, foreign_key: true
      t.integer    :morning_index,         null: false
      t.integer    :lunch_index,           null: false
      t.integer    :dinner_index,          null: false
      t.integer    :snack_index,           null: false
      t.timestamps
    end
  end
end
