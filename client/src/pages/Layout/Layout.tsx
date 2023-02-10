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
  /* styles for mobile devices */
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;

  .content {
    display: flex;
    flex: 1;
  }

  /* styles for tablets */
  @media (min-width: 768px) {
  }

  /* styles for desktops */
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 240px auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header header header"
      "sidebar content content"
      "footer footer footer";

    .content {
      padding: 12px;
      grid-area: content;
      grid-column: span 2;
      overflow: auto;
    }
  }
`;

export default Layout;
