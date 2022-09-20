import * as THREE from "three";
import { GUI } from "lil-gui";
import { OrbitControls } from "../controls/OrbitControls.js";
import { Water } from "./Water.js";
import { Sky } from "./Sky.js";
import * as React from "react";

import waterNormals from "../../assets/textures/waternormals.jpeg";
import { useSelector } from "react-redux";
import { WebGLRenderer } from "three";
import { red } from "@mui/material/colors";

function DarkWave(props) {
	let container;
	let camera, scene, renderer;
	let water, sun, sky, mesh;
	let pmremGenerator;

	React.useEffect(() => {
		init();
		animate();
		return () => {
			container.removeChild(renderer.domElement);
		};
	}, []);

	const darkMode = useSelector(state => state.mode.value);
	const [parameters, setParameters] = React.useState({
		// elevation: darkMode === true ? -1 : 10,
		elevation: props.elevation,
		// azimuth: darkMode === true ? 180 : 0,
		azimuth: props.azimuth,
		time: 0.0,
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
		container = document.getElementById("container2");
		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		container.appendChild(renderer.domElement);
		renderer.domElement.style.transitionDuration = "0.2s";

		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			1,
			20000
		);
		camera.position.set(-100, 20, 100);

		//

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
			sunColor: "red",
			// waterColor: 0x001e0f,
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
		skyUniforms["mieDirectionalG"].value = 0.8;

		pmremGenerator = new THREE.PMREMGenerator(renderer);

		updateSun();

		//

		let geometry = new THREE.BoxGeometry(30, 30, 30);
		const material = new THREE.MeshStandardMaterial({
			roughness: 0.3,
			color: 0xf0f0f0,
		});

		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		let controls = new OrbitControls(camera, renderer.domElement);
		controls.maxPolarAngle = Math.PI * 0.495;
		controls.target.set(30, 40, 0);
		controls.minDistance = 40.0;
		controls.maxDistance = 200.0;
		controls.update();

		// GUI;

		// const gui = new GUI();

		// const folderSky = gui.addFolder("Sky");
		// folderSky.add(parameters, "elevation", -3, 90, 0.1).onChange(updateSun);
		// folderSky.add(parameters, "azimuth", -180, 180, 0.1).onChange(updateSun);
		// folderSky.add(parameters, "time", 0, 24).onChange(updateSun);
		// folderSky.add(parameters, "sunSize", 0.0, 1.0, 0.001).onChange(updateSun);
		// folderSky.open();

		// const waterUniforms = water.material.uniforms;

		// const folderWater = gui.addFolder("Water");
		// folderWater
		//   .add(waterUniforms.size, "value", 0.1, 10, 0.1)
		//   .name("wave amplitude");
		// folderWater.open();

		window.addEventListener("resize", onWindowResize);
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function animate() {
		requestAnimationFrame(animate);
		render();
	}

	function render() {
		const time = performance.now() * 0.001;

		mesh.position.y = Math.sin(time) * 20 + 5;
		mesh.rotation.x = time * 0.5;
		mesh.rotation.z = time * 0.51;

		water.material.uniforms["time"].value += 1.0 / 60.0;

		renderer.render(scene, camera);
	}

	return (
		<div
			id="container2"
			style={{ transitionDuration: "0.1s", visibility: "visible" }}
		></div>
	);
}

export default DarkWave;
