import React from 'react'

export const RecipeForm = (props) => (
  <div className="columns new-recipe-form">
    <div className="column">
      <h2 className="title is-4">Add a New Recipe</h2>
      <form action="#" className="form" onSubmit={props.handleSubmit}>
        <input className="input" type="text" name="title" placeholder="Title" value={props.formData.title} onChange={props.handleTitleChange}/>
        <textarea className="textarea" type="text" name="description" placeholder="Description" value={props.formData.description} onChange={props.handleDescriptionChange}></textarea>
        <div className="select">
          <select onChange={props.handleCookChange} value={props.formData.cook}>
            { props.cooks.map(cook => <option key={cook.id} value={cook.id}>{cook.name}</option>) }
          </select>
        </div>
        <input className="input" type="number" name="total-people" placeholder="Total of people" value={props.formData.total_people} onChange={props.handleTotalPeopleChange}/>
        <input className="input" type="number" name="preparation-time" placeholder="Preparation time (minutes)" value={props.formData.preparation_time} onChange={props.handlePreparationTimeChange}/>
        <button className="button is-info" type="submit">Submit</button>
      </form>
    </div>

    <div className="column content editor-preview">
      <h1 className="title is-3">{ props.formData.title ? props.formData.title : 'Type your recipe details... 🥘' }</h1>
      <h2 className={ props.formData.cook_name ? 'subtitle is-6' : 'hidden' }>By { props.formData.cook_name }</h2>
      <hr className={ props.formData.title ? '' : 'hidden' }/>
      <p className={ props.formData.description ? '' : 'hidden' }>{ props.formData.description }</p>
      <ul>
        <li className={ props.formData.total_people ? '' : 'hidden' }><i className="fas fa-users"></i> Total people: { props.formData.total_people }</li>
        <li className={ props.formData.preparation_time ? '' : 'hidden' }><i className="fas fa-clock"></i> Preparation time: { props.formData.preparation_time } minutes</li>
      </ul>
    </div>
  </div>
)
