import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import ProductList from "./components/ProductList";
import Detail from "./pages/Product/Detail";
import Cart from "./pages/Order/Cart";
import Address from "./pages/Mypage/Adress";
import PurchaseCompleted from "./pages/Order/PurchaseCompleted";

// 로그인, 회원가입
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";

// 관리자 페이지
import Category from "./pages/Admin/Category/Category";
import ManageProducts from "./pages/Admin/Product/ManageProducts";
import ManageProductNew from "./pages/Admin/Product/ManageProductNew";
import ManageProductEdit from "./pages/Admin/Product/ManageProductEdit";
import ManageOrder from "./pages/Admin/Order/ManageOrder";

//사용자 마이페이지
import UserOrder from "./pages/Mypage/UserOrder";
import Userinfo from "./pages/Mypage/Userinfo";
import "./css/app.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/plist/all" element={<ProductList />}></Route>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address/:id" element={<Address />} />
        <Route path="/PurchaseCompleted" element={<PurchaseCompleted />} />
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/join" element={<Join />}></Route>
        <Route path="/userinfo" element={<Userinfo />}></Route>
        {/* 관리자페이지 */}
        <Route path="/category" element={<Category />}></Route>
        <Route path="/manageproducts" element={<ManageProducts />}></Route>
        <Route path="/productnew" element={<ManageProductNew />}></Route>
        <Route path="/plist" element={<ProductList />}></Route>
        <Route
          path="/productedit/:product_id"
          element={<ManageProductEdit />}
        ></Route>
        <Route path="/plist/:listType" element={<ProductList />}></Route>
        <Route path="/user/order" element={<UserOrder />}></Route>
        <Route path="/user/:id" element={<Userinfo />}></Route>
        {/* <Route path='/plist/woman' element={<ProductList />}></Route>
        <Route path='/plist/man' element={<ProductList />}></Route> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
