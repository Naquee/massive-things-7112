import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import '../App.css';
const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCountryFilters = searchParams.getAll("country");
  const [country, setCountry] = useState(initialCountryFilters || [])
  const initialCategoryFilters = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategoryFilters || [])
  const newCategory = [...category];
  const newCountry = [...country];
  const handleFilterCheckbox1 = (e) => {
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };
const handleFilterCheckbox = (e) => {
    if (newCountry.includes(e.target.value)) {
      newCountry.splice(newCountry.indexOf(e.target.value), 1);
    } else {
      newCountry.push(e.target.value);
    }
    setCountry(newCountry);
  };

  useEffect(() => {
    if (country || category) {
      let params = {};
      category && (params.country = country);
      category && (params.category = category);

      setSearchParams(params);
    }
  }, [category, country, setSearchParams]);


  return (
    <div>
      <p style={{ fontSize: "12px" }}><a href="/">HOME →</a> FRUITS & VEGETABLES</p>
      <div style={{ display: "grid", fontSize: "1rem", width: "13rem", marginTop: "3rem" }}>
        <a href="">Bakery, Cakes & Dairy</a>
        <a href="">EBakery Snacks (7)</a>
        <a href=""> Bread Sticks & Lavash (5)</a>
        <a href="">Breadcrumbs & Croutons (2)</a>
        <a href="">Cheese & Garlic Bread (2)</a>
        <a href="">Cakes & Pastries (14)</a>
        <a href="">Muffins & Cup Cakes (1)</a>
      </div>
      <h3>Country of Origin</h3>
      <div >
        <div>
          <input type="checkbox" value="Australia"checked={country.includes('Australia')} onChange={handleFilterCheckbox} />
          <label>Australia</label>
        </div>
        <div>
          <input type="checkbox" value="Greece" checked={country.includes('Greece')} onChange={handleFilterCheckbox} />
          <label>Greece</label>
        </div>
        <div>
          <input type="checkbox" value="India" checked={country.includes('India')} onChange={handleFilterCheckbox} />
          <label>India</label>
        </div>
        <div>
          <input type="checkbox" value="Spain" checked={country.includes('Spain')} onChange={handleFilterCheckbox} />
          <label>Spain</label>
        </div>
        <div>
          <input type="checkbox" value="USA" checked={country.includes('USA')} onChange={handleFilterCheckbox} />
          <label>USA</label>
        </div>
      </div>
     <hr />
      <h3>Price</h3>
      <div>
        <div>
          <input type="checkbox" value="Less than Rs 20 (2009)" checked={category.includes('Less than Rs 20 (2009)')} onChange={handleFilterCheckbox1} />
          <label>Less than Rs 20 (2009)</label>
        </div>
        <div>
          <input type="checkbox" value="Rs 21 to Rs 50 (4955)" checked={category.includes('Rs 21 to Rs 50 (4955)')} onChange={handleFilterCheckbox1} />
          <label>Rs 21 to Rs 50 (4955)</label>
        </div>
        <div>
          <input type="checkbox" value="Rs 51 to Rs 100 (3961)" checked={category.includes('Rs 51 to Rs 100 (3961)')} onChange={handleFilterCheckbox1} />
          <label>Rs 51 to Rs 100 (3961)</label>
        </div>
        <div>
          <input type="checkbox" value="Rs 101 to Rs 200 (2844)" checked={category.includes('Rs 101 to Rs 200 (2844)')} onChange={handleFilterCheckbox1} />
          <label>Rs 101 to Rs 200 (2844)</label>
        </div>
        <div>
          <input type="checkbox" value="Rs 201 to Rs 500 (1237)" checked={category.includes('Rs 201 to Rs 500 (1237)')} onChange={handleFilterCheckbox1} />
          <label>Rs 201 to Rs 500 (1237)</label>
        </div>
        <div>
          <input type="checkbox" value="More than Rs 501 (9542)" checked={category.includes('More than Rs 501 (9542)')} onChange={handleFilterCheckbox1} />
          <label>More than Rs 501 (9542)</label>
        </div>

      </div>

      <hr />
      <h3>Discounts</h3>
      <div>
        <div>
          <input type="checkbox" value="Upto 5% (61)" checked={category.includes('Upto 5% (61)')} onChange={handleFilterCheckbox1} />
          <label>Upto 5% (61)</label>
        </div>
        <div>
          <input type="checkbox" value="5% - 10% (122)" checked={category.includes('5% - 10% (122)')} onChange={handleFilterCheckbox1} />
          <label>5% - 10% (122)</label>
        </div>
        <div>
          <input type="checkbox" value="10% - 15% (138)" checked={category.includes('10% - 15% (138)')} onChange={handleFilterCheckbox1} />
          <label>10% - 15% (138)</label>
        </div>
        <div>
          <input type="checkbox" value="15% - 25% (11807)" checked={category.includes('15% - 25% (11807)')} onChange={handleFilterCheckbox1} />
          <label>15% - 25% (11807)</label>
        </div>
        <div>
          <input type="checkbox" value="More than 25% (1362)" checked={category.includes('More than 25% (1362)')} onChange={handleFilterCheckbox1} />
          <label>More than 25% (1362)</label>
        </div>
      </div>
   <h3>Brand</h3>
    <div>
      <div>
        <input type="checkbox" value="bb Combo" checked={category.includes('bb Combo')} onChange={handleFilterCheckbox1} />
        <label>bb Combo</label>
      </div>
      <div>
        <input type="checkbox" value="Fresho" checked={category.includes('Fresho')} onChange={handleFilterCheckbox1} />
        <label>Fresho</label>
      </div>
      <div>
        <input type="checkbox" value="Gopalan Organic" checked={category.includes('Gopalan Organic')} onChange={handleFilterCheckbox1} />
        <label>Gopalan Organic</label>
      </div>
      <div>
        <input type="checkbox" value="Tadaa" checked={category.includes('Tadaa')} onChange={handleFilterCheckbox1} />
        <label>Tadaa</label>
      </div>
      <div>
        <input type="checkbox" value="Hoovu Fresh" checked={category.includes('Hoovu Fresh')} onChange={handleFilterCheckbox1} />
        <label>Hoovu Fresh</label>
      </div>
  </div>
  <h3>Pack Size</h3>
    <div>
      <div>
        <input type="checkbox" value="2x4 pcs Multipack" checked={category.includes('2x4 pcs Multipack')} onChange={handleFilterCheckbox1} />
        <label>2x4 pcs Multipack</label>
      </div>
      <div>
        <input type="checkbox" value="2 pcs Approx (300-400g)" checked={category.includes('2 pcs Approx (300-400g)')} onChange={handleFilterCheckbox1} />
        <label>2 pcs Approx (300-400g)</label>
      </div>
      <div>
        <input type="checkbox" value="250 g" checked={category.includes('250 g')} onChange={handleFilterCheckbox1} />
        <label>250 g</label>
      </div>
      <div>
        <input type="checkbox" value="500 g" checked={category.includes('500 g')} onChange={handleFilterCheckbox1} />
        <label>500 g</label>
      </div>
      <div>
        <input type="checkbox" value="1 Kg" checked={category.includes('1 Kg')} onChange={handleFilterCheckbox1} />
        <label>1 Kg</label>
      </div>
  </div>
  <h3>Seasonal</h3>
    <div>
      <div>
        <input type="checkbox" value="Summer Fruits" checked={category.includes('Summer Fruits')} onChange={handleFilterCheckbox1} />
        <label>Summer Fruits</label>
      </div>
      <div>
        <input type="checkbox" value="Summer Veggies" checked={category.includes('Summer Veggies')} onChange={handleFilterCheckbox1} />
        <label>Summer Veggies</label>
      </div>
      <div>
        <input type="checkbox" value="Winter Fruits" checked={category.includes('Winter Fruits')} onChange={handleFilterCheckbox1} />
        <label>Winter Fruits</label>
      </div>
      <div>
        <input type="checkbox" value="Winter Veggies" checked={category.includes('Winter Veggies')} onChange={handleFilterCheckbox1} />
        <label>Winter Veggies</label>
      </div>
    </div>
  </div>
  )
}
export default Filter;