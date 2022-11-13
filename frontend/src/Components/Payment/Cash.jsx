import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deleteAllCartProduct } from '../../Redux/App/action';
import AlertMessage from '../AlertMessage';
import styles from './Cash.module.css'

export const CashOnDelivery = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => (store.AuthReducer))
  const [show, setStatus] = useState({
    status: false,
    msg: '',
    type: 'error'
  });
  const navigate = useNavigate()
  console.log(user)
  const handleChange = () => {
    const payload = {
      name: user.email
    }
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    console.log(payload)
    dispatch(deleteAllCartProduct(payload, headers)).then((res) => {
      setStatus({ ...show, status: true, msg: 'Order Placed Successfully', type: "success" });
      setTimeout(() => {
        navigate("/")
      }, 2000)
    })
  }
  return (
    <div >
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
      <AlertMessage show={show} setStatus={setStatus} />
    </div>
  )
}