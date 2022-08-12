import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(0);
    const [msg, setMsg] = React.useState("Unlocking Code...")

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 93 ? 95 : prevProgress + 3));
     
     
        
    }, 800);
    
    if(progress>=100)
        clearInterval(timer);
    return () => {
      clearInterval(timer);
      
    };
  }, [progress]);

  return (
<>
<Box sx={{display: "flex", flexDirection: "column", overflow: "hidden", alignContent: "center", justifyContent: "center", alignItems: "center"}}> 
<CircularProgressWithLabel size={120} sx={{my:2}} value={progress} />
<Typography variant="h5" className="animate-bounce" component="body2" sx={{fontWeight: "bold"}}>
    {msg}
</Typography>
            
            </Box>

</>

  )
}
