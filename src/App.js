import './App.css';
import Header from './components/header';
import HeroSection from './components/heroSection'
import SearchBar from './components/searchBar'
import jobsData from './assets/dummy-data/jobsData'
import JobListings from './components/jobs-listing';

function App() {
  
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SearchBar />
      <JobListings jobs={jobsData} />
    </div>
  );
}

export default App;
