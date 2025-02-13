/*
  @轻量级进度条

  1.showSpinner: 设置为 false 表示不显示进度条旁边的那个旋转的加载图标（spinner）。默认情况下，这个值是 true，意味着会显示一个旋转的小圈圈来表示页面正在加载。
  2.minimum: 设置为 0.1 表示进度条的最小百分比是 10%。这意味着即使在加载刚刚开始的时候，进度条也会直接从 10% 开始，而不是从 0% 开始。这有助于给用户一种进度一直在前进的感觉，即使实际的加载过程刚开始。默认值通常是 0.08 (即 8%)。
  3.trickleSpeed: 设置为 200 指定了“涓流”速度，也就是自动增加进度的速度，单位是毫秒(ms)。每隔 200 毫秒，NProgress 会自动将进度条向前推进一点点，直到达到某个点。这是为了模拟加载过程中的自然进展，使得用户体验更加流畅。默认的涓流速度是每 800 毫秒增加一次。
*/

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";


/* 配置进度条 */
NProgress.configure({
    showSpinner: false, // 不显示旋转的加载图标
    minimum: 0.1,       // 进度条的最小值设置为10%
    trickleSpeed: 200,  // 每200毫秒自动增加一点进度
});



const ProgressBar = () => {
    useEffect(() => {
        /*
         * 优化点：
         *
         * 【初始状态】
         * 保存了当前页面的window.location.href值，以便后续比较是否发生了路由变化。
         */

        // 保存当前页面的URL
        let lastHref = window.location.href;


        /**
         * 【handleRouteChange 函数】
         *
         * - `NProgress.start()`：启动进度条。
         * - 使用`setTimeout`延迟完成进度条，模拟加载过程。
         * - 返回一个清理函数，确保在组件卸载或下一次effect运行前清除定时器，并确保进度条已完成。
         */

            // 定义处理路由变化的函数
        const handleRouteChange = () => {
                NProgress.start(); // 开始进度条

                // 设置一个定时器，在100毫秒后完成进度条
                const timer = setTimeout(() => {
                    NProgress.done(); // 完成进度条
                }, 100);

                // 返回一个清理函数，用于在组件卸载或下一次effect运行前清除定时器
                return () => {
                    clearTimeout(timer); // 清除定时器
                    NProgress.done(); // 确保进度条已完成
                };
            };

        /**
         * 【MutationObserver】
         *
         * 创建了一个MutationObserver实例来监听DOM变化，特别是检查href的变化。
         * 当检测到href变化时，更新lastHref并调用handleRouteChange。
         */

            // 创建MutationObserver实例，用于监听DOM变化（包括href的变化）
        const observer = new MutationObserver(() => {
                const currentHref = window.location.href;
                if (currentHref !== lastHref) { // 如果检测到URL变化
                    lastHref = currentHref; // 更新lastHref为当前URL
                    handleRouteChange(); // 触发路由变化处理函数
                }
            });

        /**
         * 【事件监听器】
         *
         * 添加了对popstate事件的监听，用于处理浏览器前进后退按钮引发的路由变化。
         * 在组件挂载时立即调用一次handleRouteChange以初始化进度条显示。
         */

        // 观察整个文档的变化，特别是子节点列表和子树
        observer.observe(document, {
            subtree: true,
            childList: true,
        });

        // 监听popstate事件（处理浏览器前进后退按钮）
        window.addEventListener("popstate", handleRouteChange);

        // 初始加载时触发一次，显示加载进度
        handleRouteChange();

        /**
         * 【清理逻辑】
         *
         * 返回一个清理函数，在组件卸载时断开MutationObserver的连接，并移除popstate事件监听器，防止内存泄漏。
         */

        // 返回一个清理函数，用于移除所有监听器和观察者
        return () => {
            observer.disconnect(); // 断开MutationObserver的连接
            window.removeEventListener("popstate", handleRouteChange); // 移除popstate事件监听器
        };
    }, []); // 空数组作为第二个参数意味着这个effect只会在组件挂载和卸载时执行


    return null
}

export default ProgressBar
