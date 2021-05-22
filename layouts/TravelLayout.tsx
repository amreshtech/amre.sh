import Container from '@components/Container';
import { SRLWrapper } from 'simple-react-lightbox';

interface Props {
  children: React.ReactNode;
}

const TravelLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container
      title="Travel – Amresh"
      description="My memories across the globe"
    >
      <article className="max-w-3xl mx-auto mb-16 w-full">
        <SRLWrapper
          options={{
            settings: { disablePanzoom: true },
            buttons: {
              showDownloadButton: false
            }
          }}
        >
          {children}
        </SRLWrapper>
      </article>
    </Container>
  );
};

export default TravelLayout;
