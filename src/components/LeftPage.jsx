import styled from "styled-components";

// Define the styled component outside of the component function
const StyledImage = styled.img`
  width: 400px;
  height: 474px;
  background: #fff;
`;

const LeftPage = () => {
  return <StyledImage src="/image.png" alt="value" />;
};

export default LeftPage;
