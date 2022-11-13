import React, { useEffect } from 'react'
import { RiCalendar2Line } from 'react-icons/ri'
import styles from './Recharge.module.css'
import { Ordersummery } from '../Ordersummery'
import { UPI } from './UPI'
import { NetBanking } from './Netbanking'
import { Debitcard } from './Debit'
import { CashOnDelivery } from './Cash'
import { useDispatch, useSelector } from 'react-redux'
import { getAddress } from '../../Redux/App/action'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import { Ordersummery } from './Ordersummery'

export const Recharge = () => {
  const [state, setState]=useState(1)
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.AuthReducer);
  const { address } = useSelector((store) => store.AppReducer);
  const getUserAddress = () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch(getAddress(headers))
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(address);
  useEffect(() => {
    getUserAddress();
  }, []);

  return (
    <div style={{position:'relative'}}>
       <div
          style={{
            border: "1px solid black",
            display: "flex",
            backgroundColor: "rgba(84, 226, 28, 0.2)",
            height: "auto",
            marginBottom: "30px",
            marginTop: "30px",
            justifyContent: "space-between",
          }}
        >
          {/* address div */}
          <div style={{ display: "flex", width: "70%" }}>
            <img
              style={{ width: "50px", marginLeft: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3n2xgP5u_8VwrJ4rv-0K3IJrVtxKF_y91vA&usqp=CAU"
              alt=""
            />
            <div style={{ marginRight: "30PX" }}>
              <p> Delivery Address</p>{" "}
            </div>
            <div>
              <p>{address.address || "Please mention the address"}</p>
            </div>
          </div>

          {/* BUTTON FOR BACK TO ADDRESS PAGE */}
          <div style={{ display: "flex",marginRight:"150px", }}>
            <button style={{cursor:"pointer"}} onClick={() => navigate("/checkout")}>CHANGE</button>
          </div>
        </div>
   
    <div className={styles.sangham}>
      <div className={styles.mainDiv}>
        <div className={styles.paymentDiv}>
          <div
            style={{
              display: 'flex',
              gap: 10,
              margin: 20,
              color: '#505050',
              alignItems: 'center',
            }}
          >
            <RiCalendar2Line size={25} />
            <h5>Payment Options</h5>
          </div>
        </div>
        <div className={styles.paymentMethods}>
          <div>
            <div onClick={()=>setState(1)} >
              <h6>Credit / Debit Card</h6>
            </div>

            <div onClick={()=>setState(2)}>
              <h6>Netbanking</h6>
            </div>
            <div onClick={()=>setState(3)}>
              <h6>UPI</h6>
            </div>
            <div onClick={()=>setState(4)}>
              <h6>Cash on Delivery</h6>
            </div>
          </div>
          <div>
            {state==1 && <Debitcard />}
            {state==2 &&  <NetBanking />}
            {state==4 && <CashOnDelivery/>}
            {state==3 && <UPI />}
          </div>
        </div>
      </div>
      <div className={styles.orderSummary} >
        <Ordersummery />
      </div>
    </div>
    </div>
  )
}