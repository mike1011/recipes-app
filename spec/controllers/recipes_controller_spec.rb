require 'rails_helper'

RSpec.describe RecipesController, type: :controller do
  describe "#show" do
    before do
      @user = FactoryBot.create(:user)
      @recipe_name = "Test Recipe for #show!"
      @recipe = FactoryBot.create(:recipe, user: @user, title: @recipe_name)
    end

    it "responds successfully" do
      get :show, params: { id: @recipe.id }
      expect(response).to be_success
    end

    it "has the details for a specific recipe" do
      get :show, params: { id: @recipe.id }
      recipe = JSON.parse(response.body)
      expect(recipe["title"]).to eq(@recipe_name)
    end
  end

  describe "#index" do
    before do
      @recipes = FactoryBot.create_list(:recipe, 20)
    end

    it "responds successfully" do
      get :index
      expect(response).to be_success
    end

    it "has full list of recipes" do
      get :index
      recipes_list = JSON.parse(response.body)
      expect(recipes_list.length).to eq(20)
    end

    it "has user's list of recipes" do
      user = FactoryBot.create(:user, :with_recipes)
      get :index, params: { user_id: user.id }
      recipes_list = JSON.parse(response.body)
      expect(recipes_list.length).to eq(8)
    end
  end
end
