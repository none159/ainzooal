import Page from './components/page'
import Commands from './components/commandspage'
import Faq from './components/faqpage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
          
          <Routes>
              
              <Route path='/ainzooal' element={<Page />} />    
              <Route path='/ainzooal/commands' element={<Commands />}/>
              <Route path='/ainzooal/FAQ' element={<Faq />}/>
             
                       
          </Routes>  
            
          
      </Router>  
    </>
  );
}

export default App;
