class DiaryFood < ApplicationRecord
  validates :diary_id,        presence: true
  validates :food_id,         presence: true

  belongs_to :diary
  belongs_to :food
end
