"use client";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  text?: string;
};
const BackButton = ({ text = "go back" }: BackButtonProps = {}) => {
  const router = useRouter();
  return (
    <div className="cursor-pointer" onClick={() => router.back()}>
      {text}
    </div>
  );
};

export default BackButton;
