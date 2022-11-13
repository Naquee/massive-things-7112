import styles from './Debitcard.module.css'
export const Debitcard = () => {


    const handleSubmit = () => {
        
    
  }
  const handleChange = (e) => {
   
  }
  return (
    <div className={styles.CardMain}>
      <div className={styles.circleTitle}>
        <div className={styles.circle}>
          <div></div>
        </div>
        <h5>Add Credit / Debit card</h5>
      </div>
      <div className={styles.formDiv}>
        <div>
          <label>Card Number</label>
          <input
            onChange={handleChange}
            name="Card Number"
            type="number"
            placeholder="Enter Card number"
          />
        </div>
        <div className={styles.validity}>
          <div>
            <label>Valid Date</label>
            <input
              onChange={handleChange}
              name="Expiry"
              type="number"
              placeholder="MM / YY"
            />
          </div>
          <div>
            {' '}
            <label>Cvv</label>
            <input
              onChange={handleChange}
              name="cvv" 
              type="number"
              placeholder="Security Code"
            />
          </div>
        </div>
        <div className={styles.checkBox}>
          {' '}
          <input onChange={handleChange} type="checkbox" name="Save" />
          <label>Use this card for payments</label>
        </div>
        <button onClick={handleSubmit}>Pay</button>
      </div>
    </div>
  )
}