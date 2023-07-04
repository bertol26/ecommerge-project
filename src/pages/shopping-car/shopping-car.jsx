import './shopping-car.css';
import img from '../../assets/images/products/resident_evil_4_remake_ps5.jpg';
import { Button } from 'primereact/button';
export default function ShoppingCar() {
  return (
    <div className='main-car'>
      <div className='car-wrapper'>
        <div className='col-12'>
          <div className='grid flex-wrap'>
            <div className='col-12 lg:col-8'>
              <div className='col-12'>
                <h1>Bolsa de compra</h1>
              </div>
              <div className='border-1 surface-border border-round m-2 text-center py-5 px-3'>
                <div className='grid car-header'>
                  <div className='col-12 lg:col-5'>Producto</div>
                  <div className='col-12 lg:col-2'>Precio</div>
                  <div className='col-12 lg:col-2'>Cantidad</div>
                  <div className='col-12 lg:col-2'>Total</div>
                  <div className='col-12 lg:col-1'></div>
                </div>
                <div className='grid mt-4 product-detail'>
                  <div className='col-12 lg:col-5 flex align-items-center justify-content-center'>
                    <img className='product-img' src={img} alt="" />
                    Resident evil 4
                  </div>
                  <div className='col-12 lg:col-2 flex align-items-center justify-content-center'>S/. 400</div>
                  <div className='col-12 lg:col-2 flex align-items-center justify-content-center'>2</div>
                  <div className='col-12 lg:col-2 flex align-items-center justify-content-center'>S/. 800</div>
                  <div className='col-12 lg:col-1 flex align-items-center'>
                    <i className='pi pi-times'></i>
                  </div>
                  <hr className='hr-product' />
                </div>
              </div>
            </div>
            <div className='col-12 lg:col-4 price-review-main'>
                 <aside className='border-1 surface-border price-review flex flex-column'>
                    <h1>Resumen</h1>
                    <div className='grid'>
                      <div className='col-12 lg:col-6 font-bold'>
                        Subtotal
                      </div>
                      <div className='col-12 lg:col-6 flex justify-content-center'>
                        S/. 450
                      </div>
                    </div>
                    <div className='grid mt-2'>
                      <div className='col-12 lg:col-6 font-bold'>
                        Total
                      </div>
                      <div className='col-12 lg:col-6 flex justify-content-center'>
                        S/. 450
                      </div>
                    </div>
                    <div className='grid mt-2'>
                        <div className='col-12'>
                        <Button className='btn-buy' label="Comprar" severity="danger"></Button>
                        </div>
                    </div>
                 </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}