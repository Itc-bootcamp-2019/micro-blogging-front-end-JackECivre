import React from "react";
import '../App.css';


const Profile = () => {
    return (
        <div id="profileContainer">

            <div id="profileHeader">
                <h1>
                    Profile
                </h1>
            </div>
            <p>User Name</p>
            <div id="profileInput">
                <input type="text" name="userName" id="userNameInput"/>
            </div>
                <button id="userNameButton" type="submit">Save</button>

        </div>
    )
}
export default Profile;