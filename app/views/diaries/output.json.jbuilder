json.array! @diaries do |diary_foods|
  json.array! diary_foods do |foods|
    if foods == diary_foods[0]
      json.date         foods
    else
      json.array! foods do |food|
        json.id         food.id
        json.name       food.name
        json.quantity   food.quantity
        json.calorie    food.calorie
        json.carbo      food.carbo
        json.fat        food.fat
        json.protein    food.protein
      end
    end
  end
end