import React from 'react'
import Recipe from './Recipe'

export const PendingRecipes = (props) => (
  <ul>
    { props.recipes.map(recipe => <Recipe key={recipe.id} {...recipe} handleListUpdate={props.handleListUpdate}/>)}
  </ul>
)
