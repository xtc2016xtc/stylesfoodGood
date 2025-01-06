import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "@/components/Nav/Navbar.tsx";
import Home from "@/page/Home.tsx";
import News from "@/page/News.tsx";
import About from "@/page/About.tsx";
import Services from "@/page/Services.tsx";
import Products from "@/page/Products.tsx";
import Contact from "@/page/Contact.tsx";

const navItems = [
    { label: '首页', path: '/' },
    { label: '新闻', path: '/news' },
    { label: '关于', path: '/about' },
    { label: '服务', path: '/services' },
    { label: '产品', path: '/products' },
    { label: '联系我们', path: '/contact' },
];

const App = () => {
    return (
        <Router>
            <Navbar navItems={navItems} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                {/* 其他路由 */}
            </Routes>
        </Router>
    );
};

export default App;