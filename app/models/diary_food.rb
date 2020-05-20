class DiaryFood < ApplicationRecord
  belongs_to :diary
  belongs_to :food
  
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :serving
end