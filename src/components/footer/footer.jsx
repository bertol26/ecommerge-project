import './footer.css';
export function Footer() {
    return (
        <footer>
            <div className='main-footer'>
            <div className='col-12'>
                <div className='grid'>
                    <div className='col-12 lg:col-4 flex flex-column align-items-center'>
                        <span><i className='pi pi-whatsapp'></i></span>
                        <span>Ventas por Whatsap</span>
                        <span>958784545</span>
                    </div>
                    <div className='col-12 lg:col-4 flex flex-column align-items-center'>
                        <span><i className='pi pi-envelope'></i></span>
                        <span>Ventas Online</span>
                        <span>demo@gmail.com</span>   
                    </div>
                    <div className='col-12 lg:col-4 flex flex-column align-items-center'>
                        <span><i className='pi pi-map-marker'></i></span>
                       <span>Nuestra Tienda</span> 
                       <span>Av Las Gardenias</span>
                    </div>
                </div>
            </div>
            <div className='col-12 flex justify-content-center mt-5'>
                <span>Lorem ipsum doloro quis quod facilis, optio explicabo ipsam labore pariatur assumenda possimus commodi impedit?</span>
            </div>
            </div>
        </footer>
    )
}