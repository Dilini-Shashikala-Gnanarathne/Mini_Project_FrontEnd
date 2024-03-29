import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import centerImage from '../../image/GenX.png';
import './Loading.css';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Mac');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="pageStyle">
      <header className="header"></header>
      <main>
      <div className="imageContainerStyle">
        <img src={centerImage} alt="Centered Image" />
      </div>
      </main>
      <footer className="footer">
        <p className="spacedTextStyle footerTextStyle1">GENERATOR X INDUSTRIES</p>
        <p className="footerTextStyle2">Copyright © 2023 All rights reserved by AD Printers</p>
      </footer>
    </div>
  );
};

export default Loading;
