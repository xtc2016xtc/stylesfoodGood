const Headerfly = () => {
    return (
        <nav
            className="fixed w-64 h-full bg-white shadow-lg transition-transform transform-gpu duration-300 ease-in-out"
            id="sidebar">
            {/* 侧边栏内容 */}
            <div className="min-h-screen font-sans text-gray-900">
                {/* Header部分 */}
                <header className="relative h-96 overflow-hidden">
                    <img src="/vite.svg" alt="卡卡西登场图"
                         className="absolute w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="container mx-auto px-6 h-full flex items-center justify-center">
                        <h1 className="text-6xl font-bold text-white z-10">卡卡西登场图</h1>
                    </div>
                </header>

                {/* 图片展示区 */}
                <section className="py-8">
                    <div className="container mx-auto px-6">
                        <img src="/vite.svg" alt="Another Image"
                             className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 mx-auto"/>
                    </div>
                </section>

                {/* 组合键和键位使用方案 */}
                <section className="bg-gray-100 py-8">
                    <div className="container mx-auto px-6">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-semibold mb-6">组合键与键位使用方案</h2>
                            {/* 示例：可以在此添加表格或其他形式的内容 */}
                            <p className="text-gray-700">这里可以放一些关于如何使用组合键或单个键位的信息。</p>
                        </div>
                    </div>
                </section>

                {/* 嵌入式工具介绍 */}
                <section className="py-8">
                    <div className="container mx-auto px-6">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-semibold mb-6">游戏内嵌入工具</h2>
                            {/* 工具介绍内容 */}
                            <p className="text-gray-700">例如视品分解模拟器等。</p>
                        </div>
                    </div>
                </section>

                {/* 常见问题解答 */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-semibold mb-6 text-center">常见问题解答</h2>
                        {/* FAQ内容 */}
                        <ul className="space-y-4 max-w-md mx-auto">
                            <li>Q: 如何解决特定问题？<br/>A: 解决方法在这里。</li>
                            {/* 添加更多问题和答案 */}
                        </ul>
                    </div>
                </footer>

                {/* 美观侧边栏 */}
                <aside id="sidebars"
                       className="hidden md:block fixed right-0 top-0 bottom-0 w-64 bg-white shadow-lg transition-transform transform-gpu duration-300 ease-in-out">
                    <div className="px-6 py-4">
                        <h3 className="font-semibold mb-4">快速导航</h3>
                        <ul className="space-y-2">
                            <li><a href="#header" className="block px-4 py-2 rounded hover:bg-gray-200">顶部</a></li>
                            <li><a href="#image-section"
                                   className="block px-4 py-2 rounded hover:bg-gray-200">图片展示区</a></li>
                            <li><a href="#key-combos" className="block px-4 py-2 rounded hover:bg-gray-200">组合键</a>
                            </li>
                            <li><a href="#tools" className="block px-4 py-2 rounded hover:bg-gray-200">工具介绍</a></li>
                            <li><a href="#faq" className="block px-4 py-2 rounded hover:bg-gray-200">FAQ</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </nav>
    )
}

export default Headerfly;