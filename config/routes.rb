Rails.application.routes.draw do
<<<<<<< Updated upstream
  root to: "foods#index"
  resources :foods, only: :index
=======
  root to: "users#index"
  resources :users, only: :index
  
  resources :records, only: :calculation do
    collection do
      get 'calculation', to: 'records#calculation'
    end
  end
>>>>>>> Stashed changes
end
