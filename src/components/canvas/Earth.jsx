
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import CanvasLoader from '../Loader'
const Earth = () => {
  
<<<<<<< HEAD
=======

>>>>>>> f9aa25eca9269da3c463648b436c1a3ec37be03c
  const gltf = useLoader(GLTFLoader, 'public/planet/scene.gltf')



return (


<primitive
  object={gltf.scene}
  scale={2.5}
  position-y={0}
  rotation-y={0}

/>



)
}
const EarthCanvas =()=>{

return(
<Canvas
shadows
frameloop='demand'
dpr={[1, 2]}
gl={{ preserveDrawingBuffer: true }}
camera={{
fov: 45,
near: 0.1,
far: 200,
position: [-4, 3, 6],
}}
>

<Suspense fallback={<CanvasLoader />}>

  <OrbitControls
    autoRotate
    enableZoom={false}
    maxPolarAngle={Math.PI / 2}
    minPolarAngle={Math.PI / 2}
  />
  <Earth />
</Suspense>
<Preload all />
  </Canvas>
  )
};
export default EarthCanvas;
