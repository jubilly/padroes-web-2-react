import { Icons, Logo, Menu } from '../index';

import './styles.css';

export default function Header() {
    return (
        <header className="header">
            <Logo />
            <Menu />
            <Icons />
        </header>
    );
}
