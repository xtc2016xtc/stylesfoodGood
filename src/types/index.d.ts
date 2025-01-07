export interface NavItem {
    label: string;
    path: string;
}

export interface NavbarProps {
    navItems: NavItem[];
}

export interface PosterProps {
    onPlay: () => void;
}

export interface MediaidoProps {
    isVisible: boolean;
    onClose: () => void;
}

export interface HomeProps {
    onPlay: () => void;
}