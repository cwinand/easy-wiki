Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :categories do
      put '/', on: :collection, action: :update_all
    end
    resources :pages
    resources :sections
  end
end
