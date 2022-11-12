import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AlertMessage from './AlertMessage';
import addImageIcon from '../Resources/Images/addImage.png';
import { addProducts } from '../Redux/App/action';
// const { REACT_APP_COMPANY_URL } = process.env;
const AddProducts = ({ colorScheme }) => {
    const { token } = useSelector((store) => (store.AuthReducer));
    const inputFile = useRef()
    const dispatch = useDispatch();
    const [data, setData] = useState({
        category: '',
        name: '',
        quantity: '',
        discount: '',
        description: '',
        country: '',
        price: ''
    })

    const [show, setStatus] = useState({
        status: false,
        msg: '',
        type: 'error'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputFile.current.files[0]){
            setStatus({ ...show, status: true, msg: "Please Choose Image First", type: "error" });
        }else{
            if (data.name !== '' && inputFile.current.files[0]) {
                const formData = new FormData();
                formData.append("category", data.category);
                formData.append("name", data.name);
                formData.append("price", data.price);
                formData.append("description", data.description);
                formData.append("quantity", data.quantity);
                formData.append("discount", data.discount);
                formData.append("country", data.country);
                formData.append("image", inputFile.current.files[0]);
                const headers = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
                dispatch(addProducts(formData, headers)).then((res) => {
                    if (res.payload === 'Data Uploaded') {
                        setStatus({ ...show, status: true, msg: res.payload, type: "success" });
                    } else {
                        setStatus({ ...show, status: true, msg: "Image is already in system", type: "error" });
                    }
                })
            }
            else {
                setStatus({ ...show, status: true, msg: "Please fill all Mandatory details ", type: "error" });
            }
        }
    }
    return (
        <Container colorScheme={colorScheme}>
            <div className='dashImageContainer'>
                <div className='dashImageBox'>
                    <p style={{position:"absolute", top:'20px', fontWeight:'bold' }}>Note: Image is Mandatory</p>
                    <h1>Add Data</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='imageFileBox'>
                            <input type="file" ref={inputFile} />
                        </div>
                        <div className='categoryBox'>
                            <div>
                                <h3>Category:</h3>
                                <select name="" id="" onChange={(e) => setData({ ...data, category: e.target.value })}>
                                    <option value="">Select a Category</option>
                                    <option value="Fruit & Vegetables">Fruit & Vegetables</option>
                                    <option value="Bakery Cake & Dairy">Bakery Cake & Dairy</option>
                                    <option value="Beverages">Beverages</option>
                                    <option value="Snacks & Branded Foods">Snacks & Branded Foods</option>
                                    <option value="Beauty & hygiene">Beauty & hygiene</option>
                                    <option value="Cleaning & Household">Cleaning & Household</option>
                                    <option value="Kitchen Garden & Pets">Kitchen Garden & Pets</option>
                                    <option value="Eggs Meat & Fish">Eggs Meat & Fish</option>
                                    <option value="Garment & World Food">Garment & World Food</option>
                                    <option value="Baby Care">Baby Care</option>
                                </select>
                            </div>

                            <div>
                                <h3>Name*</h3>
                                <input type="text" placeholder='Enter Name' onChange={(e) => setData({ ...data, name: e.target.value })} />
                            </div>

                            <div>
                                <h3>Description:</h3>
                                <input type="text" placeholder='Enter Description' onChange={(e) => setData({ ...data, description: e.target.value })} />
                            </div>
                            <div>
                                <h3>Price:</h3>
                                <input type="number" placeholder='Enter Number' onChange={(e) => setData({ ...data, price: e.target.value })} />
                            </div>
                        </div>

                        <div className='categoryBox'>
                            <div>
                                <h3>Quantity:</h3>
                                <input type="number" placeholder='Enter Quantity' onChange={(e) => setData({ ...data, quantity: e.target.value })} />
                            </div>

                            <div>
                                <h3>Discount:</h3>
                                <input type="number" placeholder='Enter Discount' onChange={(e) => setData({ ...data, discount: e.target.value })} />
                            </div>

                            <div>
                                <h3>Country:</h3>
                                <select name="" id="" onChange={(e) => setData({ ...data, country: e.target.value })}>
                                    <option value="">Select a Country</option>
                                    <option value="Australia">Australia</option>
                                    <option value="India">India</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Greece">Greece</option>
                                    <option value="USA">USA</option>
                                </select>
                            </div>

                            <div style={{ marginTop: '20px' }}>
                                <input type="submit" value={"Upload Data"} className='imageButtonSubmit' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <AlertMessage show={show} setStatus={setStatus} />
        </Container>
    )
}

