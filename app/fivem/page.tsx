"use client"

import { Button, Card, Divider } from "@nextui-org/react"
import { plans } from "./plans"
import { AccordionItems } from "../_components/accordion"
import { Info, Zap, Shield, Clock, Globe } from "lucide-react"
import Link from "next/link"
import ComparisonTable from "../_components/comparison-table"
import { CardProduts } from "../_components/card-products"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

export default function VpsGamer() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 100])

  const features = [
	{
	  icon: <Zap className="h-6 w-6" />,
	  title: "Processadores AMD Ryzen",
	  description: "Última geração para máxima performance",
	},
	{
	  icon: <Shield className="h-6 w-6" />,
	  title: "Proteção Anti-DDoS",
	  description: "Defesa avançada contra ataques",
	},
	{
	  icon: <Clock className="h-6 w-6" />,
	  title: "SSD NVMe",
	  description: "Armazenamento ultra-rápido",
	},
	{
	  icon: <Globe className="h-6 w-6" />,
	  title: "Rede Premium",
	  description: "Conectividade de alta velocidade",
	},
  ]

  const stats = [
	{ value: "99.9%", label: "Uptime" },
	{ value: "5ms", label: "Latência" },
	{ value: "24/7", label: "Suporte" },
	{ value: "1Gbps", label: "Rede" },
  ]

  return (
	<div className="min-h-screen bg-[#0a0a0e] text-white overflow-hidden relative">
	  {/* Background com blurs - igual à página principal */}
	  <div className="fixed inset-0 z-0">
		<motion.div className="absolute inset-0" style={{ y: backgroundY }} {...(shouldReduceMotion && { style: {} })}>
		  {/* Blur no canto superior esquerdo */}
		  <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl"></div>

		  {/* Blur no canto inferior direito */}
		  <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl"></div>

		  {/* Elementos centrais mais sutis */}
		  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
		  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
		</motion.div>
	  </div>

	  <section className="relative z-10 max-w-full px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
		{/* Hero Section Renovada */}
		<section className="pt-[25%] md:pt-[15%] lg:pt-[7%] mb-20">
		  <div className="text-center mb-12">
			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
			  <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
				<div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
				VPS Premium no Brasil
			  </span>
			</motion.div>

			<motion.h1
			  initial={{ opacity: 0, y: 20 }}
			  animate={{ opacity: 1, y: 0 }}
			  transition={{ duration: 0.6, delay: 0.1 }}
			  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
			>
			  Servidores VPS{" "}
			  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
				FiveM
			  </span>{" "}
			</motion.h1>

			<motion.p
			  initial={{ opacity: 0, y: 20 }}
			  animate={{ opacity: 1, y: 0 }}
			  transition={{ duration: 0.6, delay: 0.2 }}
			  className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
			>
			  Servidores virtuais de alta performance com tecnologia de ponta, otimizados para jogos e aplicações
			  críticas. Experimente a diferença Neon.
			</motion.p>

			{/* Stats em linha */}
			<motion.div
			  initial={{ opacity: 0, y: 20 }}
			  animate={{ opacity: 1, y: 0 }}
			  transition={{ duration: 0.6, delay: 0.3 }}
			  className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8"
			>
			  {stats.map((stat, index) => (
				<div key={index} className="text-center">
				  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
					{stat.value}
				  </div>
				  <div className="text-sm text-gray-400">{stat.label}</div>
				</div>
			  ))}
			</motion.div>
		  </div>
		</section>

		{/* Features Grid */}
		<section className="mb-20">
		  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{features.map((feature, index) => (
			  <motion.div
				key={index}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: index * 0.1 }}
				viewport={{ once: true }}
				className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group backdrop-blur-sm"
			  >
				<div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
				  {feature.icon}
				</div>
				<h3 className="font-bold text-white mb-2">{feature.title}</h3>
				<p className="text-gray-400 text-sm">{feature.description}</p>
			  </motion.div>
			))}
		  </div>
		</section>

		{/* Planos Section - Cards mais largos */}
		<section className="py-20 container mx-auto px-4 lg:px-6" id="plans">
		  <div className="text-center mb-12">
			<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
			  Escolha seu{" "}
			  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
				Plano Ideal
			  </span>
			</h2>
			<p className="text-gray-400 mx-auto text-lg max-w-2xl">
			  Planos flexíveis com recursos dedicados e suporte especializado para seu projeto.
			</p>
		  </div>

		  {/* Cards mais largos - mudança no grid */}
		  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-full mx-auto">
			{plans.map((plan) => (
			  <CardProduts
				key={plan.name}
				price={plan.price}
				link={plan.link}
				description={plan.description}
				name={plan.name}
			  />
			))}
		  </div>
		</section>

		{/* CTA Section */}
		<section className="py-16 px-4 lg:px-6">
		  <div className="container mx-auto">
			<div className="rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-8 md:p-12 text-center backdrop-blur-sm">
			  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
				Precisa de uma configuração personalizada?
			  </h2>
			  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
				Nossa equipe de especialistas pode criar uma solução sob medida para suas necessidades específicas.
			  </p>
			  <Button className="bg-white text-purple-600 hover:bg-white/90 font-bold px-8 py-3">
				Falar com Especialista
			  </Button>
			</div>
		  </div>
		</section>

		<ComparisonTable />

		<Divider className="mt-20" />

		{/* FAQ Section */}
		<section className="mt-16 mb-20 px-4 lg:px-6">
		  <div className="text-center mb-12">
			<h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
			  Perguntas Frequentes
			</h2>
			<p className="text-gray-400 max-w-2xl mx-auto">
			  Tire suas dúvidas sobre nossos serviços VPS FiveM e comece hoje mesmo.
			</p>
		  </div>
		  <AccordionItems />
		</section>

		{/* Support Section */}
		<section className="mt-16 px-4 lg:px-6">
		  <div className="text-center mb-12">
			<h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
			  Suporte Especializado
			</h2>
			<p className="text-gray-400 max-w-2xl mx-auto">
			  Nossa equipe está pronta para ajudar você 24 horas por dia, 7 dias por semana.
			</p>
		  </div>

		  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
			{[
			  {
				icon: <Info size={48} />,
				title: "Configuração Assistida",
				description: "Ajudamos você a configurar seu servidor do zero com as melhores práticas.",
				link: "https://discord.gg/rGP7prMqF3",
				buttonText: "Solicitar Configuração",
			  },
			  {
				icon: <Info size={48} />,
				title: "Suporte 24/7",
				description:
				  "Suporte técnico especializado disponível 24 horas por dia para resolver qualquer problema.",
				link: "https://discord.gg/rGP7prMqF3",
				buttonText: "Acessar Suporte",
			  },
			  {
				icon: <Info size={48} />,
				title: "Central de Ajuda",
				description: "Base de conhecimento com tutoriais e guias para otimizar seu servidor.",
				link: "https://app.neonhost.com.br/submitticket.php?step=2&deptid=1",
				buttonText: "Ver Tutoriais",
			  },
			].map((item, index) => (
			  <Card
				key={index}
				className="p-6 border-none bg-white/5 hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm"
			  >
				<div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
				  {item.icon}
				</div>
				<h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
				<p className="text-gray-400 mb-6">{item.description}</p>
				<Link href={item.link} target="_blank">
				  <Button variant="ghost" className="w-full">
					{item.buttonText}
				  </Button>
				</Link>
			  </Card>
			))}
		  </div>
		</section>
	  </section>
	</div>
  )
}
