'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#00b7ff"
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          ref={ref}
          className="text-center md:text-left md:w-1/2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.h2
            custom={0}
            variants={textVariants}
            className="text-cyan-400 text-xl md:text-2xl font-semibold mb-2"
          >
            Hello, I'm
          </motion.h2>
          <motion.h1
            custom={1}
            variants={textVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Your Name
          </motion.h1>
          <motion.h3
            custom={2}
            variants={textVariants}
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
          >
            DevOps Engineer & Cloud Architect
          </motion.h3>
          <motion.p
            custom={3}
            variants={textVariants}
            className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
          >
            Specializing in building robust CI/CD pipelines, containerization, infrastructure as code, and cloud-native solutions.
          </motion.p>
          <motion.div
            custom={4}
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <div className="hidden md:block md:w-1/2">
          {/* This space is intentionally left empty as the 3D animation serves as the visual element */}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;