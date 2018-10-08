class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::Blacklist
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :jwt_authenticatable, jwt_revocation_strategy: JwtBlacklist
  has_many :recipes

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end
