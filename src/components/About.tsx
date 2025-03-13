'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FaServer, FaDocker, FaCloud, FaGitAlt } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const stats = [
    { icon: <FaServer className="w-6 h-6" />, value: '50+', label: 'CI/CD Pipelines' },
    { icon: <FaDocker className="w-6 h-6" />, value: '100+', label: 'Containers Deployed' },
    { icon: <FaCloud className="w-6 h-6" />, value: '3+', label: 'Cloud Platforms' },
    { icon: <FaGitAlt className="w-6 h-6" />, value: '1000+', label: 'Git Commits' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Column */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] w-full md:h-[500px] rounded-lg overflow-hidden">
              {/* Replace with your own image */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 z-10 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white text-center p-4 z-0">
                <p>Your professional photo here</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"></div>
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold text-white mb-2"
              >
                About Me
              </motion.h2>
              <motion.div 
                variants={itemVariants}
                className="w-20 h-1 bg-cyan-500 mb-6"
              ></motion.div>
            </div>

            <motion.p variants={itemVariants} className="text-gray-300">
              I'm a passionate DevOps Engineer with expertise in automating and optimizing critical deployments in cloud environments. With a strong background in CI/CD, containerization, and infrastructure as code, I help organizations build scalable and resilient systems.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300">
              My approach combines technical expertise with a deep understanding of business needs, allowing me to implement solutions that not only work technically but also align with organizational goals.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="text-cyan-400 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Let's work together
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;