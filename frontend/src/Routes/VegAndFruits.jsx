import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import VegCard from "../Components/vegCard";
import { getVeg } from "../Redux/App/action";



const Vegs = () => {

    const vegs = useSelector(state => state.AppReducer.veg);
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if(location || vegs.length === 0){
            let getVegsParams = {
                params : {
                    category : searchParams.getAll('category'),
                }
            }

            dispatch(getVeg(getVegsParams))
        }
    }, [location.search])
   
    console.log(vegs)

    return (
        <div style={{display:"flex",
       gap:"2rem",
       textAlign:"left"
      
    }}>
      <div style={{width:"200px", border:"2px solid black", paddingLeft:"1rem"}}>
      <Filter/>
      </div>
      <div style={{
        border:'1px solid black',
         display: 'grid',

         gridTemplateColumns:'repeat(4, 1fr)' ,
         gridGap:"2rem",
         
         
      }}>
        { vegs.length > 0 && vegs.map((veges) => {
             return <div key={veges._id}>
             
                 <VegCard vegId={veges}/>
                
             </div> 
        }) }
      </div>
    </div>
    );
}


export default Vegs;
