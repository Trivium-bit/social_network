import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../Redux/auth_reducer";
import {Redirect} from "react-router";
import {AppStateType} from "../../Redux/redux-store";
import style from "./../common/FormsControls/FormsControls.module.css"

type FormDataType = {
    email: string
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={"password"} placeholder={"password"} name={"password"} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={"remember me"} type={"checkbox"}/> remember me
            </div>
            {props.error} && <div className={style.formSummaryError}>
            {props.error}
        </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxFrom = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => { // в props придут все значения из data
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login)