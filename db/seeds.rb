# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

15.times do |u|
  user = User.create!(
    name: "Chef #{Faker::Name.name}",
    email: "kendrick.lamar+#{u}@example-records.com",
  )

  5.times do |r|
    user.recipes.create!(
      title: Faker::Food.dish,
      description: Faker::Food.description,
      total_people: Faker::Number.between(1, 8),
      preparation_time: Faker::Number.between(20, 120)
    )
  end
end
