import { useState } from "react";
import './modal-detail-product.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Rating } from 'primereact/rating';
export default function ModalDetailProduct(props) {
    const { id, title, description, price, imgShort } = props;
    const [ quantity, setQuantity ] = useState(1);

    const handleQuantityIncrement = () => {
         setQuantity(quantity + 1);
    }; 

    const handleQuantityDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
   }; 

   const enviar = () => {
     console.log('entroooo');
   };

    return (
        <div className="col-12">
            <div className="grid">
                <div className="col-12 lg:col-5">
                    <img className="img-product" src={imgShort} alt="" />
                </div>
                <div className="col-12 lg:col-7">
                    <div className="col-12 flex justify-content-center flex-column">
                        <Rating value={5} readOnly cancel={false} />
                        <h1 className="text-title">{title}</h1>
                        <h2 className="m-0">{price}</h2>
                    </div>
                    <div className="col-12">
                        <p>{description}</p>
                    </div>
                    <div className="col-12 flex justify-content-center gap-4">
                        <div className="p-inputgroup w-4">
                            <Button onClick={handleQuantityDecrease} icon="pi pi-minus" className="p-button-danger" />
                            <InputText className="text-center" value={quantity}/>
                            <Button onClick={handleQuantityIncrement} icon="pi pi-plus" className="p-button-danger" />
                        </div>
                        <Button onClick={enviar} icon="pi pi-cart-plus" label="Comprar" severity="danger"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}