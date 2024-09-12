import "./App.css";
import Sidebar from "./components/Banner/Sidebar";
import BestSellingProducts from "./components/BestSellingProducts/BestSellingProducts";
import BrowseByCategory from "./components/BrowseByCategory/BrowseByCategory";
import ExploreOurProduct from "./components/ExploreOurProduct/ExploreOurProduct";
import FlashSales from "./components/FlashSales/FlashSales";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <>
      <MyHeader />
      <Sidebar/>
      <FlashSales/>
      <BrowseByCategory/>
      <BestSellingProducts/>
      <ExploreOurProduct/>
    </>
  );
}

export default App;