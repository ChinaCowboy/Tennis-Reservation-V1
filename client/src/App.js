import logo from "./logo.svg";
import "./App.css";
import { Layout, Modal } from "antd";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Ball } from "./Ball";
import styles from "./App.module.css";
import { NavBar } from "./navigation/NavBar";
import MyRouterSwitch from "./navigation/MyRouterSwitch";
function App() {
  const basename = process.env.PUBLIC_URL;

  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Suspense fallback={<Ball visible preloader spin />}>
          <Routes>
            <Route path="/reserv"></Route>
            <Route
              path="*"
              element={
                <div>
                  <NavBar />
                  <Layout.Content className={styles.Content}>
                    <MyRouterSwitch />
                  </Layout.Content>
                </div>
              }
            ></Route>
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
