// Component Sidebar
import React, {Component} from "react";
import "./Sidebar.css";
import User from "../containers/User"
export class Sidebar extends Component {

    render() {
        console.log(this.props);

        return (
            <aside className="Sidebar">
                {this.props.contacts.map(
                    contact => <User user={contact} key={contact.user_id} />
                )}
            </aside>)
    }
}


