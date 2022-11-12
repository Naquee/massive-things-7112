import React from 'react'

export const Ordersummery = () => {
  return (
    <div style={{hieght:"auto"}}>
    <div><img style={{width:"60%"}} src="https://cdn5.vectorstock.com/i/1000x1000/36/79/order-summary-rubber-stamp-vector-14713679.jpg" alt="" /></div>
     
    <div style={{ display:"flex",
            height:"auto",marginTop:"70px",width:"100%",}}>
            <div style={{ textAlign: "left",width:"50%",backgroundColor:"",color:"black"}}>
            <h4 style={{marginBottom:"15px"}}>Name</h4>
            <h4 style={{marginBottom:"15px"}}>Number</h4>
            <h4 style={{marginBottom:"15px"}}>Total Price</h4>
            
            </div>
            {/* rightdiv */}
            <div style={{ textAlign: "left",width:"50%",marginTop:"0%"}}>
                {/* data from api */}
                <h4 style={{marginBottom:"15px"}}>Not mentioned</h4>
                <h4 style={{marginBottom:"15px"}}>Not mentioned</h4>
                <h4 style={{marginBottom:"15px"}}>0 Rupees</h4>
            </div>
            
            </div>
    </div>
   
  )
}
