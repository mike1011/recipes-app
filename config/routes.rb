Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :recipes, only: [:index, :show, :create]
end
