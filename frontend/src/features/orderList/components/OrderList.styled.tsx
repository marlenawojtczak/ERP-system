import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 50px;
`;

export const ControlPanel = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 0;
`;

export const StyledInput = styled.input`
  padding: 5px 8px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  outline: none;

  &:hover,
  &:focus {
  }
`;

export const ButtonPanel = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledButtons = styled.div`
  display: flex;
`;

export const ButtonNow = styled.button`
  border: none;
  width: 100px;
  border-right: 1px solid black;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;

  &.active {
    background-color: green;
    color: white;
    text-transform: uppercase;
  }

  &:hover {
  }
`;

export const ButtonWeek = styled.button`
  border: none;
  width: 100px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;

  &.active {
    background-color: green;
    color: white;
    text-transform: uppercase;
  }

  &:hover {
  }
`;

export const ButtonToGo = styled(ButtonNow)``;

export const ButtonHere = styled(ButtonWeek)``;

export const ProjectList = styled.div`
  height: 79vh;
  overflow: auto;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  .priority {
    border: 2px solid red;
    box-shadow: 2px 2px 10px red;
  }
`;

export const ProjectImage = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  height: 200px;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 800;
  font-size: 22px;
`;

export const ProjectIems = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;

  p {
  }

  .label {
    text-transform: uppercase;
    font-weight: 800;
  }

  .value {
  }
`;
