import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "@/page/main/Home.tsx";
import News from "@/page/News.tsx";
import About from "@/page/About.tsx";
import Services from "@/page/Services.tsx";
import Products from "@/page/Products.tsx";
import Contact from "@/page/Contact.tsx";
import RootLayout from "@/layout/RootLayout.tsx";
import Main from "@/page/main/main.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<RootLayout />}>
                <Route index element={<Main />} />
                <Route path="main" element={<Main />} />
                <Route path="news" element={<News />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="products" element={<Products />} />
                <Route path="contact" element={<Contact />} />
                {/*<Route path="admin" element={<Admin />} />*/}
                {/* 其他路由 */}
            </Route>
            </Routes>
        </Router>
    );
};

export default App;