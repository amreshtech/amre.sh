import { useCallback, useState } from 'react';
import timeline from 'timeline.json';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import { CheckCircle, ExpandMore } from '@mui/icons-material';
import Button from '@mui/material/Button';

const reversedTimeline = [...timeline].reverse();
const getTimeline = (start: number, end: number = timeline.length) =>
  reversedTimeline.slice(start, end).map(
    (
      {
        year,
        content
      }: {
        year: string;
        content: {
          title: string;
          description: string;
        }[];
      },
      index
    ) => (
      <div key={year}>
        <Typography variant={'h6'} sx={{ fontWeight: 'bold', mb: 1 }}>
          {year}
        </Typography>
        <List>
          {[...content].reverse().map(({ title, description = '' }) => (
            <ListItem sx={{ alignItems: 'start' }} key={title}>
              <ListItemIcon sx={{ alignItems: 'flex-start' }}>
                <CheckCircle fontSize={'small'} sx={{ color: '#00ff5c' }} />
              </ListItemIcon>
              <ListItemText
                primary={title}
                secondary={description}
                primaryTypographyProps={{
                  color: '#ffffff',
                  gutterBottom: true,
                  lineHeight: 1.4
                }}
                secondaryTypographyProps={{ color: '#ffffff' }}
                sx={{ margin: 0 }}
              />
            </ListItem>
          ))}
        </List>
        {index !== timeline.length - 4 && (
          <Divider
            sx={{
              my: 3,
              borderColor: '#1f2937'
            }}
          />
        )}
      </div>
    )
  );

export default function Timeline() {
  const [isShowingFullTimeline, setIsShowingFullTimeline] = useState(false);
  const handleClick = useCallback(() => setIsShowingFullTimeline(true), []);
  return (
    <>
      <Typography variant={'h4'} sx={{ mt: 4, mb: 3, fontWeight: 'bold' }}>
        Timeline
      </Typography>
      {getTimeline(0, 3)}
      {isShowingFullTimeline ? (
        getTimeline(3)
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Button
            onClick={handleClick}
            endIcon={<ExpandMore />}
            sx={{
              color: '#ffffff',
              textTransform: 'none'
            }}
          >
            See More
          </Button>
        </Box>
      )}
    </>
  );
}
