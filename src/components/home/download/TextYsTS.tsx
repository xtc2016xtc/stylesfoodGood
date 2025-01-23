import {Link} from "react-router-dom";

const TextYsTS = () => {
    return (
        <div className="absolute bottom-[20px] left-[20px] text-colorBus text-1 leading-[24px]">
            <p className="text-white">应用名称：xx</p>
            <p className="text-white">开发者名称：xxxxxxxxxxxxx</p>
            <p className="text-white">
                <span>当前版本:  5.3.0  </span>
                <span>更新时间:  2025.1.1</span>
            </p>
            <p>
                <Link to='/' className="mr-[20px] txt">
                    隐私协议
                </Link>
                <Link to="/" className="txt">
                    产品功能以及用户权限
                </Link>
            </p>
        </div>
    )
}

export default TextYsTS