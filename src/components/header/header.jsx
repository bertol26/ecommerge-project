import './header.css';
import logo from '../../assets/images/logo.svg';
import CarouselMain from './carousel/carousel';
import { Link, Navigate, useNavigate,useLocation  } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
export default function Header() {
    const navigate = useNavigate();
    const [ showBanner, setShowBanner ] = useState(true);
    const location = useLocation();
    const hideBannerOnCart = ['/car'];

    const shouldShowBanner = !hideBannerOnCart.includes(location.pathname);

    const handleClick = () => {
        navigate('/car');
    }

    useEffect(() => {
      setShowBanner(shouldShowBanner);
    }, [shouldShowBanner])

    return (
        <header>
            <nav className='nav-container'>
                <div className='nav-img'>
                    <img src={logo} />
                </div>
                <ul className='nav-ul'>
                    <li>
                        <div className='filter-div'>
                            <input type="text" placeholder='Buscador' />
                        </div>
                    </li>
                    <li>
                        <div className='item-menu'>
                            <div className='item-icon'>
                                <i className='pi pi-cart-plus icon-menu'></i>
                            </div>
                            <div className=''>
                            <Link to='/car'>Carrito</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='item-menu'>
                            <div className='item-icon'>
                                <i className='pi pi-user icon-menu'></i>
                            </div>
                            <div className=''>
                              Login
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <section className='section-main'>
                <ul className='section-ul'>
                    <li>
                        <a className='section-ul-item'>
                            <i className='flex align-items-center pi pi-list mr-2'></i>
                            Categorias
                        </a>
                        <ul class="submenu">
                            <li><a href="#"><i class="fas fa-tshirt"></i> Ropa</a></li>
                            <li><a href="#"><i class="fas fa-mobile-alt"></i> Electrónica</a></li>
                            <li><a href="#"><i class="fas fa-home"></i> Hogar</a></li>
                            <li><a href="#"><i class="fas fa-home"></i> Hogar</a></li>
                            <li><a href="#"><i class="fas fa-home"></i> Hogar</a></li>
                            <li><a href="#"><i class="fas fa-home"></i> Hogar</a></li>
                            <li><a href="#"><i class="fas fa-home"></i> Hogar</a></li>
                            <li><a href="#"><i class="fas fa-home"></i> Hogar</a></li>
                            <li><a href="#"><i class="fas fa-home"></i> Hogar</a></li>
                            <li><a href="#"><i class="fas fa-home"></i> Hogar</a></li>
                            <li><a href="#"><i class="fas fa-home"></i> Hogar</a></li>
                        </ul>
                    </li>
                    <li>
                    <a className='section-ul-item'>
                            <i className='flex align-items-center pi pi-user mr-2'></i>
                            Cpus
                        </a>
                        <ul class="submenu">
                            <li><a href="#"><i class="fas fa-tshirt"></i> Ropa</a></li>
                            <li><a href="#"><i class="fas fa-mobile-alt"></i> Electrónica</a></li>
                            <li><a href="#"><i class="fas fa-home"></i> Hogar</a></li>
                            <li><a href="#"><i class="fas fa-home"></i> Hogar</a></li>
                        </ul>
                    </li>
                    <li>Teclados</li>
                    <li>Monitores</li>
                    <li>Videojuegos</li>
                    <li>Programas</li>
                </ul>
            </section>

      
         {showBanner ? <CarouselMain/> : null}
        </header>
    )
}