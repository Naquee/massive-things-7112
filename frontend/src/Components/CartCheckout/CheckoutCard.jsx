import React, { useState, useEffect } from "react";
import { EmptyBasketModel } from "./EmptyBasketModel";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./CheckoutCard.module.css";
import { saveData } from "../../Utils/appLocalStorage";

export const CheckoutCards = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)
  const getdata = useSelector((store) => (store.AppReducer.cart));
  const [saving, setSaving] = useState([]);
  const [price, setPrice] = useState([]);
  const subtotal = () => {
    let price = 0;
    getdata?.forEach((ele, k) => {
      price = ele.price * ele.purchaseQuantity + price;
    });
    console.log(price, "price");
    setPrice(price);
  };
  const savings = () => {
    let saving = 0;
    getdata?.forEach((ele, k) => {
      saving = ele.purchaseQuantity * (ele.discount - ele.price) + saving;
    });
    setSaving(saving);
    saveData('totalprice', saving)
  };
  useEffect(() => {
    savings(price);
    subtotal(saving);
  }, [savings, subtotal]);
  return (
    <div className={styles.container}>
      <div className={styles.buttondiv}>
        {getdata?.length !== 0 ? <EmptyBasketModel /> : null}
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          CONTINUE SHOPPING
        </button>
      </div>
      <div className={styles.checkoutcardDiv}>
        {getdata?.length !== 0 ? (
          <div className={styles.checkoutcard}>
            <div className={styles.chargesDiv}>
              <div className={styles.chargesSection1}>
                <div>
                  <p>Subtotal</p>
                  <span>Rs.{Math.round(price)} </span>
                </div>
                <div>
                  <p>Delivery Charges</p>
                  <span>**</span>
                </div>
                <div className={styles.totalDiv}>
                  <p>TOTAL</p>
                  <span>Rs.{Math.round(price)} </span>
                </div>
              </div>
              <div className={styles.savingDiv}>
                <img
                  src="https://www.bbassets.com/static/v2531/uiv2/css/images/your_saved_icon.png"
                  alt=""
                />
                <span>You saved!</span>
                <span>RS. {Math.round(saving)} </span>
              </div>
            </div>
            <div className={styles.coupondiv}>
              <p>* For this order: Accepted food coupon is</p>
            </div>
            <div className={styles.buttonSection}>
              <div>
                <button className={styles.checkoutButton}
                  onClick={() => navigate("/checkout")}>
                  <p>CHECKOUT</p> <span></span>
                </button>
              </div>
            </div>
            <div className={styles.warning}>
              <p>** Actual delivery charges computed at checkout time</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};