Rails.application.routes.draw do
  
  root "home#index"
  
  resources :users, only: [:new]
  
  get "/login", to: "sessions#new"
  post "/login", to: "links#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
