Rails.application.routes.draw do
  root to: 'cocktail#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, format: 'json' do
    resources :cocktails, only: [:index]
  end
end
