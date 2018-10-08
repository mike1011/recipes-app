FactoryBot.define do
  factory :jwt_blacklist do
    jti { "MyString" }
    exp { "2018-10-08 17:39:50" }
  end
end
