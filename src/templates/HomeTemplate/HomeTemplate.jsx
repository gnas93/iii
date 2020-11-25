import './HomeTemplate.css';
import React, { Fragment } from 'react';
import { Route} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';





const HomeLayout = (props) => {
  return <Fragment>
    <Header/>
    

    {props.children}
    <Footer/>

  </Fragment>
}

export const HomeTemplate = ({ Component, ...props }) => (
  <Route {...props} render={(propComponent) => (
    <HomeLayout>
      <Component {...propComponent} />
     
    </HomeLayout>
  )} />
)