import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            alert(response.data.message);
            localStorage.setItem('token', response.data.token);
            setIsLoggedIn(true);
            navigate('/');
        } catch (error) {
            alert(error.response.data.error || "로그인 실패 !!!!!!!!!!@!");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <div style={{ position: 'relative' }}>
            {isLoggedIn ? (
                <div>
                    <h2>환영합니다!</h2>
                    <button onClick={handleLogout}>로그아웃</button>
                </div>
            ) : (
                <div>
                    <form onSubmit={handleSubmit}>
                        <h2>로그인</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">로그인</button>
                    </form>
                  
                    <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        textAlign: 'right',
                    }}>
                        
                        <button onClick={() => navigate('/register')}>회원가입할분</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;


