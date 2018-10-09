require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #show" do
    before do
      @user = FactoryBot.create(:user)
    end

    it "returns http success" do
      get :show, params: { id: @user.id }
      expect(response).to have_http_status(:success)
    end

    it "returns the user's details" do
      get :show, params: { id: @user.id }
      user_detail = JSON.parse(response.body)
      expect(user_detail["name"]).to eq(@user.name)
    end

  end

  describe "GET #index" do
    before do
      FactoryBot.create_list(:user, 20)
    end

    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "returns the full users list" do
      get :index
      users_list = JSON.parse(response.body)
      expect(users_list.length).to eq(20)
    end
  end

end
