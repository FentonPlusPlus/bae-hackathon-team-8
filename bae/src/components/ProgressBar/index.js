import './index.css'
import { Progress } from '@chakra-ui/react'

function ProgressBar({progressValue, points}) {
  let pointsNumber = parseInt(points)
  return (
    <div>
      <Progress value={pointsNumber} height='30px' colorScheme='green' max='100' min='0' size='large'></Progress>
    </div>
  )
};

export default ProgressBar;
