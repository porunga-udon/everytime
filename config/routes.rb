Rails.application.routes.draw do

  devise_for :users
  root to: "users#index"
  resources :users, only: [:index, :show]

  resources :foods, only: [:index,:create]
  
  resources :records, only: :calculation do
    collection do
      get 'calculation', to: 'records#calculation'
    end
  end
end
