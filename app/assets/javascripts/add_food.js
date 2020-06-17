$(function() {

  if(document.URL.match(/foods/)){
    // フードリストの追加
    function buildHTML(data){
      let food_list = `
                      <li class="foods_main__food" id="${data.id}">
                        <div class="foods_main__name">
                          ${data.name}
                        </div>
                        <div class="foods_main__quantity" id="${data.serv}">
                          ${data.quantity}
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
  
      // 画面中央を計算する関数を実行
      modalResize();
  
      let id = this.id        //食事を指定するid
      $('.modal-overlay').fadeIn("fast");
      $('.modal_foods').fadeIn("fast");
      $(document).off("click", ".fa-plus-circle");
  
      // 追加ボタンクリック
      $(document).on("click", ".fa-plus-circle", function(e){
        e.preventDefault();
  
        // 食べ物を指定するid
        let foodId = this.id
        
        // 何人前か取得
        let serving = Number($('#serving' + foodId).val());
  
        // 一人前あたりの量を取得
        let quantity = document.getElementById('quantity' + foodId).innerHTML
  
        // 量の数値部分を取得
        let num = quantity.replace(/[^0-9]/g, '');
  
        // 数値の部分を削除して単位を取得
        let unit = quantity.replace(num, '');
  
        // htmlに渡すデータを作成
        let nutrition = document.getElementById('nutrition' + foodId).children
        let data = {
          id       :foodId,
          class    :'meal' + id,
          name     :document.getElementById('name' + foodId).innerHTML,
          quantity : (serving * num) + unit,
          serv     :serving,
          calorie  :Number(nutrition[0].textContent) * serving,
          carbo    :Number(nutrition[1].textContent) * serving,
          fat      :Number(nutrition[2].textContent) * serving,
          protein  :Number(nutrition[3].textContent) * serving,
        }
  
        // 追加先の食事のhtmlを指定
        let mealId = '#foods' + id
  
        // リストhtmlを作成
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
  
    //モーダルの位置を中央に調整
    $(window).resize(modalResize);
    function modalResize(){
      
      // ディスプレイ
      let width = $(window).width();
      let height = $(window).height();
  
      // フード追加モーダル
      let foodWeight = $(".modal_foods").outerWidth();
      let foodHeight = $(".modal_foods").outerHeight();
  
      // フード新規登録モーダル
      let newWeight = $(".modal_new").outerWidth();
      let newHeight = $(".modal_new").outerHeight();
  
      //取得した値をcssに追加する
      $(".modal_foods").css({
        "left": ((width- foodWeight)/2) + "px",
        "top": ((height - foodHeight)/2) + "px"
      });
      $(".modal_new").css({
        "left": ((width- newWeight)/2) + "px",
        "top": ((height - newHeight)/2) + "px"
      });
    }
  
    // モーダルを閉じる
    if(document.URL.match(/foods/)){
      $('.modal-overlay').click(function() {
        $('.modal-overlay').fadeOut("fast");
        $('.modal_foods').fadeOut("fast");
        $('.modal_new').fadeOut("fast");
        $('form')[0].reset();
        $('#new_food_registration').off();
      })
    }
  }
  
});