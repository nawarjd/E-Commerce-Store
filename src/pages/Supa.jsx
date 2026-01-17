import { useState, useEffect } from "react";
// import supabase from '../../utils/supabase.js'
import supabase from "../utils/supabase.js";
import { HashLoader } from "react-spinners";
import Footer from "../components/Footer.jsx";


function Page() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    let { data, error } = await supabase.from("test").select();
    setLoading(false);

    setProducts(data);
    console.log(data);
    setError(error);
  }

  return (
    <>
      <HashLoader
        loading={loading}
        color="#000"
        cssOverride={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
      ;
      <div>
        <h1 className="text-center text-5xl">Test Supa</h1>
        <div className="flex flex-wrap">
          {products &&
            products.map((product) => (
              <div key={product.id} className="w-3/12 border p-4 m-4">
                <img src={product.image} alt="" />
                <h2 className="text-2xl font-bold">{product.product}</h2>
                <p className="text-lg">{product.price}$</p>
              </div>
            ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
export default Page;
