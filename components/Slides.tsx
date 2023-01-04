import React, { useCallback } from 'react';
import ImageWrapper from './ImageWrapper';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Image from 'next/image';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slides = ({ images }: { images: { path: string; title: string }[] }) => {
  const STATIC_CLOUDINARY_IMAGE_URL_SUFFIX =
    'https://res.cloudinary.com/amreshtech/image/private/c_scale,e_anti_removal,f_auto,l_watermark,w_450/f_auto,q_auto:good';
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  const handleStepChange = useCallback((step: number) => {
    setActiveStep(step);
  }, []);

  return (
    <ImageWrapper
      options={{
        thumbnails: { showThumbnails: false }
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          border: '2px solid #6b7280',
          borderRadius: '2px',
          mx: 'auto',
          my: 8
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            backgroundColor: '#000000',
            color: '#ffffff'
          }}
        >
          <Typography>{images[activeStep].title}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.title}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Image
                  style={{
                    overflow: 'hidden',
                    maxHeight: 255,
                    objectFit: 'cover'
                  }}
                  width={400}
                  height={255}
                  src={`${STATIC_CLOUDINARY_IMAGE_URL_SUFFIX}${step.path}`}
                  alt={step.title}
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
          sx={{
            backgroundColor: '#000000',
            '.MuiMobileStepper-dot': { backgroundColor: '#6b7280' },
            '.MuiMobileStepper-dotActive': { backgroundColor: '#90CAF9' }
          }}
        />
      </Box>
    </ImageWrapper>
  );
};

export default Slides;
