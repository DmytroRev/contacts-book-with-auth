import { AppBar } from "../AppBar/AppBar";
// import css from "./Layot.module.css"
export const Layot = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};
