import axios from "axios";
import { useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

export default function VerifyKhalti() {
  const { backendUrl, token, navigate } = useContext(ShopContext);

  const urlParams = new URLSearchParams(window.location.search);
  const pidx = urlParams.get("pidx");

  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/verifykhalti",
        { pidx },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Payment successful!");
        navigate("/orders");
      } else {
        toast.error("Payment failed!");
      }
    } catch (error) {
      toast.error("Verification error");
    }
  };

  return <p>Verifying payment...</p>;
}
