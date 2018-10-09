class Recipe < ApplicationRecord
  belongs_to :user
  validates :user_id, presence: true

  validates :title, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { minimum: 20, maximum: 400 }
  validates :total_people, numericality: { only_integer: true, greater_than: 0 }
  validates :preparation_time, numericality: { only_integer: true, greater_than: 0 }

  def clap
    self.claps += 1
    self.save
  end
end
