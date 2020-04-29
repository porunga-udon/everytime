class Food < ApplicationRecord
  validates :name,             presence: true
  validates :quantity,         presence: true
  validates :one_of_nutrition, presence: true, format: {with: /\A[0-9]+\z/ }, inclusion: 0..999

  private
    def one_of_nutrition
      calorie.presence or carbo.presence or fat.presence or protein.presence
    end

end
