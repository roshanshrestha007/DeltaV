import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




function AccountPage(props) {

  const data = localStorage.getItem("allUsers");
  
  
  const i = localStorage.getItem("UserIndex");
  
  const navigate = useNavigate();
  
  const user = JSON.parse(data) || '[]';
  const index = parseInt(JSON.parse(i));

  const [userName, setUserName] = useState(user[index].userName);
  const [userEmail, setUserEmail] = useState(user[index].userEmail);
  const [userPhone, setUserPhone] = useState(user[index].userPhone);

  function update(e) {
    e.preventDefault();
    user[index].userName = userName;
    user[index].userEmail = userEmail;
    user[index].userPhone = userPhone;
    

    localStorage.setItem("allUsers", JSON.stringify(user));
    alert("User information updated");
    props.toggleState();
    navigate('/Acpage');
  
  }

  

  return (
    <div className="container">
      <div className="box justify-content-center">
        <h1 className="display-4 page-header">Update Information</h1>


        <form>
          <div className="mb-3 mt-3">
            <label for="exampleInputEmail1">Username:</label>
            <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" value={userName} onChange={e => setUserName(e.target.value)} required="" />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1">Email:</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={userEmail} onChange={e => setUserEmail(e.target.value)} required="" />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="mb-3">
            <label for="phoneNo">Phone no.:</label>
            <input type="number" className="form-control" id="phoneNo" placeholder="Enter phone number" value={userPhone} onChange={e => setUserPhone(e.target.value)} required="" />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>

          <button type="submit" className="btn btn-primary" onClick={update}>Update</button>

        </form>


      </div>
    </div>
  );
}

export default AccountPage;