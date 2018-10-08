Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  resources :recipes, only: [:index, :show, :create, :destroy]
end
