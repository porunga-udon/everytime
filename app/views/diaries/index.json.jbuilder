json.array! @all_foods do |a_foods|
  json.array! a_foods do |a_food|
    json.id         a_food.id
    json.name       a_food.name
    json.quantity   a_food.quantity
    json.calorie    a_food.calorie
    json.carbo      a_food.carbo
    json.fat        a_food.fat
    json.protein    a_food.protein
  end
end