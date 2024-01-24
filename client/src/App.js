import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './pages/Home/Home';
import ProductPage from './pages/Products/ProductPage';
import ProductList from './components/ProductList';
import ProductDetail from './pages/Products/ProductDetail';
import Cart from './pages/Order/Cart';
import Address from './pages/Mypage/Adress';
import PurchaseCompleted from './pages/Order/PurchaseCompleted';

// 로그인, 회원가입
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';

// 관리자 페이지
import Category from './pages/Admin/Category/Category';
import ManageProducts from './pages/Admin/Product/ManageProducts';
import ManageProductNew from './pages/Admin/Product/ManageProductNew';
import ManageProductEdit from './pages/Admin/Product/ManageProductEdit';

//사용자 마이페이지
import UserOrder from './pages/Mypage/UserOrder';
import Userinfo from './pages/Mypage/Userinfo';
import './css/app.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* TODO: 삭제예정 */}
        <Route path='/plists/all' element={<ProductList />}></Route>

        {/* */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<ProductPage />}></Route>
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/address/:id' element={<Address />} />
        <Route path='/PurchaseCompleted' element={<PurchaseCompleted />} />
        <Route path='/auth/login' element={<Login />}></Route>
        <Route path='/auth/join' element={<Join />}></Route>
        <Route path='/userinfo' element={<Userinfo />}></Route>
        {/* 관리자페이지 */}
        <Route path='/category' element={<Category />}></Route>
        <Route path='/manageproducts' element={<ManageProducts />}></Route>
        <Route path='/productnew' element={<ManageProductNew />}></Route>
        <Route path='/plist' element={<ProductList />}></Route>
        <Route
          path='/productedit/:product_id'
          element={<ManageProductEdit />}
        ></Route>
        <Route path='/products/:listType' element={<ProductList />}></Route>
        <Route path='/user/order' element={<UserOrder />}></Route>
        <Route path='/user/:id' element={<Userinfo />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
