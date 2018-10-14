import React, {Component} from "react";
import "./User.css";

export default class User extends Component {

    render() {
        const {name, profile_pic, status} = this.props.user;
        return (
            <div className="User">
                <img src={profile_pic} alt={name} className="User__pic"/>
                <div className="User__details">
                    <p className="User__details-name">{name}</p>
                    <p className="User__details-status">{status}</p>
                </div>
            </div>
        );
    }
}

