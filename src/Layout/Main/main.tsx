import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from '../Header/header'
import Footer from '../../Layout/Footer/footer'
import Home from '../Home/home'

const Main: React.FunctionComponent<{}> = () => {
    return (
        <div className='mx-auto font-openSans'>
            <Router>
                <Switch>
                    <Route path='/'>
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default Main
