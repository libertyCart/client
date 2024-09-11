import "./App.css";
import Sidebar from "./components/Banner/Sidebar";
import FlashSales from "./components/FlashSales/FlashSales";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <>
      <MyHeader />
      <Sidebar/>
      <FlashSales/>
    </>
  );
}

export default App;