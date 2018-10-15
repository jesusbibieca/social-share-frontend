import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRecipe } from '../actions/recipeActions';
import _ from 'lodash';

class Recipe extends Component {
  constructor(props){
    super(props)
    this.renderProps = this.renderProps.bind(this);
  }

  componentDidMount() {
    this.props.getRecipe()
      
  }

  renderProps(){
    const recipesArray = this.props.recipes.recipes;
    return  _.map(recipesArray, recipe =>{
      function createMarkup(){
        let html = '';
        html += recipe.name + recipe.ingredientList + recipe.cookingInstructions + '<br /> <hr /> <br />';

        return {
          __html: html
        }
   
      }

      return ( 
      <div key={recipe._id}>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
      </div> 
      );
    });
  }
  
  render() {
    return (
      <div>
       {this.renderProps()}
      </div>
    )
  }
}

Recipe.propTypes = {
  getRecipe: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
})
 
export default connect(mapStateToProps, {getRecipe})(Recipe);
