$(function() {

  $('.calculate_help').click(function(e) {
    e.preventDefault();
    let helpId = this.id
    console.log(helpId);
    modalResize();
    $('.modal-overlay').fadeIn("fast");
    $('#' + helpId + '_modal').fadeIn("fast");
  })

  $('.modal_help__close__bottun').click(function() {
    $('.modal-overlay').fadeOut("fast");
    $('.modal_help').fadeOut("fast");
  })

  $(window).resize(modalResize);
  function modalResize(){
    // ディスプレイ
    let width = $(window).width();
    let height = $(window).height();
    // フード追加モーダル
    let helpWeight = $(".modal_help").outerWidth();
    let helpHeight = $(".modal_help").outerHeight();

    //取得した値をcssに追加する
    $(".modal_help").css({
      "left": ((width- helpWeight)/2) + "px",
      "top": ((height - helpHeight)/2) + "px"
    });
  }

})

