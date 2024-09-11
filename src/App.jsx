import "./App.css";
import Sidebar from "./components/Banner/Sidebar";
import BestSellingProducts from "./components/BestSellingProducts/BestSellingProducts";
import FlashSales from "./components/FlashSales/FlashSales";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <>
      <MyHeader />
      <Sidebar/>
      <FlashSales/>
      <BestSellingProducts/>
    </>
  );
}

export default App;