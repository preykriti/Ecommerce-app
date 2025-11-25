import axios from "axios";
import { useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

export default function VerifyKhalti() {
  const { backendUrl, navigate } = useContext(ShopContext);

  const urlParams = new URLSearchParams(window.location.search);
  const pidx = urlParams.get("pidx");

  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/verifykhalti",
        { pidx }
      );

      if (response.data.success) {
        toast.success(response.data.message || "Payment verified successfully");
        navigate("/orders");
      } else {
        navigate("/cart");
        toast.error(response.data.message || "Payment verification failed");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return <p>Verifying payment...</p>;
}
