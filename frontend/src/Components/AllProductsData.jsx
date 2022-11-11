import React, { useEffect, useState } from 'react';
import styledComp from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux';
import { userData, userDelete } from '../Redux/Auth/action';
import AlertMessage from './AlertMessage';
import { useNavigate } from 'react-router-dom';
import { productData, productDelete } from '../Redux/App/action';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "500px",
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};
const { REACT_APP_API_URL } = process.env;
const AllProductsData = ({ colorScheme }) => {
    const [open, setOpen] = useState(false);
    const [product_id, setproduct_id] = useState('');
    const navigate = useNavigate();
    const { token } = useSelector((store) => (store.AuthReducer))
    const { products } = useSelector((store) => (store.AppReducer))
    const dispatch = useDispatch();

    const [show, setStatus] = useState({
        status: false,
        msg: '',
        type: 'error'
    });

    const handleOpen = (userid) => {
        setOpen(true)
        setproduct_id(userid)
    };

    const handleClose = () => setOpen(false);

    const getProductData = () => {
        const payload = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        dispatch(productData(payload)).then((res) => {
            if (!res.payload.status) {
                navigate("/", { replace: true })
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    const handleDelete = () => {
        if (product_id) {
            const payload = {
                id: product_id
            }
            const headers = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            dispatch(productDelete(payload, headers)).then((res) => {
                dispatch(productData(headers))
                handleClose();
                if (res.payload.status) {
                    setStatus({ ...show, status: true, msg: res.payload.msg, type: "success" });
                } else {
                    setStatus({ ...show, status: true, msg: res.payload.msg, type: "error" });
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        getProductData();
    }, []);



    return (
        <ProductContainer colorScheme={colorScheme}>
            <table>
                <thead>
                    <tr>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((ele, index) => (
                        <tr className={index % 2 === 0 ? 'userDetailsb' : 'userDetailsw'} key={index}>
                            <td><img src={`${REACT_APP_API_URL}${ele.img_path}`} alt={ele.name} width='150px' height='150px'/></td>
                            <td>{ele.name}</td>
                            <td>Rs {ele.price}</td>
                            <td>{ele.quantity}</td>
                            <td ><span onClick={() => handleOpen(ele._id)}><DeleteIcon /></span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are You Sure You Want to Delete This Product?
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', gap: '30px', mt: 5 }}>
                        <Button variant="contained" color="success" sx={{ gap: 1 }} onClick={handleDelete}><span>Delete</span> <CheckIcon /></Button>
                        <Button variant="contained" color="error" sx={{ gap: 1 }} onClick={handleClose}><span>Close</span><ClearIcon /></Button>
                    </Box>
                </Box>
            </Modal>
            <AlertMessage show={show} setStatus={setStatus} />
        </ProductContainer>
    )
}

const ProductContainer = styledComp.div`
    position:relative;
    width:100%;
    margin:auto;
    overflow:hidden;
    margin-top:30px;

    table {
        width: 100%;
        border-collapse: collapse;
        cursor:pointer;
    }

    thead{
        font-weight:bold;
        text-transform:uppercase;
    }

    td{
        padding:10px;
    }

    .userDetailsb td{
        background: #F8F8F8;
    }

    .userDetailsw td{
        background: #FFFFFF;
    }

    td svg{
        fill:${props => props.colorScheme.primaryColor};
    }
    
`

export default AllProductsData;