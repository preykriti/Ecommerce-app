import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <>
        <Navbar />
        <hr></hr>
        <div className="w-full flex">
          <Sidebar />
        </div>
      </>
    </div>
  );
};

export default App;
