import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { Layot } from "../Layot/Layot";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import { selectRefreshing } from "../../redux/auth/selectors";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";

import { HomePage } from "../../pages/HomePage/HomePage";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage";
import { RegistrationPage } from "../../pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";

// const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
// const RegistrationPage = lazy(() =>
//   import("../../pages/RegistrationPage/RegistrationPage")
// );
// const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
// const ContactsPage = lazy(() =>
//   import("../../pages/ContactsPage/ContactsPage")
// );

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user</div>
  ) : (
    <Layot>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
    </Layot>
  );
}
