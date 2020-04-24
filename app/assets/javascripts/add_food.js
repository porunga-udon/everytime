$(function() {

  // function buildHTML(message){
  //   let html = `
  //   `
  // }

  // フード追加モーダル
  $('.add').click(function(e) {
    var addId = this.id
    console.log(addId);
    $('.modal-overlay').fadeIn("fast");
    $('.modal_foods').fadeIn("fast");
  })
  
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
    $('.modal-overlay').fadeOut("fast");
    $('.modal_foods').fadeOut("fast");
  })

  // モーダルを閉じる
  $('.modal-overlay').click(function() {
    $('.modal-overlay').fadeOut("fast");
    $('.modal_foods').fadeOut("fast");
    $('.modal_new').fadeOut("fast");
  })


});
