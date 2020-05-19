class DiariesController < ApplicationController

  def create
    data = Diary.new(registration_date:20200517, meal_id:1, user_id:current_user.id, food_ids:[1,2,3])
    data.save
    # binding.pry
    redirect_to root_path
  end

  private
  # def diary_params
  #   params.permit(:food_id)
  # end
end

# Diary.create(registration_date:20200517, meal_id:1, user_id:1)