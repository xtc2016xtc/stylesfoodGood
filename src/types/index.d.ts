

export interface NavItem {
    label: string;
    path: string;
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