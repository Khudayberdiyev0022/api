import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {userInformation} from '../actions'

function UserInformation(props) {

    useEffect(() => {
        props.userInformation('bek')
        console.log(props.user);
    }, [])
    const user = props
    return (
        <div class="ui card">
                {
                    user.id && <div>
                        <div class="image">
                <img src={props.searchedUser.avatar_url} alt='avatar'/>
                </div>
                <div class="content">
                <Link to='/' class="header">{props.searchedUser.login}</Link>
                <div class="meta">
                    <span class="date">{props.searchedUser.created_at}</span>
                </div>
                <div class="description">
                {props.searchedUser.location ? props.searchedUser.location : 'Toshkent'}
                </div>
                </div>
                <div class="extra content">
                <Link to='/'>
                    <i class="user icon"></i>
                    {user.followers}
                </Link>
            </div>
                    </div>
                }
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        user: state.userInform
    }
}


export default connect(mapStateToProps, {userInformation}  )( UserInformation)
