Food.create!([
  {name: 'うどん', quantity: '1玉', calorie: 242, carbo: 50, fat: 1, protein: 6}, 
  {name: 'ごはん(茶碗)', quantity: '1杯', calorie: 252, carbo: 55, fat: 1, protein: 4}, 
  {name: '食パン(6枚切り)', quantity: '1枚', calorie: 162, carbo:30, fat: 2, protein: 6},
  {name: '鶏むね肉', quantity: '100g', calorie: 108, carbo: 0, fat: 1, protein: 22}, 
  {name: '鶏ささみ', quantity: '100g', calorie: 105, carbo: 0, fat: 1, protein: 23}, 
  {name: '納豆', quantity: '1パック', calorie: 252, carbo: 6, fat: 5, protein: 8}, 
  {name: '木綿豆腐', quantity: '100g', calorie: 72, carbo: 55, fat: 1, protein: 6}, 
  {name: '絹ごし豆腐', quantity: '100g', calorie: 56, carbo:2, fat: 3, protein: 5}, 
  {name: 'ブロッコリーM', quantity: '1個', calorie: 41, carbo:7, fat: 1, protein: 5}, 
  {name: '卵', quantity: '1個', calorie: 91, carbo:1, fat: 6, protein: 7}
  ])

# 5.times do |n|
#   User.create!(
#     nickname: "テスト太郎#{n + 1}",
#     email: "test#{n + 1}@test.com",
#     password:"testpass#{n + 1}"
#   )
# end