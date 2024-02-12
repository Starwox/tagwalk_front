import './Login.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FormLogin from '../../components/FormLogin/FormLogin';
import Navbar from '../../components/Navbar/Navbar';
import loginEmployee from '../../services/employeeManager';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

    const handleLogin = async (email, password) => {
      setEmployee(await loginEmployee(email, password));
    };

    useEffect(() => {
      if(employee) {
        localStorage.setItem('login', employee);
        navigate('/');
      }
    }, [employee])

      
  return (
    <div className="Login">
        <Header />
        <Navbar />
        <div className='d-flex justify-content-center'>
            <h2>Login</h2>
        </div>
        <FormLogin onLogin={handleLogin} />
        <Footer />
    </div>
  );
}

export default Login;
