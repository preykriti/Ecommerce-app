import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const Policy = () => {
  return (
    <div className="sm:flex-row flex flex-col m-7 justify-around">
      <div className="text-center p-10">
        <SwapHorizontalCircleOutlinedIcon
          sx={{ fontSize: "39px", margin: "10px" }}
        />
        <p className="font-bold">Easy Exchange Policy</p>
        <p className="text-sm text-slate-600">
          We offer hassle free exchange policy
        </p>
      </div>

      <div className="text-center p-10">
        <CheckCircleOutlinedIcon sx={{ fontSize: "39px", margin: "10px" }} />
        <p className="font-bold">7 Days Return Policy</p>
        <p className="text-sm text-slate-600">
          We provide 7 days free return policy
        </p>
      </div>

      <div className="text-center p-10">
        <SupportAgentOutlinedIcon sx={{ fontSize: "39px", margin: "10px" }} />
        <p className="font-bold">Best Customer Support</p>
        <p className="text-sm text-slate-600">
          We provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default Policy;
