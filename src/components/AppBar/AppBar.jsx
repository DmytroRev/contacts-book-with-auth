import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";

export const AppBar = () => {
  return (
    <header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
};
