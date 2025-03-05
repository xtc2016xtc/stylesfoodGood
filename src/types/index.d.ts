

export interface SlideData {
    id: string;
    url: string;
    image: string;
    alt: string;
    content: (string | { type: 'placeholder' })[];
    timestamp: string | null;
    breadcrumbs: { name: string; url: string }[];
    videoSrc: string;
    buttons: { url: string }[];
}

export interface DeatailDlProps {
    relatedList: {
        alt: string;
        timestamp: string;
        url: string;
        image: string;
    }[];
}

export interface NavItem {
    label: string;
    path: string;
}




export interface cityDate {
    id: string;
    name: string;
    bg: string;
    bgImg: string;
    url: string;
    backgroundImage: string;
    characterImage: string;
    Details:Details[]
}

export interface Details{
        cat: number;
        catName: string;
        catImage: string;
        catUrl: string;
        catIcon: string;
        catNameUrl: string;
        catBigUrl:string;
        cv: {
            cvC: string;
            readonly: string;
        };
        intro: string;
        voice: {
           cn: string[];
           rb: string[];
        }[];
        pageThumb: {
            imageUrl: string;
            name: string;
        }
}


export interface Socials{
    link: string;
    text: string;
    path:string
}
export interface NavbarProps {
    navItems: NavItem[];
}

export interface PosterProps {
    onPlay: () => void;
    AriaECX:() => void;
}
export interface PosterVideoEntryPorops {
    onPlay: () => void;
}

export interface YsDownloadPcPorops {
    AriaECX:() => void;
}

export interface MediaidoProps {
    isVisible: boolean;
    onClose: () => void;
}

export interface ModalOverlayProps{
    AriaPass: boolean;
    onClose: () => void;
}

export interface LinkItem {
    href: string;
    imgSrc: string;
    altText: string;
    hrefs:string,
    imgSrcS:string,
    altTextS:string,
}