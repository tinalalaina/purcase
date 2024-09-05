import React from 'react'
import axios from 'axios';

function Page3() {
    const username = localStorage.getItem('username');
    const handleLogout = async () => {
      try {
        await axios.post('http://localhost/grostore/api/logout.php', { username });
        // Clear authentication state and user info
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        // Redirect to login page
        window.location.href = '/login';
      } catch (error) {
        console.error(error);
      }
    };
    return (
        <div>
            <div className='ts'>

            </div>
            <div className='Pages2'>
                <div className="shop1 fw-bold">
                    Controlles <i class="fas fa-shopping-basket"></i>
                    <p>Nom : ({username}) </p>
                </div>
                <div className="shop2 fw-bold">
                    Home <i class="fas fa-greater-than"></i> Controlles <i class="fas fa-greater-than"></i>
                    <button variant="inherit" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Page3