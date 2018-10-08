class User < ApplicationRecord
  has_many :recipes

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end
