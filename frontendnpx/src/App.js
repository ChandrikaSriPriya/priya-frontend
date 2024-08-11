
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Students } from './components/STUDENTS/students';
import { SignUp } from './components/ending/signup';
import { SignIn } from './components/signin';
import { Forgotpage } from './components/forgotpasword';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Signin' element={<SignIn/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/Students' element={<Students/>}/>
      <Route path='/forgotpassword' element={<Forgotpage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;