class RecipesController < ApplicationController
  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end

  def index
    @recipes = Recipe.all
    render json: @recipes
  end

  def create
  end

  private

  def recipe_params
    params.permit([:title, :description, :total_people, :preparation_time])
  end
end
