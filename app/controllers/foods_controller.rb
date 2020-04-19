class FoodsController < ApplicationController
  before_action :create_hash

  def index
  end

  def create
  end

  private
  def create_hash
    @meals = ["朝食","昼食","夕食","間食"]
    @foods = ["チキンラーメン","はなまるうどん","骨付きステーキ"]
    @nutrition = [{ja:"カロリー", eng:"kcal"},{ja:"炭水化物", eng:"g"},{ja:"脂肪", eng:"g"},{ja:"タンパク質", eng:"g"}]
    @data = [100,80,60,40]
  end

end
