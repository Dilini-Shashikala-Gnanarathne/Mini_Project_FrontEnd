// src/components/AdminPage3.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gen_X from '../../image/Gen Xgenx.png';
import { auth } from '../../firebase';
import icon from '../../image/icons8-user-100 1.png';
import './AdminPage3.css';
import { FaPlusCircle, FaSearch } from 'react-icons/fa';

const AdminPage3 = () => {
  const [formData, setFormData] = useState({});
  const [formVisibility, setFormVisibility] = useState(false);
  const [formArray, setFormArray] = useState([]);

  const handleLogout = async () => {
    await auth.signOut();
    window.location.href = '/Mac';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormArray((prevArray) => [...prevArray, formData]);
    setFormData({});
    setFormVisibility(false);
  };

  const toggleFormVisibility = () => {
    setFormVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="pageStyle">
      <header className="header"> </header>
      <div id="A_P_3_images" className="A_P_3_images">
        <img src={gen_X} alt="gen_x Image" className="gen_X" />
        <div id="A_P_3_logout" className="A_P_3_logout">
          <img src={icon} alt="Icon" className="A_P_3_icon1" />
          <button onClick={handleLogout} className="A_P_3_icon2">
            Log Off
          </button>
        </div>
      </div>

      {formVisibility ? (
        <div style={{ marginTop: '100px' }}>
          <form
            className="formVisibility_form"
            id="FormInput"
            onSubmit={handleFormSubmit}
          >
            <p className='userdetails'>User Details Sheet</p>
            <br/>
            <label htmlFor="User_Name" className='username'>User Name</label>
            <br/>
            <input
              type="text"
              id="User_Name"
              name="User_Name"
              placeholder="Enter User Name"
              value={formData.User_Name || ''}
              onChange={handleInputChange}
            />
            <br/>
            <label htmlFor="User_ID" className='userid'>User ID</label>
            <br/>
            <input
              type="text"
              id="User_ID"
              name="User_ID"
              placeholder="Enter User ID"
              value={formData.User_ID || ''}
              onChange={handleInputChange}
            />
            <br/>
            <label htmlFor="Password" className='pw'>Password</label>
            <br/>
            <input
              type="password"
              id="Password"
              name="Password"
              placeholder="Enter Password"
              value={formData.Password || ''}
              onChange={handleInputChange}
            />
            <br/>
            <label htmlFor="NIC" className='nic'>NIC</label>
            <br/>
            <input
              type="text"
              id="NIC"
              name="NIC"
              placeholder="Enter NIC"
              value={formData.NIC || ''}
              onChange={handleInputChange}
            />
            <br/>
            <input className='submit' type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <div className="imageContainerStyle">
          <button className="buttonIconStyle1" onClick={toggleFormVisibility}>
            Add User <FaPlusCircle className="faPlusCircle" />
          </button>
          <input
            type="text"
            className="buttonIconStyle2"
            placeholder="Search Users"
            onChange={handleInputChange}
          />
          <FaSearch className="buttonIconStylei" />
          {formArray.length > -1 && (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th className="table_header">User Name</th>
                    <th className="table_header">User ID</th>
                    <th className="table_header">Password</th>
                    <th className="table_header">NIC</th>
                    <th className="table_header">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {formArray.map((data, index) => (
                    <tr
                      key={index}
                      style={{ borderBottom: '2px solid rgba(0, 0, 0, 0.25)' }}
                    >
                      <td className="table_data">{data.User_Name}</td>
                      <td className="table_data">{data.User_ID}</td>
                      <td className="table_data">{data.Password}</td>
                      <td className="table_data">{data.NIC}</td>
                      <td className="table_data">{data.Actions}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="table_footer">
                  <tr style={{ textAlign: 'center' }}>&lt; 1,2,3,4 &gt;</tr>
                </tfoot>
              </table>
              <div>
                <p className="p_footer">
                  <a href="/AdminPage1" style={{ textDecoration: 'none', color:'black' }}>
                    &lt; Back
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <footer className="footer">
        <p className="spacedTextStyle footerTextStyle1">GENERATOR X INDUSTRIES</p>
        <p className="footerTextStyle2">
          Copyright © 2023 All rights reserved by AD Printers
        </p>
      </footer>
    </div>
  );
};

export default AdminPage3;
