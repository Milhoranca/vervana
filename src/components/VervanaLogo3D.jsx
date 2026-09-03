import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const VervanaLogo3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cleanupFn = () => {};

    try {
      const width = container.clientWidth || 680;
      const height = container.clientHeight || 440;

      // 1. CENA E CÂMERA 3D
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 1000);
      camera.position.set(0, 0, 290);

      // 2. RENDERIZADOR WEBGL FÍSICO COM TONEMAPPING
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.8;
      container.appendChild(renderer.domElement);

    // 3. MAPA DE REFLEXO STUDIO HDRI LINEAR
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envCanvas = document.createElement('canvas');
    envCanvas.width = 1024;
    envCanvas.height = 512;
    const ctx = envCanvas.getContext('2d');

    const bgGrad = ctx.createLinearGradient(0, 0, 1024, 512);
    bgGrad.addColorStop(0, '#FFFFFF');
    bgGrad.addColorStop(0.35, '#E2E8F0');
    bgGrad.addColorStop(0.7, '#1E293B');
    bgGrad.addColorStop(1, '#0F172A');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1024, 512);

    const topReflect = ctx.createLinearGradient(0, 30, 1024, 160);
    topReflect.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    topReflect.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
    topReflect.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = topReflect;
    ctx.fillRect(0, 30, 1024, 130);

    const limeAccent = ctx.createLinearGradient(0, 260, 1024, 320);
    limeAccent.addColorStop(0, 'rgba(154, 255, 28, 0)');
    limeAccent.addColorStop(0.5, 'rgba(154, 255, 28, 0.75)');
    limeAccent.addColorStop(1, 'rgba(154, 255, 28, 0)');
    ctx.fillStyle = limeAccent;
    ctx.fillRect(0, 260, 1024, 60);

    const envTexture = new THREE.CanvasTexture(envCanvas);
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    const envMap = pmremGenerator.fromEquirectangular(envTexture).texture;
    scene.environment = envMap;

    // 4. GEOMETRIA EXTRUDADA 3D FIEL AO VETOR VERVANA
    const shape = new THREE.Shape();
    const points = [
      [36.352, 65.566],
      [132.504, 116.859],
      [96.695, 65.566],
      [220.215, 0],
      [145.148, 179.148],
      [0, 65.773],
      [220.215, 0]
    ];

    const centerX = 110.1;
    const centerY = 89.5;
    const scale = 0.66;

    shape.moveTo((points[0][0] - centerX) * scale, (centerY - points[0][1]) * scale);
    for (let i = 1; i < points.length; i++) {
      shape.lineTo((points[i][0] - centerX) * scale, (centerY - points[i][1]) * scale);
    }

    const extrudeSettings = {
      steps: 2,
      depth: 26,
      bevelEnabled: true,
      bevelThickness: 3.5,
      bevelSize: 2.2,
      bevelSegments: 5
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();
    geometry.computeVertexNormals();

    // 5. MATERIAL DE CRISTAL DE VIDRO VERDE NEON (#9AFF1C)
    const frontCrystalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x9AFF1C,
      metalness: 0.32,
      roughness: 0.01,
      transmission: 0.68,
      thickness: 7.5,
      ior: 1.58,
      reflectivity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.01,
      specularIntensity: 1.0,
      specularColor: new THREE.Color(0xffffff),
      attenuationColor: new THREE.Color(0x003740),
      attenuationDistance: 26,
      opacity: 0.98
    });

    const sideWallMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x003740,
      metalness: 0.4,
      roughness: 0.03,
      transmission: 0.38,
      thickness: 9.0,
      ior: 1.62,
      reflectivity: 0.92,
      clearcoat: 0.8,
      clearcoatRoughness: 0.02,
      opacity: 0.98
    });

    const logoMesh = new THREE.Mesh(geometry, [frontCrystalMaterial, sideWallMaterial]);

    const baseRotationX = 0.20;
    const baseRotationY = -0.28;
    logoMesh.rotation.x = baseRotationX;
    logoMesh.rotation.y = baseRotationY;
    logoMesh.scale.set(0.15, 0.15, 0.15);

    scene.add(logoMesh);

    // 6. ILUMINAÇÃO DE ESTÚDIO
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 6.0);
    keyLight.position.set(220, 280, 240);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x9AFF1C, 4.0);
    fillLight.position.set(-240, -180, 140);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 4.8);
    rimLight.position.set(80, 220, -160);
    scene.add(rimLight);

    // 7. ANIMAÇÃO, MOUSE E ROTAÇÃO 100% VINCULADA DIRETA E RESPONSIVA AO SCROLL
    let animationFrameId;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentScrollY = 0;
    const clock = new THREE.Clock();

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      const y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;
      targetMouseY = x * 0.12;
      targetMouseX = y * -0.12;
    };

    const handleScroll = () => {
      currentScrollY = window.scrollY || window.pageYOffset || 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Animação de entrada 100% suave do modelo 3D (escala gradual sem fade)
      if (logoMesh.scale.x < 0.999) {
        const nextScale = THREE.MathUtils.lerp(logoMesh.scale.x, 1, 0.045);
        logoMesh.scale.setScalar(nextScale);
      }

      // Flutuação compacta
      logoMesh.position.y = Math.sin(elapsedTime * 1.5) * 2.5;

      // Rotação fluida vinculada ao scroll
      const scrollRotationX = currentScrollY * 0.0055;
      const scrollRotationY = currentScrollY * 0.002;

      const targetX = baseRotationX + targetMouseX + scrollRotationX;
      const targetY = baseRotationY + targetMouseY + scrollRotationY;

      // Interpolação responsiva para acompanhar o scroll
      logoMesh.rotation.x += (targetX - logoMesh.rotation.x) * 0.1;
      logoMesh.rotation.y += (targetY - logoMesh.rotation.y) * 0.1;

      // Desaparecimento suave na interseção passando por trás da sombra de #engineers
      const engineersSection = document.getElementById('engineers');
      if (engineersSection) {
        const rect = engineersSection.getBoundingClientRect();
        const fadeStart = window.innerHeight * 0.85;
        const fadeEnd = window.innerHeight * 0.35;
        let opacity = 1;
        if (rect.top <= fadeStart) {
          opacity = Math.max(0, Math.min(1, (rect.top - fadeEnd) / (fadeStart - fadeEnd)));
        }
        if (container.parentElement) {
          const smoothOp = Math.pow(opacity, 1.4);
          container.parentElement.style.opacity = smoothOp;
          container.parentElement.style.visibility = smoothOp <= 0.002 ? 'hidden' : 'visible';
        }
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

      window.addEventListener('resize', handleResize);

      cleanupFn = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        geometry.dispose();
        frontCrystalMaterial.dispose();
        sideWallMaterial.dispose();
        envTexture.dispose();
        pmremGenerator.dispose();
      };
    } catch (e) {
      console.warn("VervanaLogo3D init failed:", e);
    }

    return () => cleanupFn();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="three-glass-canvas-container"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible'
      }}
    />
  );
};
