import React from "react";



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            input: ""
        }
    }

    setUserInput(event) {
        this.setState({ input: event.target.value });
        // console.log(event.target.value)
        
    }
    
    createUserName() {
        
        this.setState({ userName: this.state.input});
        // console.log(this.state.input)
        localStorage.setItem("userName", this.state.input)
        this.setState({ input:"" });
    }

    render() {
        return (
            <form id="profileContainer" >

                <div id="profileHeader">
                    <h1>
                        Profile
                    </h1>

                </div>
                <p>User Name</p>
                <div id="profileInput">
                    <input onChange={(event) => this.setUserInput(event)} type="text" autoComplete="off" id="userNameInput" value={this.state.input} placeholder="Enter Username" />

                </div>

                Tweeting as : {this.state.input}
                <button onClick={() => this.createUserName()} id="userNameButton" type="button">Save</button>

            </form>
        )
    }
}
export default Profile;