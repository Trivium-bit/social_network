import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"} />
            </div>
            <div>
                <Field component={"input"} name={"remember me"} type={"checkbox"} /> remember me
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