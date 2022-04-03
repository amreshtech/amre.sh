import { TiArrowRightOutline } from 'react-icons/ti';
import { PopupModal } from 'react-calendly';
import React from 'react';

const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleModalVisibility = () => {
    setIsOpen((s) => !s);
  };
  const pageSettings = {
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '00a2ff',
    textColor: '4d5055',
    hideGdprBanner: true
  };
  return (
    <>
      <button
        onClick={handleModalVisibility}
        className="bg-gradient-to-r from-green-500 to-green-700 rounded-3xl text-5xl text-white px-4 md:py-6 md:px-8 font-bold text-left h-full"
      >
        Let&apos;s Chat
        <div className="flex">
          <div className="w-1/2"></div>
          <TiArrowRightOutline />
        </div>
      </button>
      <PopupModal
        url="https://calendly.com/amreshm/consultation"
        pageSettings={pageSettings}
        rootElement={document.getElementById('root')}
        onModalClose={handleModalVisibility}
        open={isOpen}
      />
    </>
  );
};

export default Chat;
