import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutTable } from '../CheckoutTable';
import { CheckoutCards } from '../CheckoutCard';
import styles from '../Checkout.module.css'
import { getCartProduct } from '../../../Redux/App/action';
export const Basket = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => (store.AuthReducer));
  const list = useSelector((store) => (store.AppReducer.cart));
  const getCartData = () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    dispatch(getCartProduct(headers)).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getCartData()
  }, []);

  return (
    <div className={styles.checkoutdiv}>
      <div className={styles.container}>
        <div className={styles.heading}>
          {list?.length !== 0 ? `Your Basket (${list?.length} items)` : 'There are no items in your basket.'}
        </div>
        {list?.length !== 0 && <CheckoutTable />}
        <CheckoutCards />
      </div>
    </div>
  )
}