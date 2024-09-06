import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Dumbbell3D = ({ modelUrl }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!modelUrl) {
            console.error('Model URL is not provided');
            return;
        }

        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            mount.clientWidth / mount.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0x404040, 1);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(10, 10, 10).normalize();
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        loader.load(
            modelUrl,
            (gltf) => {
                const model = gltf.scene;

                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshStandardMaterial({
                            color: 0x8c8c8c,
                            emissive: 0x4a4a4a,
                            emissiveIntensity: 0.5,
                            roughness: 0.5,
                            metalness: 0.5,
                        });
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                model.position.set(0, 0, 1);
                model.scale.set(2, 2, 2);
                scene.add(model);

                const animate = () => {
                    requestAnimationFrame(animate);
                    model.rotation.y += 0.01;
                    renderer.render(scene, camera);
                };
                animate();

                const handleResize = () => {
                    const width = mount.clientWidth;
                    const height = mount.clientHeight;

                    if (width < 768) {
                        camera.position.z = 7;
                        model.scale.set(1.5, 1.5, 1.5);
                    } else {
                        camera.position.z = 5;
                        model.scale.set(2, 2, 2);
                    }

                    renderer.setSize(width, height);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                };

                window.addEventListener('resize', handleResize);
                handleResize();

                return () => {
                    window.removeEventListener('resize', handleResize);
                    mount.removeChild(renderer.domElement);
                };
            },
            undefined,
            (error) => {
                console.error('An error occurred while loading the model:', error);
            }
        );
    }, [modelUrl]);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'absolute', // Use relative positioning
                width: '100%', // Adjust to fit parent container
                height: '100vh', // Adjust to fit parent container
                overflow: 'hidden',
            }}
        />
    );
};

export default Dumbbell3D;
