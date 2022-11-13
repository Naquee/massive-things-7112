import React, { useEffect, useState } from 'react';
import styles from "./Checkout.module.css";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT, ADD, REMOVE } from '../../Redux/CartCheckout/action/action';
import CloseIcon from '@mui/icons-material/Close';
import { deleteCartProduct, getCartProduct } from '../../Redux/App/action';
export const Listitems = (props) => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const getdata = useSelector((store) => (store.AppReducer.cart));
  const { token } = useSelector((store) => (store.AuthReducer));
  const compare = () => {
    let comparedata = getdata.filter((props) => {
      return props.id == id
    });
    setData(comparedata);
  }
  const send = (props) => {
    dispatch(ADD(props));
  }
  const dlt = (props) => {
    dispatch(DLT(props));
  }
  const remove = (props) => {
    dispatch(REMOVE(props))
  }

  const handleDelete = (productName) => {
    const payload = {
      name: productName
    }
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    dispatch(deleteCartProduct(payload, headers)).then((res) => {
      dispatch(getCartProduct(headers));
    }).catch((err) => {
      console.log(err);
    })

  }

  useEffect(() => {
    compare();
  }, [id])
  return (
    <div className={styles.listItemDiv}>
      <div>&nbsp;</div>
      <div className={styles.description}>
        <div className={styles.fade}><p>{props.Brand}</p> </div>
        <div><p>{props.productName}</p> </div>
      </div>
      <div>
        <div>Rs: {props.productprice} </div>
        <div className={styles.fade}>
          <strike>Rs:{props.StrikePrice} </strike>
        </div>
      </div>
      <div>
        <div className={styles.quantitydiv}>
          <button onClick={props.QtyPiece <= 1 ? () => dlt(props.id) : () => remove(props)}>-</button>
          <input
            type={"number"}
            placeholder={props.QtyPiece}
          />
          <button onClick={() => send(props)}>+</button>
        </div>
      </div>
      <div>
        <div>Rs.{(props.QtyPiece * props.productprice).toFixed(2)} </div>
      </div>
      <div className={styles.crossSign}
      >
        <CloseIcon onClick={() => handleDelete(props.productName)} />
      </div>
      <div>
        <div className={styles.savings}>Rs. {(props.QtyPiece * (props.StrikePrice - props.productprice)).toFixed(2)}</div>
      </div>
    </div>
  )
}