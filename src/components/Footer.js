import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2023 Indian Sign Language. All rights reserved.</p>
      <p>Contact us: info@indiansignlanguage.com</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    marginTop: 'auto',
  },
};

export default Footer;