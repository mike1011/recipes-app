require 'rails_helper'

RSpec.describe Recipe, type: :model do

  it "has a valid factory" do
    recipe = FactoryBot.build(:recipe)
    expect(recipe).to be_valid
  end

  describe "basic attributes' validations" do
    context "title" do
      it "is invalid without a title" do
        recipe = FactoryBot.build(:recipe, :without_title)
        recipe.valid?
        expect(recipe.errors[:title]).to include("can't be blank")
      end

      it "is invalid with a title bigger than 100 characters" do
        recipe = FactoryBot.build(:recipe, :giant_title)
        recipe.valid?
        expect(recipe.errors[:title]).to include("is too long (maximum is 100 characters)")
      end
    end

    context "description" do
      it "is invalid without a description" do
        recipe = FactoryBot.build(:recipe, :without_description)
        recipe.valid?
        expect(recipe.errors[:description]).to include("can't be blank")
      end
    end

  end

end
