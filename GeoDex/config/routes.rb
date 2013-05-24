GeoDex::Application.routes.draw do

  get "pages/index"

  root :to => "pages#index"

  resources :features

  resources :users

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  devise_scope :user do 
    get '/logout', :to => 'devise/sessions#destroy'
  end

end
