class DiariesController < ApplicationController

  def create
    all_data = params[:all_data]
    date     = params[:date]
    binding.pry

    # morning = Diary.new(registration_date:params[:date], meal_id:1, user_id:current_user.id, food_ids:morning_data.first(morning_data/2))

    # lunch = Diary.new(registration_date:20200517, meal_id:2, user_id:current_user.id, food_ids:params[:food_ids2])
    # dinner = Diary.new(registration_date:20200517, meal_id:3, user_id:current_user.id, food_ids:params[:food_ids3])
    # snack = Diary.new(registration_date:20200517, meal_id:4, user_id:current_user.id, food_ids:params[:food_ids4])

    # morning.save
    # lunch.save
    # dinner.save
    # snack.save

    # morning_foods = DiaryFood.where(diary_id:morning.id)
    # lunch_foods   = DiaryFood.where(diary_id:lunch.id)
    # dinner_food   = DiaryFood.where(diary_id:dinner.id)
    # snack_foods   = DiaryFood.where(diary_id:snack.id)

    # servings = params[porunga2]
    # foods.zip(servings) do |food,serv|
    #   food.serving_id = serv
    #   food.save
    # end
    # binding.pry
    # # while i < 5 do
    # #   i += 1
    # # end
    # redirect_to root_path
  end

end

# Diary.create(registration_date:20200517, meal_id:1, user_id:1)
# data = Diary.new(registration_date:20200517, meal_id:1, user_id:1, food_ids:[1,2,3], servings:[1,2,3])