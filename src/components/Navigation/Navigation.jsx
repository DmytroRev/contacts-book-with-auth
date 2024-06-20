import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import { RiContactsBook3Line, RiHomeLine } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.container}>
      <div className={css.list}>
        <NavLink to="/">
          <RiHomeLine size="25" className={css.link} />
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">
            <RiContactsBook3Line size="25" className={css.link} />
          </NavLink>
        )}
      </div>
      <div className={css.logo}>
        My contacts <GiRotaryPhone size="25" style={{ fill: "silver" }} />
      </div>
    </nav>
  );
};
