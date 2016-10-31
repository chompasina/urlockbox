Rails.application.routes.draw do
  
  root "home#index"
  
  resources :users, only: [:new, :create]
  resources :links, only: [:index, :create, :update]
  
  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  namespace :api do
    namespace :v1 do
      resources :links
    end
  end
end
