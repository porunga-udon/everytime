class FoodsController < ApplicationController
  before_action :create_hash

  def index
    @foods = Food.all
    @porunga = @foods.where(id:[1,2,3])
    @datas = @foods.search(params[:keyword])
    respond_to do |format|
      format.json
      format.html
    end
  end

  def create
    @food = Food.new(food_params)
    @food.column_check
    if @food.save
      respond_to do |format|
        format.json
      end
    else
      redirect_to root_path #後で直す
    end
  end

  private
  def food_params
    params.permit(:name, :quantity, :calorie, :carbo, :fat, :protein)
  end

  def create_hash
    @meals = [{name:"朝食", id:"1"}, {name:"昼食", id:"2"}, {name:"夕食", id:"3"}, {name:"間食", id:"4"}]

    @nutrition = [{ja:"カロリー", eng:"kcal", column:"calorie"},{ja:"炭水化物", eng:"g", column:"carbo"},{ja:"脂肪", eng:"g", column:"fat"},{ja:"タンパク質", eng:"g", column:"protein"}]

    @tests = [{id:1, name:"test", calorie:200, carbo:120, fat:20, protein:18}, {id:2, name:"test2", calorie:220, carbo:220, fat:40, protein:18}, {id:3, name:"test3", calorie:300, carbo:320, fat:30, protein:18}, {id:4, name:"test4", calorie:400, carbo:120, fat:20, protein:18}]

  end

end
