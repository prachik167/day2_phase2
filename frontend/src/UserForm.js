import React, { useState } from "react";
import axios from "axios";

const UserForm = ({ onUserAdded }) => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        dept: "",
        manager: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/users", formData)
            .then(response => {
                onUserAdded(response.data);
                setFormData({ name: "", address: "", dept: "", manager: "" });
            })
            .catch(error => console.error("Error adding user", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                required
            />
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                required
            />
            <input
                type="text"
                name="dept"
                value={formData.dept}
                onChange={handleChange}
                placeholder="Enter department"
                required
            />
            <input
                type="text"
                name="manager"
                value={formData.manager}
                onChange={handleChange}
                placeholder="Enter manager"
                required
            />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;

