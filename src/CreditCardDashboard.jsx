import React, { useState } from 'react';

const CreditCardDashboard = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    income: '',
    address: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const styles = {
    card: {
      maxWidth: '400px',
      margin: '40px auto',
      padding: '25px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9fafb'
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '8px 0 20px 0',
      border: '1px solid #ccc',
      borderRadius: '8px',
    },
    button: {
      width: '100%',
      backgroundColor: '#10b981',
      color: 'white',
      padding: '14px 20px',
      margin: '8px 0',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    confirmation: {
      padding: '20px',
      backgroundColor: '#ecfdf5',
      border: '1px solid #10b981',
      color: '#065f46',
      borderRadius: '8px',
      textAlign: 'center',
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Application Submitted:', formData);

    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', income: '', address: '' });
    }, 5000); 
  };

  if (isSubmitted) {
    return (
      <div style={styles.card}>
        <h2>Application Status</h2>
        <div style={styles.confirmation}>
          <h3>Success!</h3>
          <p>Your Credit Card application has been received and is under review. Thank you!</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <h2 style={{ textAlign: 'center', color: '#1f2937' }}>Credit Card Application</h2>
      <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '20px' }}>
        Please fill out the details below to apply for our premium card.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label htmlFor="income">Annual Income (USD)</label>
        <input
          type="number"
          id="income"
          name="income"
          value={formData.income}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label htmlFor="address">Residential Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default CreditCardDashboard;
