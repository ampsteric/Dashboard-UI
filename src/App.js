import Homepage from './Component/Homepage';
import Header from './Component/Header/Header'
import Pages from './Component/Pages/Pages'
import Loader from './Component/Preloader/Preloader'
import Card from './Component/Card/Card'
import MainCard from './Component/MainCard/Maincard'
import Status from './Component/Status/Status'
import SmallCard from './Component/Smallcard/Smallcard'
import {BrowserRouter as  Router , Route , Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    // <BrowserRouter>
    <Router>
          <Switch>
        <Route path='/' exact>
              <div className="App">
              <Homepage />
              </div>
        </Route>
        <Route path='/home' exact>
              <Header />
              <div className="container-fluid">
              <div className="row">
                    <div className="col-md-2">
                          <div className="pages-div">
                              <Pages done={'yes'} media={"insta"} name={'Rachna12'} />
                              <Pages done={'yes'} media={"utube"} name={'Rachna_1'}/>
                              <Pages done={'yes'} media={"tweet"} name={'Rachna12_'}/>
                              <Pages done={'yes'} media={"fb"} name={'Rach_na12'}/>
                              <Pages done={'yes'} media={"utube"} name={'Rachna734'}/>
                              <Pages done={'yes'} media={"fb"} name={'Rachna45#'}/>
                              <Pages done={'yes'} media={"insta"} name={'Rach@12'}/>
                          </div>
                          <div className="status-div">
                                <Status  done={'yes'} name={'marked'}/>
                                <Status  done={'no'} name={'Hidden'}/>
                                <Status  done={'yes'} name={'marked'}/>
                          </div>
                          <div className="status-div">
                        <Loader title={'Accounts Connected'} />
                          <Loader title={'Comments Processed'} />
                          </div>
                         
                    </div>
                    <div className="col-md-5">
                          <SmallCard />
                          <Card />
                          <Card />
                          <Card />
                    </div>
                    <div className="col-md-5">
                          <MainCard />   
                    </div>
              </div>
              </div>
              {/* <div className="flexi">
                    <div className="co-flexi-left-aligned">
                          <div className="pages-div">
                              <Pages done={'yes'} media={"insta"} name={'Rachna12'} />
                              <Pages done={'yes'} media={"utube"} name={'Rachna_1'}/>
                              <Pages done={'yes'} media={"tweet"} name={'Rachna12_'}/>
                              <Pages done={'yes'} media={"fb"} name={'Rach_na12'}/>
                              <Pages done={'yes'} media={"utube"} name={'Rachna734'}/>
                              <Pages done={'yes'} media={"fb"} name={'Rachna45#'}/>
                              <Pages done={'yes'} media={"insta"} name={'Rach@12'}/>
                          </div>
                          <div className="status-div">
                                <Status  done={'yes'} name={'marked'}/>
                                <Status  done={'no'} name={'Hidden'}/>
                                <Status  done={'yes'} name={'Done'}/>
                          </div>
                          <div className="status-div">
                        <Loader title={'Accounts Connected'} />
                          <Loader title={'Comments Processed'} />
                          </div>
                         
                    </div>
                    <div className="co-flexi">
                          <SmallCard />
                          <Card />
                          <Card />
                          <Card />
                    </div>
                    <div className="co-flexi">
                          <MainCard />   
                    </div>
              </div> */}
        </Route>
        </Switch>
    </Router>
    // </BrowserRouter>
  );
}

export default App;
