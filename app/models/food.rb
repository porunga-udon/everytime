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
    # 全角の数値とアルファベットを半角に変換
    self.quantity = quantity.tr('０-９ａ-ｚＡ-Ｚ', '0-9a-zA-Z')
    # カラムが空の場合0を入れる
    self.calorie  = 0 if calorie.blank?
    self.carbo    = 0 if carbo.blank?
    self.fat      = 0 if fat.blank?
    self.protein  = 0 if protein.blank?
  end

  private
    def one_of_nutrition
      calorie.presence or carbo.presence or fat.presence or protein.presence
    end

end
