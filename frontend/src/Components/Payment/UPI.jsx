import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteAllCartProduct } from '../../Redux/App/action'
import AlertMessage from '../AlertMessage'
import styles from './UPI.module.css'

export const UPI = () => {
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
      <AlertMessage show={show} setStatus={setStatus} />
    </div>
  )
}