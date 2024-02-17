import React from 'react';
import Chip from '@mui/material/Chip';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

interface TaskTagsProps {
  tags: string[];
}

export const TaskTags: React.FC<TaskTagsProps> = ({ tags = [] }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const tagsArray = Array.isArray(tags) ? tags : [];

  const tagsToShow = tagsArray.slice(0,  2);
  const remainingTagsCount = tagsArray.length -  2;

  return (
    <div>
      {tagsToShow.map((tag) => (
  <Chip
    key={tag} 
    label={tag}
    sx={{
      borderRadius: '3px',
      marginLeft: '6px',
    }}
  />
))}
      {remainingTagsCount >  0 && (
        <>
          <Chip
            label={`+${remainingTagsCount}`}
            sx={{
              borderRadius: '3px',
              marginLeft: '6px',
            }}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
          <Popover
            id="tags-popover"
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Typography sx={{ p:  1 }}>
              {tags.slice(2).map((tag, index) => (
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
    </div>
  );
};