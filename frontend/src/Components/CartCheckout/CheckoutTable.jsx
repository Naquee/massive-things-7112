import React,{useState} from 'react';
import styles from './Checkout.module.css';
import {Listitems} from './Listitems';
import { useSelector } from 'react-redux';
export const CheckoutTable = () => {
  const getdata = useSelector((store) => (store.AppReducer.cart));
  return (
    <div className={styles.checkoutTable}>
    <div className={styles.tableHeading}>
        <div className={styles.emptySpace}>&nbsp;</div>
        <div className={styles.description}>ITEM DESCRIPTION</div>
        <div className={styles.unitPrice}>UNIT PRICE</div>
        <div className={styles.quantity}>QUANTITY</div>
        <div className={styles.subtotal}>SUBTOTAL</div>
        <div className={styles.cross}></div>
        <div className={styles.saving}>SAVINGS</div>
    </div>
    <div>
      { getdata?.map((val)=> {
          return (
            <Listitems  id={val._id} StrikePrice={val.discount}  QtyPiece={val.purchaseQuantity} QtyPieceForOneElement={val.quantity} productName={val.name}  productprice={val.price} image={val.img_path}  />
          )
        })
      }
 </div>
</div>
  )
}