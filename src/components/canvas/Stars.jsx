import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

{/* 
1. Stars Component:
Setup:

const ref = useRef();: Creates a reference to access the Points component later.
const [sphere] = useState(() => random.inSphere(new Float32Array(5000), {
  radius: 1.2
}));: Generates 5000 random points within a sphere of radius 1.2 and stores them in a state variable called sphere.


Animation:

useFrame((state, delta) => {...});: Updates the rotation of the points every frame. delta is the time since the last frame. This creates a slow, continuous rotation for the stars.

Rendering:

Returns a group of points (Points component) with specific properties and attaches the PointMaterial to them.

<group rotation={[0, 0, Math.PI / 4]}>
  <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
    <PointMaterial
      transparent
      color='#f272c8'
      size={0.002}
      sizeAttenuation={true}
      depthWrite={false}
    />
  </Points>
</group>
<group>: Rotates the entire group of stars initially by 45 degrees around the z-axis.
<Points>: Renders points based on the sphere positions. The stride of 3 indicates each point is defined by 3 coordinates (x, y, z).
<PointMaterial>: Defines the appearance of each point: pink color, small size, and transparency.

StarsCanvas Component:
Rendering Context:
return (
  <div className='w-full h-auto absolute inset-0 z-[-1]'>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>

      <Preload all />
    </Canvas>
  </div>
);
<div>: The canvas covers the full screen and is positioned behind other content (z-[-1]).
<Canvas>: Sets up a 3D rendering space with the camera slightly in front at [0, 0, 1].
<Suspense>: Ensures the Stars component is ready before rendering.
<Preload>: Preloads all assets for smooth rendering.
Summary:
Stars: Creates and animates a rotating star field.
StarsCanvas: Sets up a full-screen 3D canvas to display the star field as a background.
Together, they create a visually appealing and dynamic starry background for a web application.
*/}
