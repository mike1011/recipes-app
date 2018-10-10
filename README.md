# Recipes App

This app is a simple example of a recipes data repository app.

It's made to practice basic Ruby on Rails (API) and React (frontend) concepts.

The React app is inside the `recipes-frontend` folder and is separate from the
mains Ruby on Rails project.

## Context

Each Recipe belongs to a User (the cook) and each cook may have many recipes
associated with him. Any anonymous user can add a new recipe from its
favourite cook to the system.

The recipes have some data specific data:
- Title
- Description
- Total of people
- Preparation time
- Claps

Claps are an integer and are a way for anonymous users to thank for the recipe if
they enjoyed it.

## API Routes

| Prefix       | Verb | URI Pattern                       | Controller#Action |
|------------- |------|-----------------------------------|-------------------|
| user_recipes | GET  | /users/:user_id/recipes(.:format) | recipes#index     |
| users        | GET  | /users(.:format)                  | users#index       |
| user         | GET  | /users/:id(.:format)              | users#show        |
| recipes      | GET  | /recipes(.:format)                | recipes#index     |
|              | POST | /recipes(.:format)                | recipes#create    |
| recipe       | GET  | /recipes/:id(.:format)            | recipes#show      |
|              | PUT  | /recipes/:id(.:format)            | recipes#update    |

The last route increments the claps total for a recipe, as we don't allow
recipes edition for now.

## Frontend Use Cases

- Enqueue multiple new Recipes in the syncing list.
- Sync (publish) an enqueued Recipe.
- Check the latest recipes (with pagination).
- Clap the published recipes.

The frontend app may be started with `yarn start`, after installing all the dependencies.
By default, it'll run in port 4000, to avoid conflicts with the Rails' default port (3000).
