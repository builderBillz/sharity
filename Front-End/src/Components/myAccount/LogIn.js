
import styled from 'styled-components';
import { AccountBox } from "./Index";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
`;

function LogIn(){
  return <AppContainer>
    <AccountBox />
  </AppContainer>
}

export default LogIn;




