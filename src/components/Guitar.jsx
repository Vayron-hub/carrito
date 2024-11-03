export default function Guitar({ guitar, addToCart }) { // Se recibe la guitarra y el estado setCart
    // Se extraen los datos de la guitarra
    const { id, name, description, price, image } = guitar;

    return (

        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    // Se envía el id de la guitarra al hacer click con arrow function para que
                    // no se ejecute inmediatamente

                    // Se agrega la guitarra al carrito 
                    onClick={() => addToCart(guitar)}

                >Agregar al Carrito</button>
            </div>
        </div>

    );
}