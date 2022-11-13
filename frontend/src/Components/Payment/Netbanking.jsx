import React, { useState } from 'react'
import AlertMessage from '../AlertMessage';
import styles from './NetBanking.module.css'

export const NetBanking = () => {
  
  return (
    <div>
      <h3>Frequently Used Banks</h3>
      <div className={styles.BankOptions}>
        <div>
          <input type="radio" name="netBank" />{' '}
          <img src="https://assets.juspay.in/juspay/payments/in.hyper.pay.bb_staging/beta/WEB/1.0rc1/assets/ic_bank_607152.png" />{' '}
          <p>HDFC Bank</p>
        </div>
        <div>
          <input type="radio" name="netBank" />{' '}
          <img src="https://assets.juspay.in/juspay/payments/in.hyper.pay.bb_staging/beta/WEB/1.0rc1/assets/ic_bank_508534.png" />{' '}
          <p>ICICI NetBanking  </p>
        </div>
        <div>
          <input type="radio" name="netBank" />{' '}
          <img src="https://assets.juspay.in/juspay/payments/in.hyper.pay.bb_staging/beta/WEB/1.0rc1/assets/ic_bank_508548.png" />{' '}
          <p>State Bank of India</p>
        </div>
      </div>
    </div>
  )
}