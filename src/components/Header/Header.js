import './Header.css';
import Logo from '../../assets/images/tagwalk-logo.svg';
import { Icon } from '@iconify/react';

function Header() {
  return (
    <header className="Header align-items-center">
        <div className='d-flex'>
            <Icon icon='iconoir-language' className='h4' />
            <p className='px-2'> | </p>
            <span>EN</span>
        </div>
        <div>
            <img src={Logo} alt="tagwalk-logo" className="logo_tagwalk"/>
        </div>
        <div>
            <Icon icon="iconoir:profile-circle" className='h4'/>
        </div>
    </header>
  );
}

export default Header;
