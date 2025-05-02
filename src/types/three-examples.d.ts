declare module "three/examples/jsm/loaders/GLTFLoader" {
	import { Loader, Group, AnimationClip, LoadingManager } from "three";
	export class GLTFLoader extends Loader {
		constructor(manager?: LoadingManager);
		load(
			url: string,
			onLoad: (gltf: { scene: Group; animations: AnimationClip[] }) => void,
			onProgress?: (event: ProgressEvent) => void,
			onError?: (event: ErrorEvent | unknown) => void
		): void;
	}
}

declare module "three/examples/jsm/loaders/DDSLoader" {
	import { CompressedTextureLoader } from "three";
	export class DDSLoader extends CompressedTextureLoader {}
}

declare module "three/examples/jsm/controls/OrbitControls" {
	import { Camera } from "three";
	export class OrbitControls {
		constructor(camera: Camera, domElement: HTMLElement);
		enableZoom: boolean;
		enableDamping: boolean;
		dampingFactor: number;
		update(): void;
	}
}
