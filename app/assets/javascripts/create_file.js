// csvファイルの作成機能

$(function() {
  $('#csv').click(function() {

    // CSVに出力するための配列を設定
    csvArray = [];
    
    // 日付を設定し配列に追加
    let now = new Date();
    let year  = now.getFullYear();
    let month = now.getMonth()+1;
    let day   = now.getDate();
    let date  = year+'年'+month+'月'+day+'日'
    csvArray.push([date]);

    csvArray.push(['','カロリー','炭水化物','脂肪','タンパク質']);

    // 朝食のフードを配列に追加する処理
    // 朝食のフードリストを取得
    let MorningList = $('#foods1').find('.foods_main__food')

    if (MorningList.length === 0) { // 登録がない場合
      csvArray.push(['朝食'],['なし'])
    } else {                        // 登録がある場合
      csvArray.push(['朝食'])
      for (  let i = 0;  i < MorningList.length;  i++  ) {
        let foodData    = []        // フード登録用の配列を作成

        // 名前及び栄養素の文字列を取得
        let beforeName    = ($(MorningList[i]).find('.foods_main__name'))[0].textContent
        let beforeCalorie = ($(MorningList[i]).find('.meal1calorie'))[0].textContent
        let beforeCarbo   = ($(MorningList[i]).find('.meal1carbo'))[0].textContent
        let beforeFat     = ($(MorningList[i]).find('.meal1fat'))[0].textContent
        let beforeProtein = ($(MorningList[i]).find('.meal1protein'))[0].textContent

        // 文字列の不要な改行と空白を除去
        let name          = beforeName.replace(/\r?\n?\s+/g, '');
        let calorie       = beforeCalorie.replace(/\r?\n?\s+/g, '');
        let carbo         = beforeCarbo.replace(/\r?\n?\s+/g, '');
        let fat           = beforeFat.replace(/\r?\n?\s+/g, '');
        let protein       = beforeProtein.replace(/\r?\n?\s+/g, '');

        foodData.push(name, calorie, carbo, fat, protein) // 登録用配列に名前と栄養素を追加
        csvArray.push(foodData)                           // CSV要配列にフード配列を追加
      }
    }

    // 昼食のフードを配列に追加する処理
    let LunchList = $('#foods2').find('.foods_main__food')

    if (LunchList.length === 0) {
      csvArray.push([],['昼食'],['なし'])
    } else {
      csvArray.push([],['昼食'])
      for (  let i = 0;  i < LunchList.length;  i++  ) {
        let foodData    = []

        let beforeName    = ($(LunchList[i]).find('.foods_main__name'))[0].textContent
        let beforeCalorie = ($(LunchList[i]).find('.meal2calorie'))[0].textContent
        let beforeCarbo   = ($(LunchList[i]).find('.meal2carbo'))[0].textContent
        let beforeFat     = ($(LunchList[i]).find('.meal2fat'))[0].textContent
        let beforeProtein = ($(LunchList[i]).find('.meal2protein'))[0].textContent

        let name          = beforeName.replace(/\r?\n?\s+/g, '');
        let calorie       = beforeCalorie.replace(/\r?\n?\s+/g, '');
        let carbo         = beforeCarbo.replace(/\r?\n?\s+/g, '');
        let fat           = beforeFat.replace(/\r?\n?\s+/g, '');
        let protein       = beforeProtein.replace(/\r?\n?\s+/g, '');

        foodData.push(name, calorie, carbo, fat, protein)
        csvArray.push(foodData)
      }
    }

    // 夕食のフードを配列に追加する処理
    let DinnerList = $('#foods3').find('.foods_main__food')

    if (DinnerList.length === 0) {
      csvArray.push([],['夕食'],['なし'])
    } else {
      csvArray.push([],['夕食'])
      for (  let i = 0;  i < DinnerList.length;  i++  ) {
        let foodData    = []

        let beforeName    = ($(DinnerList[i]).find('.foods_main__name'))[0].textContent
        let beforeCalorie = ($(DinnerList[i]).find('.meal3calorie'))[0].textContent
        let beforeCarbo   = ($(DinnerList[i]).find('.meal3carbo'))[0].textContent
        let beforeFat     = ($(DinnerList[i]).find('.meal3fat'))[0].textContent
        let beforeProtein = ($(DinnerList[i]).find('.meal3protein'))[0].textContent

        let name          = beforeName.replace(/\r?\n?\s+/g, '');
        let calorie       = beforeCalorie.replace(/\r?\n?\s+/g, '');
        let carbo         = beforeCarbo.replace(/\r?\n?\s+/g, '');
        let fat           = beforeFat.replace(/\r?\n?\s+/g, '');
        let protein       = beforeProtein.replace(/\r?\n?\s+/g, '');

        foodData.push(name, calorie, carbo, fat, protein)
        csvArray.push(foodData)
      }
    }

    // 間食のフードを配列に追加する処理 
    let SnackList = $('#foods4').find('.foods_main__food')

    if (SnackList.length === 0) {
      csvArray.push([],['間食'],['なし'])
    } else {
      csvArray.push([],['間食'])
      for (  let i = 0;  i < SnackList.length;  i++  ) {
        let foodData    = []

        let beforeName    = ($(SnackList[i]).find('.foods_main__name'))[0].textContent
        let beforeCalorie = ($(SnackList[i]).find('.meal4calorie'))[0].textContent
        let beforeCarbo   = ($(SnackList[i]).find('.meal4carbo'))[0].textContent
        let beforeFat     = ($(SnackList[i]).find('.meal4fat'))[0].textContent
        let beforeProtein = ($(SnackList[i]).find('.meal4protein'))[0].textContent

        let name          = beforeName.replace(/\r?\n?\s+/g, '');
        let calorie       = beforeCalorie.replace(/\r?\n?\s+/g, '');
        let carbo         = beforeCarbo.replace(/\r?\n?\s+/g, '');
        let fat           = beforeFat.replace(/\r?\n?\s+/g, '');
        let protein       = beforeProtein.replace(/\r?\n?\s+/g, '');

        foodData.push(name, calorie, carbo, fat, protein)
        csvArray.push(foodData)
      }
    }

    // 合計値を取得して配列に追加

    totalData = []

    let totalCalorie = Number($('#total_calorie')[0].textContent)
    let totalCarbo   = Number($('#total_carbo')[0].textContent)
    let totalFat     = Number($('#total_fat')[0].textContent)
    let totalProtein = Number($('#total_protein')[0].textContent)

    totalData.push('合計値',totalCalorie, totalCarbo, totalFat, totalProtein)

    csvArray.push([],totalData,['','カロリー','炭水化物','脂肪','タンパク質'])

    // BOM の用意（文字化け対策）
    var bom = new Uint8Array([0xEF, 0xBB, 0xBF]);

    // CSV データの用意
    var csv_data = csvArray.map(function(array){return array.join(',')}).join('\r\n');

    var blob = new Blob([bom, csv_data], { type: 'text/csv' });

    var url = (window.URL || window.webkitURL).createObjectURL(blob);

    var a = document.getElementById('downloader');
    a.download = date + '.csv';
    a.href = url;

    // ダウンロードリンクをクリックする
    $('#downloader')[0].click();

  })
})