import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 50px;
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
  width: 400px;

  &:hover,
  &:focus {
  }
`;

export const ButtonPanel = styled.div`
  display: flex;
  gap: 30px;
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
  height: 70vh;
  overflow-y: auto;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 5%;
  }
  .priority {
    border: 2px solid red;
    box-shadow: 1px 1px 10px red;
  }
  @media screen and (min-height: 900px) {
    height: 75vh;
  }
`;

// export const ProjectImage = styled.div`
//   border: 2px solid black;
//   border-radius: 5px;
//   padding: 10px;
//   margin-bottom: 10px;
//   text-align: center;
//   font-weight: 800;
//   font-size: 22px;
//   max-width: 300px;

//   display: flex; /* Użyj flexbox do zarządzania układem obrazów */
//   flex-wrap: wrap; /* Pozwala obrazom przechodzić do nowego wiersza, gdy brakuje miejsca */
//   justify-content: center; /* Wycentruj obrazy */
//   align-items: center; /* Wyrównaj obrazy pionowo */
//   gap: 10px; /* Dodaj odstępy między obrazami */

//   img {
//     flex: 1; /* Pozwól obrazom na rozciąganie i kurczenie się */
//     max-height: 100px; /* Ustaw maksymalną wysokość każdego obrazu */
//     max-width: 100%; /* Ustaw maksymalną szerokość, aby zachować proporcje */
//     height: auto; /* Utrzymaj proporcje obrazu */
//     width: auto; /* Utrzymaj proporcje obrazu */
//     object-fit: contain;
//   }
// `;

export const ProjectImage = styled.div`
  border: 2px solid black;
  height: 350px;
  width: 300px;
  display: grid;
  padding: 10px;
  margin-bottom: 10px;
  grid-auto-flow: column dense;

  gap: 10px;
  img {
  }
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
