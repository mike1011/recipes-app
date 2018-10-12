class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :preparation_time, :total_people,
    :created_at, :claps, :cook_name

  def cook_name
    object.user.name
  end
end
