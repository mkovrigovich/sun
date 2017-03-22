import React from 'react';
import { Field, reduxForm } from 'redux-form';

class UserForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;

        return (<form onSubmit={handleSubmit}>
            <div>
                <label>Name: <Field component="input" type="text" name="name"/></label>
            </div>
            <div>
                <label>Age: <Field component="input" type="number" name="age"/></label>
            </div>
            <input type="submit"/>
        </form>);
    }
}


export default reduxForm({
    form: 'user-form'
})(UserForm);
