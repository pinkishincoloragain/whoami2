import * as THREE from "three";
import { GUI } from "lil-gui";
import { OrbitControls } from "../controls/OrbitControls.js";
import { Water } from "./Water.js";
import { Sky } from "./Sky.js";
import { useEffect, useState } from "react";
import waterNormals from "../textures/waternormals.jpeg";
import { useSelector } from "react-redux";

function Waves(props) {
  const darkMode = useSelector((state) => state.mode.value);
  let container;
  let camera, scene, renderer;
  let water, sun, mesh;

  useEffect(() => {
    init();
    animate();
  }, [props]);

  const [parameters, setParameters] = useState({
    elevation: darkMode === true ? -1 : 10,
    // elevation: 0,
    azimuth: darkMode === true ? 180 : 0,
    // azimuth: 180,
    time: 0.0,
    sunSize: 2.0,
  });
  setParameters({
    elevation: darkMode === true ? -1 : 10,
    azimuth: darkMode === true ? 180 : 0,
    time: 0.0,
    sunSize: 2.0,
  });
  console.log(darkMode);
  console.log(parameters);

  function init() {
    container = document.getElementById("container");
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      1,
      20000
    );
    camera.position.set(0, 30, 100);

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
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
    });

    water.rotation.x = -Math.PI / 2;

    scene.add(water);

    // Skybox

    const sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);

    const skyUniforms = sky.material.uniforms;

    skyUniforms["turbidity"].value = 10;
    skyUniforms["rayleigh"].value = 2;
    skyUniforms["mieCoefficient"].value = 0.005;
    skyUniforms["mieDirectionalG"].value = 0.8;

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    function updateSun() {
      const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
      const theta = THREE.MathUtils.degToRad(parameters.azimuth);
      const size = parameters.sunSize;

      sun.setFromSphericalCoords(size, phi, theta);

      sky.material.uniforms["sunPosition"].value.copy(sun);
      water.material.uniforms["sunDirection"].value.copy(sun).normalize();

      scene.environment = pmremGenerator.fromScene(sky).texture;
    }

    updateSun();

    //

    let geometry = new THREE.BoxGeometry(30, 30, 30);
    const material = new THREE.MeshStandardMaterial({
      roughness: 0.3,
      color: 0xf0f0f0,
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    // geometry = new THREE.BoxGeometry(16, 16, 16);
    // // } else {
    // //   geometry = new THREE.IcosahedronGeometry(6, 16, 16);
    // // }
    // for (let i = 0; i < 10; i++) {
    //   const object = new THREE.Mesh(
    //     geometry,
    //     new THREE.MeshLambertMaterial({
    //       // color: Math.random() * 0xffffff,
    //       color:
    //         colors[rand_color_idx][Math.floor(Math.random() * color_length)],
    //       // map: textures[i % textures.length],
    //     })
    //   );

    //   if (shape_case === 0) {
    //     // if (props.type === "circle") {
    //     object.position.x = Math.sin(i) * 360;
    //     object.position.y = Math.cos(i) * 360;
    //     object.position.z = Math.sin(i) * 360;
    //   } else if (shape_case === 1) {
    //     object.position.x = Math.sin(i) * 360;
    //     object.position.y = Math.cos(i) * 360;
    //     object.position.z = Math.tan(i) * 360;
    //   }
    //   // else if (randNum2 === 2) {
    //   //   object.position.x = i * 400;
    //   //   object.position.y = Math.sin(i) * 400;
    //   //   object.position.z = Math.cos(i) * 400;
    //   // } else if (randNum2 === 3) {
    //   //   object.position.x = Math.sin(i) * 400;
    //   //   object.position.y = Math.cos(i) * 400;
    //   //   object.position.z = Math.tan(i) * 400;
    //   // }
    //   else if (shape_case === 4) {
    //     object.position.x = Math.sin(i) * 400;
    //     object.position.y = Math.cos(i) * 400;
    //     object.position.z = Math.tan(i) * 400;
    //   } else if (shape_case === 5) {
    //     object.position.x = Math.sin(i) * 400;
    //     object.position.y = Math.cos(i) * 400;
    //     object.position.z = Math.sin(i) * 800;
    //   } else {
    //     object.position.x = Math.random() * 500 - 250;
    //     object.position.y = Math.random() * 500 - 250;
    //     object.position.z = Math.random() * 500 - 250;
    //   }

    //   object.rotation.x = Math.random() * 4 * Math.PI;
    //   object.rotation.y = Math.random() * 2 * Math.PI;
    //   object.rotation.z = Math.random() * 2 * Math.PI;

    //   object.scale.x = Math.random() + 6;
    //   object.scale.y = Math.random() + 6;
    //   object.scale.z = Math.random() + 6;

    //   scene.add(object);
    //   // object.cursor = "pointer";
    //   // object.on("click", function (ev) {
    //   //   alert("fish");
    //   // });
    // }

    //

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI * 0.495;
    controls.target.set(30, 40, 0);
    controls.minDistance = 40.0;
    controls.maxDistance = 200.0;
    controls.update();

    // GUI;

    const gui = new GUI();

    const folderSky = gui.addFolder("Sky");
    folderSky.add(parameters, "elevation", -3, 90, 0.1).onChange(updateSun);
    folderSky.add(parameters, "azimuth", -180, 180, 0.1).onChange(updateSun);
    folderSky.add(parameters, "time", 0, 24).onChange(updateSun);
    folderSky.add(parameters, "sunSize", 0.0, 1.0, 0.001).onChange(updateSun);
    folderSky.open();

    const waterUniforms = water.material.uniforms;

    const folderWater = gui.addFolder("Water");
    folderWater
      .add(waterUniforms.size, "value", 0.1, 10, 0.1)
      .name("wave amplitude");
    folderWater.open();

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

  return <div id="container"></div>;
}

export default Waves;
