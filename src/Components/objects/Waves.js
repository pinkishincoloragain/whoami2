import * as THREE from "three";
import { OrbitControls } from "../controls/OrbitControls.js";
import { Water } from "./Water.js";
import { Sky } from "./Sky.js";
import * as React from "react";
import waterNormals from "../../assets/textures/waternormals.jpeg";
// import { useSelector } from "react-redux";

function Waves(props) {
	let container;
	let camera, scene, renderer;
	let water, sun, sky, mesh;
	let pmremGenerator;

	React.useEffect(() => {
		init();
		animate();
	});

	// const darkMode = useSelector(state => state.mode.value);
	const [parameters, setParameters] = React.useState({
		// elevation: darkMode === true ? -1 : 10,
		elevation: props.elevation,
		// azimuth: darkMode === true ? 180 : 0,
		azimuth: props.azimuth,
		time: 10.0,
		sunSize: 10.0,
	});

	function updateSun() {
		const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
		const theta = THREE.MathUtils.degToRad(parameters.azimuth);
		const size = parameters.sunSize;

		sun.setFromSphericalCoords(size, phi, theta);

		sky.material.uniforms["sunPosition"].value.copy(sun);
		water.material.uniforms["sunDirection"].value.copy(sun).normalize();

		scene.environment = pmremGenerator.fromScene(sky).texture;
	}

	function init() {
		container = document.getElementById("container");

		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(props.width, props.height);
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		if (container.hasChildNodes()) {
			container.removeChild(container.childNodes[0]);
		}
		container.appendChild(renderer.domElement);
		renderer.domElement.style.borderRadius = "10px";

		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(
			100,
			props.width / props.height,
			1,
			10000
		);
		camera.position.set(100, 0, -200);

		sun = new THREE.Vector3();

		// Water

		const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

		water = new Water(waterGeometry, {
			textureWidth: 512,
			textureHeight: 512,
			waterNormals: new THREE.TextureLoader().load(
				waterNormals,
				function (texture) {
					texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
				}
			),
			sunDirection: new THREE.Vector3(),
			// sunColor: 0xffffff,
			sunColor: 0xde5050,
			// waterColor: 0xde5050,
			waterColor: 0x001e0f,
			distortionScale: 3,
			fog: scene.fog !== undefined,
		});

		water.rotation.x = -Math.PI / 2;

		scene.add(water);

		// Skybox

		sky = new Sky();
		sky.scale.setScalar(10000);
		scene.add(sky);
		const skyUniforms = sky.material.uniforms;

		skyUniforms["turbidity"].value = 10;
		skyUniforms["rayleigh"].value = 0.2;
		skyUniforms["mieCoefficient"].value = 0.005;
		// skyUniforms["mieDirectionalG"].value = 8;

		pmremGenerator = new THREE.PMREMGenerator(renderer);

		updateSun();

		//

		let geometry = new THREE.BoxGeometry(30, 30, 30);
		const material = new THREE.MeshStandardMaterial({
			roughness: 0.3,
			color: 0xf0f0f0,
		});

		// mesh = new THREE.Mesh(geometry, material);
		// scene.add(mesh);

		let controls = new OrbitControls(camera, renderer.domElement);
		controls.maxPolarAngle = Math.PI * 0.495;
		controls.target.set(30, 40, 0);
		controls.minDistance = 40.0;
		controls.maxDistance = 200.0;
		controls.update();
	}

	function animate() {
		requestAnimationFrame(animate);
		render();
	}

	function render() {
		const time = performance.now() * 0.001;

		// mesh.position.y = Math.sin(time) * 20 + 5;
		// mesh.rotation.x = time * 0.5;
		// mesh.rotation.z = time * 0.51;

		water.material.uniforms["time"].value += 1.0 / 60.0;

		renderer.render(scene, camera);
	}

	return (
		<div
			id="container"
			style={{ transitionDuration: "0.1s", visibility: "visible" }}
		></div>
	);
}

export default Waves;
