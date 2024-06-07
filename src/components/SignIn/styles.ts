import styled, { keyframes } from "styled-components";

const moveToRight = keyframes`

0% {
  opacity: 0;
  transform: translate(-200px);

}
50%{
  opacity: 3;
}
100%{

  transform: translate(0px);
  opacity: 1;
}


`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  .container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
  }

  .container1 {
    width: 60%;
  }
  @media (max-width: 999px) {
    .container1 {
      display: none;
    }
  }
  .image {
    margin: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 100%;
    animation: ${moveToRight} 0.5s;
  }
  .container2 {
    width: 40%;
    display: flex;
    align-items: center;
    margin: auto;
    height: 100vh;
    height: 100%;
  }
  @media (max-width: 999px) {
    .container2 {
      width: 90%;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 85vh;
  align-items: center;
  margin: auto;

  .input {
    width: 60%;
    justify-content: center;
    margin: auto;
    background: #fff;
    margin-bottom: 1rem;
    animation: ${moveToRight} 0.5s;
  }
  
  .mobile-prev-button{
    display:none;
  }

  
    
  @media (max-width: 999px) {
    
    width: 100%;
    height: 70vh;
    border-radius: 30px;

    input {
      width: 80%;
      animation: ${moveToRight} 0.5s;
      height:20%;
    }
    .inicio-logo {
      top: 50px;
      margin-right: 0;
      margin-left: 250px;
      text-align: center;

    }
      
    .criar-conta {
      margin-left: 0;
      margin-right:150px;
      position: absolute;
      top: 50px;
      margin-bottom:30px;
    }
    

    .container2 {
      width: 100%;
      height: 50vh;
    }

    

    .social-item {
        font-size: 12px; 
        padding: 5px; 
        margin: 5px; 
        border-radius: 5px;
    }

    .captcha-box{
      display: none;
    }

  }



 


  .checkbox {
    align-items: center;
    display: flex;
    margin: auto;
    flex-direction: row;
    width: 100%;
    justify-content: end;
    animation: ${moveToRight} 0.5s;
    p {
      font-size: 1.2rem;
      color: #cccc;
    }
  }
  .input-checkbox {
    margin-right: 5px;
    margin-bottom: -4px;
  }
  .bottom {
    width: 60%;
    margin-top: 1.3rem;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .inicio-logo{
    margin-top: -30px;
    margin-right: 285px;
    margin-botoom:10px;
  }
  
  .logo{

  }

  .criar-conta{
    margin-left: 400px;
    margin-top:-20px;
  }
  
  .divider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    line-height: 100px;
  }

  .divider hr {
    flex: 1;
    border: 1px solid #c9c3c3;
    max-width: 100%; 
  }

  .botao-entrar{
    backgroud-color: #0761E2;
    color: #ffffff;
  }

  .botao-entrar:hover{
    backgound-color:#00ABBF;
  }
      
      
  .social-icons{
    display: flex;
    justify-content: flex-start;
    margin-left:-10px;

  }

  .social-item{
    border: 1px solid #000000;
    color:#000000;
    font-size: 16px;
    border-radius: 7px;
    margin:10px;
    padding-left: 55px;
    padding-right: 55px;
    display: inline-block;
  }
  .social-item:hover{
    color: #0761E2;
    border: 1px solid #00ABBF;
    background-color: #ffffff;
    animation: pulse 0.5s infinite; 
  }


  .captcha-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }

  .captcha-container input[type="checkbox"] {
    margin-right: 10px;
  }

  .hcaptcha-logo {
    margin-left: auto;
  }

  .hcaptcha-links {
    margin-left: 20px;
  }

  .hcaptcha-links a {
    text-decoration: none;
    color: #007bff;
  }


 @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  /* iPhone SE with dimensions 375x667 */
  .container2 {
    height: 677px;
    }
    
  .inicio-logo {
    margin-top: 30px;
    margin-bottom:-30px;
    margin-right: 0;
    margin-left: -10px;
    text-align: center;
  }

  .botao-conta{
    display:flex;
    margin-right:-100px;
    

  }

  .mobile-prev-button{
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: '-550px',
    color: '#FFFFFF',
    border: 'solid 1px',
    borderRadius: '30px',
    borderColor: '#FFFFFF',
    cursor: 'pointer',
  }

  .criar-conta {
    margin-left: 60px;
    
    position: relative;
    margin-top: -130px;
    border-bottom: 2px solid #c3c3c3;
    padding-bottom: 10px;
    padding-right: 40%;
    width: 100%;
  }
  .social-icons {
    display: flex;
    justify-content: center;
    margin-bottom:-35px;
  }
  .logo{
    margin-bottom:-10px;
  }
  .social-item {
    font-size: 14px;
    border-radios:25px;
    margin: 10px;
    padding-left: 25px;
    padding-right: 25px;
    display: inline-block;
  }
}




@media (max-width: 999px) {
    .bottom {
      width: 60%;
    }
    .buttom {
      background: #fc750f;
    }
    .checkbox p {
      color: #fff;
    }
  }
  .buttom {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    padding: 0 30px;
    height: 40px;
  }
  .cad {
    margin-top: 1.2rem;
    p {
      font-size: 1.2rem;
      color: #cccc;
    }
    a {
      color: #486ee5;
    }
  }
  @media (max-width: 999px) {
    .cad {
      width: 85%;
      gap: 1rem;
      margin-top: 1rem;

      p {
        font-size: 1rem;
        margin-top: 1rem;
        text-align: center;
        color: #fff;
      }
      a {
        font-weight: 500;
        color: #fc750f;
      }
    }
  }
`;

export const Logo = styled.div`
  font-family: "Poppins", sans-serif;
  width: 60%;
  font-size: 2rem;
  font-weight: 400;
  color: #486ee5;
  margin: auto;
  justify-content: center;

  p {
    margin-top: -1rem;
    animation: ${moveToRight} 0.5s;
  }
  @media (max-width: 999px) {
    width: 100%;
    margin: auto;
    justify-content: center;

    p {
      text-align: center;
      font-size: 2.5rem;
      margin-top: 0;
      animation: ${moveToRight} 0.5s;
      color: #fff;
    }
  }
`;
