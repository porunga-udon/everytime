// ダイアリー作成のためのajax通信機能
$(function() {
  $('#registration').click(function() {

    // 日付を作成
    let now = new Date();
    let year  = String(now.getFullYear());
    let month = String("00" + (now.getMonth()+1)).slice(-2);
    let day   = String(now.getDate());
    let date  = year + month + day

    // フードを取得
    let MealList = [
      MorningList = $('#foods1').find('.foods_main__food'),
      LunchList   = $('#foods2').find('.foods_main__food'),
      DinnerList  = $('#foods3').find('.foods_main__food'),
      SnackList   = $('#foods4').find('.foods_main__food')
    ]

    let MorningIndex = Number(MorningList.length)
    let LunchIndex   = Number(LunchList.length) + MorningIndex
    let DinnerIndex  = Number(DinnerList.length) + LunchIndex
    let SnackIndex   = Number(SnackList.length) + DinnerIndex

    // フードと量用の配列を作成
    let FoodsData = []
    let ServData  = []

    // それぞれ配列に追加していく
    for (  let i = 0;  i < MealList.length;  i++  ) {
      for (  let m = 0;  m < MealList[i].length;  m++  ) {
        let foodId    = Number($((MealList[i])[m]).attr('id'))
        let servingId = Number($((MealList[i])[m]).find('.foods_main__quantity').attr('id'))
        FoodsData.push(foodId)
        ServData.push(servingId) 
      }
    }

    $.ajax ({
      type:'post',
      url: '/diaries',
      data: {
        diary:{ 
          registration_date : date,
          morning_index     : MorningIndex,
          lunch_index       : LunchIndex,
          dinner_index      : DinnerIndex,
          snack_index       : SnackIndex,
        },
        food_ids  : FoodsData,
        serv_data : ServData
      },
      dataType: 'json'
    })
    // 成功
    .done(function() {
      console.log('ok');
    // 失敗
    })
    .fail(function() {
      console.log('miss');
    })
  })
})