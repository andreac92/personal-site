"use client";
import { useRouter } from "next/navigation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

type BackButtonProps = {
  text?: string;
  withIcon?: boolean;
};

const BackButton = ({
  text = "go back",
  withIcon = true,
}: BackButtonProps = {}) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer flex gap-x-2 text-magenta hover:text-plum font-medium"
      onClick={() => router.back()}
    >
      {withIcon && <KeyboardBackspaceIcon />}
      {text}
    </div>
  );
};

export default BackButton;
