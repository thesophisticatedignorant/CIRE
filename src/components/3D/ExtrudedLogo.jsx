import React, { useMemo, useRef, useState, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { Center, Float } from '@react-three/drei';

export default function ExtrudedLogo({ src }) {
    const svgData = useLoader(SVGLoader, src);
    const meshRef = useRef(null);
    const shadowRef = useRef(null);

    const shapes = useMemo(() => {
        return svgData.paths.flatMap((p) => p.toShapes(true));
    }, [svgData]);

    const extrudeSettings = useMemo(() => ({
        depth: 60, // Compensate for 0.005 scaling
        bevelEnabled: true,
        bevelThickness: 5,
        bevelSize: 2,
        bevelSegments: 5,
        material: 0, // Front/Back face index
        extrudeMaterial: 1 // Side/Bevel face index
    }), []);

    useFrame((_, delta) => {
        if (meshRef.current) meshRef.current.rotation.y -= delta * 0.5; // Revert to original speed
        if (shadowRef.current) shadowRef.current.rotation.y -= delta * 0.5;
    });

    // Generate procedural "Worn Foil" Bump Map
    const foilTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');

        // Base
        ctx.fillStyle = '#808080';
        ctx.fillRect(0, 0, 512, 512);

        // Crinkles / Noise
        for (let i = 0; i < 2000; i++) {
            const x = Math.random() * 512;
            const y = Math.random() * 512;
            const s = Math.random() * 50 + 10;
            ctx.fillStyle = Math.random() > 0.5 ? '#ffffff' : '#000000';
            ctx.globalAlpha = 0.05;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.random() * s - s / 2, y + Math.random() * s - s / 2);
            ctx.lineTo(x + Math.random() * s - s / 2, y + Math.random() * s - s / 2);
            ctx.fill();
        }

        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(2, 2); // Repeat for detail
        return tex;
    }, []);

    const materials = useMemo(() => [
        // Face/Cap Material (Worn Rose Gold Foil)
        new THREE.MeshPhysicalMaterial({
            color: '#d4af37', // Rose/Antique Gold (Reference-like)
            metalness: 1.0,
            roughness: 0.4, // Rougher for worn look
            clearcoat: 0.5, // Less polish
            clearcoatRoughness: 0.4,
            bumpMap: foilTexture,
            bumpScale: 0.5, // Strong texture
            emissive: '#c5a059',
            emissiveIntensity: 0.1
        }),
        // Side/Center Material (Black for thick center visible from side)
        new THREE.MeshPhysicalMaterial({
            color: '#000000',
            metalness: 0.2,
            roughness: 0.8,
            emissive: '#000000'
        })
    ], []);

    // Generate and CENTER geometry to ensure rotation is around the middle
    const geometry = useMemo(() => {
        const geo = new THREE.ExtrudeGeometry(shapes, extrudeSettings);
        geo.center(); // Critical: Centers the geometry so (0,0,0) is the middle
        return geo;
    }, [shapes, extrudeSettings]);

    useFrame((_, delta) => {
        if (meshRef.current) meshRef.current.rotation.y -= delta * 0.5; // Original speed
    });

    return (
        <Center>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Scaled up (0.025) to restore visual size at Z=32 */}
                <group scale={[0.025, -0.025, 0.025]}>

                    {/* Main Object */}
                    <mesh ref={meshRef} castShadow receiveShadow material={materials} geometry={geometry}>
                        {/* Geometry is passed as prop */}
                    </mesh>
                </group>
            </Float>
        </Center>
    );
}
