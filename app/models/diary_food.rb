class DiaryFood < ApplicationRecord
  belongs_to :diary
  belongs_to :food
end