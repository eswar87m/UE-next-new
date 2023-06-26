interface FullScreenLayoutProps {
    children: React.ReactNode;
  }
  
  const FullScreenLayout: React.FC<FullScreenLayoutProps> = ({ children }) => {
    return (
      <div>
        <main>{children}</main>
      </div>
    );
  }
  
  export default FullScreenLayout;
  