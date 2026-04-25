import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import AboutUs from '../components/AboutUs';
import QuickLinks from '../components/QuickLinks';
import BuiltByAgents from '../components/BuiltByAgents';
import GrowYourBusiness from '../components/GrowYourBusiness';
import SuiteOfTools from '../components/SuiteOfTools';
import LeadershipTeam from '../components/LeadershipTeam';
import ContactUs from '../components/ContactUs';

export default function Home() {
  return (
    <div>
      <Hero />
      <Welcome />
      <AboutUs />
      <QuickLinks />
      <BuiltByAgents />
      <GrowYourBusiness />
      <SuiteOfTools />
      <LeadershipTeam />
      <ContactUs />
    </div>
  );
}
