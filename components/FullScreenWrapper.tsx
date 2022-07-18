const FullScreenWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-purple-200 h-screen flex flex-col items-center justify-center">
    {children}
  </div>
);

export default FullScreenWrapper;
