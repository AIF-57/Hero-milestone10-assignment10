import useCart from '../../../hooks/useCart';
import { addToDB, removeFromDB } from '../../../hooks/useCartDB';
import useServices from '../../../hooks/useServices';
import Cart from '../Cart/Cart';
import Service from './Service';


const Services = () => {
    const {services} = useServices();

    const {cartItems,setCartItems} = useCart(services);
    const addToCart = service => {
        let newCartItems=[];
        const matchService = cartItems.find(cartItem => cartItem.id === service.id);
        if (matchService) {
            alert('service already added into cart')
        }else{
             newCartItems = [...cartItems,service];
             setCartItems(newCartItems);
        };
        addToDB(service.id);
    };

    const removeItemFromCart = item =>{
        let restItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(restItems);
        removeFromDB(item.id);
    };


    return (
        <div className='py-10'>
            <div className="serviceTitle pb-10">
                <p className='inline-block text-2xl font-bold text-[#2f4d5a]  after:block after:bg-[#ffb03b] after:h-1 after:w-[90%] after:mx-auto after:my-3'>OUR<span className='text-[#ffb03b] relative after:w-4 after:h-4 after:bg-[#2f4d5a] after:block after:absolute after:left-[22%] after:top-[120%] after:rounded-full'> SERVICES</span></p>
            </div>
            <div className="servicesCartContainer grid grid-cols-4">
            <div className="serviceCardContainer grid grid-cols-2 col-span-3 gap-5 px-10">
            {
                services.map(service => <Service 
                    service={service}
                    addToCart={addToCart}
                    removeItemFromCart={removeItemFromCart}
                    key={service.id}></Service>)
            }
            </div>
            <div className="cartContainer max-h-[450px] overflow-y-scroll bg-[#2f4d5a] px-4 text-white py-5 rounded-l-md">
                <Cart 
                cartItems={cartItems}
                removeItemFromCart={removeItemFromCart}
                ></Cart>
            </div>
            </div>
        </div>
    );
};

export default Services;