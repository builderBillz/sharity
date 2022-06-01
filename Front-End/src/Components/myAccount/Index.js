import React, { useState } from 'react';
import styled from 'styled-components';
import { LogInForm } from './LogInForm';
import { SignUpForm } from './SignUpForm';
import { AccountContext } from './AccountContext';
import { motion } from 'framer-motion';

const BoxContainer = styled.div`
    width: 280px; 
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px; 
    background-color: #fff; 
    box-shadow: 0 0 3px rgba(15, 15, 15, 0.28);
    position: relative; 
    overflow: hidden; 
    margin-top: 6em;
    // margin-bottom:auto;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex; 
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em; 
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    top: -290px;
    left: -70px; 
    transform: rotate(60deg);
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,48,244,1) 35%, rgba(0,212,255,1) 100%
    ); 
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    `;

const HeaderText = styled.h2`
    font-size: 30px; 
    font-weight: 600;
    line-height: 1.24;
    color: #fff; 
    z-index: 10;
    margin: 0;
`;

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0; 
    margin-top: 7px; 
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    padding: 0 1.8em;
`;

const BackDropVariant = {
    expanded: {
        width: '233%',
        height: '1050px',
        borderRadius: '20%',
        transform: 'rotate(60deg)'
    },
    collapsed: {
        width: '160%',
        height: '550px',
        borderRadius: '50%',
        transform: 'rotate(60deg'
    }
};

const expandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30, 
}

export function AccountBox(props) {
    const [ isExpanded,  setExpanded] = useState(false);
    const [ active, setActive ] = useState('signin');

    const playAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    }

    const switchToSignUp = () => {
        playAnimation();
        setTimeout(() => {
        setActive('signup');
        }, 400);
    }

    const switchToSignIn = () => {
        playAnimation();
        setTimeout(() => {
        setActive('signin');
        }, 400);
    }

    const contextValue = {
        switchToSignUp, switchToSignIn
    };

    return (
    <AccountContext.Provider value={contextValue}>
        <BoxContainer>    
        <TopContainer>
            <BackDrop 
            initial={false} 
            animate={isExpanded ? 'expanded' : 'collapsed'} 
            variants={BackDropVariant}
            transition={expandingTransition}
            />
            {active === 'signin' && ( <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
            )}
            {active === 'signup' && ( <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
            )}
        </TopContainer>
        <InnerContainer>
            { active === 'signin' && <LogInForm /> }
            { active === 'signup' && <SignUpForm /> }
            {/* <p onClick={playAnimation}>Click me!</p> */}
        </InnerContainer>
    </BoxContainer>
    </AccountContext.Provider>
    );
}

