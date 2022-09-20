import * as React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

import { Float } from "@react-three/drei";
function FloatScene() {
	const cube = useRef();

	return (
		<>
			<Canvas>
				<mesh position={[0, -6, 10]} rotation={[Math.PI / -2.1, 0, 0]}>
					<planeBufferGeometry args={[200, 200, 75, 75]} />
					<meshBasicMaterial wireframe color="red" side={THREE.DoubleSide} />
				</mesh>
			</Canvas>
		</>
	);
}

export default FloatScene;
