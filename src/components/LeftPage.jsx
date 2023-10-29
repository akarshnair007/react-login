import styled from "styled-components";

// Define the styled component outside of the component function
const StyledImage = styled.img`
  width: 543.219px;
  height: 633.601px;
  background: #fff;
`;

const LeftPage = () => {
  return <StyledImage src="/image.png" alt="value" />;
};

export default LeftPage;
