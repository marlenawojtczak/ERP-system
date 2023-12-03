import { PageContainer } from "./PageContainer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
};

export default Layout;
