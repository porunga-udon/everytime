$(function() {
  
  if(document.URL.match(/diaries/)){
    let buildHTML = function(data, meal) {
      let html = `
                  <li class="diary_main__food" id="${data.id}">
                    <div class="diary_main__name">
                      ${data.name}
                    </div>
                    <div class="diary_main__quantity" id="${data.id}">
                      ${data.quantity}
                    </div>
                    <ul class="diary_main__index">
                      <li class="diary_main__index--num meal${meal}calorie">
                        ${data.calorie}
                      </li>
                      <li class="diary_main__index--num meal${meal}carbo">
                        ${data.carbo}
                      </li>
                      <li class="diary_main__index--num meal${meal}fat">
                        ${data.fat}
                      </li>
                      <li class="diary_main__index--num meal${meal}protein">
                        ${data.protein}
                      </li>
                    </ul>
                  </li>
                        `
      return html;
    }

    // 今日の日付を作成
    let now = new Date();
    let year  = String(now.getFullYear());
    let month = String("00" + (now.getMonth()+1)).slice(-2);
    let day   = String(now.getDate());
    let date  = year + "-" + month + "-" + day
    $(".diary_main__date--selected").text(date);

    // 一日戻る--------------------------------
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
      .done(function(FoodsData) {
        $('.diary_main__food').remove();
        if (FoodsData.length > 0) {
          for (  let i = 0;  i < 4;  i++  ) {
            let Foods = FoodsData[i]
            for (  let m = 0;  m < Foods.length;  m++  ) {
              let html = buildHTML(Foods[m], i+1);
              $('#foods'+(i+1)).append(html);
            }
          }
          totalCaliculate();
        } else {
          Nodata();
        }
      })
      // 失敗
      .fail(function() {
        console.log('miss');
      })
    })

    // 一日進める---------------------------
    $('#next-day').click(function() {
      now.setDate(now.getDate() + 1);
      let year  = String(now.getFullYear());
      let month = String("00" + (now.getMonth()+1)).slice(-2);
      let day   = String(now.getDate());
      let date  = year + "-" + month + "-" + day
      $(".diary_main__date--selected").text(date);
      let ajax_day =  year + month + day
      $.ajax ({
        type:'get',
        url: '/diaries',
        data: { day : ajax_day },
        dataType: 'json'
      })
      // 成功
      .done(function(FoodsData) {
        $('.diary_main__food').remove();
        if (FoodsData.length > 0) {
          for (  let i = 0;  i < 4;  i++  ) {
            let Foods = FoodsData[i]
            for (  let m = 0;  m < Foods.length;  m++  ) {
              let html = buildHTML(Foods[m], i+1);
              $('#foods'+(i+1)).append(html);
            }
          }
          totalCaliculate();
        } else {
          Nodata();
        }
      })
      // 失敗
      .fail(function() {
        console.log('miss');
      })
    })

// --------------ここから合計値の計算----------------
    let totalCaliculate = function() {
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

        // 食事ごとの合計を取得
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
  }
  
  // データがない場合の合計表示部分
  let Nodata = function() {
    $('.data_calorie').text('');
    $('.data_carbo').text('');
    $('.data_fat').text('');
    $('.data_protein').text('');
    $('.diary_main__all__data--num').text(0);
  }

  // csv出力モーダルの表示-------------------------------
  $('.add_modal').click(function() {
    modalResize();
    $('.modal-overlay').fadeIn("fast");
    $('.modal_diary').fadeIn("fast");

    // 「出力する」ボタンを押した場合の処理
    $('#create_csv').click(function() {
      let sy = $('#start_year   option:selected').text();
      let sm = ("00" + $('#start_month  option:selected').text()).slice(-2);
      let sd = ("00" + $('#start_day    option:selected').text()).slice(-2);
      let fy = $('#finish_year  option:selected').text();
      let fm = ("00" + $('#finish_month option:selected').text()).slice(-2);
      let fd = ("00" + $('#finish_day   option:selected').text()).slice(-2);
      // 開始日と終了日を作成
      let start_date   = sy + sm + sd
      let finish_date  = fy + fm + fd
      $.ajax ({
        type:'get',
        url: '/diaries/output',
        data: { 
          start_date : start_date,
          finish_date : finish_date
          },
        dataType: 'json'
      })
      // 成功
      .done(function(data) {

        console.log(data[0]);

        let CsvArray  = []
        let MealName  = [['朝食'],['昼食'],['夕食'],['間食']]
        let Nutrition = ["", "量","カロリー", "炭水化物", "脂肪", "タンパク質"]

        // csv出力用の配列を作る処理
        for (let i = 0; i < data.length; i++) {
          let DayData = data[i];
          let DiaryDay = DayData.shift();
          // 日付を取り出し配列型に処理する
          let ProcessedDay = Object.keys(DiaryDay).map(function (key) {return DiaryDay[key]})
          // 開始日かそれ以外かで処理を変える
          if (CsvArray.length === 0) {
            CsvArray.push(ProcessedDay,Nutrition);
          } else {
            CsvArray.push(Nutrition,[],ProcessedDay,Nutrition);
          }

          let Calorie = []
          let Carbo   = []
          let Fat     = []
          let Protein = []

          for (let m = 0; m < DayData.length; m++) {
            let MealData = DayData[m];
            // 食事の登録の有無で処理を変える
            if (MealData.length === 0) {
              // 朝食かどうかで処理を変える
              if (MealName[m] === MealName[0]) {
                CsvArray.push(MealName[m],['なし'])
              } else {
                CsvArray.push([],MealName[m],['なし'])
              }
            } else {
              // 朝食かどうかで処理を変える
              if (MealName[m] === MealName[0]) {
                CsvArray.push(MealName[m])
              } else {
                CsvArray.push([],MealName[m])
              }
              
              // 食べ物のデータを配列化する
              for (let f = 0; f < MealData.length; f++) {
                let FoodData = MealData[f];
                let ProcessedFood = Object.keys(FoodData).map(function (key) {return FoodData[key]})
                CsvArray.push(ProcessedFood);
                // 栄養の合計値を出すため配列を作成
                Calorie.push(ProcessedFood[2]);
                Carbo.push(ProcessedFood[3]);
                Fat.push(ProcessedFood[4]);
                Protein.push(ProcessedFood[5]);
              }
            }
          }

          // 日毎の合計値を配列に追加
          let TotalCalorie = 0
          let TotalCarbo   = 0
          let TotalFat     = 0
          let TotalProtein = 0
          for (let v = 0; v < Calorie.length; v++) {
            TotalCalorie += Calorie[v]
            TotalCarbo   += Carbo[v]
            TotalFat     += Fat[v]
            TotalProtein += Protein[v]
          }
          CsvArray.push([], ['合計値','', TotalCalorie, TotalCarbo, TotalFat, TotalProtein]);
        }

        console.log(CsvArray);

      // BOM の用意（文字化け対策）
      let bom = new Uint8Array([0xEF, 0xBB, 0xBF]);

      // CSV データの用意
      let csv_data = CsvArray.map(function(array){return array.join(',')}).join('\r\n');
  
      let blob = new Blob([bom, csv_data], { type: 'text/csv' });
  
      let url = window.URL.createObjectURL(blob);
  
      let a = document.getElementById('downloader');
  
      // a.download = date + '.csv';       //日付+.csv
      a.download = 'ポルンガ.csv';
  
      a.href = url;
  
      // ダウンロードリンクをクリックする
      $('#downloader')[0].click();
      })
      // 失敗
      .fail(function() {
        console.log('miss');
      })

      // 出力後モーダルを閉じる
      $('.modal-overlay').fadeOut("fast");
      $('.modal_diary').fadeOut("fast");
      $("#create_csv").off();
    })
  })











  //モーダルの位置を中央に調整するメソッド
  $(window).resize(modalResize);
  function modalResize(){
    // ディスプレイ
    let width = $(window).width();
    let height = $(window).height();

    // ダイアリー出力モーダル
    let foodWeight = $(".modal_diary").outerWidth();
    let foodHeight = $(".modal_diary").outerHeight();

    //取得した値をcssに追加する
    $(".modal_diary").css({
      "left": ((width- foodWeight)/2) + "px",
      "top": ((height - foodHeight)/2) + "px"
    });
  }

  // モーダルを閉じる
  $('.modal_close').click(function() {
    $('.modal-overlay').fadeOut("fast");
    $('.modal_diary').fadeOut("fast");
    $("#create_csv").off();
  })

});