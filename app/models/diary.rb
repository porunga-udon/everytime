class Diary < ApplicationRecord
  belongs_to :user
  has_many :diary_foods
  has_many :foods, through: :diary_foods

  validates :registration_date,        presence:true
  validates :user_id,                  presence:true
  validates :morning_index,            presence:true
  validates :lunch_index,              presence:true
  validates :dinner_index,             presence:true
  validates :snack_index,              presence:true
end