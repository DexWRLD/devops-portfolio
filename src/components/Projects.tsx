'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'cicd', label: 'CI/CD' },
    { id: 'kubernetes', label: 'Kubernetes' },
    { id: 'iac', label: 'Infrastructure as Code' },
    { id: 'monitoring', label: 'Monitoring' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Automated CI/CD Pipeline',
      description: 'Designed and implemented a fully automated CI/CD pipeline using Jenkins, Docker, and Kubernetes for a microservices architecture.',
      image: '/placeholder-project.jpg',
      tags: ['cicd', 'kubernetes'],
      github: 'https://github.com/yourusername/cicd-pipeline',
      demo: 'https://example.com/demo1',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'GitHub Actions', 'ArgoCD'],
    },
    {
      id: 2,
      title: 'Infrastructure as Code Framework',
      description: 'Developed a comprehensive IaC framework using Terraform and Ansible to provision and manage cloud infrastructure across multiple providers.',
      image: '/placeholder-project.jpg',
      tags: ['iac'],
      github: 'https://github.com/yourusername/iac-framework',
      demo: 'https://example.com/demo2',
      technologies: ['Terraform', 'Ansible', 'AWS', 'GCP', 'Azure'],
    },
    {
      id: 3,
      title: 'Kubernetes Monitoring Solution',
      description: 'Implemented a robust monitoring solution for Kubernetes clusters using Prometheus, Grafana, and Alertmanager with custom dashboards and alerts.',
      image: '/placeholder-project.jpg',
      tags: ['kubernetes', 'monitoring'],
      github: 'https://github.com/yourusername/k8s-monitoring',
      demo: 'https://example.com/demo3',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'Alertmanager', 'Loki'],
    },
    {
      id: 4,
      title: 'Serverless Deployment Pipeline',
      description: 'Created a serverless deployment pipeline for Lambda functions and API Gateway using AWS CDK and GitHub Actions.',
      image: '/placeholder-project.jpg',
      tags: ['cicd', 'iac'],
      github: 'https://github.com/yourusername/serverless-pipeline',
      demo: 'https://example.com/demo4',
      technologies: ['AWS Lambda', 'API Gateway', 'AWS CDK', 'GitHub Actions', 'CloudFormation'],
    },
    {
      id: 5,
      title: 'Container Security Scanner',
      description: 'Developed a container security scanning tool that integrates with CI/CD pipelines to detect vulnerabilities in Docker images.',
      image: '/placeholder-project.jpg',
      tags: ['cicd'],
      github: 'https://github.com/yourusername/container-scanner',
      demo: 'https://example.com/demo5',
      technologies: ['Docker', 'Python', 'Trivy', 'Jenkins', 'GitLab CI'],
    },
    {
      id: 6,
      title: 'Multi-Cloud Cost Optimization',
      description: 'Built a cost optimization solution that analyzes and provides recommendations for reducing cloud infrastructure costs across multiple providers.',
      image: '/placeholder-project.jpg',
      tags: ['iac', 'monitoring'],
      github: 'https://github.com/yourusername/cloud-cost-optimizer',
      demo: 'https://example.com/demo6',
      technologies: ['AWS Cost Explorer', 'GCP Billing API', 'Terraform', 'Python', 'React'],
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-2"
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="w-20 h-1 bg-cyan-500 mx-auto mb-6"
            ></motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Explore my portfolio of DevOps projects showcasing automation, infrastructure as code, containerization, and more.
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <p>Project Screenshot</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-700 text-cyan-400 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex justify-between mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <FaGithub className="mr-2" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* More Projects Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-transparent hover:bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 font-medium py-3 px-8 rounded-full transition-colors duration-300"
            >
              View More Projects
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
      </div>
    </section>
  );
};

export default Projects;