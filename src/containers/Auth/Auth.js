import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css'

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                errorMessage: 'required',
                error: {
                    required: 'shit required',
                    isEmail: 'shit email'
                }
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
                errorMessage: 'required',
                error: {
                    required: 'shit required',
                    minLength: 'shit minLength'
                }
            }
        }
    }

    checkValidaty(value, rules, formName) {
        let isValid = true;
        let error = '';
        if(!rules){
            return true;
        }
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
            error = 'required';
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
            error = 'minLength';
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
            error = 'maxLength';
        }
        if(rules.isEmail){
            if(value !== ''){
                const pattern = /\w+(\.\w+)*@\w+(\.\w+)+$/
                isValid = pattern.test(value) && isValid;
                error = 'isEmail';
            }
        }

        if(isValid === false && error !== ''){
            var msg = this.state.controls[formName].error[error];
        }
        // return isValid;
        return [isValid,msg];
    }

    inputChangedHandler = (event, controlName) => {
        var arr = this.checkValidaty(event.target.value, this.state.controls[controlName].validation, controlName);
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: arr[0],
                errorMessage: arr[1],
                touched: true
            }
        }
        this.setState({controls: updatedControls});
    }

    render () {
        const formElementsArray = [];
        for(let key in this.state.controls){
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        const form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                errorMessage={formElement.config.errorMessage}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ))
        return (
            <div className={classes.Auth}>
                <form>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
            </div>
        );
    }
}

export default Auth;
