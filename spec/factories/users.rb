FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    sequence(:email) { |n| "kendrick.lamar+#{n}@example-records.com" }
    password { "password-password-password" }
  end
end
