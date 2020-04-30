json.array! @datas do |data|
  json.id       data.id
  json.name     data.name
  json.quantity data.quantity
  json.calorie  data.calorie
  json.carbo    data.carbo
  json.fat      data.fat
  json.protein  data.protein
end
