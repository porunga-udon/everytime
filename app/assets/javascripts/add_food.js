$(function() {

  let meal1 = [] //朝食
  let meal2 = [] //昼食
  let meal3 = [] //夕食
  let meal4 = [] //間食

  // フードリストの追加
  function buildHTML(data){
    let food_list = `
                    <li class="foods_main__food">
                      <div class="foods_main__name">
                        ${data.name}
                      </div>
                      <ul class="foods_main__index">
                        <li class="foods_main__index--num ${data.class}calorie">
                          ${data.calorie}
                        </li>
                        <li class="foods_main__index--num ${data.class}carbo">
                          ${data.carbo}
                        </li>
                        <li class="foods_main__index--num ${data.class}fat">
                          ${data.fat}
                        </li>
                        <li class="foods_main__index--num ${data.class}protein">
                          ${data.protein}
                        </li>
                        <div class="foods_main__remove">
                          <i class="fas fa-minus-circle remove"></i>
                        </div>
                      </ul>
                    </li>
                    `
    return food_list;
  }

  // フード追加モーダル
  $('.add').click(function(e) {
    e.preventDefault();
    let addId = this.id
    let mealClass = 'meal' + addId
    $('.modal-overlay').fadeIn("fast");
    $('.modal_foods').fadeIn("fast");
    $('.fa-plus-circle').off();
    // 追加ボタンクリック
    $('.fa-plus-circle').click(function(e){
      e.preventDefault();
      let food_id = this.id
      let nutrition = document.getElementById('nutrition' + food_id).children
      let data = {
        class  :mealClass,
        name   :document.getElementById('name' + food_id).innerHTML,
        calorie:Number(nutrition[0].textContent),
        carbo  :Number(nutrition[1].textContent),
        fat    :Number(nutrition[2].textContent),
        protein:Number(nutrition[3].textContent),
      }
      // 追加先の食事のhtml
      let mealId = '#foods' + addId
      // htmlを作成
      let food_list = buildHTML(data);
      $(mealId).append(food_list);

      // 追加する配列を指定
      if (addId == 1) {
        array = meal1
      } else if (addId == 2) {
        array = meal2
      } else if (addId == 3) {
        array = meal3
      } else if (addId == 4) {
        array = meal4
      }

      // 配列に追加されたフードのデータを追加
      array.push(data);

      // それぞれのデータを合計
      let sumCalorie = array.reduce((p, x) => p + x.calorie, 0)
      let sumCarbo   = array.reduce((p, x) => p + x.carbo, 0)
      let sumFat     = array.reduce((p, x) => p + x.fat, 0)
      let sumProtein = array.reduce((p, x) => p + x.protein, 0)

      // 追加先の食事
      let mealTotal = '#meal' + addId 
      let calorieTotal = $(mealTotal).children('.data_calorie')
      let carboTotal   = $(mealTotal).children('.data_carbo')
      let fatTotal     = $(mealTotal).children('.data_fat')
      let proteinTotal = $(mealTotal).children('.data_protein')
      
      // 数値の合計部分
      $(calorieTotal).text(sumCalorie);
      $(carboTotal).text(sumCarbo);
      $(fatTotal).text(sumFat);
      $(proteinTotal).text(sumProtein);

      // // フード追加ごとにモーダルを削除するか検討中
      // $('.modal-overlay').fadeOut("fast");
      // $('.modal_foods').fadeOut("fast");
    })
  })
  
  // モーダルを閉じる
  $('.modal-overlay').click(function() {
    $('.modal-overlay').fadeOut("fast");
    $('.modal_foods').fadeOut("fast");
    $('.modal_new').fadeOut("fast");
  })
  
  // 削除ボタンクリック
  $(document).on("click", ".fa-minus-circle", function(e){
    e.preventDefault();
    let removeList = $(this).parents('.foods_main__food')
    $(removeList).remove();
    $('.fa-minus-circle').off();
  })

});