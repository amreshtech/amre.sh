import Container from '@components/Container';
import { SRLWrapper } from 'simple-react-lightbox';

interface Props {
  children: React.ReactNode;
}

const TravelLayout: React.FC<Props> = ({ children }) => {
  const preventRightClick = () => {
    const img = document.getElementById('SRLLightbox');
    img.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  };
  return (
    <Container
      title="Travel – Amresh"
      description="My memories across the globe"
    >
      <article
        className="max-w-3xl mx-auto mb-16 w-full"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <SRLWrapper
          options={{
            settings: { disablePanzoom: true },
            buttons: {
              showDownloadButton: false
            }
          }}
          callbacks={{
            onLightboxOpened: preventRightClick
          }}
        >
          {children}
        </SRLWrapper>
      </article>
    </Container>
  );
};

export default TravelLayout;
