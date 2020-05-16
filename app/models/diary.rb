class Diary < ApplicationRecord
  belongs_to :user
  has_many   :foods, through: :diary_foods

  validates :registration_date,        present:true
  validates :meal_id,                  present:true
  validates :user_id,                  present:true

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :meal
end