import styled from "styled-components";
import LeftPage from "./components/LeftPage";
import RightPage from "./components/RightPage";

const Wrapper = styled.div`
  display: inline-flex;
  padding: 40px 40px 40px 142px;
  justify-content: flex-end;
  align-items: center;
  gap: 147.781px;
`;

function App() {
  return (
    <Wrapper>
      <LeftPage />
      <RightPage />
    </Wrapper>
  );
}

export default App;
