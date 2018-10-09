Rails.application.routes.draw do
  resources :users, only: [:index, :show] do
    resources :recipes, only: [:index]
  end

  resources :recipes, only: [:index, :show, :create]
end
