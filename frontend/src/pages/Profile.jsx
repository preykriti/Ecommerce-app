import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Title from "@/components/Title";

const Profile = () => {
  const { token, backendUrl, navigate } = useContext(ShopContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/user/profile", {
        headers: { token },
      });

      if (response.data.success) {
        setUserData(response.data.user);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    getUserData();
  }, [token]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-slate-700 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Title text1="MY" text2="PROFILE" />
          <p className="text-slate-600">Your account information</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
          {/* avatar section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-12 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-indigo-500 text-white mb-4">
              <AccountCircleIcon sx={{ fontSize: 60 }} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">
              {userData?.name}
            </h2>
          </div>

          {/* account information */}
          <div className="px-8 py-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Account Information
            </h3>

            <div className="space-y-6">
                {/* name */}
              <div className="flex flex-col sm:flex-row sm:items-center border-b border-slate-200 pb-4">
                <label className="text-sm font-medium text-slate-600 sm:w-32">
                  Full Name
                </label>
                <p className="text-slate-900 font-medium mt-1 sm:mt-0">
                  {userData?.name}
                </p>
              </div>

              {/* email */}
              <div className="flex flex-col sm:flex-row sm:items-center border-b border-slate-200 pb-4">
                <label className="text-sm font-medium text-slate-600 sm:w-32">
                  Email Address
                </label>
                <p className="text-slate-900 font-medium mt-1 sm:mt-0">
                  {userData?.email}
                </p>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="px-8 py-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("/orders")}
              className="flex-1 bg-indigo-500 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-600 transition"
            >
              View Orders
            </button>
            <button
              onClick={() => navigate("/collection")}
              className="flex-1 bg-white text-slate-900 px-6 py-3 rounded-md font-medium border border-slate-300 hover:bg-slate-50 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;