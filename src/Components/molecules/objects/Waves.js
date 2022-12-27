import * as THREE from "three";
import { OrbitControls } from "./OrbitControls.js";
import { Water } from "./Water.js";
import { Sky } from "./Sky.js";
import { useState, useEffect } from "react";
import waterNormals from "../../../assets/textures/waternormals.jpeg";

function Waves(props) {
  let container;
  let camera, scene, renderer;
  let water, sun, sky;
  let pmremGenerator;

  useEffect(() => {
    if (document.getElementById(props.container)?.childElementCount > 0) {
      return;
    }
    init();
    animate();

    return () => {
      if (container?.hasChildNodes()) {
        container.removeChild(container.childNodes[0]);
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.context = null;
        renderer.domElement = null;
        renderer = null;
      }
    };
  }, []);

  const [parameters, setParameters] = useState({
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
    container = document.getElementById(props.container || "container");

    if (container.hasChildNodes()) {
      container.removeChild(container.childNodes[0]);
    }
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(props.width, props.height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);
    renderer.domElement.style.borderRadius =
      props.borderRadius === undefined ? "100%" : `${props.borderRadius}px`;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(100, props.width / props.height, 1, 5000);
    camera.position.set(-180, 0, -200);

    sun = new THREE.Vector3();

    // Water

    const waterGeometry = new THREE.PlaneGeometry(5000, 5000);

    water = new Water(waterGeometry, {
      textureWidth: 64,
      textureHeight: 64,
      waterNormals: new THREE.TextureLoader().load(waterNormals, function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }),
      sunDirection: new THREE.Vector3(),
      // sunColor: 0xffffff,
      sunColor: 0xde5050,
      // waterColor: 0xde5050,
      waterColor: props.waterColor || 0x001e0f,
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

    skyUniforms["turbidity"].value = props.turbidity || 1;
    skyUniforms["rayleigh"].value = props.rayleigh || 0.2;
    skyUniforms["mieCoefficient"].value = 0.005;
    skyUniforms["mieDirectionalG"].value = 0.9;

    pmremGenerator = new THREE.PMREMGenerator(renderer);

    updateSun();

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", render);
    controls.maxPolarAngle = Math.PI * 0.495;
    controls.target.set(30, 40, 0);
    controls.minDistance = 40.0;
    controls.maxDistance = 400.0;
    controls.update();
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    if(!renderer) return;
    const time = performance.now() * 0.01;
    water.material.uniforms["time"].value += 1.0 / 60.0;

    renderer.render(scene, camera);
  }

  return (
    <div
      id={props.container || "container"}
      style={{ transitionDuration: "0.1s", display: props.display }}
    ></div>
  );
}

export default Waves;
