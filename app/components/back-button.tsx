"use client";
import { useRouter } from "next/navigation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

type BackButtonProps = {
  text?: string;
};
const BackButton = ({ text = "go back" }: BackButtonProps = {}) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer flex gap-x-2 text-magenta hover:text-plum"
      onClick={() => router.back()}
    >
      <KeyboardBackspaceIcon />
      {text}
    </div>
  );
};

export default BackButton;
