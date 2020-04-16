Rails.application.routes.draw do
  root to: "users#index"
  resources :users, only: :index
  
  resources :records, only: :calculation do
    collection do
      get 'calculation', to: 'records#calculation'
    end
  end
end
