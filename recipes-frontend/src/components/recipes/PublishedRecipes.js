import React from 'react'
import PublishedRecipe from './PublishedRecipe'

export const PublishedRecipes = (props) => (
  <ul className="published-recipes">
    { props.recipes.map(recipe => <PublishedRecipe {...recipe} key={recipe.id} />)}
  </ul>
)
