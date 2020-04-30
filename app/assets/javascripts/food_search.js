$(function() {

  let FoodIndex = $('.modal_foods__index')

  function appendFoodList(food) {
    let ListHtml = `
                    <li class="modal_foods__index__list">
                      <div class="modal_foods__index__list__name" id="name${food.id}">
                        ${food.name}
                      </div>
                      <ul class="modal_foods__index__list__data" id="nutrition${food.id}">
                        <li class="modal_foods__index__list__data--num">
                          ${food.calorie}
                        </li>
                        <li class="modal_foods__index__list__data--num">
                          ${food.carbo}
                        </li>
                        <li class="modal_foods__index__list__data--num">
                          ${food.fat}
                        </li>
                        <li class="modal_foods__index__list__data--num">
                          ${food.protein}
                        </li>
                      </ul>
                      <div class="modal_foods__index__list__plus">
                        <i class="fas fa-plus-circle plus" id="${food.id}"></i>
                      </div>
                    </li>
                  `
    FoodIndex.append(ListHtml);
  }

  function appendErrMsgToHTML(msg) {
    let errorMsg = `
                    <div class="modal_foods__index__none">
                      ${msg}
                    </div>
                  `
    FoodIndex.append(errorMsg);
  }

  // 検索フォームに入力
  $('.modal_foods__form').on('keyup', function(e) {
    e.preventDefault();
    let input = $(this).val();
    $.ajax ({
      type:'get',
      url: '/foods',
      data: { keyword: input },
      dataType: 'json'
    })
    // 成功
    .done(function(datas) {

      // フードリストを空にする
      $(FoodIndex).empty();

      // 検索結果による条件分岐
      if (datas.length !== 0) {
        datas.forEach(function(data){
        appendFoodList(data);
        });
        } else {
        appendErrMsgToHTML("一致するフードがありません")
        }
      })
    // 失敗
    .fail(function() {
      alert('検索できませんでした');
    })
  })
})