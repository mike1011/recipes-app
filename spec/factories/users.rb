FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    sequence(:email) { |n| "g.silva+#{n}@runtime-revolution.com" }
  end
end
