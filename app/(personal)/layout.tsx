const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <section className="w-[800px] mx-auto">{children}</section>;
};

export default Layout;
