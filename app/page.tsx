import Header from '../components/Header';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import AboutUs from '../components/AboutUs';
import QuickLinks from '../components/QuickLinks';
import BuiltByAgents from '../components/BuiltByAgents';
import GrowYourBusiness from '../components/GrowYourBusiness';
import SuiteOfTools from '../components/SuiteOfTools';
import LocallyDrivenCulture from '../components/LocallyDrivenCulture';
import ProfitSharing from '../components/ProfitSharing';
import ExploreTransitioning from '../components/ExploreTransitioning';
import ExploreKW from '../components/ExploreKW';
import TrainingCalendar from '../components/TrainingCalendar';
import YourBusinessGrows from '../components/YourBusinessGrows';
import CompensationPlan from '../components/CompensationPlan';
import LeadershipTeam from '../components/LeadershipTeam';
import VisitUs from '../components/VisitUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Welcome />
      <AboutUs />
      <QuickLinks />
      <BuiltByAgents />
      <GrowYourBusiness />
      <SuiteOfTools />
      <LocallyDrivenCulture />
      <ProfitSharing />
      <ExploreTransitioning />
      <ExploreKW />
      <TrainingCalendar />
      <YourBusinessGrows />
      <CompensationPlan />
      <LeadershipTeam />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 xl:grid-cols-[1.05fr_0.95fr] items-start">
            <VisitUs />
            <ContactUs />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
