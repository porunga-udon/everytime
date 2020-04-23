$(function() {

  // フード追加モーダル
  $('.add').click(function(e) {
    var addId = this.id
    console.log(addId);
    $('.modal-overlay').fadeIn("fast");
    $('.modal_foods').fadeIn("fast");

    $('.fa-plus-circle').click(function(){
      console.log('okok');
      $('.modal-overlay').fadeOut("fast");
      $('.modal_foods').fadeOut("fast");
    })
  })

  // モーダルを閉じる
  $('.modal-overlay').click(function() {
    $('.modal-overlay').fadeOut("fast");
    $('.modal_foods').fadeOut("fast");
    $('.modal_new').fadeOut("fast");
  })


});
