
import { Link } from 'react-router-dom';
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

function LogIn(props){

  const currentStatus = props.login.status
  console.log(currentStatus)

  const changeLoginStatus = () =>{
    props.func()
  }
  if(!currentStatus){
    return( 
    <AppContainer>
    <AccountBox func={props.func}/>
    </AppContainer>
    )
  }else{
    return(
      <div>
        <h1>Welcome Back Jace</h1>
        <Link to={'/newproduct'}>
          <button>Add New Product</button>
        </Link>
        <div>
          <button onClick={changeLoginStatus}> sign out</button>
        </div>
      </div>
    )
  }
}

export default LogIn;




