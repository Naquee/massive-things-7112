import { Divider } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const HomeHead = ({heading}) => {
    return (
        <Container>
            <h2>{heading}</h2>
            <Divider />
        </Container>
    )
}

const Container = styled.div`
    width:85%;
    margin:auto;
    line-height:10px;
    margin-top:50px;
    margin-bottom:30px;
    color:"#e3dadb";
`

export default HomeHead