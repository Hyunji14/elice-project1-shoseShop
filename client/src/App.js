import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import MainLayout from './MainLayout';
import AdminLayout from './AdminLayout';

import Home from './pages/Home/Home';
import List from './pages/List/List';
import Detail from './pages/Product/Detail';
import Cart from './pages/Cart/Cart';
import Address from './pages/Mypage/Adress';
import PurchaseCompleted from './pages/Order/PurchaseCompleted';
import Order from './pages/Order/Order';

// 로그인, 회원가입
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';

// 관리자 페이지
import CategoryManagement from './pages/Admin/Category/Category';
import ProductManagement from './pages/Admin/Product/ProductManagement/ProductManagement';
import AddProduct from './pages/Admin/Product/AddProduct/AddProduct';
import ManageProductEdit from './pages/Admin/Product/ProductManagement/ManageProductEdit';
import OrderManagement from './pages/Admin/Order/OrderManagement';
import User from './pages/Admin/User/User';

//사용자 마이페이지
import UserOrder from './pages/Mypage/UserOrder/UserOrder';
import Userinfo from './pages/Mypage/Userinfo/Userinfo';
import './css/app.css';

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
            <Route path="/plist/all" element={<List />}></Route>
            <Route path="/plist/:listType" element={<List />}></Route>
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/address/:id" element={<Address />} />
            <Route path="/PurchaseCompleted" element={<PurchaseCompleted />} />
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/auth/join" element={<Join />}></Route>
            <Route path="/userinfo" element={<Userinfo />}></Route>
            <Route path="/user/order" element={<UserOrder />}></Route>
            <Route path="/user/:id" element={<Userinfo />}></Route>
          </Route>
        </Routes>
      </Router>

      <Flex>
        <Router>
          <Routes>
            <Route element={<AdminLayout />}>
              <Route
                path="/admin/category"
                element={<CategoryManagement />}
              ></Route>
              <Route
                path="/admin/manageproducts"
                element={<ProductManagement />}
              ></Route>
              <Route path="/admin/addproduct" element={<AddProduct />}></Route>
              <Route
                path="/admin/ordermanagement"
                element={<OrderManagement />}
              ></Route>
              <Route path="/admin/user" element={<User />}></Route>
              <Route
                path="/admin/productedit"
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
