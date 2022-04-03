import { TiArrowRightOutline } from 'react-icons/ti';
import { openPopupWidget } from 'react-calendly';

const Chat: React.FC = () => {
  const handleClick = () =>
    openPopupWidget({
      url: 'https://calendly.com/amreshm/consultation',
      pageSettings: {
        backgroundColor: 'ffffff',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: '00a2ff',
        textColor: '4d5055',
        hideGdprBanner: true
      }
    });
  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-r from-green-500 to-green-700 rounded-3xl text-5xl text-white px-4 md:py-6 md:px-8 font-bold text-left h-full"
    >
      Let&apos;s Chat
      <div className="flex">
        <div className="w-1/2"></div>
        <TiArrowRightOutline />
      </div>
    </button>
  );
};

export default Chat;
