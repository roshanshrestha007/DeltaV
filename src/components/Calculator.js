import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountPage from './AccountPage';
import Navbar from './Navbar';


function SignupPage(props) {
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

        <div className="container mb-5">
            <div className="box justify-content-center">
                <form className="was-validated">
                    <h1 className="display-4 page-header mt-3 mb-3 d-flex ">Signup</h1>
                    <div className="mt-2">
                        <label for="uname" className="form-label">Username:</label>
                        <input type="text" className="form-control" id="uname" placeholder="Enter username"
                            name="uname" value={signupForm.userName} onChange={e => setSignupForm({ ...signupForm, userName: e.target.value })} required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback fs-9">Please fill out this field.</div>
                    </div>
                    <div className="mb-1 mt-1">
                        <label for="email" className="form-label ">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={signupForm.userEmail} onChange={e => setSignupForm({ ...signupForm, userEmail: e.target.value })} required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="mb-1">
                        <label for="psw1" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="psw1" placeholder="Enter password" name="psw1" value={signupForm.userPassword} onChange={e => setSignupForm({ ...signupForm, userPassword: e.target.value })} required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="mb-1">
                        <label for="psw2" className="form-label">Re-enter Password:</label>
                        <input type="password" className="form-control" id="psw2" placeholder="Re-enter password" name="psw2" value={signupForm.userPassword2} onChange={e => setSignupForm({ ...signupForm, userPassword2: e.target.value })} required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="mb-1">
                        <label for="phoneno" className="form-label">Phone no.:</label>
                        <input type="number" className="form-control" id="phoneno" placeholder="Enter phone number" name="phoneno" value={signupForm.userPhone} onChange={e => setSignupForm({ ...signupForm, userPhone: e.target.value })} required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-4" onClick={HandleSubmission}>Sign Up</button>

                </form>
            </div>
        </div>
    )
}

export default SignupPage;