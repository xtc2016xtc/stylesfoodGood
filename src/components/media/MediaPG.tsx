const MediaPG = () => {
    return (
        <video id="bg" poster="https://via.placeholder.com/188x88.png?text=Logo"
               loop
               muted
               autoPlay
               className="opacity-100 h-screen w-screen object-cover">
            <source src="https://ys.mihoyo.com/main/_nuxt/videos/bg.3e78e80.mp4" type="video/mp4" />
            " 您的浏览器不支持播放此视频. "
        </video>
    )
}

export default MediaPG