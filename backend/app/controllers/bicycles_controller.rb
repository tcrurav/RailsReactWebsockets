class BicyclesController < ApplicationController
  def index
    @bicycles = Bicycle.all 
    render json: @bicycles
  end 

  def show
      @bicycle = Bicycle.find(params[:id])
      render json: @bicycle
  end 

  def create
      @bicycle = Bicycle.create(
          menu_name: params[:menu_name],
          restaurant_name: params[:restaurant_name],
          menu_description: params[:menu_description]
      )

      render json: @bicycle
  end 

  def update
      @bicycle = Bicycle.find(params[:id])
      @bicycle.update(
          menu_name: params[:menu_name],
          restaurant_name: params[:restaurant_name],
          menu_description: params[:menu_description]
      )
      render json: @bicycle
  end 

  def destroy
      @bicycles = Bicycle.all 
      @bicycle = Bicycle.find(params[:id])
      @bicycle.destroy
      render json: @bicycles
  end

  def send_message
    ActionCable.server.broadcast('orbea_fun_club', "new bicycle has been created")
  end

end
