import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { loginTC } from "../../Redux/auth_reducer";
import { AppStateType } from "../../Redux/redux-store";
import style from "./../common/FormsControls/FormsControls.module.css"
import { Route } from 'react-router-dom';

type FormDataType = {
    email: string
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "rememberMe")}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxFrom = reduxForm<FormDataType>({ form: 'login' })(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => { // в props придут все значения из data
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return  <Route path={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginTC })(Login)