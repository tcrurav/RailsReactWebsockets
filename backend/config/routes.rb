Rails.application.routes.draw do
  resources :bicycles

  get '/send_message', to: 'bicycles#send_message'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  mount ActionCable.server => '/cable'
end
