class FoodsController < ApplicationController
  before_action :create_hash

  def index
    @foods = Food.all
  end

  def create
    @food = Food.new(food_params)
    @food.save
    respond_to do |format|
      format.html
      format.json
    end
    redirect_to foods_path
  end

  private
  def food_params
    params.permit(:name, :quantity, :calorie, :carbo, :fat, :protein)
  end

  def create_hash
    @meals = [{name:"朝食", id:"1"}, {name:"昼食", id:"2"}, {name:"夕食", id:"3"}, {name:"間食", id:"4"}]

    @nutrition = [{ja:"カロリー", eng:"kcal", column:"calorie"},{ja:"炭水化物", eng:"g", column:"carbo"},{ja:"脂肪", eng:"g", column:"fat"},{ja:"タンパク質", eng:"g", column:"protein"}]
  end

end
