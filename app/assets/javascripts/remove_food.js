$(function() {
  
  if(document.URL.match(/foods/)){

    // 削除ボタンクリック
      $(document).on("click", ".fa-minus-circle", function(e){
        e.preventDefault();
        // どの食事から削除するか指定
        let removeList = $(this).parents('.foods_main__food')
        $(removeList).remove();
        $('.fa-minus-circle').off()
        
        // 削除する食事のidの取得
        if (this.className.includes('meal1minus')) {
          var id = '1'
        } else if (this.className.includes('meal2minus')) {
          var id = '2'
        } else if (this.className.includes('meal3minus')) {
          var id = '3'
        } else if (this.className.includes('meal4minus')) {
          var id = '4'
        }
    
        // 数値の取得
        let calories = document.getElementsByClassName('meal' + id + 'calorie')
        let carbos   = document.getElementsByClassName('meal' + id + 'carbo')
        let fats     = document.getElementsByClassName('meal' + id + 'fat')
        let proteins = document.getElementsByClassName('meal' + id +'protein')
    
        // 合計を出す
        let sumCalorie = 0
        let sumCarbo   = 0
        let sumFat     = 0
        let sumProtein = 0
        for (  let i = 0;  i < fats.length;  i++  ) {
          sumCalorie += Number(calories[i].textContent)
          sumCarbo += Number(carbos[i].textContent)
          sumFat += Number(fats[i].textContent)
          sumProtein += Number(proteins[i].textContent)
         }
    
        // 削除先の食事を指定
        let mealTotal    = '#meal' + id
        let calorieTotal = $(mealTotal).children('.data_calorie')
        let carboTotal   = $(mealTotal).children('.data_carbo')
        let fatTotal     = $(mealTotal).children('.data_fat')
        let proteinTotal = $(mealTotal).children('.data_protein')
    
        // 合計の表示
        $(calorieTotal).text(sumCalorie);
        $(carboTotal).text(sumCarbo);
        $(fatTotal).text(sumFat);
        $(proteinTotal).text(sumProtein);
    
        // 合計が0の場合には数値を表示しない
        if (fats.length == 0) {
          $(calorieTotal).text("");
          $(carboTotal).text("");
          $(fatTotal).text("");
          $(proteinTotal).text("");
        }
    
      })
  }


});
