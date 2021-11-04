import './App.css';
import Clockp from './components/Clock_prop';
import Count from './components/Count_state'

const App = () => {
  return (
    <div>
    <Clockp locale="bn-BD"/>
    <br/>
    <Count />
    </div>
  );
}

export default App;
