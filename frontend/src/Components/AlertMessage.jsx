import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Alert, Grow } from '@mui/material';
const AlertMessage = ({ show, setStatus }) => {
  useEffect(() => {
    let id = setTimeout(() => {
      setStatus({ ...show, status: false, msg: '' })
    }, 3000)

    return () => {
      clearInterval(id);
    };
  }, [show.status]);
  return (
    <Container>
      {<Grow
        in={show.status}
        style={{ transformOrigin: '0 0 0' }}
        {...(show.status ? { timeout: 1000 } : {})}
      >
        <Alert className='alertBoxTop' variant="filled" severity={show.type} onClose={() => setStatus({ ...show, status: false, msg: '' })}>{show.msg}</Alert>
      </Grow>}
    </Container>
  )
}

const Container = styled.div`
  
  .alertBoxTop{
    width: 280px;
    font-size:small;
    position:absolute;
    top:-10%;
    left:46%;
    transform: translate(-50%, -50%);
    -webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    z-index:1300;
  }

  @media only screen and (min-width:481px) and (max-width:767px){
    .alertBoxTop{
      top:2%;
      left:43%;
      transform: translate(-50%, -50%);
    }
  }
    
  
  @media only screen and (min-width:320px) and (max-width:480px){
    .alertBoxTop{
      left:28%;
      transform: translate(-50%, -50%);
    }
  }
  
  @media only screen and (max-width: 320px){
    .alertBoxTop{
      width:245px;
      left:36vw;
      right:0vw
      font-size:x-small;
    }
  }

  @-webkit-keyframes slide-left {
    0% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(-100px);
              transform: translateX(-100px);
    }
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(-100px);
              transform: translateX(-100px);
    }
  }
`
export default AlertMessage