import React from 'react';
import { NavLink,Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PrivateRoute from './utils/PrivateRoute';
import HomePage from './pages/Front/Home';
import LoginPage from './pages/Front/Login';
import VerifyOtp from './pages/Front/OtpVerification';
import SearchJobs from './pages/Front/SearchJobs.js';
import PrivacyPage from './pages/Front/privacy.js';
import TermsPage from './pages/Front/terms.js';
import TermsConditionPage from './pages/Front/termscondition.js';
import NotFound from './pages/Front/NotFound';
import Jobs from './pages/Profile/Jobs';
import UploadResume from './pages/Profile/UploadResume';
import CreateProfile from './pages/Profile/CreateProfile.js';
import AccountPage from './pages/Profile/AccountPage.js';
import NotificationPage from './pages/Profile/Notification.js';
import SavedJobs from './pages/Profile/SavedJobs.js';
import JobApplied from './pages/Profile/JobApplied.js';
import RecentJobs from './pages/Profile/RecentJobs.js';
import JobsPage from './pages/Profile/JobsByTypes.js';
import JobDetailPage from './pages/Profile/JobDetail.js';
import Header from './components/includes/Header.js';
import Footer from './components/includes/Footer.js';
import FeaturedJobsPage from './pages/Front/FeaturedJobsPage.js';
import SearchResults from './pages/Front/SearchResults.js';
function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path="/verify-mobile" element={<VerifyOtp/>} />
        <Route path="/search-jobs" element={<SearchJobs/>} />
        <Route path='/privacy_policy' element={<PrivacyPage/>} />
        <Route path='/termsofuse' element={<TermsPage/>} />
        <Route path='/t&c' element={<TermsConditionPage/>} />
        <Route path='/showAll/featured-jobs' element={<FeaturedJobsPage/>} />
        <Route path='/search-results' element={<SearchResults/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/jobs" element={<PrivateRoute><Jobs /></PrivateRoute>}/>
        <Route path="/upload-resume" element={<PrivateRoute><UploadResume/></PrivateRoute>}/>
        <Route path='/create-profile' element={<PrivateRoute><CreateProfile/></PrivateRoute>} />
        <Route path='/account' element={<PrivateRoute><AccountPage/></PrivateRoute>} />
        <Route path='/notifications' element={<PrivateRoute><NotificationPage/></PrivateRoute>} />
        <Route path='/showAll/saved-jobs' element={<PrivateRoute><SavedJobs/></PrivateRoute>} />
        <Route path='/showAll/applied-jobs' element={<PrivateRoute><JobApplied/></PrivateRoute>} />
        <Route path='/showAll/recent-jobs' element={<PrivateRoute><RecentJobs/></PrivateRoute>} />
        <Route path='/jobs/:type' element={<PrivateRoute><JobsPage/></PrivateRoute>} />
        <Route path='/job/:jobId' element={<PrivateRoute><JobDetailPage/></PrivateRoute>} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
