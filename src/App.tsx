import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "@/page/main/Home.tsx";
import News from "@/page/News.tsx";
import About from "@/page/About.tsx";
import Services from "@/page/Services.tsx";
import Products from "@/page/Products.tsx";
import Contact from "@/page/Contact.tsx";
import RootLayout from "@/layout/RootLayout.tsx";
import Main from "@/page/main/main.tsx";
import Detail from "@/components/News/detail/Detail.tsx";
import { ActiveIndexProvider } from './components/Nav/ActiveIndexContext';
import CharacterDetail from "@/components/Character/CharacterDetail.tsx";

const App = () => {
    return (
        <ActiveIndexProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<RootLayout />}>
                        <Route index element={<Main />} />
                        <Route path="news" element={<News />} />
                        <Route path="news/detail/:id" element={<Detail />} />
                        <Route path="about" element={<About />} />
                        <Route path="about/:city" element={<CharacterDetail />} />
                        <Route path="services" element={<Services />} />
                        <Route path="products" element={<Products />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Router>
        </ActiveIndexProvider>
    );
};

export default App;