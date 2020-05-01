class Food < ApplicationRecord
  validates :name,             presence: true
  validates :quantity,         presence: true
  validates :one_of_nutrition, presence: true, format: {with: /\A[0-9]+\z/ }, inclusion: 0..999

  # インクリメンタルサーチ
  def self.search(input)
    if input == ""
      Food.all
    else
      Food.where(['name LIKE ?', "%#{input}%"] )
    end
  end

  def column_check
    self.calorie = 0 if self.calorie.blank?
    self.carbo   = 0 if self.carbo.blank?
    self.fat     = 0 if self.fat.blank?
    self.protein = 0 if self.protein.blank?
  end

  private
    def one_of_nutrition
      calorie.presence or carbo.presence or fat.presence or protein.presence
    end

end
