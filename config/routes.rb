Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :categories
    resources :pages
    resources :sections
  end
end
