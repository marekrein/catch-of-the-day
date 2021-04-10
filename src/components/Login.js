import React from "react";

const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your store inventory</p>
        <button className="github" onClick={() => props.authenticate('Github')}>
            Login with Github
        </button>

    </nav>
);

export default Login;