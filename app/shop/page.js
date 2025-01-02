"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchProducts } from "../api/page";
import { CiShoppingCart } from "react-icons/ci";
import { IoBagCheckOutline, IoTrashOutline } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useRouter } from "next/navigation"; 

export default function Shop() {
  const router = useRouter(); 
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const isSignedIn = typeof window !== "undefined" && !!localStorage.getItem("authToken");
  console.log("isSignedIn:", isSignedIn);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }

    async function loadProducts() {
      const fetchedProducts = await fetchProducts();
      console.log(fetchedProducts);
      setProducts(fetchedProducts);
    }

    loadProducts();
  }, []);

  const addToCart = (product) => {
    const newCart = { ...cart };
    if (newCart[product.id]) {
      newCart[product.id].quantity += 1;
    } else {
      newCart[product.id] = { ...product, quantity: 1 };
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart)); 
    setIsDrawerOpen(true);
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    const newCart = { ...cart };
    if (newQuantity > 0) {
      newCart[productId].quantity = newQuantity;
    } else {
      delete newCart[productId];
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart)); 
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const calculateTotal = () => {
    return Object.values(cart).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    if (!isSignedIn) {
      console.log("Redirecting to register...");
      router.push("/register");
    } else {
      setIsPaymentModalOpen(true);
    }
  };

  const handlePaymentSubmit = (success) => {
    setIsPaymentModalOpen(false); 
    setPaymentStatus(success ? "success" : "failure"); 
  
    if (success) {
      setCart({}); 
      localStorage.removeItem("cart"); 
    }
    localStorage.setItem("order", JSON.stringify(cart));
  };

  const handleClosePaymentStatus = () => {
    setPaymentStatus(null); 
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-col sm:flex-row justify-evenly items-center py-6 px-6 mt-10 gap-4">
        <p className="text-xl font-medium">Best Selling</p>
        <p className="text-md font-light">
          Results: <span className="text-blue-500">{products.length}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-900 p-4 shadow-md rounded-lg flex flex-col justify-between"
          >
            <div>
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-md font-light mt-2">{product.title}</h3>
              <p className="text-sm font-light text-gray-800 dark:text-gray-400 mt-2">
                ${product.price}
              </p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className=" flex flex-row items-center mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 self-end"
            >
              <CiShoppingCart />
              <p className="ml-2">Add to Cart</p>
            </button>
          </div>
        ))}
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-gray-900  dark:text-gray-400 bg-opacity-50 z-50"
          onClick={closeDrawer}
        >
          <div
            className={`fixed right-0 top-0 w-96 h-full bg-white dark:bg-gray-900 shadow-lg z-50 p-4 overflow-y-auto transform transition-all duration-700 ease-in-out ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <div className="mt-4">
              {Object.keys(cart).length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  {Object.values(cart).map((item) => (
                    <div key={item.id} className="flex flex-col py-2 border-b dark:border-b-gray-400">
                      <p className="font-light">{item.title}</p>
                      <div className="relative flex items-center max-w-[8rem] my-4">
                        <button
                          type="button"
                          onClick={() =>
                            updateCartItemQuantity(item.id, item.quantity - 1)
                          }
                          className="hover:bg-gray-200 border rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                        >
                          <AiOutlineMinus />
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={(e) =>
                            updateCartItemQuantity(item.id, parseInt(e.target.value) || 0)
                          }
                          className="bg-white dark:bg-gray-900 border-x-0 border-gray-300 dark:border-gray-400 h-11 text-center text-gray-900 dark:text-gray-400 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            updateCartItemQuantity(item.id, item.quantity + 1)
                          }
                          className="hover:bg-gray-200 border rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 text-lg font-bold text-right">
                    Total: ${calculateTotal().toFixed(2)}
                  </div>
                </>
              )}
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={closeDrawer}
                className="flex flex-row items-center bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-600"
              >
                <IoTrashOutline />
                <p className="ml-1">Cancel</p>
              </button>
              <button
                onClick={handleCheckout}
                className="flex flex-row items-center bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600"
              >
                <IoBagCheckOutline />
                <p className="ml-1">Checkout</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
          <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4 dark:text-gray-400">Payment Information</h3>
            <form>
              <input
                type="text"
                placeholder="Card Number"
                className="border dark:border-gray-500 p-2 mb-4 w-full rounded-lg"
              />
              <input
                type="text"
                placeholder="Expiry Date"
                className="border dark:border-gray-500 p-2 mb-4 w-full rounded-lg"
              />
              <input
                type="text"
                placeholder="CVV"
                className="border dark:border-gray-500 p-2 mb-4 w-full rounded-lg"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                  onClick={() => setIsPaymentModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                  onClick={() => handlePaymentSubmit(true)}
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {paymentStatus && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
          <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4 dark:text-gray-400">
              Payment {paymentStatus === "success" ? "Successful" : "Failed"}
            </h3>
            <p className="text-md mb-4">
              {paymentStatus === "success" ? "Your payment was successful!" : "Please try again."}
            </p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={handleClosePaymentStatus}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
