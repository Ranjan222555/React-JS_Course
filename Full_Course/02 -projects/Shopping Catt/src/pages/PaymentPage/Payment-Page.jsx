import { useNavigate } from "react-router-dom";

function PaymentPage() {
      
    const navigate = useNavigate();
  
  return (
    <div className="text-center font-bold">
      <h1>This is a Payment Page</h1>
      <h2 className="font-bold text-center py-10">Thank You For Shopping</h2>
      <div>
        <button
          onClick={() => navigate("/productlist")}
          className="text-sm px-4 py-3 bg-black text-white font-extrabold"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
