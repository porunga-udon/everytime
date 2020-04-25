$(function() {

  // フードリストの追加
  function buildHTML(data){
    let food_list = `
                    <li class="foods_main__food">
                      <div class="foods_main__name">
                        ${data.name}
                      </div>
                      <ul class="modal_foods__index__list__data" id="nutrition6">
                        <li class="modal_foods__index__list__data--num">
                          ${data.calorie}
                        </li>
                        <li class="modal_foods__index__list__data--num">
                          ${data.carbo}
                        </li>
                        <li class="modal_foods__index__list__data--num">
                          ${data.fat}
                        </li>
                        <li class="modal_foods__index__list__data--num">
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
    $('.modal-overlay').fadeIn("fast");
    $('.modal_foods').fadeIn("fast");
    $('.fa-plus-circle').off();
    // 追加ボタンクリック
    $('.fa-plus-circle').click(function(e){
      e.preventDefault();
      let food_id = this.id
      let nutrition = document.getElementById('nutrition' + food_id).children
      let data = {
        name   :document.getElementById('name' + food_id).innerHTML,
        calorie:nutrition[0].textContent,
        carbo  :nutrition[1].textContent,
        fat    :nutrition[2].textContent,
        protein:nutrition[3].textContent,
      }
      let food_list = buildHTML(data);
      let mealId = '#foods' + addId
      $(mealId).append(food_list);
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