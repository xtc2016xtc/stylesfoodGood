export interface NavItem {
    label: string;
    path: string;
}

export interface NavbarProps {
    navItems: NavItem[];
}