import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './UPI.module.css'

export const UPI = () => {
  const navigate=useNavigate()

  const handleSubmit = ()=>{alert("Verified and Placed Order " ); navigate("/") }

  return (
    <div>
      <div>
        <div className={styles.firstName}>
          <p>Pay Using UPI</p>
        </div>
        <div className={styles.container}>
          <div>
            <div className={styles.circle}>
              <div></div>
            </div>
            <p>Add new UPI ID</p>
          </div>
          <div>
            <p>UPI ID</p>
            <input placeholder="user@bankname" required />
            <p>A payment request will be sent to this UPI ID</p>
          </div>
          <button onClick={handleSubmit} >Verify</button>
        </div>
      </div>
    </div>
  )
}