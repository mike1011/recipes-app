import React from 'react'
import axios from 'axios'

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_synced: props.is_synced,
      syncing: false
    }
  }
  sendData(data) {
    this.setState({
      syncing: true
    });

    let recipeData = {
      'recipe': Object.assign({'user_id' : this.props.cook_id}, data)
    };

    axios.post('http://localhost:3000/recipes', recipeData)
      .then(response => {
        console.log("Success!")
        console.log(response.data)

        var self = this;
        setTimeout(function () { // just to simulate the nice sync effect
          self.setState({
            is_synced: true,
            syncing: false
          });
          self.props.handleListUpdate();
        }, 2000);
      })
      .catch(error => {
        console.log("Error!")
        console.log(error)

        alert("Error while syncing with Rails API!")

        this.setState({
          syncing: false
        });
      });
  }
  render() {
    return (
      <li>
        <button
          className={'button sync-button is-small ' + (this.state.is_synced ? 'is-success' : 'is-warning')}
          disabled={this.state.is_synced || this.state.syncing}
          onClick={() => this.sendData(this.props)} data-id={this.props.id}
        >
        <span className={ this.state.syncing ? 'icon-rotate-sync' : '' }>
          <i className={ this.state.is_synced ? 'fas fa-check' : 'fas fa-sync-alt' }></i>
        </span>
        </button>
        <span className={ this.state.is_synced ? 'synced-text' : ''}>{this.props.title}</span>
      </li>
    )
  }
}

export default Recipe
