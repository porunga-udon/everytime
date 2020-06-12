class DiariesController < ApplicationController

  before_action :create_hash

  def index
    create_day
    @diary = Diary.find_by(registration_date:@day)
    if @diary.present?
      create_foods_array
    end
    respond_to do |format|
      format.json
      format.html
    end
  end

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

  def create_hash
    @meals = [{name:"朝食", id:"1"}, {name:"昼食", id:"2"}, {name:"夕食", id:"3"}, {name:"間食", id:"4"}]

    @nutrition = [{ja:"カロリー", eng:"kcal", column:"calorie"},{ja:"炭水化物", eng:"g", column:"carbo"},{ja:"脂肪", eng:"g", column:"fat"},{ja:"タンパク質", eng:"g", column:"protein"}]

    @tests = [{id:1, name:"test", calorie:200, carbo:120, fat:20, protein:18}, {id:2, name:"test2", calorie:220, carbo:220, fat:40, protein:18}, {id:3, name:"test3", calorie:300, carbo:320, fat:30, protein:18}, {id:4, name:"test4", calorie:400, carbo:120, fat:20, protein:18}]
  end

  # 検索するための日付を作成
  def create_day
    if params[:day].present?
      @day = params[:day]
    else
      @day = Date.today.to_s(:number)
    end
  end

  # 食べ物の配列を作成
  def create_foods_array
    @a_foods = @diary.foods
    @all_foods = [
      @m_foods = @a_foods[0..@diary.morning_index-1],
      @l_foods = @a_foods[@diary.morning_index..@diary.lunch_index-1],
      @d_foods = @a_foods[@diary.lunch_index..@diary.dinner_index-1],
      @s_foods = @a_foods[@diary.dinner_index..@diary.snack_index-1]
    ]
  end

end