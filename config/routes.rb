Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json }
  resources :recipes
end
