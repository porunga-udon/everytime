Rails.application.routes.draw do

  devise_for :users
  root to: "users#index"
  resources :users, only: [:index, :show]

  # resources :user_datas, only: [:new, :create]

  resources :foods, only: [:index,:create]

  resources :diaries, only: [:index, :create, :output] do
    collection do
      get 'output', to: 'diaries#output'
    end
  end
  
  resources :records, only: :calculation do
    collection do
      get 'calculation', to: 'records#calculation'
    end
  end
end
