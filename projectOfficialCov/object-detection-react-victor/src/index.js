import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import useWebcam from './useWebcam'
import useModel from './useModel'
import useBoxRenderer from './useBoxRenderer'


import styles from './styles.module.css'

const MODEL_PATH = process.env.PUBLIC_URL + '/model_web'

const App = () => {
  const videoRef = useRef()
  const canvasRef = useRef()

  const cameraLoaded = useWebcam(videoRef)
  const model = useModel(MODEL_PATH)
  useBoxRenderer(model, videoRef, canvasRef, cameraLoaded)
  
  return (
    <div>
      <h2 style={{textAlign:'center',fontSize:'3em'}}>VICTOR 's PROJECT</h2>  
      <video
        className={styles.fixed}
        autoPlay
        playsInline
        muted
        ref={videoRef}
        width="700"
        height="500"
      />
      <canvas
        className={styles.fixed}
        ref={canvasRef}
        width="700"
        height="500"
      />
      {/* <button onClick={()=>speakTest()} > Click</button>  */}
     
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
