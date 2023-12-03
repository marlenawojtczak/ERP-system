import { ReactNode } from "react";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

import { Main, Wrapper } from "./Layout.styled";

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Wrapper>
      <NavBar />
      <SideBar />
      <Main>{children}</Main>
    </Wrapper>
  );
};
