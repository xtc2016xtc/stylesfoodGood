import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Home from "@/page/main/Home.tsx";
import News from "@/page/News.tsx";
// import About from "@/page/About.tsx";
import Services from "@/page/Services.tsx";
import Products from "@/page/Products.tsx";
import Contact from "@/page/Contact.tsx";
import RootLayout from "@/layout/RootLayout.tsx";
import Main from "@/page/main/main.tsx";
import Detail from "@/components/News/detail/Detail.tsx";
import { ActiveIndexProvider } from './components/Nav/ActiveIndexContext';
import CharacterDetail from "@/components/Character/CharacterDetail.tsx";
import Error500 from "@/page/Error/Error500.tsx";

const App = () => {
    return (
        <ActiveIndexProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<RootLayout />}>
                        <Route index element={<Main />} />
                        <Route path="news" element={<News />} />
                        <Route path="news/:id" element={<News />} />
                        <Route path="news/detail/:id" element={<Detail />} />
                        <Route path="about/:city" element={<CharacterDetail />} />
                        <Route path="services" element={<Services />} />
                        <Route path="products" element={<Products />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                    <Route path="/500" element={<Error500/>}/>
                    <Route path="main/about/" element={<Error500/>}/>
                    <Route path="*" element={<Navigate to="/500" />} /> {/* 捕获所有未匹配的路由 */}
                </Routes>
            </Router>
        </ActiveIndexProvider>
    );
};

export default App;