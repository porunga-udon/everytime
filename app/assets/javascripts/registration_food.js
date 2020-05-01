$(function() {

  // 新規登録のフードリスト追加
  function buildHTML(newFood){
    let newList = `
                    <li class="modal_foods__index__list">
                      <div class="modal_foods__index__list__name", id="name${newFood.id}">
                        ${newFood.name}
                      </div>
                      <div class="modal_foods__index__list__num">
                        <select name="quantity" id="serving${newFood.id}" class="quantity_select"><option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                        </select>
                      </div>
                      <div class="modal_foods__index__list__serving">
                        人前：
                      </div>
                      <div class="modal_foods__index__list__quantity" id="quantity${newFood.id}">
                        ${newFood.quantity}
                      </div>
                      <ul class="modal_foods__index__list__data" id="nutrition${newFood.id}">
                        <li class="modal_foods__index__list__data--num">
                          ${newFood.calorie}
                        </li>
                        <li class="modal_foods__index__list__data--num">
                          ${newFood.carbo}
                        </li>
                        <li class="modal_foods__index__list__data--num">
                          ${newFood.fat}
                        </li>
                        <li class="modal_foods__index__list__data--num">
                          ${newFood.protein}
                        </li>
                      </ul>
                      <div class="modal_foods__index__list__plus">
                        <i class="fas fa-plus-circle plus" id="${newFood.id}"></i>
                      </div>
                    </li>
                    `
    return newList;
  }

  // データベースに追加クリック
  $('#moda_new_link').click(function(e) {
    e.preventDefault();
    $('.modal_new').fadeIn("fast");
    // 追加するボタンクリック
    $('#new_food_registration').submit(function(e) {
      e.preventDefault();
      let formData = new FormData(this);
      let url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      // 成功
      .done(function(newFood){
        let newList = buildHTML(newFood);
        $('.modal_foods__index').append(newList);
        $('form')[0].reset();
        $('.modal_foods__index').animate({ scrollTop: $('.modal_foods__index')[0].scrollHeight});
        $('.modal_new__add__bottun').prop('disabled', false);
      })
      // 失敗
      .fail(function() {
        alert("登録に失敗しました");
        $('.modal_new__add__bottun').prop('disabled', false);
      });
      $('.modal_new').fadeOut("fast");
      $('#new_food_registration').off();
    })
  })

});
