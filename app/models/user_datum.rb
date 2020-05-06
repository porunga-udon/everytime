class UserDatum < ApplicationRecord
  belongs_to :user

  validates :gender,         presence: true
  validates :birthday,       presence: true
  validates :weight,         presence: true
  validates :life_index_id,  presence: true
  validates :burn_calorie,   presence: true
  validates :goal_weight,    presence: true
  validates :goal_period,    presence: true
  validates :intake_calorie, presence: true
  validates :user_id,        presence: true

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :life_index
end
