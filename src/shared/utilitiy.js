/**
 * Created by peter on 2018/4/17.
 */
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkValidaty = (state, value, rules, formName) => {
    let isValid = true;
    let error = '';
    if(!rules){
        return true;
    }
    if(rules.required){
        isValid = value.trim() !== '' && isValid;
        error = 'required';
        if(isValid === false){
            return getMsg(state, isValid, error, formName);
        }
    }
    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid;
        error = 'minLength';
        if(isValid === false){
            return getMsg(state, isValid, error, formName);
        }
    }
    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid;
        error = 'maxLength';
        if(isValid === false){
            return getMsg(state, isValid, error, formName);
        }
    }
    if(rules.isEmail){
        const pattern = /\w+(\.\w+)*@\w+(\.\w+)+$/
        isValid = pattern.test(value) && isValid;
        error = 'isEmail';
        if(isValid === false){
            return getMsg(state, isValid, error, formName);
        }
    }
    return [true,''];
    // return isValid;
}

const getMsg = (state, isValid, error, formName) => {
    if(isValid === false && error !== ''){
        var msg = state[formName].error[error];
    }
    return [isValid,msg];
}