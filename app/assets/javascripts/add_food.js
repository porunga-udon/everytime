$(function() {

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
                          <i class="fas fa-minus-circle remove ${data.class}minus"></i>
                        </div>
                      </ul>
                    </li>
                    `
    return food_list;
  }

  // フード追加モーダル
  $('.add').click(function(e) {
    e.preventDefault();
    let id = this.id
    $('.modal-overlay').fadeIn("fast");
    $('.modal_foods').fadeIn("fast");
    $(document).off("click", ".fa-plus-circle");
    // 追加ボタンクリック
    $(document).on("click", ".fa-plus-circle", function(e){
      e.preventDefault();

      let serving = Number($('.modal_foods__index__list__num').val());
      console.log(serving)
      
      let foodId = this.id
      let nutrition = document.getElementById('nutrition' + foodId).children
      let data = {
        class  :'meal' + id,
        name   :document.getElementById('name' + foodId).innerHTML,
        calorie:Number(nutrition[0].textContent),
        carbo  :Number(nutrition[1].textContent),
        fat    :Number(nutrition[2].textContent),
        protein:Number(nutrition[3].textContent),
      }
      // 追加先の食事のhtml
      let mealId = '#foods' + id
      // htmlを作成
      let foodList = buildHTML(data);
      $(mealId).append(foodList);
      // 数値の取得
      let calories = document.getElementsByClassName(data.class + 'calorie')
      let carbos   = document.getElementsByClassName(data.class + 'carbo')
      let fats     = document.getElementsByClassName(data.class + 'fat')
      let proteins = document.getElementsByClassName(data.class + 'protein')
      // 合計を出す
      let sumCalorie = 0
      let sumCarbo   = 0
      let sumFat     = 0
      let sumProtein = 0
      for (  let i = 0;  i < fats.length;  i++  ) {
        sumCalorie += Number(calories[i].textContent)
        sumCarbo += Number(carbos[i].textContent)
        sumFat += Number(fats[i].textContent)
        sumProtein += Number(proteins[i].textContent)
       }
      // 追加先の食事を指定
      let mealTotal    = '#meal' + id 
      let calorieTotal = $(mealTotal).children('.data_calorie')
      let carboTotal   = $(mealTotal).children('.data_carbo')
      let fatTotal     = $(mealTotal).children('.data_fat')
      let proteinTotal = $(mealTotal).children('.data_protein')
      // 合計の表示
      $(calorieTotal).text(sumCalorie);
      $(carboTotal).text(sumCarbo);
      $(fatTotal).text(sumFat);
      $(proteinTotal).text(sumProtein);


    })
  })
  
  // モーダルを閉じる
  $('.modal-overlay').click(function() {
    $('.modal-overlay').fadeOut("fast");
    $('.modal_foods').fadeOut("fast");
    $('.modal_new').fadeOut("fast");
    $('form')[0].reset();
  })
  

});