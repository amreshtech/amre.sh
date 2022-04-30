import { preventRightClick } from 'scripts/preventRightClick';
import { SRLWrapper } from 'simple-react-lightbox';
import type { SRLWrapperProps } from 'simple-react-lightbox';

const ImageWrapper = ({ children, options }: SRLWrapperProps) => (
  <SRLWrapper
    options={{
      settings: { disablePanzoom: true, usingPreact: true },
      buttons: {
        showDownloadButton: false
      },
      ...options
    }}
    callbacks={{
      onLightboxOpened: preventRightClick
    }}
  >
    {children}
  </SRLWrapper>
);
export default ImageWrapper;
