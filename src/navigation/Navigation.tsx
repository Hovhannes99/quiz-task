import React from "react";
import {
  publicRouter,
  privateRouter,
} from "../configs/routerConfig/router.config";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { AuthContext } from "../Context";
 

const Navigation = () => {
  const { isAuth } = React.useContext(AuthContext);

  return (
    <Routes>
      <Route element={<Layout />}>
        {!isAuth
          ? publicRouter.map((el) => (
              <Route
                path={el.path}
                index={el.index}
                key={el.path}
                element={<el.component />}
              />
            ))
          : privateRouter.map((el) => (
              <Route
                path={el.path}
                index={el.index}
                key={el.path}
                element={<el.component />}
              />
            ))}
      </Route>
    </Routes>
  );
};

export default Navigation;
