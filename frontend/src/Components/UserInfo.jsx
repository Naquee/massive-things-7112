import React, { useState } from 'react';
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

const UserInfo = ({ colorScheme }) => {
    const [open, setOpen] = useState(false);
    const [user_id, setUser_id] = useState('');
    const { token, userDetails, data } = useSelector((store) => (store.AuthReducer))
    const dispatch = useDispatch();

    const [show, setStatus] = useState({
        status: false,
        msg: '',
        type: 'error'
    });

    const handleOpen = (userid) => {
        setOpen(true)
        setUser_id(userid)
    };

    const handleClose = () => setOpen(false);

    const handleDelete = () => {
        if (user_id && userDetails) {
            const payload = {
                id: user_id
            }
            dispatch(userDelete(payload)).then((res)=>{
                const payload = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
                dispatch(userData(payload))
                handleClose();
                if(res.payload.status){
                    setStatus({ ...show, status: true, msg: res.payload.msg, type: "success" });
                }else{
                    setStatus({ ...show, status: true, msg: res.payload.msg, type: "error" });
                }
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

    return (
        <UserContainer colorScheme={colorScheme}>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>Phone No</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((ele, index) => (
                        <tr className={index % 2 === 0 ? 'userDetailsb' : 'userDetailsw'} key={index}>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td style={{ textTransform: 'capitalize' }}>{ele.role}</td>
                            <td>{ele.phone}</td>
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
                        Are You Sure You Want to Delete This User?
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', gap: '30px', mt: 5 }}>
                        <Button variant="contained" color="success" sx={{ gap: 1 }} onClick={handleDelete}><span>Delete</span> <CheckIcon /></Button>
                        <Button variant="contained" color="error" sx={{ gap: 1 }} onClick={handleClose}><span>Close</span><ClearIcon /></Button>
                    </Box>
                </Box>
            </Modal>
            <AlertMessage show={show} setStatus={setStatus} />
        </UserContainer>
    )
}

const UserContainer = styledComp.div`
    position:relative;
    width:100%;
    margin:auto;
    // box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    // border-radius:8px;
    overflow:hidden;
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
        background: #FFFFFF;;
    }

    td svg{
        fill:${props => props.colorScheme.primaryColor};
    }
    
`

export default UserInfo;