"use client"

import { Button, Card, Divider } from "@nextui-org/react"
import { plans } from "./plans"
import { AccordionItems } from "../_components/accordion"
import {
  Info,
  Zap,
  Shield,
  Globe,
  Server,
  Cpu,
  HardDrive,
  MemoryStick,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import ComparisonTable from "../_components/comparison-table"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useState } from "react"

export default function VpsGamer() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 100])
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const features = [
	{
	  icon: <Server className="h-6 w-6" />,
	  title: "Recursos Dedicados",
	  description: "CPU, RAM e armazenamento exclusivos",
	},
	{
	  icon: <Shield className="h-6 w-6" />,
	  title: "Proteção Avançada",
	  description: "Anti-DDoS e firewall configurável",
	},
	{
	  icon: <Zap className="h-6 w-6" />,
	  title: "Performance Premium",
	  description: "Hardware de última geração",
	},
	{
	  icon: <Globe className="h-6 w-6" />,
	  title: "Conectividade Premium",
	  description: "Rede de alta velocidade no Brasil",
	},
  ]

  const stats = [
	{ value: "99.9%", label: "Uptime" },
	{ value: "10ms", label: "Latência" },
	{ value: "24/7", label: "Suporte" },
	{ value: "1Gbps", label: "Rede" },
  ]

  return (
	<div className="min-h-screen bg-[#0a0a0e] text-white overflow-hidden relative">
	  {/* Background com blurs */}
	  <div className="fixed inset-0 z-0">
		<motion.div className="absolute inset-0" style={{ y: backgroundY }} {...(shouldReduceMotion && { style: {} })}>
		  <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl"></div>
		  <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl"></div>
		  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
		  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
		</motion.div>
	  </div>

	  <section className="relative z-10 max-w-full px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
		{/* Hero Section */}
		<section className="pt-[25%] md:pt-[15%] lg:pt-[7%] mb-20">
		  <div className="text-center mb-12">
			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
			  <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
				<div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
				Servidores VPS RedM
			  </span>
			</motion.div>

			<motion.h1
			  initial={{ opacity: 0, y: 20 }}
			  animate={{ opacity: 1, y: 0 }}
			  transition={{ duration: 0.6, delay: 0.1 }}
			  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
			>
			  {/* {" "} */}
			  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
				VPS RedM
			  </span>{" "}
			  para seus Projetos
			</motion.h1>

			<motion.p
			  initial={{ opacity: 0, y: 20 }}
			  animate={{ opacity: 1, y: 0 }}
			  transition={{ duration: 0.6, delay: 0.2 }}
			  className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
			>
			  Recursos dedicados com a flexibilidade que você precisa. Hardware de ponta, segurança avançada e suporte
			  especializado para projetos que exigem alta performance.
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

		{/* Planos Section - Cards Expansíveis */}
		<section className="py-20" id="plans">
		  <div className="text-center mb-16">
			<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
			  Escolha seu{" "}
			  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
				Plano Ideal
			  </span>
			</h2>
			<p className="text-gray-400 mx-auto text-lg max-w-2xl">
			  Planos VPS RedM com recursos garantidos e performance superior para seus projetos mais exigentes.
			</p>
		  </div>

		  {/* Cards Expansíveis */}
		  <div className="space-y-6 max-w-6xl mx-auto">
			{plans.map((plan, index) => (
			  <motion.div
				key={plan.name}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: index * 0.1 }}
				viewport={{ once: true }}
				className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 rounded-2xl transition-all duration-300"
			  >
				{/* Header do Card */}
				<div className="p-6">
				  <div className="flex items-center justify-between">
					{/* Left Section - Plan Info */}
					<div className="flex items-center gap-4">
					  <button
						onClick={() => setExpandedCard(expandedCard === index ? null : index)}
						className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
					  >
						{expandedCard === index ? (
						  <ChevronUp className="h-4 w-4 text-purple-400" />
						) : (
						  <ChevronDown className="h-4 w-4 text-purple-400" />
						)}
					  </button>
					  <div>
						<h3 className="text-xl font-bold text-white">{plan.name}</h3>
						{/* <p className="text-sm text-gray-400">Ideal para projetos de alta demanda</p> */}
					  </div>
					</div>

					{/* Middle Section - Specifications Grid */}
					<div className="hidden lg:grid grid-cols-3 gap-8">
					  <div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-1">
						  <MemoryStick className="h-4 w-4 text-purple-400" />
						  <span className="font-semibold text-white">{plan.description.ram}</span>
						</div>
						<span className="text-xs text-gray-400">RAM Dedicada</span>
					  </div>
					  <div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-1">
						  <Cpu className="h-4 w-4 text-purple-400" />
						  <span className="font-semibold text-white">{plan.description.cores}</span>
						</div>
						<span className="text-xs text-gray-400">CPU Cores</span>
					  </div>
					  <div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-1">
						  <HardDrive className="h-4 w-4 text-purple-400" />
						  <span className="font-semibold text-white">{plan.description.ssd}</span>
						</div>
						<span className="text-xs text-gray-400">SSD NVMe</span>
					  </div>
					</div>

					{/* Right Section - Price and Button */}
					<div className="flex items-center gap-6">
					  <div className="text-right">
						<div className="flex items-baseline gap-1">
						  <span className="text-2xl md:text-3xl font-bold text-white">R${plan.price}</span>
						  <span className="text-sm text-gray-400"></span>
						</div>
						{/* <div className="flex items-center gap-2 mt-1">
						  <span className="text-xs text-gray-400">Cupom de desconto</span>
						  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium">
							10%OFF
						  </span>
						</div> */}
					  </div>

					  {plan.link ? (
						<Link href={plan.link} target="_blank">
						  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
							Contratar Agora
						  </Button>
						</Link>
					  ) : (
						<Button className="bg-gray-600 text-gray-400 cursor-not-allowed px-6 py-3 rounded-xl" disabled>
						  Sem Estoque
						</Button>
					  )}
					</div>
				  </div>

				  {/* Mobile Specifications */}
				  <div className="lg:hidden mt-4 pt-4 border-t border-white/10">
					<div className="grid grid-cols-3 gap-4">
					  <div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-1">
						  <MemoryStick className="h-4 w-4 text-purple-400" />
						  <span className="font-semibold text-white">{plan.description.ram}</span>
						</div>
						<span className="text-xs text-gray-400">RAM</span>
					  </div>
					  <div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-1">
						  <Cpu className="h-4 w-4 text-purple-400" />
						  <span className="font-semibold text-white">{plan.description.cores}</span>
						</div>
						<span className="text-xs text-gray-400">CPU</span>
					  </div>
					  <div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-1">
						  <HardDrive className="h-4 w-4 text-purple-400" />
						  <span className="font-semibold text-white">{plan.description.ssd}</span>
						</div>
						<span className="text-xs text-gray-400">SSD</span>
					  </div>
					</div>
				  </div>
				</div>

				{/* Expanded Content */}
				<motion.div
				  initial={false}
				  animate={{ height: expandedCard === index ? "auto" : 0 }}
				  transition={{ duration: 0.3 }}
				  className="overflow-hidden"
				>
				  <div className="px-6 pb-6 border-t border-white/10">
					<div className="pt-6">
					  <h4 className="text-lg font-semibold text-white mb-4">Recursos inclusos:</h4>
					  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{plan.description.attrs.map((attr, attrIndex) => (
						  <div key={attrIndex} className="flex items-center gap-3">
							<CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
							<span className="text-gray-300 text-sm">{attr}</span>
						  </div>
						))}
					  </div>
					</div>
				  </div>
				</motion.div>
			  </motion.div>
			))}
		  </div>
		</section>

		{/* CTA Section */}
		<section className="py-16">
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
		</section>
		
		{/* FAQ Section */}
		<section className="mt-16 mb-20">
		  <div className="text-center mb-12">
			<h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
			  Perguntas Frequentes
			</h2>
			<p className="text-gray-400 max-w-2xl mx-auto">Tire suas dúvidas sobre nossos serviços VPS RedM.</p>
		  </div>
		  <AccordionItems />
		</section>

		{/* Support Section */}
		<section className="mt-16">
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
				title: "Consultoria Especializada",
				description: "Ajudamos você a escolher a melhor configuração para seu projeto específico.",
				link: "https://discord.gg/rGP7prMqF3",
				buttonText: "Falar com Consultor",
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
