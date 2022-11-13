import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAddress } from '../Redux/App/action';
import { accesData } from '../Utils/appLocalStorage';

export const Ordersummary = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.AuthReducer);
  const { address } = useSelector((store) => store.AppReducer);
  let price = accesData('totalprice')
  const getUserAddress = () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch(getAddress(headers))
      .then((res) => { })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUserAddress();
  }, []);
  return (
    <div style={{ hieght: "auto" }}>
      <div><img style={{ width: "60%" }} src="https://cdn5.vectorstock.com/i/1000x1000/36/79/order-summary-rubber-stamp-vector-14713679.jpg" alt="" /></div>

      <div style={{
        display: "flex",
        height: "auto", marginTop: "70px", width: "100%",
      }}>
        <div style={{ textAlign: "left", width: "50%", backgroundColor: "", color: "black" }}>
          <h4 style={{ marginBottom: "15px" }}>Name</h4>
          <h4 style={{ marginBottom: "15px" }}>Number</h4>
          <h4 style={{ marginBottom: "15px" }}>State</h4>
          <h4 style={{ marginBottom: "15px" }}>Total Price</h4>

        </div>
        {/* rightdiv */}
        <div style={{ textAlign: "left", width: "50%", marginTop: "0%" }}>
          {/* data from api */}
          <h4 style={{ marginBottom: "15px" }}>{address?.fname || "Not"} {address?.lname || "Mention"}</h4>
          <h4 style={{ marginBottom: "15px" }}>{address?.contact || "Not mention"}</h4>
          <h4 style={{ marginBottom: "15px" }}>{address?.state || "Not mention"}</h4>
          <h4 style={{ marginBottom: "15px" }}>{price ? price : 0}Rupees</h4>
        </div>

      </div>
    </div>

  )
}
