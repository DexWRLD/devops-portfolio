'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'Tech Innovations Inc.',
      period: 'Jan 2022 - Present',
      description: [
        'Led the migration of legacy infrastructure to Kubernetes, resulting in 40% reduction in deployment time',
        'Implemented GitOps workflow with ArgoCD, improving deployment reliability by 35%',
        'Designed and implemented a comprehensive monitoring solution using Prometheus and Grafana',
        'Automated infrastructure provisioning with Terraform, reducing setup time from days to hours',
      ],
      icon: <FaBriefcase />,
      type: 'work',
    },
    {
      title: 'DevOps Engineer',
      company: 'Cloud Solutions Ltd.',
      period: 'Mar 2019 - Dec 2021',
      description: [
        'Developed CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline',
        'Containerized applications using Docker and orchestrated with ECS and Kubernetes',
        'Implemented infrastructure as code using Terraform and CloudFormation',
        'Reduced deployment failures by 60% through automated testing and deployment strategies',
      ],
      icon: <FaBriefcase />,
      type: 'work',
    },
    {
      title: 'AWS Certified Solutions Architect',
      company: 'Amazon Web Services',
      period: 'Feb 2020',
      description: [
        'Professional certification validating expertise in designing distributed systems on AWS',
        'Demonstrated knowledge of AWS services, architectural best practices, and cost optimization',
      ],
      icon: <FaAward />,
      type: 'certification',
    },
    {
      title: 'Systems Administrator',
      company: 'Global Tech Partners',
      period: 'Jun 2017 - Feb 2019',
      description: [
        'Managed Linux and Windows server environments for enterprise clients',
        'Implemented backup and disaster recovery solutions',
        'Automated routine maintenance tasks using Bash and PowerShell scripts',
        'Migrated on-premises infrastructure to AWS cloud services',
      ],
      icon: <FaBriefcase />,
      type: 'work',
    },
    {
      title: 'B.S. Computer Science',
      company: 'University of Technology',
      period: '2013 - 2017',
      description: [
        'Specialized in distributed systems and cloud computing',
        'Capstone project: Automated deployment system for microservices',
        'Relevant coursework: Operating Systems, Networking, Database Systems, Software Engineering',
      ],
      icon: <FaGraduationCap />,
      type: 'education',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">Experience & Education</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and qualifications in the DevOps and cloud infrastructure space.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-800"></div>

          {/* Experience items */}
          <div className="relative z-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`mb-12 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 flex flex-col items-center md:items-end md:pr-12 md:text-right">
                  <div
                    className={`hidden md:block w-full ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">{exp.company}</h4>
                        <p className="text-gray-500 mb-4">{exp.period}</p>
                        <ul className={`space-y-2 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-gray-400">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </div>
                </div>

                {/* Timeline icon */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      exp.type === 'work'
                        ? 'bg-blue-500'
                        : exp.type === 'education'
                        ? 'bg-green-500'
                        : 'bg-yellow-500'
                    }`}
                  >
                    {exp.icon}
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12 block md:hidden">
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">{exp.company}</h4>
                  <p className="text-gray-500 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  {index % 2 !== 0 ? (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">{exp.company}</h4>
                      <p className="text-gray-500 mb-4">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-400">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills button */}
        <div className="text-center mt-12">
          <a
            href="#skills"
            className="inline-block bg-transparent hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold py-3 px-8 rounded-full transition-colors duration-300"
          >
            View My Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience; 