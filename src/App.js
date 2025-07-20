import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import OrderView from "./components/OrderView";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/order" element={<OrderView/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;