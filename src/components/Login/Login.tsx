import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={"remember me"} type={"checkbox"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxFrom = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = () => {
const onSubmit = (formData: FormDataType) => { // в props придут все значения из data
    console.log(formData)
}
    return <div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit} />
    </div>

}


export default Login