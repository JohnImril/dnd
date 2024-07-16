import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DDSLoader } from "three/examples/jsm/loaders/DDSLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import "./RotatingCrystals.css";

const RotatingCrystals: React.FC = React.memo(() => {
	const mountRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!mountRef.current) return;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 0);
		mountRef.current.appendChild(renderer.domElement);

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.25;
		controls.enableZoom = true;

		const onWindowResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener("resize", onWindowResize);

		const ddsLoader = new DDSLoader();
		const crystalTexture = ddsLoader.load("./textures/crystal.jpg.dds", (texture) => {
			texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
		});

		const loader = new GLTFLoader();
		loader.load(
			"./models/scene.glb",
			(gltf) => {
				const model = gltf.scene;

				const initialScale = window.innerWidth > 2540 ? 1.4 : 1.2;
				model.scale.set(initialScale, initialScale, initialScale);
				model.position.set(-2, -2, 0);
				scene.add(model);

				const crystalMaterial = new THREE.MeshPhysicalMaterial({
					color: new THREE.Color(0xba90fc),
					map: crystalTexture,
					transparent: true,
					opacity: 0.8,
					roughness: 0.1,
					metalness: 0.2,
					reflectivity: 0.9,
					transmission: 0.2,
					ior: 1.5,
					side: THREE.DoubleSide,
				});

				const crystals = ["Crystal01", "Crystal02", "Crystal03"].map((name) => {
					const crystal = model.getObjectByName(name);
					if (crystal) {
						(crystal as THREE.Mesh).material = crystalMaterial;
					}
					return crystal;
				});

				const mixer = new THREE.AnimationMixer(model);
				gltf.animations.forEach((clip) => mixer.clipAction(clip).play());

				const clock = new THREE.Clock();
				let time = 0;

				const animate = () => {
					requestAnimationFrame(animate);
					const delta = clock.getDelta();
					time += delta;

					mixer.update(delta);
					controls.update();

					crystals.forEach((crystal) => {
						if (crystal) {
							(crystal as THREE.Mesh).rotation.y += delta * 0.2;
							(crystal as THREE.Mesh).position.y += Math.sin(time * 1.5) * 0.002;
						}
					});

					renderer.render(scene, camera);
				};

				animate();
			},
			undefined,
			(error) => console.error(error)
		);

		camera.position.set(0, 20, 80);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
		directionalLight.position.set(5, 5, 5).normalize();
		scene.add(directionalLight);

		const ambientLight = new THREE.AmbientLight(0xffffff, 2);
		scene.add(ambientLight);

		return () => {
			window.removeEventListener("resize", onWindowResize);
			if (mountRef.current) {
				mountRef.current.removeChild(renderer.domElement);
			}
		};
	}, []);

	return <div className="crystals" ref={mountRef} />;
});

export default RotatingCrystals;
