Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :categories do
      put '/', on: :collection, action: :update_all
      get 'pages', on: :member, action: :show_pages
    end
    resources :pages
    resources :sections
  end
end
