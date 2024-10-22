import ChiSidebar from "../components/chi-sidebar";

export default function AdoptAChiLayout({ children }) {
  return (
    <section className="flex gap-x-4">
      <div className="w-4/12 max-w-[545px] bg-white/50">
        <ChiSidebar />
      </div>
      <div className="w-8/12 max-w-[1000px] bg-white/50">{children}</div>
    </section>
  );
}
