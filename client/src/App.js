import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import MainLayout from './layout/MainLayout';
import AdminLayout from './layout/AdminLayout';

// Home
import Home from './pages/Home/Home';

// Products
import ProductPage from './pages/Products/ProductPage';
import ProductDetail from './pages/Products/ProductDetail';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';

// User
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';

// Admin
import Category from './pages/Admin/Category/Category';
import ManageProducts from './pages/Admin/Product/ManageProduct/ManageProducts';
import AddProduct from './pages/Admin/Product/AddProduct/AddProduct';
import ManageProductEdit from './pages/Admin/Product/ManageProduct/ManageProductEdit';
import ManageOrder from './pages/Admin/Order/ManageOrder';
import ManageUser from './pages/Admin/User/ManageUser';

// Mypage
import MyPage from './pages/Mypage/MyPage';
import UserOrder from './pages/Mypage/UserOrder/UserOrder';
import Userinfo from './pages/Mypage/Userinfo/Userinfo';

const Flex = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<ProductPage />}></Route>
            <Route path="/products/:listType" element={<ProductPage />}></Route>
            <Route path="/products/detail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/auth/join" element={<Join />}></Route>
            <Route path="/userinfo" element={<Userinfo />}></Route>
            <Route path="/user/order" element={<UserOrder />}></Route>
            <Route path="/user/:id" element={<Userinfo />}></Route>
            <Route path="/user" element={<MyPage />}></Route>
            <Route path="/user/settings" element={<Userinfo />}></Route>
          </Route>
        </Routes>
      </Router>

      <Flex>
        <Router>
          <Routes>
            <Route element={<AdminLayout />}>
              <Route path="/category" element={<Category />}></Route>
              <Route
                path="/manageproducts"
                element={<ManageProducts />}
              ></Route>
              <Route path="/addproduct" element={<AddProduct />}></Route>
              <Route path="/manageorder" element={<ManageOrder />}></Route>
              <Route path="/manageuser" element={<ManageUser />}></Route>
              <Route
                path="/productedit/:product_id"
                element={<ManageProductEdit />}
              ></Route>
            </Route>
          </Routes>
        </Router>
      </Flex>
    </>
  );
}

export default App;
