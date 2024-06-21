import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Loader from "../Loader";

const Computers = ({ isMobile }) => {
// Load the GLTF model
const gltf = useLoader(GLTFLoader, '/desktop_pc/scene.gltf')
 

// Return the mesh
return (

<mesh>
<hemisphereLight intensity={2.5} groundColor='black' />
<pointLight intensity={3} />
<spotLight
position={[-20, 50, 10]}
angle={0.12}
penumbra={1}
intensity={1}
castShadow
shadow-mapSize={1024}
/>


  <primitive
    object={gltf.scene}
    scale={isMobile ? 0.7 : 0.75}
    position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
    rotation={[-0.01, -0.2, -0.1]}
  />

</mesh>
);
};

// Canvas wrapper to render the Computers component

const ComputersCanvas = () => {

const [isMobile, setIsMobile] = useState(false);

useEffect(() => {


// Add a listener for changes to the screen size
const mediaQuery = window.matchMedia("(max-width: 500px)");

// Set the initial value of the `isMobile` state variable
setIsMobile(mediaQuery.matches);

// Define a callback function to handle changes to the media query
const handleMediaQueryChange = (event) => {
  setIsMobile(event.matches);
};

// Add the callback function as a listener for changes to the media query
mediaQuery.addEventListener("change", handleMediaQueryChange);

// Remove the listener when the component is unmounted
return () => {
  mediaQuery.removeEventListener("change", handleMediaQueryChange);
};
}, []);

return (
<Canvas
frameloop='demand'
shadows
dpr={[1, 2]}
camera={{ position: [20, 3, 5], fov: 25 }}
gl={{ preserveDrawingBuffer: true }}
>
<Suspense fallback={<Loader/>}>


    <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
    <Computers isMobile={isMobile}  />
  </Suspense>

  <Preload all />
</Canvas>
);
};

export default ComputersCanvas;
// so agar hum computer canvas me <Suspense fallback={<CanvasLoader/>}> ese likhenge toh div not found wala error hoga toh we need to
// use fallback={<Html center>Loading...</Html>} this one ya fir canvas loader me html element render kardo jesa abh ha
