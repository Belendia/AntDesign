import AppAbout from "../components/home/about";
import AppFaq from "../components/home/faq";
import AppFeature from "../components/home/feature";
import AppHero from "../components/home/hero";
import AppWorks from "../components/home/works";

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeature />
      <AppWorks />
      <AppFaq />
    </div>
  );
}

export default AppHome;
