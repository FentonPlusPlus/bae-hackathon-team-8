import './index.css'
import { Progress } from '@chakra-ui/react'

function ProgressBar({points}) {
  let pointsNumber = parseInt(points)
  
  return (
    <div>
      <Progress value={pointsNumber} colorScheme='green' max='100' min='0' size='large' height='50px'></Progress>
    </div>
  )
};

export default ProgressBar;
