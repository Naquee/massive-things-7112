import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import styles from './Cash.module.css'

export const CashOnDelivery = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleChange = () => {
        alert("order placed");
        dispatch({
            type: "payment",
            payload:false
        })
        navigate("/")
    }
  return (
    <div>
      <h5>Cash/Card on Delivery</h5>
      <div className={styles.cashon}>
        <div>
          {' '}
          <input name="cash" type="radio" />
          <img src="https://payments.juspay.in/web/images/theme_bb/cod.png" />
        </div>

        <div>
          <p>Cash on Delivery</p>
          <p>
            Tip: To ensure a contactless delivery ,we recommend you use an
            online payment method
          </p>
        </div>
      </div>

      <div className={styles.cardon}>
        <div>
          <input name="cash" type="radio" />
          <img src="https://payments.juspay.in/web/images/theme_bb/cardod.png" />
        </div>
        <div>
          <p>Card on Delivery</p>
          <p>
            Tip: To ensure a contactless delivery ,we recommend you use an
            online payment method
          </p>
        </div>
          </div>
          <button onClick={handleChange} className={styles.ordernow}>Order Now</button>
    </div>
  )
}