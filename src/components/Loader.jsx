import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    import('react-lottie').then((Lottie) => {
      import('../js/loading.json').then((data) => {
        const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: data.default,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          }
        };
        setAnimationData(<Lottie.default options={defaultOptions} height={400} width={400} isStopped={isStopped} isPaused={isPaused} />);
      });
    });
  }, [isStopped, isPaused]);

  return (
    <div className='h-[100vh] bg-[#22232A] flex flex-col justify-center content-center text-center'>
      {animationData}
    </div>
  );
};

export default Loading;
