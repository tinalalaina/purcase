import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost/grostore/api/register.php', { username, password, role });
            if (response.data.message) {
                alert(response.data.message);
                window.location.href = '/login';
                onRegister();
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleAnuller = () => {
        window.location.href = '/login';
    };

    const handleInputChange = () => {
        setIsButtonDisabled(!username || !password || !role);
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
                                    <h1 class="h3 mb-3 fw-normal">Register name</h1>

                                    <div class="form-floating">
                                        <input

                                            label="Email"
                                            value={username}
                                            onChange={(e) => {
                                                setUsername(e.target.value);
                                                handleInputChange();
                                            }}
                                            fullWidth
                                            margin="normal"
                                            class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <br/>
                                    <div class="form-floating">
                                        <input
                                            label="Password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                handleInputChange();
                                            }}
                                            fullWidth
                                            margin="normal"
                                            class="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                    </div>

                                    <br/>
                                    <div class="checkbox mb-3">
                                        <label>
                                            <input type="checkbox" value="remember-me" /> Remember me
                                        </label>
                                    </div>
                                    <button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleRegister}
                                        fullWidth
                                        disabled={isButtonDisabled}
                                        class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                                
                                </form>
                            </main>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </container>

            <br/>
            <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-2 text-sm mx-auto">
                    Already have an account?
                    <p onClick={handleAnuller} className="text-primary text-gradient font-weight-bold">
                        Sign in
                    </p>
                </p>
            </div>

        </div>



    );
};

export default Register;