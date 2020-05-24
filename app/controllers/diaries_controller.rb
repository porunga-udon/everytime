class DiariesController < ApplicationController

  def create
    @diary = Diary.create(converting_data)
    registration_serv
  end

  private
  # 文字列を数値に変換して保存するためのメソッド
  def converting_data
    diary_params = params[:diary]
    i = 0
    converted = []
    while i < 5 do
      converted << diary_params.values[i].to_i
      i += 1
    end
    [registration_date:converted[0],morning_index:converted[1],lunch_index:converted[2],dinner_index:converted[3],snack_index:converted[4],user_id:current_user.id,food_ids:params[:food_ids]]
  end

  # 登録されたフードの量を登録するメソッド
  def registration_serv
    diary_foods = DiaryFood.where(diary_id:@diary[0].id)
    serv_data   = params[:serv_data]
    diary_foods.zip(serv_data) do |food,serv|
      food.serving_id = serv
      food.save
    end
  end

end