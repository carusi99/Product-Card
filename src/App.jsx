import ShoppingCartApp from "./components/ShoppingCartApp.jsx";

function App() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6">
              <ShoppingCartApp />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
        

export default App;
