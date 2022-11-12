import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import ControlledOpenSelect from "../Components/priceFilter";

import VegCard from "../Components/vegCard";
import { getVeg } from "../Redux/App/action";
import { getProducts } from "../Redux/App/action";
const { REACT_APP_API_URL } = process.env;


const VegsAndFruits = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const { products } = useSelector((store) => store.AppReducer);
    const sortBy = searchParams.get("sortBy");
    const country = searchParams.getAll("country")
    // const getProductData = () => {
    //     dispatch(getProducts())
    //         .then((res) => { })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    // console.log(products)
    // useEffect(() => {
    //     getProductData();
    // }, []);

    useEffect(() => {
        if (location) {
            let getProductsParams = {
                params: {
                    _sort: sortBy && "price",
                    _order: sortBy,
                    country: country
                },
            }
            dispatch(getProducts(getProductsParams));
        }
    }, [location.search]);

    return (
        <div style={{ width: "95%", marginLeft: "3rem" }}>
            <div style={{
                display: "flex",
                gap: "2rem",
                textAlign: "left",
                backgroundColor: "#ffffff",
                marginTop: "2rem"
            }}>
                <div style={{ width: "200px", paddingLeft: "1rem", width: '15rem', boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                    <Filter />
                </div>
                
                <div>
                    <div style={{ display: "flex", gap: "32rem", marginTop: "3.2rem " }}>
                        <h2 style={{ fontWeight: "100", color: '#58595b' }}>Fruits & Vegetables({products.length})</h2>
                        <ControlledOpenSelect />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: 'repeat(auto-fit,minmax(250px,max-content))', gridGap: "2rem", justifyContent: 'center' }} >
                        {products.length > 0 && products?.map((product) => (

                            product.category[1] === 'Fruit & Vegetables' && <div key={product._id}>
                                <VegCard productId={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ textAlign: "left", paddingLeft: "3rem", color: "#818285", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" }}>
                <h3>Related Searches</h3>

                <p>Mangoes Online  |  Fruit Baskets  |  International Fruits and Vegetables Online  |  Fresh Fruits   |  Fresh Fruits  |  Fresh Vegetables  |  Fresh Vegetables  |</p>
                <p>Potatoes & Onion   |  Potatoes & Onion  |  Leafy Vegetables</p>
            </div>
            <div style={{ textAlign: "left", padding: "2rem", color: "#818285", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                <h3>Buy Fruits and Vegetables Online</h3>
                <p>While fresh vegetables should be a part of your everyday meals, some vegetables are hard to find even in the huge supermarkets in your area. However, the luxury of online shopping offers customers the comfort of relishing these veggies by ordering them from the comfort of their home. While beetroot, amlas, green peas, broccoli can easily be found in the market, bigbasket makes grocery shopping easier for you with their fresh produce delivered in top class packages right at your doorstep. With their wide delivery network, geographical barriers are easily overcome in more than 25 major cities, thereby giving you the benefit of fresh fruits and vegetables every time.</p>
                <h3>Fruits and Vegetables</h3>
                <p>Fruits and vegetables form the base of everybody’s daily food consumption. However, not everyone has access to fresh and healthy vegetables and fruits due to various reasons. Starting from farming methods that involve toxicants to storage systems and logistics, many sellers land up with rotten raw foods or foods exposed to chemicals and other radicals. Bigbasket has now turned the scene around with its online shopping store, where you can have fresh potato, tomato, carrots, onions and everything else on your grocery list, delivered to your doorstep, even without stepping out of your house. Apart from your regular local produce, you can also shop for other seasonal produces such as asparagus, broccoli, drumstick, white onion and more on bigbasket’s online store. Packaging plays a vital role in up keeping the freshness of your fruits and vegetables. Green leafy vegetables are prone to spoilage easily if not handled properly. While ordering online in bigbasket, worries about packaging and hygiene can be kept at bay. Be it your lettuce, cauliflower or any green vegetable, the packaging standard is specific and of high quality. You can find a whole wide range of vegetables such as red cabbage, drumstick leaves and different exotic ones as well on bigbasket. Apart from quality, we also believe in making fresh foods available to all and thus, you can find very nominal pricing while shopping online with us. Comapre the onion price or potato price with anywhere else in the market, and you will understand what we are talking about. Quality is uncompromised regardless of the type of delivery that you choose, standard or express. The produce delivered to you will be as fresh as directly cultivated from the farms resulting in high levels of nutrition. You no more have to walk through aisles of piled up produce and spend time carefully picking out each vegetable or fruit from them. We will take care of the entire process for you. We at bigbasket, cautiously pick your produce, meticulously clean them and pack them using the best packaging material available before delivering them to you. Shop for your vegetables and fruits online now from the comfort of your couch and have your order delivered to your doorstep within a stipulated time. Look out for great deals, offers and value packs while shopping online with us. Save time, money and efforts, by completing your routine grocery shopping on bigbasket.</p>
                <h3>Freshness- the promise of quality</h3>
                <p>The freshness of the produce being delivered to you is unquestionable, even in the case of standard delivery. Veggies like banana stem and banana flower, which are used in exotic dishes, are fresh and readily available to buy online at bigbasket. Vegetables like mushrooms and sprouts, which are prone to quick spoilage are also packed with utmost care using the best materials. Variety of vegetables such as button mushrooms, raw banana and yellow zucchini are also available. With the demand for organic produce continuously rising, bigbasket has made them readily accessible. You can shop for organic bananas online on the site too. All these fruits and vegitables are brought from verified and reputed vendors, giving no room to worry about quality. Striving to sustain the nutritive benefits of the vegetables and fruits, bigbasket takes its packaging very seriously and abides by a very strict packing standard. With a whole lot of groceries to shop for and the luxury of at-home shopping, bigbasket brings convenience to your grocery shopping experience with regard to time, delivery, cost and quality. bigbasket offers a range of prominent products that are well received by customers. “Zespri” is one such well-known brand that is available to shop for online. For those looking out for organic products only, bigbasket stocks products by TVS Organic too. Make bigbasket your prime choice to buy fruits and vegetables online.</p>
                <h3>Delivery in Major Cities</h3>
                <p>We at bigbasket choose our produce with as much care as you do. Carefully sorted, meticulously cleaned and carefully packed, fruits and vegetables from our online store reach you the day you order them. bigbasket offers delivery in Chennai, delivery in Delhi and most other major cities in India.</p>
                <h3>Choose from cuts and sprouts, fresh herbs and seasonings</h3>
                <p>do away with the hassle of soaking and sprouting grains, or preparing vegetables and fruits for consumption. At bigbasket, we offer crunchy sprouts and organic produce too! Save the time and effort you spend in cutting and cleaning by choosing from our basket of pre-prepared fruits and vegetables. Just toss the prepared vegetables into your wok for a refreshing and healthy meal in a jiffy!</p>
                <h3>bigbasket bbnow</h3>
                <p>Introducing bbnow: Get your groceries delivered in 15 to 30 minutes. Choose from 3000 essential items. bigbasket bbnow service is currently available in select cities. Download the bigbasket app to check whether your location is eligible for bbnow.</p>
            </div>


        </div>
    );
}

export default VegsAndFruits;
