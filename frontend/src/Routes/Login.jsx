import React, { useState } from 'react'
import styledComp from 'styled-components'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Divider, IconButton, TextField, Typography } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAuthentication } from '../Redux/Auth/action';
import AlertMessage from '../Components/AlertMessage';

const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: { xs: 'translate(-39%, -50%)', md: 'translate(-50%, -50%)' },
    width: 400,
    bgcolor: 'transparent',
    p: 4,
};

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const [show, setStatus] = useState({
        status: false,
        msg: '',
        type: 'error'
    });

    const handleSubmit = () => {
        console.log(values)
        if (values.email !== '' && values.password !== '') {
            const payload = {
                email: values.email,
                password: values.password
            }
            dispatch(userAuthentication(payload)).then((res) => {
                if (res.payload.msg === 'Signup Successfull') {
                    dispatch(userAuthentication(payload)).then((res) => {

                    }).catch((err) => {

                    })
                } else if (res.payload.msg === 'Login Successfull') {
                    setStatus({ ...show, status: true, msg: res.payload.msg, type: "success" });
                    setTimeout(() => {
                        navigate("/");
                    }, 2000)
                } else {
                    setStatus({ ...show, status: true, msg: res.payload.msg, type: "error" });
                }
            }).catch((err) => {
                setStatus({ ...show, status: true, msg: err, type: "error" });
            });
        } else {
            setStatus({ ...show, status: true, msg: 'Please fill all the details' });
        }
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <LoginContainer>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AlertMessage show={show} setStatus={setStatus} />
                    <Box sx={{ width: { xs: '75%', md: '88%' }, height: "500px", bgcolor: 'background.paper', boxShadow: 24, position: 'relative', zIndex: 10 }}>
                        <Typography variant="p" component="p" textAlign='center' padding='20px' color='#84c225' fontWeight={'600'}  >
                            LOGIN/SIGN UP
                        </Typography>
                        <Box sx={{ width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', justifyContent: 'center', mt: "50px" }}>
                            <InputBox id="standard-basic" label="Enter Email" variant="standard"
                                sx={{
                                    width: "80%", borderBottom: '0px',
                                    '& .MuiInput-underline:after': { borderBottomColor: '#84c225', color: '#84c225' },
                                }}
                                onChange={handleChange('email')} />
                            <FormBox sx={{ m: 1, width: "80%" }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <FormInputBox
                                    sx={{
                                        // underline when selected
                                        ':after': { borderBottomColor: '#84c225' },
                                    }}
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormBox>
                            <Button disabled={values.email !== '' && values.password !== '' ? false : true} variant="contained" sx={{
                                '&:hover': {
                                    backgroundColor: '#84c225',
                                },
                                ":disabled": {
                                    backgroundColor: '#bfe08e',
                                    color: "white"
                                }, width: '80%', backgroundColor: '#84c225', padding: '12px 0px', marginTop: "140px"
                            }}
                                onClick={() => handleSubmit()}
                            >
                                Continue
                            </Button>
                            <Typography width='75%' variant="p" component="p" textAlign='center' padding='10px' fontWeight={'500'} fontSize='11px'>
                                By continuing, I accept TCP-bigbasket’s Terms and Conditions and Privacy Policy.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'block' }, width: "300px", height: "440px", bgcolor: 'background.paper', boxShadow: 24, position: 'absolute', top: '11%', left: '80%', textAlign: 'center' }}>
                        <CloseIcon onClick={() => handleClose()} fontSize="small" sx={{ cursor: 'pointer', position: 'absolute', left: '97%', top: '-10px', backgroundColor: '#9e9b9b', fill: 'white', borderRadius: '50px', padding: "2px" }} />
                        <Box sx={{ width: '80%', height: '50%', margin: 'auto', display: 'flex', fontSize: '13px', gap: "10px", alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '30%', borderBottom: '1px solid #ddd', cursor: 'pointer' }}>
                            <Box sx={{ width: '60%', display: 'flex', gap: "10px", alignItems: 'center', justifyContent: 'center' }}>
                                <Box>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" x="352" y="204"><title>quality icon</title><g fill="none"><path d="M9.18 12.71c-.684-.978-1.54-1.183-2.14-1.183-.224 0-.51.03-.848.13a.197.197 0 0 1-.25-.216c.05-.405.138-.905.29-1.414a.402.402 0 0 0-.236-.49L5.85 9.48a.387.387 0 0 0-.51.258c-.165.55-.284 1.365-.336 1.766a.194.194 0 0 1-.248.165 3.002 3.002 0 0 0-.886-.143c-.6 0-1.457.205-2.14 1.182-.534.763-.74 1.724-.594 2.776.13.94.51 1.747.725 2.145.3.557 1.41 2.37 3.067 2.37.178 0 .354-.02.528-.063.173.042.35.063.527.063 1.657 0 2.765-1.813 3.066-2.37.215-.397.595-1.204.725-2.144.145-1.052-.06-2.013-.594-2.777" fill="#666" /><path d="M8.23 17.165c-.307.57-1.4 2.27-2.713 1.79a.183.183 0 0 0-.125 0c-1.313.48-2.406-1.22-2.713-1.79-.5-.923-1.084-2.616-.19-3.896.99-1.415 2.452-.533 2.86-.26a.19.19 0 0 0 .21 0c.407-.273 1.87-1.155 2.86.26.894 1.28.31 2.972-.19 3.895" fill="#FFF" /><path d="M15.598 8.34l-1.8-4.073a.202.202 0 0 1-.012-.066V3h.143c.214 0 .39-.18.39-.398V.417a.394.394 0 0 0-.39-.397H9.34a.394.394 0 0 0-.39.397v2.185c0 .22.173.397.39.397h.142v1.2a.2.2 0 0 1-.012.067L7.67 8.34a.403.403 0 0 0-.023.13v2.23c0 .198.142.365.333.394l.136.024a.393.393 0 0 0 .468-.39V8.66c0-.023.004-.045.01-.066l1.813-4.105a.2.2 0 0 0 .01-.067V3.198c0-.11.088-.2.196-.2h2.04c.11 0 .196.09.196.2v1.225c0 .023.003.045.01.066l1.812 4.104a.202.202 0 0 1 .01.066v10.13c0 .11-.086.197-.194.197H9.24a.387.387 0 0 0-.29.135 6.11 6.11 0 0 1-.134.148c-.235.254-.06.67.283.67h6.13c.215 0 .39-.177.39-.397V8.47a.404.404 0 0 0-.022-.13z" fill="#606060" /><path d="M13.344 1.808c0 .11-.088.198-.196.198h-3.03a.197.197 0 0 1-.194-.198v-.596c0-.11.087-.2.195-.2h3.03c.106 0 .194.09.194.2v.596z" fill="#FFF" /><path fill="#666" d="M6.263 3.918l1.373.627-1.373.628-.627 1.372-.627-1.372-1.374-.628 1.373-.627.626-1.373zm-4.61 3.878l.865.395-.865.395-.394.865-.396-.865L0 8.19l.864-.394.395-.864zm-.095-3.9l.624.286-.624.285-.285.624-.285-.623-.624-.285.624-.285.285-.624zM17.92 6.443l.625.285-.624.285-.284.624-.285-.624-.623-.285.624-.285.286-.624zm.25-6.068l.375.17-.374.172-.17.375-.17-.374-.375-.17.374-.172L18 0zM3.74.624l.624.285-.624.284-.285.624-.286-.624L2.544.91 3.17.624 3.455 0zm12.84 2.43l.875.4-.874.4-.4.873-.397-.873-.874-.4.873-.4.4-.872z" /></g></svg>
                                </Box>
                                <Box sx={{ width: '80%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', color: 'grey' }}>
                                    <Typography variant="p" component="p" fontSize={'14px'}>Quality</Typography>
                                    <Typography variant="p" component="p" >You can trust</Typography>
                                    <span style={{ width: '100%', height: '10px', borderBottom: '1px dashed grey' }}></span>
                                </Box>
                            </Box>
                            <Box sx={{ width: '60%', display: 'flex', gap: "10px", alignItems: 'center', justifyContent: 'center', color: 'grey' }}>
                                <Box>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" x="387" y="239"><title>11</title><g fill="none"><path d="M3.494 1.205l-1.63 3.88c-.12.285.095.6.385.568l3.965-.435c.29-.032.44-.387.268-.64L4.148 1.134a.368.368 0 0 0-.654.072" fill="#666" transform="translate(0 -1)" /><path d="M4.14 2.78l.874 1.29c.086.125.01.303-.134.32l-1.482.16c-.145.017-.252-.14-.193-.283l.61-1.45a.184.184 0 0 1 .326-.036" fill="#FFF" transform="translate(0 -1)" /><path d="M9.494 1.302c-1.51 0-2.966.35-4.275 1.012l.57.79a8.5 8.5 0 0 1 3.62-.845 8.516 8.516 0 0 1 8.622 8.523 8.537 8.537 0 1 1-17.075-.066.398.398 0 0 0-.398-.403H.4a.4.4 0 0 0-.4.396v.087c0 2.536.988 4.92 2.78 6.714a9.483 9.483 0 0 0 6.714 2.78c2.536 0 4.92-.986 6.714-2.78a9.432 9.432 0 0 0 2.78-6.713c0-2.536-.987-4.92-2.78-6.713a9.432 9.432 0 0 0-6.714-2.78z" fill="#666" transform="translate(0 -1)" /><path d="M12.348 8.454a.395.395 0 0 1-.393-.325c-.164-.973-1.04-1.717-2.095-1.717-1.054 0-1.93.744-2.095 1.716a.395.395 0 0 1-.393.324H4.78a.39.39 0 0 0-.395.43l.717 4.65c.152 1.148 1.166 2.01 2.368 2.01h4.78c1.202 0 2.216-.86 2.368-2.01l.717-4.65a.39.39 0 0 0-.395-.43h-2.592z" fill="#606060" transform="translate(0 -1)" /><path d="M12.11 14.623h-4.5c-.8 0-1.477-.574-1.58-1.34L5.44 9.59a.194.194 0 0 1 .2-.217h8.44c.12 0 .214.102.2.216l-.59 3.694c-.103.765-.78 1.34-1.58 1.34zm-2.25-7.29c.56 0 1.03.382 1.142.89.026.12-.07.23-.195.23H8.913c-.126 0-.22-.11-.195-.23a1.16 1.16 0 0 1 1.142-.89z" fill="#FFF" transform="translate(0 -1)" /><path d="M9.77 12.352h-.184c-.252 0-.456-.184-.456-.412V9.842c0-.227.204-.412.456-.412h.183c.25 0 .455.185.455.412v2.098c0 .228-.204.412-.456.412m1.825 0h-.183c-.252 0-.456-.184-.456-.412V9.842c0-.227.204-.412.456-.412h.183c.252 0 .456.185.456.412v2.098c0 .228-.203.412-.455.412m-3.287 0h-.183c-.252 0-.456-.184-.456-.412V9.842c0-.227.203-.412.455-.412h.183c.252 0 .456.185.456.412v2.098c0 .228-.204.412-.456.412" fill="#606060" /></g></svg>
                                </Box>
                                <Box sx={{ width: '80%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Typography variant="p" component="p" fontSize={'14px'}>Return Policy</Typography>
                                    <Typography variant="p" component="p" >No question asked</Typography>
                                    <span style={{ width: '100%', height: '10px', borderBottom: '1px dashed grey' }}></span>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ height: '30%', margin: "auto", display: 'flex', fontSize: '13px', gap: "15px", alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Typography variant="p" component="p" fontSize={'12px'}>Shopping at fingertips!! Download our app</Typography>
                            <Box sx={{ display: 'flex', gap: "20px", alignItems: 'center', justifyContent: 'center' }}>
                                <a href="https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp"><svg xmlns="http://www.w3.org/2000/svg" width="101" height="30" viewBox="0 0 101 30" x="186" y="114"><title>google paly</title><g fill="none"><path d="M30.54 15.004c0-2.484 1.836-4.14 4.116-4.14 1.416 0 2.4.624 3.108 1.5l-.792.492c-.504-.648-1.356-1.104-2.316-1.104-1.752 0-3.084 1.344-3.084 3.252 0 1.896 1.332 3.264 3.084 3.264.96 0 1.752-.468 2.148-.864v-1.632h-2.748v-.888H37.8v2.892c-.744.828-1.836 1.38-3.144 1.38-2.28 0-4.116-1.668-4.116-4.152zm11.376 4.14c-1.764 0-2.868-1.368-2.868-3.048s1.104-3.036 2.868-3.036c1.764 0 2.868 1.356 2.868 3.036s-1.104 3.048-2.868 3.048zm0-.804c1.236 0 1.92-1.056 1.92-2.244 0-1.176-.684-2.232-1.92-2.232-1.236 0-1.932 1.056-1.932 2.232 0 1.188.696 2.244 1.932 2.244zm6.864.804c-1.764 0-2.868-1.368-2.868-3.048s1.104-3.036 2.868-3.036c1.764 0 2.868 1.356 2.868 3.036s-1.104 3.048-2.868 3.048zm0-.804c1.236 0 1.92-1.056 1.92-2.244 0-1.176-.684-2.232-1.92-2.232-1.236 0-1.932 1.056-1.932 2.232 0 1.188.696 2.244 1.932 2.244zm4.32 2.148l.456-.672c.48.576 1.056.792 1.884.792.96 0 1.86-.468 1.86-1.74v-.828c-.42.588-1.128 1.032-1.944 1.032-1.512 0-2.58-1.128-2.58-3 0-1.86 1.056-3.012 2.58-3.012.78 0 1.476.384 1.944 1.02v-.876h.9v5.628c0 1.92-1.344 2.52-2.76 2.52-.984 0-1.656-.192-2.34-.864zm4.2-3.156V14.8c-.312-.504-1.008-.936-1.728-.936-1.164 0-1.86.924-1.86 2.208 0 1.272.696 2.208 1.86 2.208.72 0 1.416-.444 1.728-.948zM60 19v-8.004h.9V19H60zm2.364-2.904c0-1.68 1.2-3.036 2.856-3.036 1.752 0 2.784 1.368 2.784 3.108v.228h-4.692c.072 1.092.84 2.004 2.088 2.004.66 0 1.332-.264 1.788-.732l.432.588c-.576.576-1.356.888-2.304.888-1.716 0-2.952-1.236-2.952-3.048zm2.844-2.292c-1.236 0-1.848 1.044-1.896 1.932h3.804c-.012-.864-.588-1.932-1.908-1.932zM72.588 19v-8.004h3.216c1.608 0 2.508 1.104 2.508 2.412 0 1.308-.924 2.412-2.508 2.412h-2.22V19h-.996zm4.692-5.592c0-.9-.648-1.524-1.596-1.524h-2.1v3.048h2.1c.948 0 1.596-.624 1.596-1.524zM79.596 19v-8.004h.9V19h-.9zm6.324 0v-.66c-.48.528-1.14.804-1.92.804-.984 0-2.028-.66-2.028-1.92 0-1.296 1.044-1.908 2.028-1.908.792 0 1.452.252 1.92.792v-1.044c0-.78-.624-1.224-1.464-1.224-.696 0-1.26.252-1.776.804l-.42-.624c.624-.648 1.368-.96 2.316-.96 1.224 0 2.244.552 2.244 1.956V19h-.9zm0-1.224v-1.092c-.348-.48-.96-.72-1.596-.72-.84 0-1.428.528-1.428 1.272 0 .732.588 1.26 1.428 1.26.636 0 1.248-.24 1.596-.72zm2.52 2.676c.132.06.348.096.492.096.396 0 .66-.132.864-.612l.384-.876-2.424-5.856h.972l1.932 4.752 1.92-4.752h.984l-2.904 6.972c-.348.84-.936 1.164-1.704 1.176-.192 0-.492-.036-.66-.084l.144-.816z" fill="#979797" /><rect stroke="#979797" x=".5" y=".5" width="99.148" height="29" rx="3" /><path d="M9.062 5.315a1.95 1.95 0 0 0-1.512-.263l8.994 9.02 2.915-2.922L9.06 5.315z" fill="#3DB39E" fillRule="nonzero" /><path d="M6.434 5.786c-.25.334-.395.745-.395 1.18v16.068c0 .435.143.845.394 1.18L15.62 15 6.434 5.786z" fill="#349886" fillRule="nonzero" /><path d="M23.263 13.285l-2.62-1.47L17.468 15l3.176 3.185 2.62-1.47A1.944 1.944 0 0 0 24.266 15c0-.722-.375-1.363-1.003-1.715z" fill="#F4B459" fillRule="nonzero" /><path d="M16.544 15.926l-8.993 9.02a1.954 1.954 0 0 0 1.512-.262L19.46 18.85l-2.916-2.924z" fill="#E2574C" fillRule="nonzero" /></g></svg></a>
                                <a href="https://apps.apple.com/in/app/bigbasket-com/id660683603?ign-mpt=uo%3D4"><svg xmlns="http://www.w3.org/2000/svg" width="101" height="30" viewBox="0 0 101 30"><title>apple</title><g fill="none"><rect stroke="#979797" x=".5" y=".5" width="99.148" height="29" rx="3" /><path d="M29.56 15.627c-.024-2.533 2.06-3.748 2.154-3.808-1.172-1.72-2.996-1.956-3.647-1.983-1.552-.158-3.03.917-3.818.917-.787 0-2.003-.894-3.29-.87-1.693.025-3.254.987-4.125 2.507-1.76 3.06-.45 7.596 1.263 10.078.838 1.215 1.837 2.58 3.148 2.53 1.262-.05 1.74-.82 3.266-.82 1.527 0 1.956.82 3.292.796 1.36-.026 2.22-1.24 3.052-2.457.96-1.41 1.357-2.775 1.38-2.845-.03-.013-2.65-1.02-2.675-4.045zm-2.51-7.433c.696-.847 1.166-2.022 1.038-3.194-1.003.04-2.218.67-2.937 1.515-.644.75-1.21 1.945-1.058 3.094 1.12.087 2.262-.57 2.958-1.416z" fill="#222" fillRule="nonzero" /><path d="M44.582 19l-.708-1.776H39.89L39.182 19h-1.14l3.216-8.004h1.236L45.722 19h-1.14zm-2.7-6.972l-1.704 4.308h3.396l-1.692-4.308zm5.748 9.18h-.9v-8.004h.9v.864a2.423 2.423 0 0 1 1.956-1.008c1.524 0 2.58 1.152 2.58 3.036 0 1.872-1.056 3.048-2.58 3.048-.792 0-1.488-.372-1.956-1.02v3.084zm3.588-5.112c0-1.284-.696-2.232-1.86-2.232-.708 0-1.416.42-1.728.924v2.616c.312.504 1.02.936 1.728.936 1.164 0 1.86-.96 1.86-2.244zm3.3 5.112h-.9v-8.004h.9v.864a2.423 2.423 0 0 1 1.956-1.008c1.524 0 2.58 1.152 2.58 3.036 0 1.872-1.056 3.048-2.58 3.048-.792 0-1.488-.372-1.956-1.02v3.084zm3.588-5.112c0-1.284-.696-2.232-1.86-2.232-.708 0-1.416.42-1.728.924v2.616c.312.504 1.02.936 1.728.936 1.164 0 1.86-.96 1.86-2.244zm5.052 1.776l.588-.756a3.383 3.383 0 0 0 2.52 1.14c1.428 0 1.884-.768 1.884-1.38 0-.96-.972-1.224-2.028-1.512-1.284-.336-2.712-.696-2.712-2.268 0-1.32 1.176-2.22 2.748-2.22 1.224 0 2.172.408 2.844 1.116l-.6.732c-.6-.66-1.44-.96-2.316-.96-.96 0-1.644.516-1.644 1.272 0 .804.924 1.044 1.944 1.32 1.308.348 2.796.756 2.796 2.436 0 1.164-.792 2.352-2.952 2.352-1.392 0-2.412-.528-3.072-1.272zm8.736 1.272c-.852 0-1.284-.492-1.284-1.356v-3.792h-.96v-.792h.96V11.62h.9v1.584h1.176v.792H71.51v3.6c0 .432.192.744.588.744.252 0 .492-.108.612-.24l.264.672c-.228.216-.552.372-1.08.372zm4.596 0c-1.764 0-2.868-1.368-2.868-3.048s1.104-3.036 2.868-3.036c1.764 0 2.868 1.356 2.868 3.036s-1.104 3.048-2.868 3.048zm0-.804c1.236 0 1.92-1.056 1.92-2.244 0-1.176-.684-2.232-1.92-2.232-1.236 0-1.932 1.056-1.932 2.232 0 1.188.696 2.244 1.932 2.244zm4.332.66v-5.796h.9v.936c.468-.612 1.14-1.056 1.932-1.056v.924a1.586 1.586 0 0 0-.36-.036c-.552 0-1.308.456-1.572.924V19h-.9zm3.624-2.904c0-1.68 1.2-3.036 2.856-3.036 1.752 0 2.784 1.368 2.784 3.108v.228h-4.692c.072 1.092.84 2.004 2.088 2.004.66 0 1.332-.264 1.788-.732l.432.588c-.576.576-1.356.888-2.304.888-1.716 0-2.952-1.236-2.952-3.048zm2.844-2.292c-1.236 0-1.848 1.044-1.896 1.932h3.804c-.012-.864-.588-1.932-1.908-1.932z" fill="#979797" /></g></svg></a>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </LoginContainer>
    )
}
const LoginContainer = styledComp.div`
    position:relative;
    .loginBox{
        width:400px;
        border:1px solid red;
    }
`

const InputBox = styledComp(TextField)`
  & label.Mui-focused {
    color: #84c225;
  }
`;

const FormBox = styledComp(FormControl)`
  & label.Mui-focused {
    color: #84c225;
  }
`;

const FormInputBox = styledComp(Input)`
    
`;

export default Login