'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaAws, 
  FaDocker, 
  FaGitAlt, 
  FaJenkins, 
  FaLinux, 
  FaPython,
  FaNetworkWired,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiKubernetes, 
  SiTerraform, 
  SiAnsible, 
  SiGrafana, 
  SiPrometheus,
  SiGooglecloud,
  SiMicrosoftazure,
  SiElasticsearch
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 90 },
        { name: 'Google Cloud', icon: <SiGooglecloud />, level: 80 },
        { name: 'Azure', icon: <SiMicrosoftazure />, level: 75 },
      ],
    },
    {
      title: 'Containerization & Orchestration',
      skills: [
        { name: 'Docker', icon: <FaDocker />, level: 95 },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 85 },
      ],
    },
    {
      title: 'CI/CD & Version Control',
      skills: [
        { name: 'Jenkins', icon: <FaJenkins />, level: 90 },
        { name: 'Git', icon: <FaGitAlt />, level: 95 },
      ],
    },
    {
      title: 'Infrastructure as Code',
      skills: [
        { name: 'Terraform', icon: <SiTerraform />, level: 85 },
        { name: 'Ansible', icon: <SiAnsible />, level: 80 },
      ],
    },
    {
      title: 'Monitoring & Logging',
      skills: [
        { name: 'Prometheus', icon: <SiPrometheus />, level: 85 },
        { name: 'Grafana', icon: <SiGrafana />, level: 80 },
        { name: 'ELK Stack', icon: <SiElasticsearch />, level: 75 },
      ],
    },
    {
      title: 'Operating Systems & Networking',
      skills: [
        { name: 'Linux', icon: <FaLinux />, level: 90 },
        { name: 'Networking', icon: <FaNetworkWired />, level: 80 },
      ],
    },
    {
      title: 'Programming & Databases',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 85 },
        { name: 'Databases', icon: <FaDatabase />, level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
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
              Technical Skills
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="w-20 h-1 bg-cyan-500 mx-auto mb-6"
            ></motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              My expertise spans across various DevOps tools and technologies, enabling me to build efficient, scalable, and automated infrastructure.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-cyan-400 mr-2 text-xl">{skill.icon}</span>
                          <span className="text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <h3 className="text-xl font-semibold text-white mb-4">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['CI/CD', 'DevSecOps', 'Microservices', 'Shell Scripting', 'RESTful APIs', 
                'Agile Methodologies', 'Serverless', 'High Availability', 'Disaster Recovery', 
                'Performance Tuning'].map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;