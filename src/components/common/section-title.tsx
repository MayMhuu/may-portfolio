const SectionTitle = ({ children }: Readonly<{ children: string }>) => {
  return (
    <p className="text-center mx-auto text-xl font-bold">
      {children}
    </p>
  );
};

export default SectionTitle;
