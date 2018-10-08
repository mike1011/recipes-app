Rails.application.routes.draw do
  get 'users/show'

  resources :users
  resources :recipes
end
