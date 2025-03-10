import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Globe = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let scene, camera, renderer, sphere;

    // Initialize Scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.z = 1000; // Fixed camera position

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.innerHTML = ""; // Clear previous canvas
    containerRef.current.appendChild(renderer.domElement);

    // Sphere (Globe)
    const geometry = new THREE.SphereGeometry(200, 20, 30, 40);
    const material = new THREE.MeshBasicMaterial({
      color: 0x1ac197,
      color: 0x00e6e6,
      opacity: 0.3,
      wireframe: true,
      transparent: true,
    });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Animation Loop (Only Auto Rotation)
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.003; // Keep rotating
      sphere.rotation.x += 0.001; // Keep rotating
      renderer.render(scene, camera);
    };
    animate();

    // Disable Mouse & Touch Interactions
    const preventInteraction = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    containerRef.current.style.pointerEvents = "none"; // Block all interactions

    // Cleanup
    return () => {
      if (renderer) {
        renderer.dispose();
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // Clear safely
      }
    };
  }, []);

  return <div ref={containerRef} style={{backgroundColor: "transparent", width: "100%", height: "100%", overflow: "hidden", }} />;
};

export default Globe;
