import logo from './logo.svg';
import './App.css';
import FormLogin from './components/forms/login/index';
import FormRegister from './components/forms/register/index';
import  FormikRegister from './components/forms/FormikRegister/index';
import ExemploField from './components/forms/CustomField/index';
import MaterialFormik from './components/forms/Material/index';

function App() {
  return (
    <div className="App">
      <MaterialFormik/>
    </div>
  );
}

export default App;
