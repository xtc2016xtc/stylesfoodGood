import {Link, Link as RouterLink } from 'react-router-dom';
import {LinkItem} from "@/types";

const YsDownloadPc = () => {

    /*
    * 便利
    * */
    const links: LinkItem[] = [
        {
            href: "https://www.baidu.com",
            hrefs:'https://www.baidu.com',
            imgSrcS:'/Header/ios.png',
            altTextS:'ios',
            imgSrc: "/Header/ps4.png",
            altText: "ps4"
        },
        {
            href: "https://www.baidu.com",
            hrefs:'https://www.baidu.com',
            imgSrcS:'/Header/taptap.png',
            altTextS:'Taptap',
            imgSrc: "/Header/az.png",
            altText: "az"
        },
    ];


    return (
        <div className="shrink-0 mb-[20px] h-[125px]">
            <div className="flex justify-between ml-auto mt-0 mr-auto mb-0 w-[622px] h-full items-center">
                {/*t1*/}
                <div className="relative w-[94px] h-[94px]">
                    <img src="/Header/icon.jpg" alt="icon" className="absolute left-[50%] top-[33px] -translate-x-1/2 z-10s w-[30px] h-[30px] rounded-[4px] border-2 border-solid border-[#475e7d]"/>
                    {/*二维码*/}
                    <img src="/Header/eaoo.png" alt="eaoo" className="w-full block"/>
                </div>
                {/*跳转链接*/}
                <Link to="https://www.baidu.com" className="block cursor-pointer shrink-0">
                    <img src="/Header/web-cloud.png" alt="web-clound" className="block w-full h-full object-cover"/>
                    <img src="/Header/web-cloud.png" alt="web-clound" className="hidden w-full h-full object-cover"/>
                </Link>
                {/*中心*/}
                {links.map((link, index) => (
                    <div key={index} className="flex flex-col justify-between items-center h-[95px]">
                        <RouterLink  to={link.href} className="w-[155px] h-[44px] block cursor-pointer shrink-0">
                            <img src={link.imgSrc} alt={link.altText} className="block w-full h-full object-cover"/>
                            <img src={link.imgSrc} alt={link.altText} className="hidden w-full h-full object-cover"/>
                        </RouterLink>
                        <RouterLink to={link.hrefs} className="w-[155px] h-[44px] block cursor-pointer shrink-0">
                            <img src={link.imgSrcS} alt={link.altTextS} className="block w-full h-full object-cover"/>
                            <img src={link.imgSrcS} alt={link.altTextS} className="hidden w-full h-full object-cover"/>
                        </RouterLink>
                    </div>
                ))}
                {/*中心*/}
                {/*<div className="flex flex-col justify-between items-center h-[95px]">*/}
                {/*    <Link to="https://www.baidu.com" className="w-[155px] h-[44px] block cursor-pointer shrink-0">*/}
                {/*        <img src="/Header/ps4.png" alt="ps4" className="block w-full h-full object-cover"/>*/}
                {/*        <img src="/Header/ps4.png" alt="ps4" className="hidden w-full h-full object-cover"/>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*pc本地*/}
                <Link to="https://www.baidu.com" className="block cursor-pointer shrink-0 w-[95px] h-[95px]">
                    <img src="/Header/pc.png" alt="web-clound" className="block w-full h-full object-cover"/>
                    <img src="/Header/pc.png" alt="web-clound" className="hidden w-full h-full object-cover"/>
                </Link>
            </div>
        </div>
    )
}

export default YsDownloadPc