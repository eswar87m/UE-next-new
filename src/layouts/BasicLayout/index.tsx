import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface BasicLayoutProps {
  headerTitle: string;
  footerCopyright: string;
  children: React.ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children, headerTitle, footerCopyright }) => {
  return (
    <div>
      <Header title={headerTitle} />
      <main>{children}</main>
      <Footer copyright={footerCopyright} />
    </div>
  );
}

export default BasicLayout;
