import React, { Component } from 'react';
import './App.css';
import { RecipeForm } from './components/recipes/RecipeForm';
import { PendingRecipes } from './components/recipes/PendingRecipes';
import { PublishedRecipes } from './components/recipes/PublishedRecipes';
import { addRecipe } from './lib/addRecipe';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();

    this.state = {
      errorMessage: '',
      formData: {
        'title': '',
        'description': '',
        'total_people': '',
        'preparation_time': '',
        'cook_id': '',
        'cook_name': ''
      },
      page: 1,
      cooks: [],
      publishedRecipes: [],
      recipes: [
        {
          'id': '123',
          'title': 'Chocolate hazelnut biscotti',
          'description': 'Quisque vel ante in tellus tempor auctor. Quisque faucibus ligula metus. Curabitur at congue quam. Praesent cursus vel orci nec placerat. Praesent in diam tortor. Fusce luctus maximus imperdiet. Integer dui nulla, consectetur sed vehicula quis, consectetur non nisl. In varius a massa.',
          'total_people': '5',
          'preparation_time': '50',
          'is_synced': false,
          'cook_id': 1
        },
        {
          'id': '1234',
          'title': 'Lentil Stew',
          'description': 'Aenean bibendum risus ut viverra molestie. Praesent a eleifend lectus. Maecenas accumsan at dui eget pretium. Donec hendrerit fermentum neque, at dignissim nunc lobortis eu. Praesent vel eros vel dui consequat aliquet facilisis in diam. Donec consectetur placerat lectus, et posuere nunc tempus sed.',
          'total_people': '2',
          'preparation_time': '30',
          'is_synced': false,
          'cook_id': 2
        },
        {
          'id': '12345',
          'title': 'Moroccan-ish Casserole',
          'description': 'Sed rutrum facilisis lorem, eget luctus eros. Phasellus fermentum lacinia augue, eu tincidunt erat aliquam non. Aenean eget eleifend ante. Etiam ullamcorper, velit sed mollis rutrum, magna ligula volutpat velit, quis luctus enim nulla in metus. Nam convallis molestie.',
          'total_people': '2',
          'preparation_time': '30',
          'is_synced': false,
          'cook_id': 3
        }
      ],
    }
    this.handleCookChange = this.handleCookChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTotalPeopleChange = this.handleTotalPeopleChange.bind(this);
    this.handlePreparationTimeChange = this.handlePreparationTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.getRecipesList = this.getRecipesList.bind(this);
  }
  componentDidMount() {
    this.getCooksList();
    this.getRecipesList();
  }
  getCooksList() {
    axios.get('http://localhost:3000/users')
    .then(response => {
      this.setState({
        cooks: response.data
      });
    })
    .catch(error => {
      alert("Error fetching cooks!");
    });
  }
  getRecipesList(page) {
    axios.get('http://localhost:3000/recipes', {
      params: {
        page: page,
        per_page: 5
      }
    })
    .then(response => {
      this.setState({
        publishedRecipes: response.data
      });
    })
    .catch(error => {
      alert("Error fetching recipes!");
    });
  }
  handleCookChange(event) {
    let formData = {...this.state.formData}
    formData.cook_id = parseInt(event.target.value);
    formData.cook_name = event.target.options[event.target.selectedIndex].text;
    this.setState({formData});
    event.preventDefault();
  }
  handleTitleChange(event) {
    let formData = {...this.state.formData}
    formData.title = event.target.value;
    this.setState({formData});
    event.preventDefault();
  }
  handleDescriptionChange(event) {
    let formData = {...this.state.formData}
    formData.description = event.target.value;
    this.setState({formData});
    event.preventDefault();
  }
  handleTotalPeopleChange(event) {
    let formData = {...this.state.formData}
    formData.total_people = event.target.value;
    this.setState({formData});
    event.preventDefault();
  }
  handlePreparationTimeChange(event) {
    let formData = {...this.state.formData}
    formData.preparation_time = event.target.value;
    this.setState({formData});
    event.preventDefault();
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!(this.state.formData.title && this.state.formData.description)) {
      this.setState({
        errorMessage: 'Please fill the form! 🚨'
      });
      return;
    }
    this.setState({
      errorMessage: ''
    });
    const newRecipe = {
      'id': Math.floor(Math.random()*1000000),
      'title': this.state.formData.title,
      'description': this.state.formData.description,
      'total_people': this.state.formData.total_people,
      'preparation_time': this.state.formData.preparation_time,
      'is_synced': false,
      'cook_id': this.state.formData.cook_id
    }
    const updatedRecipes = addRecipe(this.state.recipes, newRecipe)
    this.setState({
      recipes: updatedRecipes,
      formData: {
        title: '',
        description: '',
        preparation_time: '',
        total_people: '',
        cook_id: ''
      }
    })
  }
  handleNextPage(event) {
    let nextPage = this.state.page + 1;
    this.getRecipesList(nextPage)
    this.setState({
      page: nextPage
    });
  }
  handlePreviousPage(event) {
    let currentPage = this.state.page;

    if (currentPage > 1) {
      this.getRecipesList(currentPage - 1)
      this.setState({
        page: currentPage - 1
      });
    }
  }
  render() {
    return (
      <div className="App">

        <div className="container">

          <section className="section recipes-form-section">
            <RecipeForm
              formData={this.state.formData}
              cooks={this.state.cooks}
              handleCookChange={this.handleCookChange}
              handleTitleChange={this.handleTitleChange}
              handleDescriptionChange={this.handleDescriptionChange}
              handlePreparationTimeChange={this.handlePreparationTimeChange}
              handleTotalPeopleChange={this.handleTotalPeopleChange}
              handleSubmit={this.handleSubmit}
              />
              <div className={this.state.errorMessage ? '' : 'hidden'}>
                <article className="message is-danger">
                  <div className="message-body">
                  { this.state.errorMessage }
                  </div>
                </article>
              </div>
          </section>

          <section className="section recipes-queue">
            <div className="columns">
              <div className="column">
                <h2 className="title is-4">Recipes in Queue for Sync</h2>
                <p className={this.state.recipes.length ? 'hidden' : ''}>No recipes enqueued.</p>

                <PendingRecipes recipes={this.state.recipes} handleListUpdate={this.getRecipesList}/>
              </div>
              <div className="column">
                <h2 className="title is-4">Last published recipes</h2>
                <p className={this.state.publishedRecipes.length ? 'hidden' : ''}>No recipes enqueued.</p>

                <PublishedRecipes recipes={this.state.publishedRecipes}/>

                <div className="pagination-container">
                  <button className="button is-small" disabled={ this.state.page == 1 } onClick={this.handlePreviousPage}>Previous</button>
                  <button className="button is-small" disabled={ this.state.publishedRecipes.length < 5 } onClick={this.handleNextPage}>Next page</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
