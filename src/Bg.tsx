import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
//import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { commonColors } from "@heroui/react";
import { PixelatePass } from "./PixelatePass";

const Bg = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    /**
     * Base
     */

    // Canvas
    const canvas = document.querySelector<HTMLCanvasElement>("canvas.webgl")!;

    // Scene
    const scene = new THREE.Scene();

    // Vaporwave gradient background
    // Crea un canvas 512x512 con gradiente verticale vaporwave
    // const bgCanvas = document.createElement("canvas");
    // bgCanvas.width = 512;
    // bgCanvas.height = 512;
    // const ctx = bgCanvas.getContext("2d");
    // if (ctx) {
    //   const gradient = ctx.createLinearGradient(0, 0, 0, bgCanvas.height);
    //   gradient.addColorStop(0, "#ffb6ff"); // rosa chiaro
    //   gradient.addColorStop(0.5, "#7f7fff"); // viola/azzurro
    //   gradient.addColorStop(1, "#00ffe7"); // azzurro
    //   ctx.fillStyle = gradient;
    //   ctx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    //   const bgTexture = new THREE.CanvasTexture(bgCanvas);
    //   scene.background = bgTexture;
    // }

    // Fog
    const fog = new THREE.Fog("#000000", 1, 2.5);

    scene.fog = fog;

    // Textures
    const textureLoader = new THREE.TextureLoader();
    const gridTexture = textureLoader.load("/bg/grid.png");
    const heightTexture = textureLoader.load("/bg/displacement.png");
    const metalnessTexture = textureLoader.load("/bg/metalness.png");

    // Plane
    const parameters = {
      displacementScale: 0.3,
      metalness: 1,
      roughness: 0.5,
    };

    const geometry = new THREE.PlaneGeometry(1, 2, 24, 24);
    const material = new THREE.MeshStandardMaterial({
      map: gridTexture,
      displacementMap: heightTexture,
      displacementScale: parameters.displacementScale,
      metalness: parameters.metalness,
      metalnessMap: metalnessTexture,
      roughness: parameters.roughness,
    });
    const plane = new THREE.Mesh(geometry, material);
    const plane2 = new THREE.Mesh(geometry, material);

    plane.rotation.x = -Math.PI * 0.5;
    plane2.rotation.x = -Math.PI * 0.5;

    plane.position.y = 0.0;
    plane.position.z = 0.15;
    plane2.position.y = 0.0;
    plane2.position.z = -1.85;
    scene.add(plane);
    scene.add(plane2);

    // Lights
    const ambientLight = new THREE.AmbientLight("#ffffff", 10);
    scene.add(ambientLight);

    // Lista di colori predefiniti (puoi modificarla a piacere)
    const colorList = [
      commonColors.blue[500],
      commonColors.pink[600],
      commonColors.purple[500],
      commonColors.cyan[500],
      commonColors.yellow[500],
      commonColors.green[500],
    ];

    // Funzione di interpolazione tra due colori
    function lerpColor(a: string, b: string, t: number): string {
      const c1 = new THREE.Color(a);
      const c2 = new THREE.Color(b);
      return c1.lerp(c2, t).getStyle();
    }

    let colorIndex = 0;
    let nextColorIndex = 1;

    const spotlight = new THREE.SpotLight(
      colorList[0],
      40,
      25,
      Math.PI * 0.1,
      0.25
    );
    spotlight.position.set(0.5, 0.75, 2.1);
    spotlight.target.position.x = -0.25;
    spotlight.target.position.y = 0.25;
    spotlight.target.position.z = 0.25;
    scene.add(spotlight);
    scene.add(spotlight.target);

    const spotlight2 = new THREE.SpotLight(
      colorList[1],
      40,
      25,
      Math.PI * 0.1,
      0.25
    );
    spotlight2.position.set(-0.5, 0.75, 2.1);
    spotlight2.target.position.x = 0.25;
    spotlight2.target.position.y = 0.25;
    spotlight2.target.position.z = 0.25;
    scene.add(spotlight2);
    scene.add(spotlight2.target);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.01,
      20
    );
    camera.position.x = 0;
    camera.position.y = 0.06;
    camera.position.z = 1.1;
    camera.fov = 50;
    camera.updateProjectionMatrix();

    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enabled = false; // Disable controls for this background

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Post-processing
    const effectComposer = new EffectComposer(renderer);
    effectComposer.setSize(sizes.width, sizes.height);
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const renderPass = new RenderPass(scene, camera);
    effectComposer.addPass(renderPass);

    // const rgbShiftPass = new ShaderPass(RGBShiftShader);
    // rgbShiftPass.uniforms["amount"].value = 0.001;

    // effectComposer.addPass(rgbShiftPass);
    const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
    effectComposer.addPass(gammaCorrectionPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      6,
      1,
      0
    );

    // Pixelate pass
    const pixelatePass = new PixelatePass(scene, camera, 6); // pixel size 4
    pixelatePass.setSize(sizes.width, sizes.height);
    effectComposer.addPass(pixelatePass);

    effectComposer.addPass(bloomPass);

    // Resize handler
    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      // camera.fog;

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      effectComposer.setSize(sizes.width, sizes.height);
      effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      pixelatePass.setSize(sizes.width, sizes.height);
    });

    // Animation
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update plane position
      plane.position.z = (elapsedTime * 0.15) % 2;
      plane2.position.z = ((elapsedTime * 0.15) % 2) - 2;

      // Cambio graduale colore spotlight e spotlight2
      const colorChangeDuration = 3.5; // secondi per ogni transizione
      const t = (elapsedTime % colorChangeDuration) / colorChangeDuration;
      // calcola indici per spotlight
      colorIndex =
        Math.floor(elapsedTime / colorChangeDuration) % colorList.length;
      nextColorIndex = (colorIndex + 1) % colorList.length;
      // spotlight principale
      const colorA = colorList[colorIndex];
      const colorB = colorList[nextColorIndex];
      spotlight.color = new THREE.Color(lerpColor(colorA, colorB, t));
      // spotlight2 ruota con offset di 1
      const colorIndex2 = (colorIndex + 1) % colorList.length;
      const nextColorIndex2 = (colorIndex2 + 1) % colorList.length;
      const colorA2 = colorList[colorIndex2];
      const colorB2 = colorList[nextColorIndex2];
      spotlight2.color = new THREE.Color(lerpColor(colorA2, colorB2, t));

      // Render
      effectComposer.render();

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return (
    <canvas
      ref={mountRef}
      className="webgl"
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        outline: "none",
        zIndex: -1,
      }}
    ></canvas>
  );
};

export default Bg;
