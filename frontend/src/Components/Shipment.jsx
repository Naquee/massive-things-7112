import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Ordersummery } from './Ordersummery'

export const Shipment = () => {
    const navigate=useNavigate();
  return (
    <div style={{display:"flex",justifyContent:"space-around",marginTop:"50px",marginBottom:"100px"}}>
    <div style={{width:"60%"}}>

        <div style={{border:"1px solid black",display:"flex",backgroundColor:"gray",height:"auto",marginBottom:"30px",marginTop:"30px",justifyContent:"space-between"}}>
            {/* address div */}
            <div style={{display:"flex",width:"70%%"}}>
            <img style={{width:"50px",marginLeft:"30px",}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3n2xgP5u_8VwrJ4rv-0K3IJrVtxKF_y91vA&usqp=CAU" alt="" />
            <div style={{marginRight:"30PX"}}><p> Delivery Address</p> </div>
            <div><p>address from address page</p></div>
            </div>
        
        {/* BUTTON FOR BACK TO ADDRESS PAGE */}
            <div style={{display:"flex",}}>
            <button onClick={()=>navigate("/checkout")} >CHANGE</button>
            </div>

        </div>








        <div style={{border:"1px solid black",display:"flex",backgroundColor:"gray",height:"auto",marginBottom:"30px",marginTop:"30px",justifyContent:"space-between"}}>
            {/* address div */}
            <div style={{display:"flex",width:"80%"}}>
            <img style={{width:"50px",marginLeft:"30px",}} src="data:image/jpeg;base64,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" alt="" />
            <div style={{marginLeft:"20px"}}><p>Is this a gift order?</p> </div>
            </div>
        
        {/* BUTTON FOR BACK TO ADDRESS PAGE */}
            <div style={{display:"flex",}}>
            <button  >ADD MESSEGE</button>
            </div>

        </div>








        {/* delivery div */}

        <div style={{border:"1px solid black",height:"auto"}}>
        <div style={{display:"flex",marginLeft:"30px"}}><img style={{width:"40px",marginRight:"30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcGPvjFQlKlorhJqysJqO8O2BqT93AUdfTw&usqp=CAU" alt="" /> <h3>Delivery Option</h3></div>



        <div style={{display:"flex",marginLeft:"60px"}}>
        <input type="radio" /><h4> Default Delivery Option</h4>  <span style={{marginLeft:"50px",marginTop:"20px"}}> 1 Shipment, Delivery Charge: <span style={{color:"green"}}>FREE</span></span> 
         </div>

         <div style={{border:"1px solid black",backgroundColor:"gray",marginLeft:"70px",display:"flex"}}>
        <img style={{width:"100px",marginRight:"30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwjVyCGNLyCNKUzARRlJBraMJqS1fKtWnHg&usqp=CAU" alt="shipmentlogo" />
        <p>Shipment 1:  Standard Delivery  <span style={{marginLeft:"50px"}}> Delivery Charge: FREE</span></p>
        <input style={{marginLeft:"60px"}} type="date" />
         </div>

         <button style={{backgroundColor:"lightgreen",hieght:"auto",border:"1px solid green",height:"50px",cursor:"pointer",marginTop:"40px",marginLeft:"60%"}}>PROCEED TO PAYMENT</button>
        </div>





        {/* paymentotion div */}
        <div style={{backgroundColor:"gray",display:"flex",marginTop:"20px"}}>
           <img style={{width:"100px",marginLeft:"30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2p2nalhNNSXVnejos6BLISNvSRMnkRXaL7Q&usqp=CAU" alt="payment logo" />
        <span style={{color:"white",fontSize:"20px",marginLeft:"30px"}}>Payment Option</span>
        </div>



       


    </div>
    <div style={{border :"3px solid black",width:"20%",hieght:"auto"}}>
      <Ordersummery/>
    </div>
    </div>
  )
}
