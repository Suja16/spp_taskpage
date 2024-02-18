import React from 'react';
import Chip from '@mui/material/Chip';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

interface TaskTagsProps {
  tags: string[];
}

export const TaskTags: React.FC<TaskTagsProps> = ({ tags = [] }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverToggle = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const open = Boolean(anchorEl);
  const tagsArray = Array.isArray(tags) ? tags : [];

  const tagsToShow = tagsArray.slice(0, 2);
  const remainingTagsCount = tagsArray.length - 2;

  React.useEffect(() => {
    console.log('Popover open state:', open);
    console.log('Anchor element:', anchorEl);
  }, [open, anchorEl]);

  return (
    <Box>
      {tagsToShow.map((tag, index) => (
        <Chip
          key={index}
          label={tag}
          sx={{
            borderRadius: '3px',
            marginLeft: '6px',
          }}
        />
      ))}
      {remainingTagsCount > 0 && (
        <>
          <Chip
            label={`+${remainingTagsCount}`}
            sx={{
              borderRadius: '3px',
              marginLeft: '6px',
            }}
            onClick={handlePopoverToggle}
          />
          <Popover
            id="tags-popover"
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverToggle}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            autoFocus
          >
            <Typography sx={{ p: 1 }}>
              {tagsArray.slice(2).map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  sx={{
                    borderRadius: '3px',
                    marginLeft: '6px',
                  }}
                />
              ))}
            </Typography>
          </Popover>
        </>
      )}
    </Box>
  );
};