import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import { MainContainer } from "../../styles/App.styled";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <MainContainer>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </main>
    </>
  );
};

export default Layout;
