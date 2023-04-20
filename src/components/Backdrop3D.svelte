<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
  import { PointLight } from 'three';
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
  import { onMount } from 'svelte';

	export let loaded = false;
  let showcaseMesh: THREE.BufferGeometry;

	let camPos = [-1, .3, 0];
	let lookAt = [0.4, 0, 0.1];
	let angle = 45;
	const speed = 0.1;
	const radius = 1;

  let x: number = 0;
  let y: number = 0;
  let z: number = 0;
  
  onMount(async () => {
    showcaseMesh = await extractMesh('models/dyno_tex.obj');
		loaded = true;
		orbitCamera();
	});

  async function extractMesh(path: string) {
    const loader = new OBJLoader();
    const loadedData = await loader.loadAsync(path);
    const mesh = loadedData.children[0] as THREE.Mesh;
    return mesh.geometry;
  }

	function orbitCamera() {
		angle += speed;
		const rad = angle * 2 * Math.PI / 180;
		const x = lookAt[0] + radius * Math.cos(rad);
		const z = lookAt[2] + radius * Math.sin(rad);
		camPos = [x, camPos[1], z];
		requestAnimationFrame(orbitCamera);
	}
</script>

<SC.Canvas
	antialias
	background={new THREE.Color(0x000)}
>
	<SC.Mesh
		geometry={showcaseMesh}
		material={new THREE.MeshStandardMaterial({ color: 0xdddddd })}
    position={[0.8, -0.7, 0.1]}
		rotation={[-Math.PI/2, 0, -Math.PI/2 + 10]}
		scale={[.1, .1, .1]}
		castShadow
	/>

	<SC.PerspectiveCamera position={camPos} target={lookAt} />
	<SC.OrbitControls enableZoom={false} maxPolarAngle={Math.PI * 0.51} />
	<SC.AmbientLight intensity={0} />
  <SC.PointLight intensity={1} position={[x, y, z]} />
</SC.Canvas>

<!-- <div class="controls">
  <div>Light Controls</div>
  <label><input type="range" bind:value={x} min={-5} max={5} step={0.1} /> x <span>{x}</span></label>
  <label><input type="range" bind:value={y} min={-5} max={5} step={0.1} /> y <span>{y}</span></label>
  <label><input type="range" bind:value={z} min={-5} max={5} step={0.1} /> z <span>{z}</span></label>
</div> -->

<style>
  .controls {
		position: absolute;
		left: 1em;
		top: 1em;
    color: white;
	}

	label {
		display: flex;
		width: 60px;
		gap: 0.5em;
		align-items: center;
	}

	input {
		width: 80px;
		margin: 0;
	}
</style>