const Container = styled.div`
    width:90%;
    margin:auto;
    padding:20px;

    .dashImageContainer{
        width:100%;
        margin:auto;
    }

    .dashImageBox{
        padding:30px;
        padding-bottom:50px;
        border-radius:8px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    .dashImageBox h1{
        text-align:left;
    }

    .dashImageBox form{
        width:100%;
        display:flex;
        align-items:flex-start;
        justify-content:space-around;
    }

    .imageFileBox{
        width:25%;
        height:200px;
        border:2px dashed grey;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
    }

    .imageFileBox input{
        width:145px;
        height:145px;
        border:1px solid grey;
        border-radius:100px;
        color:transparent;
        background-image: url(${addImageIcon});
        background-size: 100px 100px;
        background-repeat: no-repeat;
        background-position: center;
    }


    input::file-selector-button {
        display: none;
    }

    .dashImageBox .categoryBox {
        display:flex;
        align-items:flex-start;
        flex-direction:column;
        line-height:0px;
        margin-top:-10px;
        gap:10px;
        text-align:left;
    }

    .dashImageBox .categoryBox select{
        padding:10px 20px;
        border-radius:8px;
        border:none;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-right: 16px solid transparent;
        display:flex;
    }

    .dashImageBox .categoryBox input{
        padding:10px 13px;
        border-radius:8px;
        border:none;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        display:flex;
    }

    .imageButtonSubmit{
        padding:15px 40px;
        border-radius:8px;
        border:none;
        font-weight:bold;
        background-color:${props => props.colorScheme.primaryColor};
        color:${props => props.colorScheme.secondaryColor};
    }

    @media only screen and (min-width:768px) and (max-width:1100px){
        width:100%;
        .dashImageContainer{
            width:100%;
        }
        
        .dashImageBox form{
            width:100%;
        }
    }

    @media only screen and (min-width:481px) and (max-width:767px){
        width:100%;

        .dashImageContainer{
            width:100%;
            margin:auto;
        }
        
        .dashImageBox form{
            width:100%;
            align-items:center;
            justify-content:center;
            gap:30px;
        }
        
        .dashImageBox form{
            flex-direction:column;
        }

        .imageFileBox{
            width:90%;
            height:200px;
            border:2px dashed grey;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
        }
    }
      
    @media only screen and (min-width:320px) and (max-width:480px){
        width:100%;

        .dashImageContainer{
            width:100%;
            margin:auto;
        }
        
        .dashImageBox form{
            width:100%;
            align-items:center;
            justify-content:center;
            gap:30px;
        }
        
        .dashImageBox form{
            flex-direction:column;
        }

        .imageFileBox{
            width:100%;
            height:200px;
            border:2px dashed grey;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
        }
    }
    
    @media only screen and (max-width: 320px){
        width:100%;

        .dashImageContainer{
            width:100%;
            margin:auto;
        }
        
        .dashImageBox form{
            width:100%;
            align-items:center;
            justify-content:center;
            gap:30px;
        }
        
        .dashImageBox form{
            flex-direction:column;
        }

        .imageFileBox{
            width:100%;
            height:200px;
            border:2px dashed grey;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
        }
    }
`

export default AddProducts