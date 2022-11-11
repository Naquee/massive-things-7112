import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import '../App.css';

const Filter = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const initialCategoryFilters = searchParams.getAll("category");

    const [category, setCategory] = useState(initialCategoryFilters || [])

    const handleFilterCheckbox = (e) => {
        const newCategories = [...category];

        if(newCategories.includes(e.target.value)){
            newCategories.splice(newCategories.indexOf(e.target.value), 1);
        }else{
            newCategories.push(e.target.value);
        }

        setCategory(newCategories);
    };

    useEffect(() => {
        if(category){
            let params = {};
            category && (params.category = category);

            setSearchParams(params);
        }
    }, [category, setSearchParams]);


    return (
        <div>
          <p style={{fontSize:"12px"}}><a  href="/">HOME →</a> FRUITS & VEGETABLES</p>
          <div style={{display:"grid",fontSize:"1rem", width:"13rem",marginTop:"3rem"}}>
          <a href="">Cuts & Sprouts (2867)</a>
          <a href="">Exotic Fruits & Veggies (4966)</a>
          <a href="">Flower Bouquets, Bunches (1280)</a>
          <a href="">Fresh Fruits (6577)</a>
          <a href="">Fresh Vegetables (12283)</a>
          <a href="">Herbs & Seasonings (2595)</a>
          <a href="">Organic Fruits & Vegetables (2687)</a>
          </div>
             <h3>Country of Origin</h3>
      <div >
        <div>
          <input type="checkbox" value="Australia" checked={category.includes('Australia')} onChange={handleFilterCheckbox}  />
          <label>Australia</label>
        </div>
        <div>
          <input type="checkbox" value="Afghanistan" checked={category.includes('Afghanistan')} onChange={handleFilterCheckbox}  />
          <label>Afghanistan</label>
        </div>
        <div>
          <input type="checkbox" value="China" checked={category.includes('China')} onChange={handleFilterCheckbox}  />
          <label>China</label>
        </div>
        <div>
          <input type="checkbox" value="Greece" checked={category.includes('Greece')} onChange={handleFilterCheckbox}  />
          <label>Greece</label>
        </div>
        <div>
          <input type="checkbox" value="India" checked={category.includes('India')} onChange={handleFilterCheckbox}  />
          <label>India</label>
        </div>
        <div>
          <input type="checkbox" value="Italy" checked={category.includes('Italy')} onChange={handleFilterCheckbox}  />
          <label>Italy</label>
        </div>
        <div>
          <input type="checkbox" value="Spain" checked={category.includes('Spain')} onChange={handleFilterCheckbox}  />
          <label>Spain</label>
        </div>
        <div>
          <input type="checkbox" value="USA" checked={category.includes('USA')} onChange={handleFilterCheckbox}  />
          <label>USA</label>
        </div>
      </div>
      <hr />
         <h3>Price</h3>
          <div>
          <div>
          <input type="checkbox" value="Less than Rs 20 (2009)" checked={category.includes('Less than Rs 20 (2009)')} onChange={handleFilterCheckbox}  />
          <label>Less than Rs 20 (2009)</label>
        </div>
        <div>
          <input type="checkbox" value="Rs 21 to Rs 50 (4955)" checked={category.includes('Rs 21 to Rs 50 (4955)')} onChange={handleFilterCheckbox}  />
          <label>Rs 21 to Rs 50 (4955)</label>
        </div>
        <div>
          <input type="checkbox" value="Rs 51 to Rs 100 (3961)" checked={category.includes('Rs 51 to Rs 100 (3961)')} onChange={handleFilterCheckbox}  />
          <label>Rs 51 to Rs 100 (3961)</label>
        </div>
        <div>
          <input type="checkbox" value="Rs 101 to Rs 200 (2844)" checked={category.includes('Rs 101 to Rs 200 (2844)')} onChange={handleFilterCheckbox}  />
          <label>Rs 101 to Rs 200 (2844)</label>
        </div>
        <div>
          <input type="checkbox" value="Rs 201 to Rs 500 (1237)" checked={category.includes('Rs 201 to Rs 500 (1237)')} onChange={handleFilterCheckbox}  />
          <label>Rs 201 to Rs 500 (1237)</label>
        </div>
        <div>
          <input type="checkbox" value="More than Rs 501 (9542)" checked={category.includes('More than Rs 501 (9542)')} onChange={handleFilterCheckbox}  />
          <label>More than Rs 501 (9542)</label>
        </div>

      </div>

      <hr />
         <h3>Discounts</h3>
          <div>
          <div>
          <input type="checkbox" value="Upto 5% (61)" checked={category.includes('Upto 5% (61)')} onChange={handleFilterCheckbox}  />
          <label>Upto 5% (61)</label>
        </div>
        <div>
          <input type="checkbox" value="5% - 10% (122)" checked={category.includes('5% - 10% (122)')} onChange={handleFilterCheckbox}  />
          <label>5% - 10% (122)</label>
        </div>
        <div>
          <input type="checkbox" value="10% - 15% (138)" checked={category.includes('10% - 15% (138)')} onChange={handleFilterCheckbox}  />
          <label>10% - 15% (138)</label>
        </div>
        <div>
          <input type="checkbox" value="15% - 25% (11807)" checked={category.includes('15% - 25% (11807)')} onChange={handleFilterCheckbox}  />
          <label>15% - 25% (11807)</label>
        </div>
        <div>
          <input type="checkbox" value="More than 25% (1362)" checked={category.includes('More than 25% (1362)')} onChange={handleFilterCheckbox}  />
          <label>More than 25% (1362)</label>
        </div>
      </div>


        </div>
    )
}



export default Filter;