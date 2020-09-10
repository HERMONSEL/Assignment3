import styled from "styled-components";
import defaultImg from "../images/house5.jpg";

const StyledHero = styled.header`
min-height: calc(60vh-60px);
background: url(${(props) => (props.img?props.img : defaultImg)}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

export default StyledHero;
