import './index.css'
import { Progress } from '@chakra-ui/react'

function ProgressBar({progressValue}) {
  return (
    <div>
      <Progress value={progressValue} colorScheme='green' max='100' min='0' size='large'></Progress>
    </div>
  )
};

export default ProgressBar;
