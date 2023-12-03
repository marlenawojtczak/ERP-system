import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  grid-template-rows: 60px auto;
  grid-template-areas:
    "navbar navbar"
    "sidebar content";
  height: 100vh;
  background-color: #38380b;
`;

export const Header = styled.header`
  background-color: #969696;
  grid-area: navbar;
`;

export const Aside = styled.aside`
  background-color: #aaaaaa;
  grid-area: sidebar;
`;

export const Main = styled.main`
  background-color: #c2c2c2;
  grid-area: content;
`;
