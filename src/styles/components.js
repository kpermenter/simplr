import styled from 'styled-components';
import Select from 'react-select';

export const Logo = styled.img`
  margin-bottom: 10vh;
  margin-top: 5vh;
  padding-top: 30px;
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-bottom: 15px;
`

export const Legend = styled.div`
width: 260px;
height: 63px;
font-size: 30px;
line-height: 29px;
color: #22386f;
font-weight: 400;
font-family: "Lato";
text-align: center;
display: block;
justify-content: center;
align-items: center;
margin: auto;
padding-bottom: 20px

@media (max-width: 970px) {
  align-items: flex-start;
    flex-direction: column;
  }
`;

export const Input = styled.input`
border-top: 0;
border-right: 0;
border-left: 0;
border-bottom: 1px solid #cfe2eb;
outline: none;
margin-top: 15px;
margin-left: 20px;
width: 300px;
  @media (max-width: 600px) {
		width:300px;
	}
`;

export const Error = styled.div`
width: 160px;
height: 12px;
font-size: 10px;
margin-left: 18px;
color: #ff0000;
// margin: auto;
align-items: flex-start;
  @media (max-width: 600px) {
    align-items: flex-start;
      }
`;

export const CheckText = styled.div`
  align-self: center;
  font-size: 11px;
  color: #22386f;
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  margin-left:auto;
  margin-right:auto;

  a {
    text-decoration: underline;
    color: #22386f;
  }
`;

export const Check = styled.img`
  width:15px;
`;

export const SelectStyled = styled(Select)`
border-top: 0;
border-right: 0;
border-left: 0;
margin-left: 15px;
margin-bottom: 0px;
border-bottom: 1px solid #cfe2eb;
margin-top: 10px;
outline: none;
  background-color:white;
  background-position: right 0.7em top 50%, 0 0;
  width: 300px;
  font-size: 13px;
  &:hover {
    border-bottom: solid 1px #9013fe
  }
  @media (max-width: 600px) {
		width:300px;
	}
`;