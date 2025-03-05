import React, { Component } from "react";
import axios from "axios";

class UserList extends Component {
    state = { users: [] };

    componentDidMount() {
        axios.get("http://localhost:5000/users")
            .then(response => this.setState({ users: response.data }))
            .catch(error => console.error("Error fetching users", error));
    }

    render() {
        return (
            <div>
                <h2>User List</h2>
                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>
                            <strong>Name:</strong> {user.name} | 
                            <strong> Address:</strong> {user.address} | 
                            <strong> Dept:</strong> {user.dept} | 
                            <strong> Manager:</strong> {user.manager}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default UserList;

