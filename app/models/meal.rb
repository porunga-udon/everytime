class Meal < ActiveHash::Base
  self.data = [
    {id:1, meal:"朝食"}, {id:2, meal:"昼食"}, {id:3, meal:"夕食"}, {id:4, meal:"間食"},
  ]
end
