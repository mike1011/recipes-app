# Recipes App

This app is a simple example of a recipes data repository app.

It's made to practice basic Ruby on Rails concepts.

Each Recipe belongs to a User (the cook) and each cook may have many recipes
associated with his name.

Any anonymous user can add a new recipe to the system.

The recipes have some data specific data:
- Title
- Description
- Total of people
- Preparation time
- Claps

Claps are an integer and are a way for anonymous users to thank for the recipe if
they enjoyed it.

Routes available:

| Prefix  | Verb | URI Pattern            | Controller#Action |
|---------|------|------------------------|-------------------|
| users   | GET  | /users(.:format)       | users#index       |
| user    | GET  | /users/:id(.:format)   | users#show        |
| recipes | GET  | /recipes(.:format)     | recipes#index     |
|         | POST | /recipes(.:format)     | recipes#create    |
| recipe  | GET  | /recipes/:id(.:format) | recipes#show      |
|         | PUT  | /recipes/:id(.:format) | recipes#update    |

The last route increments the claps total for a recipe, as we don't allow
recipes edition for now.
