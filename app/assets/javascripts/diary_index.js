$(function() {
  
  if(document.URL.match(/diaries/)){
    // 今日の日付を作成
    let now = new Date();
    let year  = String(now.getFullYear());
    let month = String("00" + (now.getMonth()+1)).slice(-2);
    let day   = String(now.getDate());
    let date  = year + "-" + month + "-" + day
    let porunga   = year + month + day
    $(".diary_main__date--selected").text(date);

    // 一日戻る
    $('#previous-day').click(function() {
      now.setDate(now.getDate() - 1);
      let year  = String(now.getFullYear());
      let month = String("00" + (now.getMonth()+1)).slice(-2);
      let day   = String(now.getDate());
      let date  = year + "-" + month + "-" + day
      let ajax_day =  year + month + day
      $(".diary_main__date--selected").text(date);
      $.ajax ({
        type:'get',
        url: '/diaries',
        data: { day : ajax_day },
        dataType: 'json'
      })
      // 成功
      .done(function() {
        console.log('ok');
      })
      // 失敗
      .fail(function() {
        console.log('miss');
      })
    })

    // 一日進める
    $('#next-day').click(function() {
      now.setDate(now.getDate() + 1);
      let year  = String(now.getFullYear());
      let month = String("00" + (now.getMonth()+1)).slice(-2);
      let day   = String(now.getDate());
      let date  = year + "-" + month + "-" + day
      $(".diary_main__date--selected").text(date);
    })


// --------------ここから合計値の計算----------------
    // 食事ごとに繰り返し処理をする
    for (  let i = 1;  i < 5;  i++  ) {
      let calories = document.getElementsByClassName('meal'+ i + 'calorie')
      let carbos   = document.getElementsByClassName('meal'+ i + 'carbo')
      let fats     = document.getElementsByClassName('meal'+ i + 'fat')
      let proteins = document.getElementsByClassName('meal'+ i + 'protein')

      let sumCalorie = 0
      let sumCarbo   = 0
      let sumFat     = 0
      let sumProtein = 0

      // 栄養成分それぞれの合計を出して表示する
      for (  let m = 0;  m < calories.length;  m++  ) {
        sumCalorie += Number(calories[m].textContent)
        sumCarbo   += Number(carbos[m].textContent)
        sumFat     += Number(fats[m].textContent)
        sumProtein += Number(proteins[m].textContent)

        let mealTotal    = '#meal' + i
        let calorieTotal = $(mealTotal).children('.data_calorie')
        let carboTotal   = $(mealTotal).children('.data_carbo')
        let fatTotal     = $(mealTotal).children('.data_fat')
        let proteinTotal = $(mealTotal).children('.data_protein')
  
        // 合計の表示
        $(calorieTotal).text(sumCalorie);
        $(carboTotal).text(sumCarbo);
        $(fatTotal).text(sumFat);
        $(proteinTotal).text(sumProtein);
      }

      // 食事ごとのの合計を取得
      let allCalorie = document.getElementsByClassName('data_calorie')
      let allCarbo = document.getElementsByClassName('data_carbo')
      let allFat = document.getElementsByClassName('data_fat')
      let allProtein = document.getElementsByClassName('data_protein')
  
      // それぞれ栄養ごとに合計
      totalCalorie = 0
      totalCarbo   = 0
      totalFat     = 0
      totalProtein = 0
  
      for (  let i = 0;  i < allCalorie.length;  i++  ) {
        totalCalorie += Number(allCalorie[i].textContent)
        totalCarbo += Number(allCarbo[i].textContent)
        totalFat += Number(allFat[i].textContent)
        totalProtein += Number(allProtein[i].textContent)
      }
      
      // 総合計を表示
      $('#total_calorie').text(totalCalorie);
      $('#total_carbo').text(totalCarbo);
      $('#total_fat').text(totalFat);
      $('#total_protein').text(totalProtein);
    }

  }

});