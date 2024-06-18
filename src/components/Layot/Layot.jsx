import { AppBar } from "../AppBar/AppBar";

export const Layot = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};
