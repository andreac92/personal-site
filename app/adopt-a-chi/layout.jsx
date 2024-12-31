import { Suspense } from "react";
import ChiLayout from "../components/chi-layout";

export default function AdoptAChiLayout({ children }) {
  return (
    <Suspense>
      <ChiLayout>{children}</ChiLayout>
    </Suspense>
  );
}
