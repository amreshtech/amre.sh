import { PopupButton } from 'react-calendly';

interface Props {
  text: string;
}

const ConsultationCard: React.FC<Props> = ({ text }) => (
  <div className="text-black dark:text-white z-10">
    {text}{' '}
    <PopupButton
      text={`Let's chat`}
      url="https://calendly.com/amreshm/consultation"
      pageSettings={{
        backgroundColor: 'ffffff',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: '00a2ff',
        textColor: '4d5055',
        hideGdprBanner: true
      }}
      className="bg-gradient-to-tl from-rose-700 via-rose-600 to-rose-600 p-1 px-3 font-bold rounded-full"
    />
  </div>
);

export default ConsultationCard;
