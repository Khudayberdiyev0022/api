import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {fetchAll, searchUser} from '../actions'

function Users(props) {
    const [name, setName] = useState('')
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        props.fetchAll()
        console.log(props.users);
    },[])
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(name);
        props.searchUser(name)
        setClicked(true)
    }
    return (
        <div className='ui container' >
            {
                !clicked && <div className='ui segment' >
                <form 
                    className='ui form'
                    onSubmit={submitHandler}
                >
                    <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Search...'
                        type="text" 
                        className='ui input'
                         />
                    <button className='ui primary button'>Search</button>
                </form>
                {props.users.map((user, index)=> {
                    return(
                        <div key={index} className="ui relaxed divided list" >
                            <div className="item">
                                <img src={user.avatar_url} alt="avatar" height='50px' width='50px' />
                                <div className="content">
                                <Link to={`/user/${user.login}`} className="header">{user.login}</Link>
                                <div className="description">{user.type}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            }
            {clicked && 
            <div class="ui card">
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
                    27
                </Link>
                </div>
            </div>
                // <div>
                //     <h1>{props.searchedUser.login}</h1>
                //     <h2>{props.searchedUser.public_repos}</h2>
                //     <h2>{props.searchedUser.created_at}</h2>
                //     <img src={props.searchedUser.avatar_url} alt='hello'/>
                //     <h4>{props.searchedUser.company}</h4>
                //     <h3>{props.searchedUser.location ? props.searchedUser.location : 'Toshkent'}</h3>
                // </div>
                }
            <button onClick={() => setClicked(false)} className='ui primary button'>Back</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        users: state.allUsers,
        searchedUser: state.searchedUser
    }
}

export default connect(mapStateToProps, {fetchAll,searchUser})(Users)
