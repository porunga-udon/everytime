$(function() {
  $(window).on('click', function() {

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

  })
})