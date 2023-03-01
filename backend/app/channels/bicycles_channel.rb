class BicyclesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "orbea_fun_club"
  end

  def unsubscribed
  end
end