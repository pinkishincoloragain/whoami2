import react from "react";
import { useEffect, useState } from "react";
import * as THREE from "three";
import water from "../textures/waternormals.jpeg";
import water2 from "../textures/water2.png";
import water3 from "../textures/water3.png";
import stone from "../textures/solid_stone.jpeg";
import stone2 from "../textures/stone_2.jpeg";

function Boxes() {
  let container, stats;
  let camera, scene, raycaster, renderer;
  let theta = 0;
  let theta_speed = 0.12;
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
      2000
    );

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

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
      ["#D3E4CD", "#99A799", "#F2DDC1", "#E2C2B9"],
      ["#161853", "#292C6D", "#FAEDF0", "#EC255A"],
      ["#FF1700", "#FF8E00", "#FFE400", "#06FF00"],
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
    const texture_water = new THREE.TextureLoader().load(water);
    const texture_water2 = new THREE.TextureLoader().load(water2);
    const texture_water3 = new THREE.TextureLoader().load(water3);
    const texture_stone = new THREE.TextureLoader().load(stone);
    const texture_stone2 = new THREE.TextureLoader().load(stone2);
    const textures = [
      // texture_water,
      // texture_water2,
      // texture_water3,
      // texture_stone,
      // texture_stone2,
      // texture_black,
    ];
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.repeat.set(4, 4);

    // if (randNum == 1) {
    geometry = new THREE.BoxGeometry(16, 16, 16);
    // } else {
    //   geometry = new THREE.IcosahedronGeometry(6, 16, 16);
    // }
    for (let i = 0; i < 200; i++) {
      const object = new THREE.Mesh(
        geometry,
        new THREE.MeshLambertMaterial({
          // color: Math.random() * 0xffffff,
          color:
            colors[rand_color_idx][Math.floor(Math.random() * color_length)],
          // map: textures[i % textures.length],
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
      // else if (randNum2 === 2) {
      //   object.position.x = i * 400;
      //   object.position.y = Math.sin(i) * 400;
      //   object.position.z = Math.cos(i) * 400;
      // } else if (randNum2 === 3) {
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
        object.position.x = Math.random() * 800 - 400;
        object.position.y = Math.random() * 800 - 400;
        object.position.z = Math.random() * 800 - 400;
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

    raycaster = new THREE.Raycaster();

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    document.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onWindowResize);
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

  return (
    <div
      id="container"
      style={{ width: "100vw", transitionDuration: "0.1s" }}
    ></div>
  );
}

export default Boxes;
