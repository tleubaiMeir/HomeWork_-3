import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link,} from 'react-router-dom';
import 'antd/dist/antd.css'
import { Divider } from 'antd';
import HomeComponent from './components/HomeComponent';
import StatComponent from './components/StatComponent';
import HelpComponent from './components/HelpComponent';
import NotFoundComponent from './components/NotFoundComponent'



const App = () => {


  const cards = [
    { name: '1', id: 1150 },
    { name: '2', id: 25778 },
    { name: '3', id: 4537 },


  ]
const helpList = [
    {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem molestiae necessitatibus nemo odio officia porro ratione rem tenetur voluptatum. Animi beatae enim eveniet fuga iure quas sunt totam voluptatumAliquid commodi debitis deleniti dolor eius labore minima nostrum numquam, omnis, porro quaerat, qui quibusdam quod sint totam vitae voluptate! Ab accusantium atque debitis optio quia quod rem sapiente tenetur.Ad, dignissimos fuga natus neque tempora velit. Eum fuga illo, mollitia quisquam sed totam veniam voluptas! Assumenda commodi debitis enim et fuga ipsa ipsam, ipsum magni nam recusandae tempora vero.Eaque, eos exercitationem, expedita, explicabo impedit maiores nisi odio officia pariatur rem suscipit tempora tempore vitae? Alias atque consequatur dolorem, doloremque earum hic neque, quod repellendus sit unde ut vitae.Ab ad alias consequatur debitis deleniti dicta eos, error et fuga illum incidunt ipsam laborum modi molestiae natus nulla obcaecati placeat quas qui quos ratione repellat repudiandae sapiente similique suscipit.',
  },
  {
    text: 'if you can`t understand what is this, we can`t help you'
  },

]

  return (
    <div className='App'>
      <div className="container">

            <Router>
              <div className="router-body">
                <div>
                  <Link to='/'>Home</Link>
                  <Divider type='vertical' />
                  <Link to='/log'>Log in</Link>
                  <Divider type='vertical' />
                  <Link to='/help'>Help</Link>
                  <Divider type='vertical' />
                  <Link to='/404'>Can not be found</Link>
                </div>
              </div>
              <Routes>
                <Route path='/' element={<HomeComponent lists={cards} />} >  </Route>
                <Route path='/stat/:id' element={<StatComponent lists={cards} />} > </Route>
                <Route path="/help" element={<HelpComponent helpList={helpList} />}> </Route>
                <Route path="/404" element={<NotFoundComponent/>}> </Route>
                <Route path="*" element={<NotFoundComponent/>}> </Route>
              </Routes>
            </Router>

      </div>
    </div>
  );
};

export default App;