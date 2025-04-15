"use client"

import { useState } from "react"
import { Cpu, Server, Zap, ChevronRight, Check, Shield, Wifi, Globe, HardDrive, Award, Sparkles } from "lucide-react"

export default function ProcessorComparison() {
  const [selectedProcessor, setSelectedProcessor] = useState<"intel" | "ryzen">("ryzen")
  const [selectedPlan, setSelectedPlan] = useState<number>(2) // Default to recommended plan

  // Configuração dos planos com URLs para cada plano
  const processorPlans = {
    intel: [
      {
        ram: "4GB",
        core: "2vCore",
        speed: "3.8/5.0 GHz",
        storage: "40GB",
        price: "79,90",
        unavailable: true,
        url: "https://neonhost.com.br/intel/4gb",
        badge: "Básico",
      },
      {
        ram: "6GB",
        core: "3vCore",
        speed: "3.8/5.0 GHz",
        storage: "50GB",
        price: "139,90",
        unavailable: true,
        url: "https://neonhost.com.br/intel/6gb",
        badge: "Popular",
      },
      {
        ram: "8GB",
        core: "4vCore",
        speed: "3.8/5.0 GHz",
        storage: "60GB",
        price: "189,90",
        unavailable: true,
        url: "https://neonhost.com.br/intel/8gb",
        badge: "Recomendado",
      },
      {
        ram: "10GB",
        core: "5vCore",
        speed: "3.8/5.0 GHz",
        storage: "70GB",
        price: "249,90",
        unavailable: true,
        url: "https://neonhost.com.br/intel/10gb",
      },
      {
        ram: "12GB",
        core: "6vCore",
        speed: "3.8/5.0 GHz",
        storage: "80GB",
        price: "279,90",
        unavailable: true,
        url: "https://neonhost.com.br/intel/12gb",
      },
    ],
    ryzen: [
      {
        ram: "4GB",
        core: "2vCore",
        speed: "3.7/4.8 GHz",
        storage: "40GB",
        price: "89,90",
        url: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-2",
        badge: "Básico",
      },
      {
        ram: "6GB",
        core: "3vCore",
        speed: "3.7/4.8 GHz",
        storage: "60GB",
        price: "119,90",
        url: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
        badge: "Popular",
      },
      {
        ram: "8GB",
        core: "4vCore",
        speed: "3.7/4.8 GHz",
        storage: "70GB",
        price: "199,90",
        url: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-4",
        badge: "Recomendado",
      },
      {
        ram: "12GB",
        core: "5vCore",
        speed: "3.7/4.8 GHz",
        storage: "80GB",
        price: "259,90",
        url: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-5",
      },
      {
        ram: "16GB",
        core: "6vCore",
        speed: "3.7/4.8 GHz",
        storage: "120GB",
        price: "289,90",
        unavailable: false,
        url: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-amd-ryzen-6",
      },
    ],
  }

  // Configuração dos serviços com URLs
  const services = [
    {
      title: "VPS Neon",
      price: "69",
      desc: "VPS de alta performance no Brasil com Anti-DDoS PRO",
      icon: "gamepad",
      url: "https://neonhost.com.br/vps-neon",
    },
    {
      title: "VPS Trader",
      price: "74",
      desc: "Servidores para trader com tráfego mensal ilimitado",
      icon: "target",
      url: "https://neonhost.com.br/vps-trader",
    },
    {
      title: "Semi-Dedicados",
      price: "305",
      desc: "Servidores robustos Windows e Linux no Brasil",
      icon: "server",
      url: "https://neonhost.com.br/semi-dedicado",
    },
    {
      title: "Servidores Dedicados",
      price: "1550",
      desc: "Servidores físicos de alta performance no Brasil",
      icon: "cpu",
      url: "https://neonhost.com.br/dedicado",
    },
  ]

  // Características dos processadores
  const processorFeatures = {
    intel: [
      "Excelente desempenho single-core",
      "Ideal para aplicações que exigem alta frequência",
      "Tecnologia Hyper-Threading",
      "Suporte a instruções AVX-512",
    ],
    ryzen: [
      "Superior em multitasking",
      "Melhor custo-benefício",
      "Maior número de núcleos físicos",
      "Tecnologia Precision Boost",
    ],
  }

  return (
    <div className="bg-[#0e1117] text-white min-h-screen">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-[#0a0a14] py-16">
        <div className="absolute inset-0 opacity-20">
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff3e9d] to-[#9553ff]">
            Servidores de Alto Desempenho
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            Escolha a infraestrutura ideal para seu projeto com nossos servidores otimizados para máxima performance
          </p>

          {/* Processor selector */}
          <div className="inline-flex bg-[#161625] p-1 rounded-full">
            <button
              onClick={() => setSelectedProcessor("intel")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedProcessor === "intel" ? "bg-[#2a1a3a] text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Intel Core
            </button>
            <button
              onClick={() => setSelectedProcessor("ryzen")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedProcessor === "ryzen" ? "bg-[#7e22ce] text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              AMD Ryzen
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Processor overview */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Processor image/icon */}
          <div className="w-full md:w-1/3">
            <div
              className={`h-full rounded-2xl p-8 flex flex-col items-center justify-center text-center ${
                selectedProcessor === "intel" ? "bg-[#2a1a3a]/20" : "bg-[#7e22ce]/20"
              }`}
            >
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
                  selectedProcessor === "intel" ? "bg-[#2a1a3a]" : "bg-[#7e22ce]"
                }`}
              >
                <Cpu size={40} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {selectedProcessor === "intel" ? "Intel Core i7" : "AMD Ryzen 9"}
              </h2>
              <p className="text-gray-400 mb-6">
                {selectedProcessor === "intel"
                  ? "Processador de alta performance com excelente desempenho single-core"
                  : "Processador avançado com superior desempenho multi-core"}
              </p>

              <div className="space-y-3 text-left w-full">
                {processorFeatures[selectedProcessor].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check
                      size={18}
                      className={`mt-0.5 ${selectedProcessor === "intel" ? "text-[#2a1a3a]" : "text-[#9553ff]"}`}
                    />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plan selector */}
          <div className="w-full md:w-2/3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Escolha seu plano</h2>
              {selectedProcessor === "ryzen" && (
                <span className="bg-[#7e22ce] text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Zap size={12} />
                  Recomendado para jogos
                </span>
              )}
            </div>

            {/* Plan slider */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Básico</span>
                <span className="text-sm text-gray-400">Avançado</span>
              </div>
              <input
                type="range"
                min="0"
                max="4"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(Number.parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${selectedProcessor === "intel" ? "#2a1a3a" : "#7e22ce"} 0%, ${
                    selectedProcessor === "intel" ? "#2a1a3a" : "#7e22ce"
                  } ${(selectedPlan / 4) * 100}%, #374151 ${(selectedPlan / 4) * 100}%, #374151 100%)`,
                }}
              />

              <div className="flex justify-between mt-2">
                {processorPlans[selectedProcessor].map((plan, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full cursor-pointer ${
                      selectedPlan === index
                        ? selectedProcessor === "intel"
                          ? "bg-[#2a1a3a] ring-2 ring-[#2a1a3a]/50"
                          : "bg-[#7e22ce] ring-2 ring-[#7e22ce]/50"
                        : "bg-gray-600"
                    }`}
                    onClick={() => setSelectedPlan(index)}
                  />
                ))}
              </div>
            </div>

            {/* Selected plan details */}
            <div className="bg-[#151922] rounded-2xl overflow-hidden border border-gray-800">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      {processorPlans[selectedProcessor][selectedPlan].ram} RAM
                    </h3>
                    <p className="text-sm text-gray-400">
                      {processorPlans[selectedProcessor][selectedPlan].core} •{" "}
                      {processorPlans[selectedProcessor][selectedPlan].speed}
                    </p>
                  </div>
                  {processorPlans[selectedProcessor][selectedPlan].badge && (
                    <span
                      className={`text-xs px-3 py-1.5 rounded-full ${
                        processorPlans[selectedProcessor][selectedPlan].badge === "Recomendado"
                          ? "bg-[#7e22ce] text-white"
                          : processorPlans[selectedProcessor][selectedPlan].badge === "Popular"
                            ? "bg-[#9333ea] text-white"
                            : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {processorPlans[selectedProcessor][selectedPlan].badge}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-[#1a1f2a] rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu size={16} className={selectedProcessor === "intel" ? "text-[#2a1a3a]" : "text-[#7e22ce]"} />
                      <span className="text-xs text-gray-400">Processador</span>
                    </div>
                    <p className="font-medium">{processorPlans[selectedProcessor][selectedPlan].core}</p>
                  </div>

                  <div className="bg-[#1a1f2a] rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Server
                        size={16}
                        className={selectedProcessor === "intel" ? "text-[#2a1a3a]" : "text-[#7e22ce]"}
                      />
                      <span className="text-xs text-gray-400">Armazenamento</span>
                    </div>
                    <p className="font-medium">{processorPlans[selectedProcessor][selectedPlan].storage}GB NVMe</p>
                  </div>

                  <div className="bg-[#1a1f2a] rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Wifi size={16} className="text-green-500" />
                      <span className="text-xs text-gray-400">Internet</span>
                    </div>
                    <p className="font-medium">1Gbps</p>
                  </div>

                  <div className="bg-[#1a1f2a] rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe size={16} className="text-green-500" />
                      <span className="text-xs text-gray-400">Localização</span>
                    </div>
                    <p className="font-medium">São Paulo</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-800">
                  <div>
                    <div className="flex items-end gap-1">
                      <span className="text-xs text-gray-400 mb-1">R$</span>
                      <span className="text-3xl font-bold text-[#ff3e9d]">
                        {processorPlans[selectedProcessor][selectedPlan].price}
                      </span>
                      <span className="text-xs text-gray-400 mb-1">/mês</span>
                    </div>
                  </div>

                  {processorPlans[selectedProcessor][selectedPlan].unavailable ? (
                    <button
                      className="w-full md:w-auto bg-red-500/80 text-white px-6 py-3 rounded-lg text-sm font-medium opacity-90 cursor-not-allowed"
                      disabled
                    >
                      Indisponível no momento
                    </button>
                  ) : (
                    <a
                      href={processorPlans[selectedProcessor][selectedPlan].url}
                      className={`w-full md:w-auto ${
                        selectedProcessor === "intel" ? "bg-[#2a1a3a]" : "bg-[#7e22ce]"
                      } text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg ${
                        selectedProcessor === "intel" ? "hover:shadow-[#2a1a3a]/30" : "hover:shadow-[#7e22ce]/30"
                      } flex items-center justify-center gap-2`}
                    >
                      Contratar agora
                      <ChevronRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="text-[#ff3e9d]" size={24} />
            <h2 className="text-2xl font-bold">Recursos inclusos em todos os planos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Anti-DDoS Avançado",
                desc: "Proteção contra ataques DDoS com mitigação automática e análise de tráfego em tempo real",
                icon: Shield,
              },
              {
                title: "Uptime Garantido",
                desc: "Disponibilidade de 99.9% com monitoramento constante e infraestrutura redundante",
                icon: Check,
              },
              {
                title: "Painel de Controle",
                desc: "Interface intuitiva para gerenciar seu servidor com facilidade e eficiência",
                icon: Cpu,
              },
              {
                title: "Backups Automáticos",
                desc: "Sistema de backup diário com retenção de 7 dias para garantir a segurança dos seus dados",
                icon: HardDrive,
              },
              {
                title: "Suporte Especializado",
                desc: "Equipe técnica disponível 24/7 para resolver qualquer problema ou dúvida",
                icon: Award,
              },
              {
                title: "Ativação Instantânea",
                desc: "Seu servidor estará pronto para uso em minutos após a confirmação do pagamento",
                icon: Sparkles,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#151922] to-[#1a1f2a] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#2a1a3a] w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="text-[#ff3e9d]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other services */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Server className="text-[#ff3e9d]" size={24} />
            <h2 className="text-2xl font-bold">Outros serviços</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#151922] rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-gray-700"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#2a1a3a] w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                      {service.icon === "gamepad" && <Cpu className="text-[#ff3e9d]" size={24} />}
                      {service.icon === "target" && <Server className="text-[#ff3e9d]" size={24} />}
                      {service.icon === "server" && <Server className="text-[#ff3e9d]" size={24} />}
                      {service.icon === "cpu" && <Cpu className="text-[#ff3e9d]" size={24} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-end gap-1">
                      <span className="text-xs text-gray-400 mb-1">A partir de R$</span>
                      <span className="text-2xl font-bold text-[#ff3e9d]">{service.price}</span>
                      <span className="text-xs text-gray-400 mb-1">/mês</span>
                    </div>

                    <a
                      href={service.url}
                      className="bg-[#7e22ce]/20 text-[#ff3e9d] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[#7e22ce]/30 flex items-center gap-1"
                    >
                      Ver planos
                      <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
