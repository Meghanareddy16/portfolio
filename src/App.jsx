import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  Database,
  Cloud,
  Code,
  BarChart3,
  Server,
  Settings,
  ChevronDown,
  ExternalLink
} from 'lucide-react'
import profileImage from './assets/meghana-profile.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skills = {
    languages: ['SQL', 'Python (Pandas, NumPy, PySpark)', 'Scala', 'Shell scripting'],
    etl: ['Apache Spark', 'Airflow', 'SSIS', 'Informatica', 'Kafka'],
    databases: ['PostgreSQL/PostGIS', 'Snowflake', 'Redshift', 'Teradata', 'BigQuery'],
    cloud: ['AWS (EMR, Lambda, S3, EKS)', 'Azure (Databricks, Synapse)', 'GCP'],
    visualization: ['Power BI', 'Tableau', 'SSRS', 'Alteryx', 'Excel (Advanced)'],
    devops: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Azure DevOps']
  }

  const experiences = [
    {
      company: 'Tractor Supply Company',
      location: 'Tennessee',
      role: 'Data Engineer',
      period: 'March 2025 – Present',
      achievements: [
        'Developed scalable ETL pipelines using Azure Data Factory (ADF) and SQL to automate ingestion and transformation of HR and operational datasets',
        'Leveraged Databricks and PySpark for distributed data processing, improving pipeline performance by 40%',
        'Designed cloud-native data workflows using Azure Synapse, streamlining analytics across Retail HR systems',
        'Built and maintained Power BI dashboards tracking headcount, turnover, and hiring metrics for executive stakeholders',
        'Automated recurring HR reports using Python scripts, reducing manual work by 70%'
      ]
    },
    {
      company: 'Lithia Motors',
      location: 'United States',
      role: 'Data Engineer/Power BI Developer',
      period: 'January 2023 – February 2025',
      achievements: [
        'Built robust ETL workflows using Azure Data Factory (ADF) and Apache Airflow to support automotive sales and inventory reporting',
        'Processed and transformed large-scale vehicle and customer datasets using Azure Databricks and Snowflake',
        'Integrated Power BI dashboards with real-time KPIs for dealership performance, inventory levels, and finance metrics',
        'Utilized CI/CD pipelines in Azure DevOps to deploy and monitor data workflows in staging and production',
        'Optimized performance of complex SQL queries in Snowflake and PostgreSQL by indexing and query tuning'
      ]
    },
    {
      company: 'Cigna',
      location: 'Hyderabad, India',
      role: 'Data Analyst',
      period: 'July 2021 – July 2022',
      achievements: [
        'Designed and deployed Tableau dashboards to visualize healthcare claims, member trends, and provider performance',
        'Wrote advanced SQL queries on GCP BigQuery to analyze millions of healthcare transactions',
        'Built automated pipelines using Python and Google Cloud Functions to streamline monthly reporting tasks',
        'Maintained HIPAA-compliant data flows across internal and third-party healthcare platforms',
        'Optimized storage and compute cost in GCP using partitioned tables and cost-based alerts'
      ]
    },
    {
      company: 'MetLife',
      location: 'Hyderabad, India',
      role: 'SQL Developer',
      period: 'October 2019 – July 2021',
      achievements: [
        'Developed and optimized complex SQL queries, stored procedures, and views for insurance policy, claims, and risk reporting',
        'Created SSIS packages to perform ETL operations across policy administration and underwriting systems',
        'Generated operational and regulatory reports using SSRS and delivered scheduled distributions to internal teams',
        'Applied CI/CD practices using version control and deployment strategies to support agile BI development',
        'Improved load times by 30% through infrastructure optimization and SSIS job troubleshooting'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-gray-900"
            >
              Meghana Macha
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        </motion.div>
        
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Meghana
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-700 mb-6">
                Data Engineer & Analytics Expert
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                5+ years of experience designing and deploying cloud-native data solutions across automotive, 
                healthcare, and finance verticals. Passionate about building governed, scalable, and 
                maintainable pipelines that power data-driven culture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
                <img
                  src={profileImage}
                  alt="Meghana Macha"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Transforming Data into Insights
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a seasoned Data Engineer with over 5 years of experience, I specialize in designing 
                and implementing robust data pipelines that transform raw data into actionable business insights. 
                My expertise spans across cloud platforms, big data technologies, and advanced analytics.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I have successfully delivered data solutions for Fortune 500 companies in automotive, 
                healthcare, and finance sectors, consistently improving data processing efficiency and 
                enabling data-driven decision making at scale.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                  <div className="text-sm text-gray-600">Companies</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-600" />
                    Data Engineering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Expert in building scalable ETL pipelines, data warehousing, and real-time data processing
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-purple-600" />
                    Cloud Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Proficient in AWS, Azure, and GCP with hands-on experience in cloud-native data solutions
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                    Analytics & BI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Creating interactive dashboards and reports using Power BI, Tableau, and advanced SQL
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 capitalize">
                      {category === 'languages' && <Code className="w-5 h-5 text-blue-600" />}
                      {category === 'etl' && <Server className="w-5 h-5 text-green-600" />}
                      {category === 'databases' && <Database className="w-5 h-5 text-purple-600" />}
                      {category === 'cloud' && <Cloud className="w-5 h-5 text-orange-600" />}
                      {category === 'visualization' && <BarChart3 className="w-5 h-5 text-red-600" />}
                      {category === 'devops' && <Settings className="w-5 h-5 text-gray-600" />}
                      {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </motion.div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-900">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600">
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the key data engineering projects I've worked on, showcasing my expertise 
              in building scalable data solutions and driving business value through analytics.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time HR Analytics Pipeline",
                description: "Built scalable ETL pipelines using Azure Data Factory and Databricks for HR data processing, improving performance by 40%",
                tech: ["Azure Data Factory", "Databricks", "PySpark", "Power BI"],
                company: "Tractor Supply Company"
              },
              {
                title: "Automotive Sales Data Platform",
                description: "Developed robust ETL workflows for automotive sales and inventory reporting using Azure and Snowflake",
                tech: ["Apache Airflow", "Snowflake", "Azure DevOps", "Power BI"],
                company: "Lithia Motors"
              },
              {
                title: "Healthcare Claims Analytics",
                description: "Created HIPAA-compliant data pipelines and Tableau dashboards for healthcare claims analysis",
                tech: ["GCP BigQuery", "Python", "Tableau", "Google Cloud Functions"],
                company: "Cigna"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      {project.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, data engineering challenges, 
              or potential collaborations. Feel free to reach out!
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-600">meghana.macha1607@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                <Phone className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-medium text-gray-900">Phone</div>
                  <div className="text-gray-600">740-814-4042</div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:border-blue-600">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-gray-50 hover:border-gray-600">
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900">Master of Science in Information Technology</div>
                    <div className="text-blue-600">Webster University, Orlando, FL</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Bachelor of Computer Science</div>
                    <div className="text-blue-600">Anurag Group of Institutions, Hyderabad, India</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Meghana Macha. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

