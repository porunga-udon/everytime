class CreateData < ActiveRecord::Migration[5.2]
  def change
    create_table :data do |t|
      t.integer       :gender,                              null:false
      t.date          :birthday,                            null:false
      t.decimal       :weight,      precision: 4, scale: 1, null:false
      t.integer       :life_index_id,                       null:false, foreign_key:true
      t.integer       :burn_calorie,                        null:false
      t.decimal       :goal_weight, precision: 4, scale: 1, null:false
      t.integer       :goal_period,                         null:false
      t.integer       :intake_calorie,                      null:false
      t.references    :user,                                null:false, foreign_key:true
      t.timestamps
    end
  end
end
