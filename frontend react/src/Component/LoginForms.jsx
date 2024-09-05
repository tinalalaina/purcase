import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleAnuller = () => {
        window.location.href = '/Register';
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost/grostore/api/login.php', { username, password });
            if (response.data.success) {
                // Store authentication state and user info
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('role', response.data.role);
                // Redirect to dashboard
                window.location.href = '/listeprojetenregistrer';
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = () => {
        setIsButtonDisabled(!username || !password);
    };
    return (
        <div>
            <container>
                <div class="container">
                    <div class="row">
                        <div class="col"></div>
                        <div class="col-8">
                            <main class="form-signin w-100 m-auto">
                                <form>
                                    <h1 class="h3 mb-3 fw-normal">LOGIN </h1>

                                    <div class="form-floating">
                                        <input
                                            label="Username"
                                            fullWidth
                                            value={username}
                                            onChange={(e) => {
                                                setUsername(e.target.value);
                                                handleInputChange();
                                            }}
                                            margin="normal"
                                            class="form-control" id="floatingInput" placeholder="name@example.com"
                                        />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <br />
                                    <div class="form-floating">
                                        <input
                                            label="Password"
                                            fullWidth
                                            type="password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                handleInputChange();
                                            }}
                                            margin="normal"
                                            class="form-control" id="floatingPassword" placeholder="Password"
                                        />
                                        <label for="floatingPassword">Password</label>
                                    </div>

                                    <br />
                                    <div class="checkbox mb-3">
                                        <label>
                                            <input type="checkbox" value="remember-me" /> Remember me
                                        </label>
                                    </div>
                                    <button
                                        variant="contained"
                                        fullWidth
                                        color="primary"
                                        onClick={handleLogin}
                                        disabled={isButtonDisabled}
                                        class="w-100 btn btn-lg btn-primary" type="submit"
                                        >Login</button>
                                </form>
                            </main>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </container>

            <br />
            <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-2 text-sm mx-auto">
                    Dont have an account?
                    <p onClick={handleAnuller}className="text-primary text-gradient font-weight-bold">
                        Sign up
                    </p>
                </p>
            </div>

        </div>


    );
};

export default LoginForm;