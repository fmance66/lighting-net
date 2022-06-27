import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalProvider'
import { Link } from 'react-router-dom';
import { BsFillCartFill, BsBagCheckFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { formatPriceNumber } from '../../utils/Utils'
// import Formulario from './../formulario/Formulario';

const Cart = () => {

    const { contextCart, contextItemsCart, precioTotalCart, 
                                 removeFromCart, clearCart } = useContext(GlobalContext); 

    const goToCheckout = () => {
        const mensaje = `Se finaliza la compra, redirecciona al checkout...`;
        // console.log(mensaje);
        // alert(mensaje);
      };
    
    const Botones = () => {
        return (
            <div className="botones container d-flex gap-5 my-4 justify-content-center">
                <div className="boton">
                    <Link to={`/checkout`} className="btn btn-success"
                        onClick={() => goToCheckout()}>
                        <BsBagCheckFill />{" "}Finalizar compra
                    </Link>    {/* link al componente Checkout  */}
                </div>
                <div className="boton"> 
                    <button type="button" className="btn btn-danger" 
                        onClick={() => clearCart()}>
                        <BsFillCartFill />{" "}Vaciar el carrito
                    </button>
                </div>
            </div>
        )
    }

    const ListadoCarrito = () => {

        // console.log('window.innerWidth ---> ', window.innerWidth)

        if (window.innerWidth < 720) {
            return (
                <div className='cart'>
                    <div className='listado'>
                        <div className="container-fluid pt-5">
                            <div>
                                {contextCart.map((item, index) => (
                                    <div key={index} className="mb-5" >
                                        <div className="row tituloListado align-items-center fw-bold p-2 border bg-light" >
                                            <div className="col-3 text-center">Código</div>
                                            <div className="col-9 text-center">Descripcion</div>
                                            {/* <div className="col-1 text-start btnEliminar" > 
                                                <button type="button" title="Eliminar del carrito"
                                                        className="btn btn-primary"
                                                        onClick={() => removeFromCart(item.producto.codigo)} 
                                                        style={{padding: "0px 3px 2px 3px",
                                                        textAlign: "center", fontSize: "10px"}} >
                                                        <MdDelete />
                                                </button>
                                            </div> */}
                                        </div>
                                        <div className="row text-secondary align-items-center p-2 border" >
                                            <div className="col-3 text-center">{item.producto.codigo}</div>
                                            <div className="col-9 text-center">{item.producto.descripcion}</div>
                                        </div>
                                        <div className="row tituloListado align-items-center fw-bold p-2 border bg-light" >
                                            <div className="col-3 text-center">Cantidad</div>
                                            <div className="col-4 text-end">Precio Unitario</div>
                                            <div className="col-5 text-end">Total Producto</div>
                                        </div>
                                        <div className="row text-secondary align-items-center p-2 border" >
                                            <div className="col-3 text-center">{item.cantidad}</div>
                                            <div className="col-4 text-end">{formatPriceNumber(item.producto.precio)}</div>
                                            <div className="col-5 text-end">{formatPriceNumber((item.cantidad * item.producto.precio))}</div>
                                        </div>

                                        <div className="align-items-center btnEliminar p-0 mt-2" > 
                                                <div className="row col-12 text-center p-0 m-0" > 
                                                    <button type="button" title="Eliminar del carrito"
                                                            className="btn btn-primary btn-block p-1"
                                                            onClick={() => removeFromCart(item.producto.codigo)} >
                                                            <MdDelete />{" "}Eliminar del carrito
                                                    </button>
                                                </div>


                                        </div>

                                    </div>
                                ))}  
                            </div>
                            <div className="row pieListado fw-bold align-items-center p-2 border bg-light" >
                                <div className="col-8 text-end">
                                    TOTAL COMPRA:
                                </div>
                                <div className="col-4 text-end">
                                    {formatPriceNumber(precioTotalCart())}
                                </div>
                            </div>
                        </div>
                        <div className="botones py-4">
                            <Botones/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='cart'>
                    <div className='listado'>
                        <div className="container-fluid pt-5">
                            <div className="row tituloListado align-items-center fw-bold p-2 border bg-light" >
                                <div className="col-6 col-md-1 text-center">Cantidad</div>
                                <div className="col-6 col-md-1 text-center">Código</div>
                                <div className="col-12 col-md-5 text-start">Descripcion</div>
                                <div className="col-5 col-md-2 text-end">Precio Unitario</div>
                                <div className="col-6 col-md-2 text-end">Total Producto</div>
                            </div>
                            <div>
                                {contextCart.map((item, index) => (
                                    <div key={index} className="row text-secondary align-items-center p-2 border" >
                                        <div className="col-6 col-md-1 text-center">{item.cantidad}</div>
                                        <div className="col-6 col-md-1 text-center">{item.producto.codigo}</div>
                                        <div className="col-12 col-md-5 text-start">{item.producto.descripcion}</div>
                                        <div className="col-5 col-md-2 text-end">{formatPriceNumber(item.producto.precio)}</div>
                                        <div className="col-5 col-md-2 text-end">{formatPriceNumber((item.cantidad * item.producto.precio))}</div>
                                        <div className="col-2 col-md-1 text-center" > 
                                            <div className="btnEliminar">
                                                <button type="button" title="Eliminar del carrito"
                                                    className="btn btn-primary"
                                                    onClick={() => removeFromCart(item.producto.codigo)}
                                                    style={{padding: "0px 4px 3px 4px",
                                                            textAlign: "center", fontSize: "12px"}} >
                                                    <MdDelete />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}  
                            </div>
                            <div className="row pieListado fw-bold align-items-center p-2 border bg-light" >
                                <div className="col-6 col-md-9 text-end">
                                    TOTAL :
                                </div>
                                <div className="col-4 col-md-2 text-end">
                                    {formatPriceNumber(precioTotalCart())}
                                </div>
                            </div>
                        </div>
                        <div className="botones py-4">
                            <Botones/>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    // principal
    return (
        <div className="cart pt-5 px-3" >
            <div className="container-fluid my-5 pt-5 border">
                <div className="itemsCart" style={{ textAlign: "center" }} >
                    {/* <h3 style={{ textAlign: "center" }}> */}
                    <h3>
                        Cantidad total de productos:{` ${contextItemsCart()}`}
                    </h3>
                    { contextItemsCart() > 0 ?
                        <ListadoCarrito/>
                    : 
                        <h3>El carrito está vacio</h3>
                    }
                </div>
            </div>
        </div>
    )
  }
  
export default Cart