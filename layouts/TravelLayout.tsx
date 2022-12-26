import RootLayout from '@components/RootLayout';
import ImageWrapper from '@components/ImageWrapper';

interface Props {
  children: React.ReactNode;
}

const TravelLayout: React.FC<Props> = ({ children }) => {
  return (
    <RootLayout
      title="Travel across the world with Amresh"
      description="My memories across the globe"
    >
      <article
        className="max-w-3xl mx-auto mb-16 w-full"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <ImageWrapper>{children}</ImageWrapper>
      </article>
    </RootLayout>
  );
};

export default TravelLayout;
