class Diary < ApplicationRecord
  belongs_to :user
  has_many :diary_foods
  has_many :foods, through: :diary_foods

  validates :registration_date,        presence:true
  validates :user_id,                  presence:true

end