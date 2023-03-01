Rails.application.routes.draw do
  resources :bicycles

  post '/send_message', to: 'bicycles#send_message'

  mount ActionCable.server => '/cable'
end
