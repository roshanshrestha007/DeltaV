import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountPage from './AccountPage';
import Navbar from './Navbar';


function Calculator(props) {
    const [signupForm, setSignupForm] = useState({
        userName: "",
        userEmail: "",
        userPassword: "",
        userPassword2: "",
        userPhone: ""
    })
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    const getDatafromLS = () => {
        const data = localStorage.getItem('allUsers');
        if (data) {
            return JSON.parse(data) || '[]';
        }
        else {
            return [];
        }
    }

    const [users, setUsers] = useState(getDatafromLS());

    function HandleSubmission(e) {
        e.preventDefault();

        var username = document.getElementById("uname").value;
        var emailVerify = document.getElementById("email").value;

        var password = document.getElementById("psw1").value;
        var confirmPassword = document.getElementById("psw2").value;
        var phno = document.getElementById("phoneno").value;

        if (!username || !emailVerify || !password || !phno || password !== confirmPassword) {
            alert("Password Doesnot match")
        } else {
            var allUsers = JSON.parse(localStorage.getItem('allUsers') || "[]")
            allUsers.push(signupForm)
            localStorage.setItem('allUsers', JSON.stringify(allUsers))
            const i = users.length;
            localStorage.setItem("UserIndex", i);
            props.toggleState();
            navigate('/AccountPage');
        }
    }

    return (

        <div className="container mb-5 center">
            <div className="box justify-content-center">
                <form className="was-validated">
                    <h2 className="display-4 page-header mt-3 mb-3 d-flex ">Categories</h2>
                    
                    <div>
      <button className="btn btn-primary" type="button">Primary Button</button><br></br><br></br>
      </div>

      <div>
      <button className="btn btn-secondary" type="button">Secondary Button</button><br></br><br></br>
      <button className="btn btn-success" type="button">Success Button</button><br></br><br></br>
      <button className="btn btn-danger" type="button">Danger Button</button><br></br><br></br>
      <button className="btn btn-warning" type="button">Warning Button</button><br></br><br></br>
      <button className="btn btn-info" type="button">Info Button</button><br></br><br></br>
      <button className="btn btn-light" type="button">Light Button</button><br></br><br></br>
      <button className="btn btn-dark" type="button">Dark Button</button><br></br><br></br>
      <button className="btn btn-link" type="button">Link Button</button><br></br><br></br>
    </div>

                    <button type="submit" className="btn btn-primary mt-4" onClick={HandleSubmission}>Sign Up</button>

                </form>
            </div>
        </div>
    )
}

export default Calculator;