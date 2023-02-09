import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";

const Layout = (): JSX.Element => {
  return (
    <Container>
      <Header />

      <Sidebar />

      <div className="content">
        <Outlet />
      </div>

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 160px auto auto;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  margin: 6px;

  .content {
    grid-area: content;
    grid-column: span 2;
  }

  .articles {
    display: grid;
    grid-gap: 26px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export default Layout;
