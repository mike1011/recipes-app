import React from 'react'
import axios from 'axios'
import pluralize from 'pluralize'

class PublishedRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      claps: props.claps
    }
  }
  sendClap (data) {
    axios.put('http://localhost:3000/recipes/' + data.id, { params: { id: data.id }})
    .then(response => {
      console.log("success")
      console.log(response.data)

      this.setState({
        claps: this.state.claps + 1
      })
    })
    .catch(error => {
      console.log("error")
      console.log(error)
    });
  }
  render() {
    return (
      <li key={this.props.id}>
        {this.props.title} ({this.state.claps} {pluralize('claps', this.state.claps)})
        <button onClick={() => this.sendClap(this.props)} className="button is-small is-rounded claps-button">
          <i className="fas fa-sign-language"></i>
        </button>
      </li>
    )
  }
}

export default PublishedRecipe
