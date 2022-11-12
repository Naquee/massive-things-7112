
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

const { REACT_APP_API_URL } = process.env;
const VegCard = ({productId}) => {
    return (
        <div style={{marginTop:"4rem",lineHeight:".2rem",boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"}}>

            <div style={{display:"flex",justifyContent:"center"}}>
                <img src={`${REACT_APP_API_URL}${productId.img_path}`} alt="vegetables" />
            </div>
            <div style={{border:"1px solid white",lineHeight:"-1rem",paddingLeft:"1.5rem"}}>
                <p style={{fontSize:".7rem",fontWeight:"500",color:"gray"}}>FRESHO</p>
                <h4 style={{fontWeight:"400", fontSize:".95rem",marginTop:"1rem",color:"black"}}>{`${productId.name}`}</h4>
            </div>
            <p style={{paddingLeft:"1.5rem",fontSize:".9rem"}}>{productId.quantity}</p>
            <div style={{border:"1px solid white",paddingLeft:"1.5rem",backgroundColor:"#f4f3f2",fontSize:".9rem"}}>
             <p>{`Rs. ${productId.price}`}</p>
             <div style={{display:"flex",paddingBottom:".5rem",gap:".2rem"}}>
                <div style={{border:'1px solid gray', height:"1.2rem",backgroundColor:"#f4f3f2",borderRadius:".3rem"}}> <span style={{fontSize:".8rem",padding:".4rem .4rem 0rem 0rem"}}>Qty</span><input style={{width:"1.5rem",height:".85rem"}} value={`${1}`} type="number" /></div>
                <button  style={{display:"flex",gap:".5rem",fontSize:".8rem",backgroundColor:"#f5d177",borderRadius:".3rem",border:"none",paddingTop:".2rem"}}>ADD <span style={{fontSize:".9rem"}}><FaShoppingBasket/></span></button>
             </div>

            </div>
           
        </div>
        
    )
}


export default VegCard;