import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const Loading = () => {
  return (
    <div className="py-8 flex flex-col items-center">
      <div className="text-lg">Loading...</div>
      <HourglassBottomIcon fontSize="large" sx={{ color: "#4A1942" }} />
    </div>
  );
};

export default Loading;
