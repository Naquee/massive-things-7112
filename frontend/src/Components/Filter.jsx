import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


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
            console.log(params);

            setSearchParams(params);
        }
    }, [category, setSearchParams]);


    return (
        <div>
             <h3>Country of Origin</h3>
      <div >
        <div>
          <input type="checkbox" value="Australia" checked={category.includes('Australia')} onChange={handleFilterCheckbox}  />
          <label>Australia</label>
        </div>
        <div>
          <input type="checkbox" value="Hawaiian" checked={category.includes('Hawaiian')} onChange={handleFilterCheckbox}  />
          <label>Hawaiian</label>
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
          <input type="checkbox" value="South Africa" checked={category.includes('South Africa')} onChange={handleFilterCheckbox}  />
          <label>South Africa</label>
        </div>
        <div>
          <input type="checkbox" value="Spain" checked={category.includes('Spain')} onChange={handleFilterCheckbox}  />
          <label>Spain</label>
        </div>
        <div>
          <input type="checkbox" value="Thailand" checked={category.includes('Thailand')} onChange={handleFilterCheckbox}  />
          <label>Thailand</label>
        </div>
        <div>
          <input type="checkbox" value="Iran" checked={category.includes('Iran')} onChange={handleFilterCheckbox}  />
          <label>Iran</label>
        </div>
        <div>
          <input type="checkbox" value="USA" checked={category.includes('USA')} onChange={handleFilterCheckbox}  />
          <label>USA</label>
        </div>
        <div>
          <input type="checkbox" value="Egypt" checked={category.includes('Egypt')} onChange={handleFilterCheckbox}  />
          <label>Egypt</label>
        </div>
        <div>
          <input type="checkbox" value="The Netherlands" checked={category.includes('The Netherlands')} onChange={handleFilterCheckbox}  />
          <label>The Netherlands</label>
        </div>
        <div>
          <input type="checkbox" value="Peru" checked={category.includes('Peru')} onChange={handleFilterCheckbox}  />
          <label>Peru</label>
        </div>
        <div>
          <input type="checkbox" value="New Zealand" checked={category.includes('New Zealand')} onChange={handleFilterCheckbox}  />
          <label>New Zealand</label>
        </div>
        <div>
          <input type="checkbox" value="Turkey" checked={category.includes('Turkey')} onChange={handleFilterCheckbox}  />
          <label>Turkey</label>
        </div>
        <div>
          <input type="checkbox" value="Chile" checked={category.includes('Chile')} onChange={handleFilterCheckbox}  />
          <label>Chile</label>
        </div>
      </div>
         <hr />
         <h4>Seasonal</h4>
          <div>
          <div>
          <input type="checkbox" value="Pooja items" checked={category.includes('Pooja items')} onChange={handleFilterCheckbox}  />
          <label>Pooja items</label>
        </div>
        <div>
          <input type="checkbox" value="Summer Fruits" checked={category.includes('Summer Fruits')} onChange={handleFilterCheckbox}  />
          <label>Summer Fruits</label>
        </div>
        <div>
          <input type="checkbox" value="Summer Veggies" checked={category.includes('Summer Veggies')} onChange={handleFilterCheckbox}  />
          <label>Summer Veggies</label>
        </div>
        <div>
          <input type="checkbox" value="Winter Fruits" checked={category.includes('Winter Fruits')} onChange={handleFilterCheckbox}  />
          <label>Winter Fruits</label>
        </div>
        <div>
          <input type="checkbox" value="Winter Veggies" checked={category.includes('Winter Veggies')} onChange={handleFilterCheckbox}  />
          <label>Winter Veggies</label>
        </div>
      </div>
      <hr />
         <h4>Types of Flowers</h4>
          <div>
          <div>
          <input type="checkbox" value="Rose" checked={category.includes('Rose')} onChange={handleFilterCheckbox}  />
          <label>Rose</label>
        </div>
        <div>
          <input type="checkbox" value="Lilies" checked={category.includes('Lilies')} onChange={handleFilterCheckbox}  />
          <label>Lilies</label>
        </div>
        <div>
          <input type="checkbox" value="Orchids" checked={category.includes('Orchids')} onChange={handleFilterCheckbox}  />
          <label>Orchids</label>
        </div>
        <div>
          <input type="checkbox" value="Carnations" checked={category.includes('Carnations')} onChange={handleFilterCheckbox}  />
          <label>Carnations</label>
        </div>
        <div>
          <input type="checkbox" value="Gerbera" checked={category.includes('Gerbera')} onChange={handleFilterCheckbox}  />
          <label>Gerbera</label>
        </div>
        <div>
          <input type="checkbox" value="Mixed" checked={category.includes('Mixed')} onChange={handleFilterCheckbox}  />
          <label>Mixed</label>
        </div>
        <div>
          <input type="checkbox" value="Other" checked={category.includes('Other')} onChange={handleFilterCheckbox}  />
          <label>Other</label>
        </div>
      </div>

      <hr />
         <h4>Wrap Types</h4>
          <div>
          <div>
          <input type="checkbox" value="Bouquet" checked={category.includes('Bouquet')} onChange={handleFilterCheckbox}  />
          <label>Bouquet</label>
        </div>
        <div>
          <input type="checkbox" value="Bunches" checked={category.includes('Bunches')} onChange={handleFilterCheckbox}  />
          <label>Bunches</label>
        </div>
        <div>
          <input type="checkbox" value="Basket" checked={category.includes('Basket')} onChange={handleFilterCheckbox}  />
          <label>Basket</label>
        </div>
      </div>

      <hr />
         <h4>Brands</h4>
          <input type="text" placeholder="Search bt brand" />
      <div>
         <div>
          <input type="checkbox" value="Tadaa" checked={category.includes('Tadaa')} onChange={handleFilterCheckbox}  />
          <label>Tadaa</label>
        </div>
        <div>
          <input type="checkbox" value="The Bakery" checked={category.includes('The Bakery')} onChange={handleFilterCheckbox}  />
          <label>The Bakery</label>
        </div>
        <div>
          <input type="checkbox" value="Trikaya" checked={category.includes('Trikaya')} onChange={handleFilterCheckbox}  />
          <label>Trikaya</label>
        </div>
        <div>
          <input type="checkbox" value="Turkel" checked={category.includes('Turkel')} onChange={handleFilterCheckbox}  />
          <label>Turkel</label>
        </div>
        <div>
          <input type="checkbox" value="Tvs Organics" checked={category.includes('Tvs Organics')} onChange={handleFilterCheckbox}  />
          <label>Tvs Organics</label>
        </div>
        <div>
          <input type="checkbox" value="Basket" checked={category.includes('Basket')} onChange={handleFilterCheckbox}  />
          <label>Basket</label>
        </div>
        <div>
          <input type="checkbox" value="Bouquet" checked={category.includes('Bouquet')} onChange={handleFilterCheckbox}  />
          <label>Bouquet</label>
        </div>
        <div>
          <input type="checkbox" value="Bunches" checked={category.includes('Bunches')} onChange={handleFilterCheckbox}  />
          <label>Bunches</label>
        </div>
        <div>
          <input type="checkbox" value="Basket" checked={category.includes('Basket')} onChange={handleFilterCheckbox}  />
          <label>Basket</label>
        </div>
        <div>
          <input type="checkbox" value="Bouquet" checked={category.includes('Bouquet')} onChange={handleFilterCheckbox}  />
          <label>Bouquet</label>
        </div>
        <div>
          <input type="checkbox" value="Bunches" checked={category.includes('Bunches')} onChange={handleFilterCheckbox}  />
          <label>Bunches</label>
        </div>
        <div>
          <input type="checkbox" value="Basket" checked={category.includes('Basket')} onChange={handleFilterCheckbox}  />
          <label>Basket</label>
        </div>
      </div>


        </div>
    )
}



export default Filter;