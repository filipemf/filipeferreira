import React, {useState} from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../js/loading.json'

const Loading = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <div className='h-[100vh] bg-[#22232A] flex flex-col justify-center content-center text-center'>

        <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={isStopped}
              isPaused={isPaused}/>

    </div>
  )
}

export default Loading