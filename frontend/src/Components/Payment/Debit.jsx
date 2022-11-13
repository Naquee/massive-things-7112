import { useNavigate } from 'react-router-dom'
import styles from './Debitcard.module.css'
export const Debitcard = () => {
  const navigate=useNavigate()


    const handleSubmit = (e) => {
      e.preventDefault()
        alert("order placed")
        navigate("/")
        // e.target.reset()
       
    
  }
  const handleChange = (e) => {
   
  }
  return (
    <div className={styles.CardMain}>
      <form onSubmit={handleSubmit}>
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
            required
            placeholder="Enter Card number"
          />
        </div>
        <div className={styles.validity}>
          <div>
            <label>Valid Date</label>
            <input
              onChange={handleChange}
              name="Expiry"
              type="month"
              required
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
              required
              placeholder="Security Code"
            />
          </div>
        </div>
        <div className={styles.checkBox}>
          {' '}
          <input onChange={handleChange} type="checkbox" name="Save" required />
          <label>Use this card for payments</label>
        </div>
        <input type="submit"/>
      </div>
      </form>
    </div>
  )
}