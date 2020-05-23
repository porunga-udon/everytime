// ダイアリー作成のためのajax通信機能
$(function() {
  $('#registration').click(function() {

    let now = new Date();
    let year  = now.getFullYear();
    let month = now.getMonth()+1;
    let day   = now.getDate();
    let date  = month+day

    let MealList = [
      MorningList = $('#foods1').find('.foods_main__food'),
      LunchList   = $('#foods2').find('.foods_main__food'),
      DinnerList  = $('#foods3').find('.foods_main__food'),
      SnackList   = $('#foods4').find('.foods_main__food')
    ]

    // フード用の配列を作成
    let AllData         = [
      MorningData     = [],
      LunchData       = [],
      DinnerData      = [],
      SnackData       = [],
      MorningServData = [],
      LunchServData   = [],
      DinnerServData  = [],
      SnackServData   = []
    ]

    // MealListの繰り返し文
    for (  let i = 0;  i < MealList.length;  i++  ) {
      // それぞれの食事の繰り返し
      for (  let m = 0;  m < MealList[i].length;  m++  ) {
        let foodId    = Number($((MealList[i])[m]).attr('id'))
        AllData[i].push(foodId)
      }
      for (  let m = 0;  m < MealList[i].length;  m++  ) {
        let servingId = Number($((MealList[i])[m]).find('.foods_main__quantity').attr('id'))
        AllData[i].push(servingId) 
      }
      // for (  let m = 0;  m < MealList[i].length;  m++  ) {
      //   let foodId    = Number($((MealList[i])[m]).attr('id'))
      //   let servingId = Number($((MealList[i])[m]).find('.foods_main__quantity').attr('id'))
      //   AllData[i].push(foodId)
      //   AllData[i].push(servingId) 
      // }
    }

    $.ajax ({
      type:'post',
      url: '/diaries',
      data: { 
        date         : now,
        all_data     : AllData
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