FactoryBot.define do
  factory :recipe do
    sequence(:title) { |n| "Special Recipe #{n}" }
    description { Faker::Lorem.paragraph(2, true, 5) }
    total_people { Faker::Number.between(1, 8) }
    preparation_time { Faker::Number.between(20, 120) }
    association :user

    trait :without_title do
      title { nil }
    end

    trait :giant_title do
      title { "a"*101 }
    end

    trait :tiny_title do
      title { "a"*9 }
    end

    trait :without_description do
      description { nil }
    end
  end
end
