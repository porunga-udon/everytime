# README

## TopPage
![TopPage](https://i.gyazo.com/b093f6a2b0903ff5904f58f8f2902631.png)

## Contents
![Contents](https://i.gyazo.com/d22316f26d0430ed01f51e7c9dd8c301.png)

## Features

### 1日の摂取カロリー計算
食べたものを登録することで、その日の摂取カロリーがわかります。
![1日の摂取カロリー](https://i.gyazo.com/654fa862d13a5fb65fbf5e85f14132d2.png)
### 消費カロリー計算
1日の消費カロリーを計算します。
![消費カロリー](https://i.gyazo.com/549f0e289ac6e92ac18d5066caeaca21.png)
### 目標摂取カロリー計算
目標体重と消費カロリーを踏まえ、1日の目標摂取カロリーを計算します。
![摂取カロリー](https://i.gyazo.com/511da1d029963079d937b44c66f230c6.png)


## usersテーブル

|Column         |Type  |Options                  |
|---------------|------|-------------------------|
|nickname       |string|null: false, unique: true|
|email          |string|null: false, unique: true|
|password       |string|null: false              |

### Association
- has_one    :user_data
- has_many   :diary

## user_dataテーブル

|Column         |Type      |Options                            |
|---------------|----------|-----------------------------------|
|gender         |integer   |null: false                        |
|birthday       |date      |null: false                        |
|weight         |decimal   |null: false, precision: 4, scale: 1|
|life_index_id  |integer   |null: false, foreign_key:true      |
|burn_calorie   |integer   |null: false                        |
|goal_weight    |decimal   |null: false, precision: 4, scale: 1|
|goal_period    |integer   |null: false                        |
|intake_calorie |string    |null: false                        |
|user_id        |references|null: false, foreign_key:true      |

### Association
- belongs_to :user, dependent: :destroy

## foodsテーブル

|Column         |Type   |Options                  |
|---------------|-------|-------------------------|
|name           |text   | |
|calorie        |integer| |
|carbo          |integer| |
|fat            |integer| |
|protein        |integer| |
|quantity       |text   | |

### Association
- has_many :diarys, through: :diary_foods

## diarysテーブル

|Column            |Type   |Options                      |
|------------------|-------|-----------------------------|
|registration_date |date   |null: false                  |
|meal_id           |integer|null: false, foreign_key:true|
|user_id           |integer|null: false, foreign_key:true|

### Association
- belongs_to :user
- has_many   :foods, through: :diary_foods

## diary_foodsテーブル

|Column  |Type   |Options                       |
|--------|-------|------------------------------|
|diary_id|integer|null: false, foreign_key: true|
|food_id |integer|null: false, foreign_key: true|

### Association
- belongs_to :diary
- belongs_to :food