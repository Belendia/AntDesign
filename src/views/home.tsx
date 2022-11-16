import AppAbout from "../components/home/about";
import AppFeature from "../components/home/feature";
import AppHero from "../components/home/hero";

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeature />
    </div>
  );
}

export default AppHome;
