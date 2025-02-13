import { Link } from 'react-router-dom';
import {DeatailDlProps} from "@/types";



// 定义 DeatailDl 组件
const DeatailDl = ({ relatedList }:DeatailDlProps) => {
    return (
        <dl className="cate w-[335px] bg-[#f0f0f0] mt-[130px] rounded-[1px] pb-[60px] ml-[25px]">
            <dl className="w-full h-[34px] bg-[rgba(18,18,18,.04)] text-[#333] leading-[34px] text-[16px] font-semibold text-center mt-[31px]">最新资讯</dl>
            {relatedList.map((item, index) => (
                <dd key={index}>
                    <Link to={item.url} className="mt-[4px] flex w-full px-[20px] py-[10px] box-border cursor-pointer hover:bg-[#e3e3e5]">
                        <img src={item.image} alt={item.alt} className="shrink-0 w-[140px] h-[70px] object-cover"/>
                        <div className="ml-[10px]">
                            <p className="min-h-[40px] text-[#393b40] text-[16px] leading-[20px] detail7">{item.alt}</p>
                            <p className="detail7 leading-[20px] text-[14px] text-[#999] mt-[5px]">{new Date(item.timestamp).toLocaleDateString('zh-CN')}</p>
                        </div>
                    </Link>
                </dd>
            ))}
        </dl>
    );
};

export default DeatailDl; // 导出 DeatailDl 组件