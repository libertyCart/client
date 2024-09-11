import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productItems from "./productItems"; // Import productItems directly

const ProductSlider = () => {
   const settings = {
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows: false,
      pauseOnHover: false,
   };

   return (
      <div className="p-4">
         {productItems && productItems.length > 0 ? (
            <Slider {...settings}>
               {productItems.map((product, index) => (
                  <div key={index} className="p-2">
                     <ProductCard product={product} />
                  </div>
               ))}
            </Slider>
         ) : (
            <div>No products available</div>
         )}
      </div>
   );
};

export default ProductSlider;
