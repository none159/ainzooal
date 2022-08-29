import Page from './components/page'
import Commands from './components/commandspage'
import Faq from './components/faqpage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
          
          <Routes>
              
              <Route path='/' element={<Page />} />    
              <Route path='/commands' element={<Commands />}/>
              <Route path='/FAQ' element={<Faq />}/>
             
                       
          </Routes>  
            
          
      </Router>  
    </>
  );
}

export default App;
