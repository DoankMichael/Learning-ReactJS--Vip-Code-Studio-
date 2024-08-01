import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusamus debitis vitae ratione consectetur labore!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 500.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Keren",
    price: "Rp 2.000.000",
    image: "/images/shoes-1.jpg",
    description: `Ini adalah sepatu dari merk Keren`,
  },
];

const email = localStorage.getItem("email");
const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};

const ProductsPage = () => {
  return (
    <Fragment>
      <div className="flex justify-end h-15 bg-blue-600 text-white items-center px-10">
        {" "}
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex justify-center py-5">
        {products.map((products) => (
          // eslint-disable-next-line react/jsx-key
          <CardProduct key={products.id}>
            <CardProduct.Header image={products.image} />
            <CardProduct.Body name={products.name}>{products.description}</CardProduct.Body>
            <CardProduct.Footer price={products.price} />
          </CardProduct>
        ))}
      </div>
      <div className="flex w-100 justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};
export default ProductsPage;
