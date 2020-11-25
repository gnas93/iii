// import './UserTemplate.css';
// import React, { Fragment } from 'react';
// import { Route} from 'react-router-dom';
<<<<<<< HEAD
import HeaderUser from '../../Components/HeaderUser/HeaderUser';
import Footer from '../../Components/Footer/Footer';
import SideBar from './SideBar'
=======
<<<<<<< HEAD
import HeaderUser from '../../Components/HeaderUser/HeaderUser';
import Footer from '../../Components/Footer/Footer';
import SideBar from './SideBar'
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
// import NavBarMenu from '../../Components/NavBarMenu/NavBarMenu';
import { Layout, BackTop,Menu } from 'antd';
const { Header, Content} = Layout;

=======
// import HeaderUser from '../../Components/HeaderUser/HeaderUser';
// import Footer from '../../Components/Footer/Footer';





// const UserLayout = (props) => {
//   return <Fragment>
//     <HeaderUser/>
//     {props.children}
//     <Footer/>

//   </Fragment>
// }


>>>>>>> 144b160145e9364d1ce2ffa0746f976e8987ad4e
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
// import NavBarMenu from '../../Components/NavBarMenu/NavBarMenu';
import { Layout, BackTop,Menu } from 'antd';
const { Header, Content} = Layout;

>>>>>>> 890fb48fb7d9ab7c0ae3d7207cddf3ef732d7532
const UserLayout = (props) => {
    return (
        <Fragment>
            <BackTop style={{ color: 'rgba(64, 64, 64, 0.6)' }} />
<<<<<<< HEAD
            <Layout>
                {/* <Header className="header">
=======
<<<<<<< HEAD
            <Layout>
                {/* <Header className="header">
=======
            <NavBarMenu />
            <Layout>
                <Header className="header">
>>>>>>> 890fb48fb7d9ab7c0ae3d7207cddf3ef732d7532
>>>>>>> 144b160145e9364d1ce2ffa0746f976e8987ad4e
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                    </Menu>
<<<<<<< HEAD
                </Header> */}
                <HeaderUser/>
                <Layout>
                    <Layout style={{ padding: '0' }}>
                    <SideBar/>
                        <Content vstyle={{ background: '#fff', padding: 0, minHeight: 700,}}>
=======
<<<<<<< HEAD
                </Header> */}
                <HeaderUser/>
                <Layout>
                    <Layout style={{ padding: '0' }}>
                    <SideBar/>
                        <Content vstyle={{ background: '#fff', padding: 0, minHeight: 700,}}>
=======
                </Header>
                <Layout>
                    <SideBar />
                    <Layout style={{ padding: '24px 24px 0' }}>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                minHeight: 700,
                            }}
                        >
>>>>>>> 890fb48fb7d9ab7c0ae3d7207cddf3ef732d7532
>>>>>>> 144b160145e9364d1ce2ffa0746f976e8987ad4e
                            {props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
<<<<<<< HEAD
            <Footer/>
=======
<<<<<<< HEAD
            <Footer/>
=======
            <Footer>Ant Design ©2019 Created by Nguyen Minh Thuy</Footer>
>>>>>>> 890fb48fb7d9ab7c0ae3d7207cddf3ef732d7532
>>>>>>> 144b160145e9364d1ce2ffa0746f976e8987ad4e
        </Fragment>
    )
}


//HOC userTemplate
export const UserTemplate = ({ Component, ...props }) => (
  <Route {...props} render={(propComponent) => (
    <UserLayout>
      <Component {...propComponent} />
    </UserLayout>
  )} />
)