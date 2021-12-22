import react from "react";
import { useEffect, useState } from "react";
import * as THREE from "three";

function Boxes(props) {
  let container, stats;
  let camera, scene, raycaster, renderer;
  let theta = 0;
  let theta_speed = 0.06;
  let INTERSECTED;
  const pointer = new THREE.Vector2();
  const radius = 500;
  const frustumSize = 1000;

  useEffect(() => {
    init();
    animate();
  }, []);

  function init() {
    container = document.getElementById("container");
    // document.body.appendChild(container);

    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      30000
    );

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    const phantonColor = [
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
      "#DD94F70",
      "#45ABAA",
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
    ];

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    const geometry = new THREE.BoxGeometry(22, 22, 22);

    for (let i = 0; i < 2000; i++) {
      const object = new THREE.Mesh(
        geometry,
        new THREE.MeshLambertMaterial({
          // color: Math.random() * 0xffffff,
          color: phantonColor[Math.floor(Math.random() * phantonColor.length)],
        })
      );

      if (props.type === "circle") {
        object.position.x = Math.sin(i) * 400;
        object.position.y = Math.cos(i) * 400;
        object.position.z = Math.sin(i) * 400;
      } else {
        object.position.x = Math.random() * 800 - 400;
        object.position.y = Math.random() * 800 - 400;
        object.position.z = Math.random() * 800 - 400;
      }

      object.rotation.x = Math.random() * 2 * Math.PI;
      object.rotation.y = Math.random() * 2 * Math.PI;
      object.rotation.z = Math.random() * 2 * Math.PI;

      object.scale.x = Math.random() + 0.8;
      object.scale.y = Math.random() + 0.5;
      object.scale.z = Math.random() + 0.5;

      scene.add(object);
      // object.cursor = "pointer";
      // object.on("click", function (ev) {
      //   alert("fish");
      // });
    }

    raycaster = new THREE.Raycaster();

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    container.addEventListener("mousedown", onDocumentMouseDown, false);
    container.addEventListener("mouseup", onDocumentMouseUp, false);
    container.addEventListener("touchstart", onDocumentTouchStart, false);
    container.addEventListener("touchEnd", onDocumentTouchEnd, false);

    // stats = new Stats();
    // container.appendChild(stats.dom);

    document.addEventListener("pointermove", onPointerMove);

    //

    window.addEventListener("resize", onWindowResize);
  }

  function onDocumentMouseDown() {
    theta_speed = 0;
  }
  function onDocumentMouseUp() {
    theta_speed = (theta_speed + 0.06) % (2 * Math.PI);
  }

  function onDocumentTouchStart() {
    theta_speed = 0;
  }
  function onDocumentTouchEnd() {
    theta_speed = (theta_speed + 0.06) % (2 * Math.PI);
  }

  function onWindowResize() {
    const aspect = window.innerWidth / window.innerHeight;

    camera.left = (-frustumSize * aspect) / 2;
    camera.right = (frustumSize * aspect) / 2;
    camera.top = frustumSize / 2;
    camera.bottom = -frustumSize / 2;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  //

  function animate() {
    requestAnimationFrame(animate);
    render();
    // stats.update();
  }

  function render() {
    theta += theta_speed;

    camera.position.x = radius * Math.sin(THREE.MathUtils.degToRad(theta));
    camera.position.y = radius * Math.sin(THREE.MathUtils.degToRad(theta));
    camera.position.z = radius * Math.cos(THREE.MathUtils.degToRad(theta));
    camera.lookAt(scene.position);

    camera.updateMatrixWorld();

    // find intersections

    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObjects(scene.children, false);

    if (intersects.length > 0) {
      if (INTERSECTED != intersects[0].object) {
        if (INTERSECTED)
          INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

        INTERSECTED = intersects[0].object;
        INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
        INTERSECTED.material.emissive.setHex(0xff0000);
      }
    } else {
      if (INTERSECTED)
        INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

      INTERSECTED = null;
    }

    renderer.render(scene, camera);
  }

  return <div id="container"></div>;
}

export default Boxes;
