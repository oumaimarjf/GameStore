import React from 'react';

import ReactDOM from 'react-dom';


export default class home extends React.Component {


    constructor(props) {
        super(props);
        this.state = { value: '', login: '', password: '', AuthStart: false, response: '' };

        this.loginhandleChange = this.loginhandleChange.bind(this);
        this.passwordhandleChange = this.passwordhandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    loginhandleChange(event) {
        this.setState({ login: event.target.value });
    }
    passwordhandleChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        this.setState({ AuthStart: true });
        this.setState({ response: '' });
        // GET the user's informations from the from 
        var Accountbody = {
            login: this.state.login,
            password: this.state.password
        };


        fetch('http://localhost:1337/login', {
                        method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(Accountbody)

                    }).then((response) => {
            return response.json();
            // Get the response of the current request
        }).then((data) => {
            // If data is wrong
            if (data.success != null) {
                this.setState({ AuthStart: false });
                this.setState({ response: "success : " + data.success + " | message : " + data.message });
            } else {
                // Save data to sessionStorage
                sessionStorage.setItem('TokenKey', data.token);
                window.location = '/Accueil';

                        }
                    })
            event.preventDefault();
                    }
  


    render() {
        const ExpiredSessionMsg = this.props.ExpiredSessionMsg;
        const AuthStart = this.state.AuthStart;
        var progress = null;
        if (AuthStart) {
            progress = <div className="sk-spinner sk-spinner-three-bounce">
                <div className="sk-bounce3"></div>
            </div>
        }
        return (
          
            <div class="container">
                <div class="card card-login mx-auto mt-5">
                    <div class="card-header"><h1>Login</h1></div>
                    <div class="card-body">
                        <form class="login100-form " onSubmit={this.handleSubmit} >
				
					<span class="login100-form-title p-b-48">
						<img src="images/icons/logo2.png" ></img>
					</span>

                            <div class="form-group">
                                <div class="form-label-group" >
                                    <input type="text" name="login" id="inputEmail" class="form-control" value={this.state.login} onChange={this.loginhandleChange} placeholder="Login" required="required" autofocus="autofocus"/>
                                    <label for="inputEmail">Login</label>
                           </div>
                                </div>

                            <div class="form-group">
                                <div class="form-label-group" data-validate="Enter password">
                                    <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" value={this.state.password} onChange={this.passwordhandleChange} required="required"/>
                                        <label for="inputPassword">Password</label>
              </div>
                                </div>

                            <button type="submit" value="Submit" class="btn btn-primary btn-block">
                                Se Connecter
							            </button>
                            <div className="">
                                <span className="">{this.state.response}</span>
                                {progress}
                            </div>

				</form>
			</div>
		</div>
            </div>
	
              
        );
            }

}

