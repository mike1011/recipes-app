class RecipesController < ApplicationController

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end

  def index
    recipes = Recipe.all
    render json: recipes
  end

  def create
    recipe = Recipe.create!(recipe_params)
    render json: recipe, status: :created
  end

  def update # used only to increment claps, no editions in this version of the app
    recipe = Recipe.find(params[:id])
    recipe.clap
    render json: recipe, status: :ok
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :description, :total_people, :preparation_time, :user_id)
  end
end
