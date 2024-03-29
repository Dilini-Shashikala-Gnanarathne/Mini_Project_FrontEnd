import React from 'react';
import { auth } from '../../firebase';
import gen_X from '../../image/Gen Xgenx.png';
import icon from '../../image/icons8-user-100 1.png';
import './OperatorPage2.css'; // Import additional CSS file for OperatorPage2 styles

const OperatorPage2 = () => {
  const handleLogout = async () => {
    await auth.signOut();
    window.location.href = '/Mac';
  };

  return (
    <div className="pageStyle"> 
      <header className="header"> </header>
      <div id='A_P_3_images' className="A_P_3_images">
        <img src={gen_X} alt="gen_x Image" className="gen_X" />
        <div id='A_P_3_logout' className="A_P_3_logout">
          <img src={icon} alt="Icon" className="A_P_3_icon1" />
          <button onClick={handleLogout} className="A_P_3_icon2">
            Log Off
          </button>
        </div>
      </div>
      <div className="imageContainerStyle">
        Operator Page2_ DashBord
      </div>

      <footer className="footer">
        <p className="spacedTextStyle footerTextStyle1">GENERATOR X INDUSTRIES</p>
        <p className="footerTextStyle2">Copyright © 2023 All rights reserved by AD Printers</p>
      </footer>
    </div>
  );
};

export default OperatorPage2;
