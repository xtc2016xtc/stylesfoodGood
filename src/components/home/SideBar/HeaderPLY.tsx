const HeaderPLY = () =>{
// 示例虚拟数据
    const keyOptimizationData = [
        { shortcut: 'Ctrl + C', description: 'Copy selected text' },
        { shortcut: 'Ctrl + V', description: 'Paste copied text' },
        // 可以添加更多...
    ];

    // 模拟后台返回的数据
    const daysToShowFooter = Math.floor(Math.random() * 20); // 这个值应该由实际后端逻辑决定

    return (
        <aside
            className="w-117 h-screen bg-black bg-opacity-80 text-msyh text-white flex flex-col justify-between transition-transform transform-gpu duration-300 ease-in-out"
            style={{ width: '469px' }} // 固定宽度为469px
        >
            {/* 第一部分：顶部 */}
            <div className="p-6">
                <h2 className="text-3xl font-bold mb-4">金铲铲福星登场</h2>
            </div>

            {/* 第二部分：阵容推荐 */}
            <section className="p-6">
                <h3 className="text-2xl font-semibold mb-4">阵容推荐</h3>
                <p className="text-gray-300">这里可以放一些关于阵容推荐的信息。</p>
            </section>

            {/* 第三部分：按键优化方案 */}
            <section className="p-6">
                <h3 className="text-2xl font-semibold mb-4">按键优化方案</h3>
                <ul className="space-y-2">
                    {keyOptimizationData.map((item, index) => (
                        <li key={index} className="text-gray-300">
                            <strong>{item.shortcut}</strong>: {item.description}
                        </li>
                    ))}
                </ul>
            </section>

            {/* 第四部分：常见问题 */}
            <section className="p-6">
                <h3 className="text-2xl font-semibold mb-4">常见问题</h3>
                <ul className="space-y-4">
                    <li>Q: 如何解决特定问题？<br/>A: 解决方法在这里。</li>
                    {/* 可以添加更多问题和答案 */}
                </ul>
            </section>

            {/* 底部：条件渲染 */}
            {daysToShowFooter !== 14 && daysToShowFooter !== 3 && (
                <footer className="p-6 border-t border-gray-700">
                    <p>这个底部内容将在{daysToShowFooter}天内不显示。</p>
                </footer>
            )}
        </aside>
    );
};
export default HeaderPLY