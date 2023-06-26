import { useQuery, gql } from '@apollo/client';
import BasicLayout from '../layouts/BasicLayout';
import { mockHomepageData } from '../lib/mockData';

const HOMEPAGE_QUERY = gql`
  query GetHomepageContent {
    homepage {
      headerTitle
      footerCopyright
    }
  }
`;

interface HomepageData {
  headerTitle: string;
  footerCopyright: string;
}

const HomePage: React.FC = () => {
//   const { loading, error, data } = useQuery<HomepageData>(HOMEPAGE_QUERY);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :</p>;

  //const { headerTitle, footerCopyright } = data.homepage;
  const { headerTitle, footerCopyright } = mockHomepageData.homepage;

  return (
    <BasicLayout headerTitle={headerTitle} footerCopyright={footerCopyright}>
      <p>Welcome to our homepage!</p>
    </BasicLayout>
  );
}

export default HomePage;
