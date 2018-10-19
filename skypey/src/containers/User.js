import React, {Component} from "react";
import "./User.css";
import store from "../store"
import {setActiveUserId} from "../actions";

export default class User extends Component {

    handleUserClick = (user_id) =>{
        console.log(user_id);
        store.dispatch(setActiveUserId(user_id));
    }

    render() {
        const {name, user_id, profile_pic, status} = this.props.user;
        return (

            <div className="User" onClick={this.handleUserClick.bind(this,user_id)}>
                <img src={profile_pic} alt={name} className="User__pic"/>
                <div className="User__details">
                    <p className="User__details-name">{name}</p>
                    <p className="User__details-status">{status}</p>
                </div>
            </div>
        );
    }
}

