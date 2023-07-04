import { Carousel } from 'primereact/carousel';
import './page-new-products.css';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import ModalDetailProduct from './modal-detail-product/modal-detail-product';
import { Tag } from 'primereact/tag';
export default function PageNewProduct() {
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(false);
    const [detailProduct, setDetailProduct] = useState({}); 
    const [idProduct, setIdProduct] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productList = [
        {
            id: 1,
            title: 'Playstation 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id blanditiis numquam voluptatum debitis culpa et deserunt voluptates aperiam.',
            price: 140.00,
            imgShort: 'https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg',
            alt: 'hola'
        },
        {
            id: 2,
            title: 'Monitor Dell',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id blanditiis numquam voluptatum debitis culpa et deserunt voluptates aperiam.',
            price: 140.00,
            imgShort: 'https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg',
            alt: 'hola'
        },
        {
            id: 3,
            title: 'Resident evil 4 Ps5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id blanditiis numquam voluptatum debitis culpa et deserunt voluptates aperiam.',
            price: 140.00,
            imgShort: 'https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg',
            alt: 'hola'
        },
        {
            id: 4,
            title: 'Teclado Halion',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id blanditiis numquam voluptatum debitis culpa et deserunt voluptates aperiam.',
            price: 140.00,
            imgShort: 'https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg',
            alt: 'hola'
        },
        {
            id: 5,
            title: 'Teclado Halion',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id blanditiis numquam voluptatum debitis culpa et deserunt voluptates aperiam.',
            price: 140.00,
            imgShort: 'https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg',
            alt: 'hola'
        }
    ]

    const handleShowModal = (idProduct) => {
        // Actualiza el estado de showModal a true para mostrar el modal
        setVisible(true);
        // Actualiza el estado de modalData con la información que deseas mostrar en el modal
        setIdProduct(idProduct);

        const detailProduct = productList.find(product => product.id === idProduct);
        setDetailProduct(detailProduct);
      };
    
      const handleHideModal = () => {
        // Actualiza el estado de showModal a false para ocultar el modal
        setVisible(false);
        // Limpia el estado de modalData
        setIdProduct(null);
        setDetailProduct(null);  
      };


    const productTemplate = (product, index) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">

                <div className="mb-3">
                    <img src={product.imgShort} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1 font-title">{product.title}</h4>
                    <Tag value='En stock' severity='success'></Tag>
                    <h6 className="mt-2 mb-3 font-price">${product.price}</h6>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                    <Button onClick={() => handleShowModal(product.id)} label="Comprar" icon="pi pi-cart-plus" severity="danger"/>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="col-12">
            <div className="col-12 flex justify-content-center">
                <h1>Nuevos Productos</h1>
            </div>
            <div className="main-products">
            <Carousel value={productList} numVisible={4} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel"
            autoplayInterval={5000} itemTemplate={productTemplate} contro />  
            </div>
            <Dialog className='modal-detail' visible={visible} onHide={() => setVisible(false)}>
               <ModalDetailProduct 
               id={detailProduct.id} 
               title= {detailProduct.title} 
               description= {detailProduct.description} 
               imgShort={detailProduct.imgShort} 
               price={detailProduct.price}/>
             </Dialog>
        </div>
    )
}