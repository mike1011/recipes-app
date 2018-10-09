class RecipesController < ApplicationController

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end

  def index
    if params.has_key?(:user_id)
      user = User.find(params[:user_id])
      recipes = user.recipes
    else
      recipes = Recipe.all
    end
    render json: recipes
  end

  def create
  end

  private

  def recipe_params
    params.require(:recipe).permit([:title, :description, :total_people, :preparation_time])
  end
end
