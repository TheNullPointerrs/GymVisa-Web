import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Dumbbell3D = ({ modelUrl }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!modelUrl) {
            console.error('Model URL is not provided');
            return;
        }

        // Set up the scene
        const scene = new THREE.Scene();

        // Set up the camera
        const camera = new THREE.PerspectiveCamera(
            75, // Field of view
            window.innerWidth / window.innerHeight, // Aspect ratio
            0.1, // Near clipping plane
            1000 // Far clipping plane
        );
        camera.position.z = 5; // Initial camera position

        // Set up the renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Set up lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Stronger directional light
        directionalLight.position.set(10, 10, 10).normalize();
        scene.add(directionalLight);

        // Load the glTF model
        const loader = new GLTFLoader();
        loader.load(
            modelUrl,
            (gltf) => {
                const model = gltf.scene;

                // Adjust the model's material
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshStandardMaterial({
                            color: 0x8c8c8c, // Gray color
                            emissive: 0x4a4a4a, // Slight emissive color
                            emissiveIntensity: 0.5,
                            roughness: 0.5,
                            metalness: 0.5,
                        });
                        child.castShadow = true; // Cast shadows
                        child.receiveShadow = true; // Receive shadows
                    }
                });

                model.position.set(0, 0, 1);
                model.scale.set(2, 2, 2); // Set to original size
                scene.add(model);

                // Animation loop
                const animate = () => {
                    requestAnimationFrame(animate);

                    // Rotate the model
                    model.rotation.y += 0.01; // Adjust this value for desired rotation speed

                    renderer.render(scene, camera); // Render the scene
                };
                animate();

                // Handle window resize
                const handleResize = () => {
                    const width = window.innerWidth;
                    const height = window.innerHeight;

                    // Adjust camera position and model scale based on screen size
                    if (width < 768) {
                        camera.position.z = 7; // Move camera back for smaller screens
                        model.scale.set(1.5, 1.5, 1.5); // Reduce model scale
                    } else {
                        camera.position.z = 5; // Default camera position
                        model.scale.set(2, 2, 2); // Default model scale
                    }

                    renderer.setSize(width, height);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                };
                window.addEventListener('resize', handleResize);

                // Initial call to handle screen size
                handleResize();

                // Clean up resources on component unmount
                return () => {
                    window.removeEventListener('resize', handleResize);
                    mountRef.current.removeChild(renderer.domElement);
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
                position: 'fixed', 
                top: 150, 
                overflow: 'hidden',
                left: 0, 
                width: '100vw', 
                zIndex: -1 // Ensure it stays in the background
            }} 
        />
    );
};

export default Dumbbell3D;
