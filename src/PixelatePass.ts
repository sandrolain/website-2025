import {
  Pass,
  FullScreenQuad,
} from "three/examples/jsm/postprocessing/Pass.js";
import * as THREE from "three";

export class PixelatePass extends Pass {
  pixelSize: number;
  scene: THREE.Scene;
  camera: THREE.Camera;
  fsQuad: FullScreenQuad;

  constructor(scene: THREE.Scene, camera: THREE.Camera, pixelSize: number = 4) {
    super();
    this.pixelSize = pixelSize;
    this.scene = scene;
    this.camera = camera;
    this.fsQuad = new FullScreenQuad(
      new THREE.ShaderMaterial({
        uniforms: {
          tDiffuse: { value: null },
          resolution: { value: new THREE.Vector2(1, 1) },
          pixelSize: { value: pixelSize },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D tDiffuse;
          uniform vec2 resolution;
          uniform float pixelSize;
          varying vec2 vUv;
          void main() {
            vec2 dxy = pixelSize / resolution;
            vec2 coord = dxy * floor(vUv * resolution / pixelSize);
            gl_FragColor = texture2D(tDiffuse, coord);
          }
        `,
      })
    );
  }

  setSize(width: number, height: number): void {
    (
      this.fsQuad.material as THREE.ShaderMaterial
    ).uniforms.resolution.value.set(width, height);
  }

  render(
    renderer: THREE.WebGLRenderer,
    writeBuffer: THREE.WebGLRenderTarget,
    readBuffer: THREE.WebGLRenderTarget
    // deltaTime?: number, maskActive?: boolean
  ): void {
    (this.fsQuad.material as THREE.ShaderMaterial).uniforms.tDiffuse.value =
      readBuffer.texture;
    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      this.fsQuad.render(renderer);
    } else {
      renderer.setRenderTarget(writeBuffer);
      if (this.clear) renderer.clear();
      this.fsQuad.render(renderer);
    }
  }
}
