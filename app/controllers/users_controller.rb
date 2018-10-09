class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render json: @user.to_json(:include => [:recipes])
  end

  def index
    @users = User.all
    render json: @users
  end
end
