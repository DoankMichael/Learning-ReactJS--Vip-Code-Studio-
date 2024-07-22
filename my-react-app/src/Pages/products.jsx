import CardProduct from "../components/Fragments/CardProduct";

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

const ProductsPage = () => {
  return (
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
  );
};
export default ProductsPage;
