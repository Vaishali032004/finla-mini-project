import React, { useState } from 'react';

const Translate = () => {
  const [alphabet, setAlphabet] = useState('');
  const [videoSrc, setVideoSrc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z]$/.test(alphabet)) {
      alert('Please enter a valid alphabet character (A-Z or a-z).');
      return;
    }

    // Convert input to lowercase for consistency
    const letter = alphabet.toLowerCase();

    // Assuming videos are stored in public/videos/
    const videoPath = `/videos/${letter}.mp4`;

    // Set video source
    setVideoSrc(videoPath);
  };

  const handleReset = () => {
    setAlphabet('');
    setVideoSrc('');
  };

  return (
    <div style={styles.translate}>
      <div style={styles.overlay}></div>
      <div style={styles.card}>
        <h2 style={styles.title}>📖 Sign Language Translator</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Enter a letter (A-Z)"
            value={alphabet}
            onChange={(e) => setAlphabet(e.target.value)}
            style={styles.input}
            maxLength="1"
          />
          <button type="submit" style={styles.button}>
            Translate
          </button>
        </form>

        {videoSrc && (
          <div style={styles.videoContainer}>
            <video width="100%" height="315" controls>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Reset Button */}
        <button
          onClick={handleReset}
          style={{ ...styles.button, backgroundColor: '#FF5733', marginTop: '20px' }}
        >
          🔄 Clear & Explore Again
        </button>
      </div>
    </div>
  );
};

const styles = {
  translate: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    background: 'linear-gradient(to right, #757F9A, #D7DDE8)',
    color: '#333',
    padding: '20px',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://images.app.goo.gl/JgKDSEjCE4XxhPidA")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.3, // Light background effect
  },
  card: {
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    maxWidth: '600px',
    width: '90%',
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '15px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '10px',
    textAlign: 'center',
    outline: 'none',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '15px 25px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: '0.3s',
  },
  videoContainer: {
    marginTop: '20px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
  },
};

export default Translate;
