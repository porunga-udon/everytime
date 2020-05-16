class Meal < ActiveHash::Base
  self.data = [
    {id:1, index:"朝食"}, {id:2, index:"昼食"}, {id:3, index:"夕食"}, {id:4, index:"間食"},
  ]
end
