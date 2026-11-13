import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* ─── 1. Data Core (Celebal Technologies - Data Engineer) ─────────── */
export function DataCoreVisual() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 280;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all elements
    const group = new THREE.Group();
    scene.add(group);

    // Inner Glowing Core (Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.1, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0f766e,
      roughness: 0.2,
      metalness: 0.85,
      flatShading: true,
      emissive: 0x042f2e,
      emissiveIntensity: 0.6,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Outer Wireframe Cage
    const wireGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireframe = new THREE.Mesh(wireGeo, wireMat);
    group.add(wireframe);

    // Orbiting Ring 1
    const ring1Geo = new THREE.TorusGeometry(1.85, 0.025, 16, 80);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x5eead4,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    // Orbiting Ring 2
    const ring2Geo = new THREE.TorusGeometry(2.1, 0.02, 16, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x0d9488,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    group.add(ring2);

    // Orbiting Particle Cloud (ETL Data stream)
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 1.6 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      particlePos[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      particlePos[i * 3 + 1] = radius * Math.sin(phi);
      particlePos[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x2dd4bf,
      size: 0.05,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x2dd4bf, 3, 10);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0x0284c7, 2, 10);
    backLight.position.set(-3, -2, -2);
    scene.add(backLight);

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.8;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.8;
    };
    window.addEventListener('mousemove', onMouseMove);

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Continuous rotation & floating
      group.position.y = Math.sin(elapsed * 1.5) * 0.12;
      group.rotation.y += 0.008 + mouseX * 0.02;
      group.rotation.x = Math.sin(elapsed * 0.8) * 0.1 + mouseY * 0.02;

      core.rotation.y -= 0.005;
      wireframe.rotation.y += 0.004;
      wireframe.rotation.z += 0.003;

      ring1.rotation.z += 0.01;
      ring2.rotation.z -= 0.008;

      particles.rotation.y += 0.006;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-[280px] sm:h-[320px]">
      <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-3xl pointer-events-none scale-75" />
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}

/* ─── 2. Backend Monolith (Vaibhav Global - Software Developer) ───── */
export function ServerMonolithVisual() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 280;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 3 Stacked Glass Server Slabs
    const slabs: THREE.Mesh[] = [];
    const slabGeo = new THREE.BoxGeometry(2.1, 0.45, 1.8);
    const slabMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.15,
      metalness: 0.9,
      emissive: 0x052e16,
      emissiveIntensity: 0.3,
    });

    const edgeGeo = new THREE.EdgesGeometry(slabGeo);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.6 });

    [-0.7, 0, 0.7].forEach((yPos) => {
      const slab = new THREE.Mesh(slabGeo, slabMat);
      slab.position.y = yPos;
      const wire = new THREE.LineSegments(edgeGeo, edgeMat);
      slab.add(wire);
      slabs.push(slab);
      group.add(slab);
    });

    // Orbiting Satellite Data Cubes
    const satellites: THREE.Mesh[] = [];
    const satGeo = new THREE.BoxGeometry(0.28, 0.28, 0.28);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      emissive: 0x10b981,
      emissiveIntensity: 0.8,
      roughness: 0.1,
    });

    for (let i = 0; i < 4; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      group.add(sat);
      satellites.push(sat);
    }

    // Outer Gyroscope Rings
    const gyroGeo = new THREE.TorusGeometry(2.2, 0.02, 16, 80);
    const gyroMat = new THREE.MeshBasicMaterial({ color: 0x059669, transparent: true, opacity: 0.4 });
    const gyro = new THREE.Mesh(gyroGeo, gyroMat);
    gyro.rotation.x = Math.PI / 2.5;
    group.add(gyro);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const greenLight = new THREE.PointLight(0x10b981, 3.5, 10);
    greenLight.position.set(2.5, 3, 3);
    scene.add(greenLight);

    const amberLight = new THREE.PointLight(0xf59e0b, 2.5, 10);
    amberLight.position.set(-3, -2, -1);
    scene.add(amberLight);

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.8;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.8;
    };
    window.addEventListener('mousemove', onMouseMove);

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Floating
      group.position.y = Math.sin(elapsed * 1.4) * 0.14;
      group.rotation.y = elapsed * 0.4 + mouseX * 0.03;
      group.rotation.x = 0.25 + Math.sin(elapsed * 0.7) * 0.08 + mouseY * 0.02;

      // Orbit satellites around the server
      satellites.forEach((sat, idx) => {
        const speed = 1.2 + idx * 0.3;
        const angle = elapsed * speed + (idx * Math.PI) / 2;
        const rad = 1.9 + (idx % 2) * 0.35;
        sat.position.x = Math.cos(angle) * rad;
        sat.position.z = Math.sin(angle) * rad;
        sat.position.y = Math.sin(elapsed * 2 + idx) * 0.4;
        sat.rotation.x += 0.03;
        sat.rotation.y += 0.02;
      });

      gyro.rotation.z += 0.006;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      slabGeo.dispose();
      slabMat.dispose();
      edgeGeo.dispose();
      edgeMat.dispose();
      satGeo.dispose();
      satMat.dispose();
      gyroGeo.dispose();
      gyroMat.dispose();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-[280px] sm:h-[320px]">
      <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none scale-75" />
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}

