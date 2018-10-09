FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    sequence(:email) { |n| "kendrick.lamar+#{n}@example-records.com" }

    trait :with_recipes do
      after(:create) { |user| create_list(:recipe, 8, user: user) }
    end
  end
end
