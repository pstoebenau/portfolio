<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
  import { Vector2 } from 'three';
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { onMount } from 'svelte';

  let showcaseMesh: THREE.Mesh;
  let showcaseGeometry: THREE.BufferGeometry;
  let showcaseMaterial: THREE.Material;

  let x: number = 0;
  let y: number = 0;
  let z: number = 0;

	let t: number = 0;
  
  onMount(async () => {
    // showcaseMesh = await extractMeshOBJ('models/t-rex.obj');
    showcaseMesh = await extractMeshGLTF('models/t-rex.glb');
		showcaseGeometry = showcaseMesh.geometry as THREE.BufferGeometry;
		showcaseMaterial = showcaseMesh.material as THREE.Material;
	});

  async function extractMeshGLTF(path: string) {
    const loader = new GLTFLoader();
    const loadedData = await loader.loadAsync(path);
    const mesh = loadedData.scene.children[0] as THREE.Mesh;
    return mesh;
  }

	function clampToArc(t: number) {
		const toggleCircle = 0;
		const r = 2;
		const p1 = new THREE.Vector2(0.9, -1.1);
		const p2 = new THREE.Vector2(-0.9, 0.9);
		
		const pa = p2.clone().sub(p1).divideScalar(2);
		const pc = p1.clone().add(pa);
		const a = pa.length();
		const b = Math.sqrt(r*r - a*a);
		
		const cx = pc.x + + b*pa.y / a;
		const cy = pc.y - + b*pa.x / a;
		const c = new THREE.Vector2(cx, cy);
		
		const t1x = Math.atan((p1.y-c.y) / (p1.x-c.x));
		const t2x = Math.atan((p2.y-c.y) / (p2.x-c.x));
		const g = (theta: number, point: Vector2) => theta + (point.x < c.x ? Math.PI : (point.y < c.y ? 2*Math.PI : 0));
		const t1 = g(t1x, p1);
		const t2c = g(t2x, p2);
		const t2 = Math.abs(t2c-t1) > Math.abs(t2c + 2*Math.PI - t1) ? (t2c+2*Math.PI) : t2c;
		
		const angle = t1 + (t2 - t1) * t;
		
		const clampedX = r*Math.cos(angle) + c.x;
		const clampedY = r*Math.sin(angle) + c.y;
		const clampedPoint = new THREE.Vector2(clampedX, clampedY);

		return clampedPoint;
	}

	function followCursor(event: any) {
		const mousePos = new THREE.Vector2(event.clientX, event.clientY);
		console.log(`x: ${mousePos.x} y: ${mousePos.y}`);
	}

	function getLightPos(t: number): [number, number, number] {
		const p = clampToArc(t);
		return [p.x, .4, p.y];
	}
</script>
a
<div on:mousemove={e => followCursor(e)}>
	<SC.Canvas
		antialias
		background={new THREE.Color(0x000)}
	>
		<SC.Mesh
			geometry={showcaseGeometry}
			material={showcaseMaterial}
			position={[0, -.7, -.3]}
			rotation={[0, Math.PI, 0]}
			scale={[.1, .1, .1]}
			castShadow
		/>
	
		<SC.Mesh
			geometry={new THREE.BoxGeometry()}
			material={new THREE.MeshStandardMaterial({ color: 0xff3e00 })}
			position={getLightPos(t)}
			rotation={[0, 0, 0]}
			scale={[.1, .1, .1]}
		/>
	
		<SC.PerspectiveCamera position={[-2, 0, 0]} />
		<!-- <SC.OrbitControls enableZoom={false} maxPolarAngle={Math.PI * 0.51} /> -->
		<!-- <SC.AmbientLight intensity={1} /> -->
		<SC.PointLight intensity={1} decay={2} distance={5} position={getLightPos(t)} />
		<!-- <SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} /> -->
	</SC.Canvas>
	
	<div class="controls">
		<div>Light Controls</div>
		<label><input type="range" bind:value={t} min={0} max={1} step={0.1} /> t <span>{t}</span></label>
	</div>
</div>

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
