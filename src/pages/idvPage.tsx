import { useQuery, gql } from '@apollo/client';
import FullScreenLayout from '../layouts/IdvLayout';
import { mockIdvpageData } from '../lib/mockData';

const ABOUTPAGE_QUERY = gql`
  query GetAboutpageContent {
    aboutpage {
      title
      content
    }
  }
`;

interface AboutPageData {
  title: string;
  content: string;
}

const idvPage: React.FC = () => {
  // const { loading, error, data } = useQuery<IdvPageData>(IdvPage_QUERY);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  //const { title, content } = data.aboutpage;
  const { title, content } = mockIdvpageData.idvPage;

  return (
    <FullScreenLayout>
      <h1>{title}</h1>
      <p>{content}</p>
    </FullScreenLayout>
  );
}

export default idvPage;
