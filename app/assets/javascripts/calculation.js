$(function() {

  // 消費カロリー
  $('#burn_calorie').click(function() {

    // 性別を取得
    let genders = document.getElementsByName("gender");
    for (let i = 0; i < genders.length; i++){
      if(genders[i].checked){ 
        gender = genders[i].value;
        break;
      }
    }

    // 年齢を取得
    let age = Number($('#age_select').val());

    // 基礎代謝基準値判定
    // 男性の場合
    if (gender == 'man') {
      if (age >= 18 && age <= 29) {       //18歳以上29歳以下
        var BasalMetabolism = 24
      } else if (age >= 30 && age <= 49){ //30歳以上49歳以下
        var BasalMetabolism = 22.3
      } else if (age >= 50) {              //50歳以上
        var BasalMetabolism = 21.5
      }
    // 女性の場合
    } else if (gender == 'woman') {
      if (age >= 18 && age <= 29) {       //18歳以上29歳以下
        var BasalMetabolism = 23.6
      } else if (age >= 30 && age <= 49){ //30歳以上49歳以下
        var BasalMetabolism = 21.7
      } else if (age >= 50) {              //50歳以上
        var BasalMetabolism = 20.7
      }
    }

    // 体重を取得
    let weight = Number($('#weight_form').val());

    // 生活指数を取得
    let LifeIndex = Number($('#life_index_select').val());

    // 計算
    let BurnCalorie = BasalMetabolism * weight * LifeIndex

    // 表示(小数点切り捨て)
    $('#burn_result').val('約' + parseInt(BurnCalorie,10));

    $('.calc_main__goal').fadeIn("fast");
  })

  // 摂取カロリー
  $('#intake_calorie').click(function() {

    // 消費カロリーを取得
    let BurnCalorie = Number($('#burn_result').val().replace(/[^0-9]/g, ''));

    // 現在の体重を取得
    let CurrentWeight = Number($('#weight_form').val());

    // 目標体重を取得
    let GoalWeight = Number($('#goal_weight').val());

    // 目標達成に必要なカロリー
    let NeededCalorie = (GoalWeight - CurrentWeight) * 7200

    // 目標達成までの日数を取得
    let GoalDays = $('#goal_day').val();

    // 必要なカロリーを1日分に換算
    let DayCalorie = NeededCalorie / GoalDays

    // 1日の目標カロリーを計算
    let IntakeCalorie = BurnCalorie + DayCalorie
    
    // 一日の目標カロリーを表示
    $('#intake_result').val('約' + parseInt(IntakeCalorie, 10));

  })

})