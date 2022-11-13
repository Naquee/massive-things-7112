
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import ControlledOpenSelect from "../Components/priceFilter";

import VegCard from "../Components/vegCard";
import { getVeg } from "../Redux/App/action";
import { getProducts } from "../Redux/App/action";
const { REACT_APP_API_URL } = process.env;



const BakeryDairy = () => {
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

    console.log(products)

    return (
        <div style={{ width: "95%", marginLeft: "3rem" }}>
            <div style={{
                display: "flex",
                gap: "2rem",
                textAlign: "left",
                backgroundColor: "#ffffff",
                marginTop: "2rem"
            }}>
                <div style={{ width: "250px", paddingLeft: "1rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                    <Filter />
                </div>

                <div style={{ 
                    width:'90%',
                    display: "flex",
                    flexDirection:'column',
                    gap: "2rem",
                    textAlign: "left",
                    backgroundColor: "#ffffff",
                    
                }}>
                    <div style={{ width: "100%",display: "flex",  justifyContent: 'space-between', marginTop: "3.2rem" }}>
                        <Typography sx={{fontSize:{xs:'small', md:'x-large'}}}>Bakery, Cakes & Dairy({products.length})</Typography>
                        <ControlledOpenSelect />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: 'repeat(auto-fit,minmax(250px,max-content))', gridGap: "2rem", justifyContent: 'center'}} >
                        {products.length > 0 && products?.map((product) => (
                            product.category[1] === 'Bakery Cake & Dairy' && <div key={product._id}>
                                <Link to={`/product/${product._id}/${product.name.replace(/\s+/g, '')}`}>
                                    <VegCard productId={product} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ textAlign: "left", padding: "2rem", color: "#818285", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                <h3>Buy Bakery Cakes and Dairy Online</h3>
                <p>Imagine, you are craving for ice cream, greek yogurt or for any other bakery products at night, but you can't go out to the offline bakery stores. You don't need to get worried when you can order dairy products online anytime and anywhere from online bakery on Bigbasket. You can order milk and dairy products online and get them delivered on time and in the right place at your doorsteps. On Bigbasket we have a huge bakery products list such as birthday cake, condensed milk, mozzarella cheese, and many other items too. A bowl of Greek yogurt can keep you fortified with essential nutrients and even help you lose weight. For many Greek yogurt lovers, the richer texture is also a big sell. Greek yogurt is made by separating out the liquid whey. Protein is essential for good health. It is vital to cell growth, building muscle, and repairing tissue. As you age, you need more protein to keep your skin healthy and to fight off illness. Greek yogurt is a great way to boost your protein levels while avoiding heavy foods like meats. Known as yogurt or dahi, the curd is one of the staples in all our kitchen pantries. And for good reason, always convenient to be paired with any of our daily meals, the uses of curd extend beyond just curd recipes. Curd has amazing health and beauty benefits that can be enjoyed by incorporating just one bowl every day in our diet. And all these healthy items you can get on one of the most trusted platform i.e. on Bigbasket. Apparently, an ounce of mozzarella cheese contains 18 percent of your daily intake of calcium - which aids the health of your bone structure and even manages to strengthen your pearly whites! This velvety smooth cheese also contains phosphorus, a mineral that allows the body to use the aforementioned calcium. Condensed milk is used in numerous dessert dishes in many countries. Soy milk, a healthy nutritious drink, is made from soybeans that are soaked, ground and boiled with water. Soy is a great source of essential fatty acids, fiber, vitamins, proteins, and minerals. These nutrients play an important role in providing you energy and keeping your body functioning well. We have a separate cake bakery too on Bigbasket from where you can choose your favourite cake according to the occasion. On Bigbasket, we offer you the best dairy products online at a great price, then why go to the offline stores where there is no assurance of their products. Here, on Bigbasket, we are committed to our customers. And we assure you about the quality of our products. We always try to maintain the standard of our products at high so that your expectations couldn't hurt. Time is money, then why waste both precious things in shopping from offline stores when you can get your desired products online from dairy products list on Bigbasket without disturbing your normal daily routine. Hurry up! Start your shopping now.</p>
                <h3>Buy Dairy Products Online</h3>
                <p>A one-stop-shop for all your dairy product requirements comes draped in the form of bigbasket offering online dairy products which will stick to a specified delivery time suggested by you. Delivering these dairy products at doorstep is the biggest advantage of opting for online shopping through bigbasket. As these are perishable items, extra care is taken to ensure prompt delivery in metros and other prominent cities. Be it a delivery in Bengaluru or a delivery in Noida, we attach a great deal of importance to the upkeep of the original quality of dairy products. It is now an effortless process to buy milk products online including fresh butter and cream. Simplifying the process of sourcing different types of breads, bigbasket supports the facility of online bread order, much to the satisfaction of bread lovers. Along with these, a variety of buns and pavs can easily be sourced with a promise of our best delivery standards. Spanning delivery in major cities, bigbasket gives you the ease of delivery, with bread, dairy and eggs sent directly to your home! In the mood to celebrate an event with a cake? Then, wait no longer and opt for our online cake order facility with just a click while you busy yourself with the rest of the arrangements for a memorable home party. You can also try multigrain bread on bigbasket.</p>
                <h3>Wide Range of Dairy Products</h3>
                <p>The freshness of the produce being delivered to you is unquestionable, even in the case of standard delivery. Veggies like banana stem and banana flower, which are used in exotic dishes, are fresh and readily available to buy online at bigbasket. Vegetables like mushrooms and sprouts, which are prone to quick spoilage are also packed with utmost care using the best materials. Variety of vegetables such as button mushrooms, raw banana and yellow zucchini are also available. With the demand for organic produce continuously rising, bigbasket has made them readily accessible. You can shop for organic bananas online on the site too. All these fruits and vegitables are brought from verified and reputed vendors, giving no room to worry about quality. Striving to sustain the nutritive benefits of the vegetables and fruits, bigbasket takes its packaging very seriously and abides by a very strict packing standard. With a whole lot of groceries to shop for and the luxury of at-home shopping, bigbasket brings convenience to your grocery shopping experience with regard to time, delivery, cost and quality. bigbasket offers a range of prominent products that are well received by customers. “Zespri” is one such well-known brand that is available to shop for online. For those looking out for organic products only, bigbasket stocks products by TVS Organic too. Make bigbasket your prime choice to buy fruits and vegetables online.</p>
                <h3>Delivery in Major Cities</h3>
                <p>We at bigbasket choose our produce with as much care as you do. Carefully sorted, meticulously cleaned and carefully packed, fruits and vegetables from our online store reach you the day you order them. bigbasket offers delivery in Chennai, delivery in Delhi and most other major cities in India.</p>
                <h3>Choose from cuts and sprouts, fresh herbs and seasonings</h3>
                <p>do away with the hassle of soaking and sprouting grains, or preparing vegetables and fruits for consumption. At bigbasket, we offer crunchy sprouts and organic produce too! Save the time and effort you spend in cutting and cleaning by choosing from our basket of pre-prepared fruits and vegetables. Just toss the prepared vegetables into your wok for a refreshing and healthy meal in a jiffy!</p>
                <h3>bigbasket bbnow</h3>
                <p>Introducing bbnow: Get your groceries delivered in 15 to 30 minutes. Choose from 3000 essential items. bigbasket bbnow service is currently available in select cities. Download the bigbasket app to check whether your location is eligible for bbnow.</p>
            </div>
        </div>
    )
}


export default BakeryDairy ;