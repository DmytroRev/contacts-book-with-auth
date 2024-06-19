import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { Layot } from "../Layot/Layot";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RegistrationPage } from "../../pages/RegistrationPage/RegistrationPage";
import { refreshUser } from "../../redux/auth/operations";
import { selectRefreshing } from "../../redux/auth/selectors";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";

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
            element={<RestrictedRoute component={<RegistrationPage />} />}
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
