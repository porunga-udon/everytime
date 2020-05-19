class Diary < ApplicationRecord
  belongs_to :user
  has_many :diary_foods
  has_many :foods, through: :diary_foods

  validates :registration_date,        presence:true
  validates :meal_id,                  presence:true
  validates :user_id,                  presence:true

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :meal
end