/* ─── 3. Torus Knot / Prism (QDOM Technologies - Frontend Developer) ─ */
export function FrontendPrismVisual() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 280;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 3D Torus Knot with Metallic Shading
    const knotGeo = new THREE.TorusKnotGeometry(1.15, 0.32, 100, 16);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x0369a1,
      emissiveIntensity: 0.4,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    group.add(knot);

    // Holographic wireframe overlay
    const knotWireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const knotWire = new THREE.Mesh(knotGeo, knotWireMat);
    group.add(knotWire);

    // Orbiting Floating Gem Chips (HTML/CSS/JS frontend building blocks)
    const chips: THREE.Mesh[] = [];
    const chipGeo = new THREE.OctahedronGeometry(0.24, 0);
    const chipColors = [0x38bdf8, 0x818cf8, 0x34d399];

    chipColors.forEach((col, idx) => {
      const chipMat = new THREE.MeshStandardMaterial({
        color: col,
        emissive: col,
        emissiveIntensity: 0.6,
        roughness: 0.15,
        metalness: 0.8,
      });
      const chip = new THREE.Mesh(chipGeo, chipMat);
      group.add(chip);
      chips.push(chip);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x38bdf8, 4, 10);
    blueLight.position.set(3, 3, 2.5);
    scene.add(blueLight);

    const violetLight = new THREE.PointLight(0xa855f7, 3, 10);
    violetLight.position.set(-3, -2, -2);
    scene.add(violetLight);

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.8;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.8;
    };
    window.addEventListener('mousemove', onMouseMove);

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Multi-axis hypnotic rotation + floating
      group.position.y = Math.sin(elapsed * 1.6) * 0.13;
      group.rotation.x = elapsed * 0.4 + mouseY * 0.02;
      group.rotation.y = elapsed * 0.5 + mouseX * 0.02;

      // Orbit chips around the knot
      chips.forEach((chip, i) => {
        const angle = elapsed * (1.2 + i * 0.4) + (i * Math.PI * 2) / 3;
        const rad = 2.1 + (i % 2) * 0.25;
        chip.position.x = Math.cos(angle) * rad;
        chip.position.z = Math.sin(angle) * rad;
        chip.position.y = Math.sin(elapsed * 2.5 + i) * 0.5;
        chip.rotation.x += 0.04;
        chip.rotation.y += 0.03;
      });

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      knotWireMat.dispose();
      chipGeo.dispose();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-[280px] sm:h-[320px]">
      <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-3xl pointer-events-none scale-75" />
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}

