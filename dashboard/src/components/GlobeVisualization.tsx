import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GlobeVisualization: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Globe wireframe sphere
    const globeGeometry = new THREE.SphereGeometry(1, 40, 40);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Inner glow sphere
    const glowGeometry = new THREE.SphereGeometry(0.98, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x0a0a30,
      transparent: true,
      opacity: 0.6,
    });
    const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowSphere);

    // Latitude/longitude rings
    const ringMaterial = new THREE.LineBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.12 });
    for (let i = 0; i < 5; i++) {
      const ringGeometry = new THREE.RingGeometry(0.3 + i * 0.18, 0.3 + i * 0.18 + 0.005, 64);
      const ring = new THREE.Mesh(ringGeometry, new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.06, side: THREE.DoubleSide }));
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -0.8 + i * 0.4;
      scene.add(ring);
    }

    // Generate node points on sphere surface
    const nodeCount = 50;
    const nodes: THREE.Vector3[] = [];
    const nodeGroup = new THREE.Group();

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = 1.01;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      const pos = new THREE.Vector3(x, y, z);
      nodes.push(pos);

      // Node dot
      const dotGeometry = new THREE.SphereGeometry(0.018, 8, 8);
      const isActive = Math.random() > 0.5;
      const dotMaterial = new THREE.MeshBasicMaterial({
        color: isActive ? 0x00e5ff : 0x7c4dff,
      });
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.position.copy(pos);
      nodeGroup.add(dot);

      // Glow around active nodes
      if (isActive && Math.random() > 0.4) {
        const glowDot = new THREE.Mesh(
          new THREE.SphereGeometry(0.04, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.25 })
        );
        glowDot.position.copy(pos);
        nodeGroup.add(glowDot);
      }
    }
    scene.add(nodeGroup);

    // Connection arcs between nearby nodes
    const arcGroup = new THREE.Group();
    const connectedPairs = new Set<string>();
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 0.8 && Math.random() > 0.5) {
          const key = `${i}-${j}`;
          if (connectedPairs.has(key)) continue;
          connectedPairs.add(key);

          // Create curved arc
          const mid = new THREE.Vector3().addVectors(nodes[i], nodes[j]).multiplyScalar(0.5);
          mid.normalize().multiplyScalar(1.15);

          const curve = new THREE.QuadraticBezierCurve3(nodes[i], mid, nodes[j]);
          const points = curve.getPoints(20);
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
          const lineMaterial = new THREE.LineBasicMaterial({
            color: Math.random() > 0.5 ? 0x00e5ff : 0x7c4dff,
            transparent: true,
            opacity: 0.15 + Math.random() * 0.15,
          });
          const line = new THREE.Line(lineGeometry, lineMaterial);
          arcGroup.add(line);
        }
      }
    }
    scene.add(arcGroup);

    // Outer atmosphere ring
    const atmosphereGeometry = new THREE.RingGeometry(1.05, 1.12, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.04,
      side: THREE.DoubleSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Orbiting particle ring
    const orbitParticles = new THREE.Group();
    for (let i = 0; i < 80; i++) {
      const angle = (i / 80) * Math.PI * 2;
      const orbitR = 1.3 + Math.random() * 0.15;
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.006, 4, 4),
        new THREE.MeshBasicMaterial({
          color: 0x00e5ff,
          transparent: true,
          opacity: 0.3 + Math.random() * 0.4,
        })
      );
      particle.position.set(
        Math.cos(angle) * orbitR,
        (Math.random() - 0.5) * 0.15,
        Math.sin(angle) * orbitR
      );
      orbitParticles.add(particle);
    }
    scene.add(orbitParticles);

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.003;

      globe.rotation.y = time * 0.5 + mouseX * 0.3;
      globe.rotation.x = mouseY * 0.15;
      nodeGroup.rotation.y = time * 0.5 + mouseX * 0.3;
      nodeGroup.rotation.x = mouseY * 0.15;
      arcGroup.rotation.y = time * 0.5 + mouseX * 0.3;
      arcGroup.rotation.x = mouseY * 0.15;
      glowSphere.rotation.y = time * 0.3;
      orbitParticles.rotation.y = time * 0.8;
      orbitParticles.rotation.x = Math.sin(time) * 0.1;
      atmosphere.rotation.z = time * 0.2;

      // Pulse nodes
      nodeGroup.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh && child.geometry.type === 'SphereGeometry') {
          const scale = 1 + Math.sin(time * 3 + i) * 0.15;
          child.scale.setScalar(scale);
        }
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    />
  );
};

export default GlobeVisualization;
