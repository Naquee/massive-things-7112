import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteAllCartProduct } from '../../Redux/App/action';
import AlertMessage from '../AlertMessage';
import styles from './Debitcard.module.css'
export const Debitcard = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => (store.AuthReducer))
  const [show, setStatus] = useState({
    status: false,
    msg: '',
    type: 'error'
  });
  const navigate = useNavigate()
  const handlesubmit = () => {
    const payload = {
      name: user.email
    }
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    dispatch(deleteAllCartProduct(payload, headers)).then((res) => {
      setStatus({ ...show, status: true, msg: 'Order Placed Successfully', type: "success" });
      setTimeout(() => {
        navigate("/")
      }, 2000)
    })
  }
  return (
    <div className={styles.CardMain}>
      <form onSubmit={handlesubmit}>
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
                name="cvv"
                type="number"
                required
                placeholder="Security Code"
              />
            </div>
          </div>
          <div className={styles.checkBox}>
            {' '}
            <input type="checkbox" name="Save" required />
            <label>Use this card for payments</label>
          </div>
          <input type="submit" />
        </div>
      </form>
      <AlertMessage show={show} setStatus={setStatus} />
    </div>
  )
}