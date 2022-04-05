import logo from './logo.svg';
import './App.css';
import UserProfile from './FormValidation/UserProfiles/UserProfile';

function App() {
  return (
    <div className="bg-dark p-5" style={{
      height: '100vh'
    }}>
      <UserProfile></UserProfile>
    </div>
  );
}

export default App;
