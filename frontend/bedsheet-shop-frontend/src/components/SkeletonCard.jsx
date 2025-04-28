import React from 'react';

const SkeletonCard = () => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      animation: 'pulse 1.5s infinite',
      backgroundColor: '#f6f7f8'
    }}>
      <div style={{
        height: '20px',
        width: '60%',
        margin: '0 auto 10px',
        backgroundColor: '#ddd',
        borderRadius: '4px'
      }}></div>
      <div style={{
        height: '20px',
        width: '40%',
        margin: '10px auto',
        backgroundColor: '#ddd',
        borderRadius: '4px'
      }}></div>
      <div style={{
        height: '35px',
        width: '70%',
        margin: '20px auto 0',
        backgroundColor: '#ddd',
        borderRadius: '20px'
      }}></div>
    </div>
  );
};

export default SkeletonCard;
