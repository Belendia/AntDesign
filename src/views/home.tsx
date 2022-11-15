import AppAbout from "../components/home/about";
import AppHero from "../components/home/hero";

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
    </div>
  );
}

export default AppHome;
