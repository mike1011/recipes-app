require 'rails_helper'

RSpec.describe User, type: :model do
  it "has a valid factory" do
    user = FactoryBot.build(:user)
    expect(user).to be_valid
  end

  it "has a valid factory with recipes" do
    user = FactoryBot.create(:user, :with_recipes)
    expect(user.recipes.length).to eq(8)
  end
end
