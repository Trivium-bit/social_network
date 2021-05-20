import React from 'react';
import Header from './Header'

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get<TypeofUsers>(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then((response: any) => {
        if (response.data.resultCode === 0) {
            debugger
            let {id, login, email} = response.data.data;
            this.props.setAuthUserData(id, email, login);
        }
            })
    }
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);