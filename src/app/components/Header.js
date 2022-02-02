import React, {useState} from 'react';
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';
import {selectorCars} from "../constants/car/carSlice";
import {useSelector} from "react-redux";

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectorCars)

    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="logo"/>
            </a>
            <Menu>
                {cars && cars.map((car,index) => (
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <p><a href="#">Shop</a></p>
                <p><a href="#">Tesla Account</a></p>
            </RightMenu>
            <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            <BurgerNav show={burgerStatus}>
                    <CloseWrap>
                        <CustomClose onClick={()=>setBurgerStatus(false)}/>
                    </CloseWrap>
                    {cars && cars.map((car,index) => (
                        <li key={index}><a href="#">{car}</a></li>
                    ))}
                    <li><a href="#">Existing inventory</a></li>
                    <li><a href="#">Used inventory</a></li>
                    <li><a href="#">Trade in</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadaster</a></li>
                </BurgerNav>
        </Container>
    );
}

const Container = styled.div`
    z-index: 1;
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1; 
    a {
        font-weight: 600;
        text-decoration: uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
    }
    
    @media (max-width:768px){
        display:none;
    }
    
`

const RightMenu = styled.div`
    display:flex;
    flex-direction:row;
    a {
        font-weight: 600;
        text-decoration: uppercase;
        margin-right: 10px;
    }
    
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`


const BurgerNav = styled.div`
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2);
        
        a {
            font-weight: 600;
        }
    }   
`

const CustomClose = styled(CloseIcon)`

`

const CloseWrap = styled.div`
    display:flex;
    justify-content:flex-end;
`

export default Header;
