/**
 * Created by peter on 2018/4/12.
 */
import * as actionTypes from './actionTypes';
// import axios from '../../axios-order';
export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    return {
        type: actionTypes.INIT_INGREDIENT
    }
    // return dispatch => {
    //     axios.get('https://react-my-burger-1c42f.firebaseio.com/ingredients.json')
    //         .then(response => {
    //             dispatch(setIngredients(response.data))
    //         })
    //         .catch(error => {
    //             dispatch(fetchIngredientsFailed());
    //         })
    // }
}