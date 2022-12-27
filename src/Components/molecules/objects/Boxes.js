import { useEffect } from "react";
import * as THREE from "three";

function Boxes(props) {
  let container;
  let camera, scene, renderer;
  let theta = 0;
  let theta_speed = Math.random() * 0.4 + 0.2;
  const pointer = new THREE.Vector2();
  const radius = 500;
  const frustumSize = 1000;

  useEffect(() => {
    init();
    animate();
  });

  function init() {
    container = document.getElementById(props.container);

    const aspect = props.width / props.height;
    camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      2000
    );

    scene = new THREE.Scene();
    scene.background = null;

    const colors = [
      [
        // Phantone
        "#F5DF4D",
        "#939597",
        "#0F4C81",
        "#FF6F61",
        "#5F4B8B",
        "#88B04B",
        "#F7CACA",
        "#93A9D1",
        "#964F4C",
        "#AD5E99",
        "#009473",
        "#DD4124",
        "#D94F70",
        "#45B5AA",
        "#F0C05A",
        "#5A5B9F",
        "#9B1B30",
        "#DECDBE",
        "#53B0AE",
        "#E2583E",
        "#7BC4C4",
        "#BF1932",
        "#C74375",
        "#9BB7D4",
      ],
      ["#939597", "#0F4C81", "#FF6F61", "#5F4B8B"],
      ["#161853", "#292C6D", "#FAEDF0", "#EC255A"],
      ["#7900FF", "#548CFF", "#93FFD8", "#CFFFDC"],
    ];

    let light;
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    let geometry;
    let rand_color_idx = Math.floor(Math.random() * colors.length);
    let shape_case = Math.floor(Math.random() * 7);
    let color_length = colors[rand_color_idx].length;

    if (shape_case < 3) {
      geometry = new THREE.IcosahedronGeometry(6, 16, 16);
    } else {
      geometry = new THREE.BoxGeometry(16, 16, 16);
    }
    for (let i = 0; i < 200; i++) {
      const object = new THREE.Mesh(
        geometry,
        new THREE.MeshLambertMaterial({
          // color: Math.random() * 0xffffff,
          color: colors[rand_color_idx][Math.floor(Math.random() * color_length)],
        })
      );

      if (shape_case === 0) {
        // if (props.type === "circle") {
        object.position.x = Math.sin(i) * 360;
        object.position.y = Math.cos(i) * 360;
        object.position.z = Math.sin(i) * 360;
      } else if (shape_case === 1) {
        object.position.x = Math.sin(i) * 360;
        object.position.y = Math.cos(i) * 360;
        object.position.z = Math.tan(i) * 360;
      }
      // else if (shape_case === 2) {
      //   object.position.x = i * 400;
      //   object.position.y = Math.sin(i) * 400;
      //   object.position.z = Math.cos(i) * 400;
      // } else if (shape_case === 3) {
      //   object.position.x = Math.sin(i) * 400;
      //   object.position.y = Math.cos(i) * 400;
      //   object.position.z = Math.tan(i) * 400;
      // }
      else if (shape_case === 4) {
        object.position.x = Math.sin(i) * 400;
        object.position.y = Math.cos(i) * 400;
        object.position.z = Math.tan(i) * 400;
      } else if (shape_case === 5) {
        object.position.x = Math.sin(i) * 400;
        object.position.y = Math.cos(i) * 400;
        object.position.z = Math.sin(i) * 800;
      } else {
        object.position.x = Math.random() * 500 - 250;
        object.position.y = Math.random() * 500 - 250;
        object.position.z = Math.random() * 500 - 250;
      }

      object.rotation.x = Math.random() * 4 * Math.PI;
      object.rotation.y = Math.random() * 2 * Math.PI;
      object.rotation.z = Math.random() * 2 * Math.PI;

      object.scale.x = Math.random() + 6;
      object.scale.y = Math.random() + 6;
      object.scale.z = Math.random() + 6;

      scene.add(object);
      // object.cursor = "pointer";
      // object.on("click", function (ev) {
      //   alert("fish");
      // });
    }
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(props.width, props.height);
    renderer.domElement.setAttribute("display", "flex");
    if (container.hasChildNodes()) {
      container.removeChild(container.childNodes[0]);
    }
    container.appendChild(renderer.domElement);
    renderer.domElement.style.borderRadius = "10px";

    document.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onWindowResize);
  }

  function onWindowResize() {
    const aspect = props.width / props.height;

    camera.left = (-frustumSize * aspect) / 2;
    camera.right = (frustumSize * aspect) / 2;
    camera.top = frustumSize / 2;
    camera.bottom = -frustumSize / 2;

    camera.updateProjectionMatrix();

    renderer.setSize(props.width, props.height);
  }

  function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  //

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    theta += theta_speed;

    camera.position.x = radius * Math.sin(THREE.MathUtils.degToRad(theta));
    camera.position.y = radius * Math.sin(THREE.MathUtils.degToRad(theta));
    camera.position.z = radius * Math.cos(THREE.MathUtils.degToRad(theta));
    camera.lookAt(scene.position);

    camera.updateMatrixWorld();

    renderer.render(scene, camera);
  }

  return <div id={props.container}></div>;
}

export default Boxes;
