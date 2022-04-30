import { preventRightClick } from 'scripts/preventRightClick';
import { SRLWrapper } from 'simple-react-lightbox';

const ImageWrapper = ({ children }) => (
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
);
export default ImageWrapper;
