"use client"

import { useState, useEffect } from "react"
import { Cpu, Server, Zap, ChevronRight, Check, Shield, Wifi, Globe } from 'lucide-react'

export default function ProcessorComparison() {
  const [selectedProcessor, setSelectedProcessor] = useState<"intel" | "ryzen">("ryzen")
  const [animateRows, setAnimateRows] = useState(false)

  // Efeito para animar as linhas quando o processador muda
  useEffect(() => {
    setAnimateRows(false)
    setTimeout(() => setAnimateRows(true), 100)
  }, [selectedProcessor])

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
        badge: "Básico"
      },
      { 
        ram: "6GB", 
        core: "3vCore", 
        speed: "3.8/5.0 GHz", 
        storage: "50GB", 
        price: "139,90",
        unavailable: true,
        url: "https://neonhost.com.br/intel/6gb",
        badge: "Popular"
      },
      { 
        ram: "8GB", 
        core: "4vCore", 
        speed: "3.8/5.0 GHz", 
        storage: "60GB", 
        price: "189,90",
        unavailable: true,
        url: "https://neonhost.com.br/intel/8gb",
        badge: "Recomendado"
      },
      { 
        ram: "10GB", 
        core: "5vCore", 
        speed: "3.8/5.0 GHz", 
        storage: "70GB", 
        price: "249,90", 
        unavailable: true,
        url: "https://neonhost.com.br/intel/10gb"
      },
      { 
        ram: "12GB", 
        core: "6vCore", 
        speed: "3.8/5.0 GHz", 
        storage: "80GB", 
        price: "279,90", 
        unavailable: true,
        url: "https://neonhost.com.br/intel/12gb"
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
        badge: "Básico"
      },
      { 
        ram: "6GB", 
        core: "3vCore", 
        speed: "3.7/4.8 GHz", 
        storage: "60GB", 
        price: "119,90",
        url: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
        badge: "Popular"
      },
      { 
        ram: "8GB", 
        core: "4vCore", 
        speed: "3.7/4.8 GHz", 
        storage: "70GB", 
        price: "199,90",
        url: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-4",
        badge: "Recomendado"
      },
      { 
        ram: "12GB", 
        core: "5vCore", 
        speed: "3.7/4.8 GHz", 
        storage: "80GB", 
        price: "259,90", 
        url: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-5"
      },
      { 
        ram: "16GB", 
        core: "6vCore", 
        speed: "3.7/4.8 GHz", 
        storage: "120GB", 
        price: "289,90", 
        unavailable: false,
        url: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-amd-ryzen-6"
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
      url: "https://neonhost.com.br/vps-neon"
    },
    { 
      title: "VPS Trader", 
      price: "74", 
      desc: "Servidores para trader com tráfego mensal ilimitado", 
      icon: "target",
      url: "https://neonhost.com.br/vps-trader"
    },
    { 
      title: "Semi-Dedicados", 
      price: "305", 
      desc: "Servidores robustos Windows e Linux no Brasil", 
      icon: "server",
      url: "https://neonhost.com.br/semi-dedicado"
    },
    {
      title: "Servidores Dedicados",
      price: "1550",
      desc: "Servidores físicos de alta performance no Brasil",
      icon: "cpu",
      url: "https://neonhost.com.br/dedicado"
    },
  ]

  return (
    <div className="bg-[#0e1117] text-white min-h-screen p-6">

      {/* Main content */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#ff3e9d] animate-fadeIn">
          Desbloqueie o potencial do seu projeto
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto animate-fadeIn animation-delay-200">
          Nossa infraestrutura avançada e suporte técnico especializado oferecem desempenho, segurança e escalabilidade
          para impulsionar seu sucesso.
        </p>

        {/* Processor comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {/* Intel i7 Card */}
          <button
            className={`text-left bg-[#f8f0ff] border border-[#e6d8f3] rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] ${
              selectedProcessor === "intel"
                ? "ring-2 ring-[#0066cc] shadow-lg shadow-[#0066cc]/20"
                : "opacity-90 hover:opacity-100"
            }`}
            onClick={() => setSelectedProcessor("intel")}
          >
            <div className="bg-[#f8f0ff] flex flex-col items-center justify-center p-8 text-center">
              <div className="text-[#0066cc] mb-3">
                <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto">
                  <circle cx="30" cy="30" r="25" fill="#0066cc" fillOpacity="0.1" />
                  <text x="30" y="35" textAnchor="middle" fontSize="14" fill="#0066cc" fontWeight="bold">
                    Intel
                  </text>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0066cc] mb-1">Intel i7</h3>
              <p className="text-sm text-gray-600">A escolha certa para alto desempenho.</p>
            </div>
          </button>

          {/* Ryzen 9 Card */}
          <button
            className={`text-left bg-[#7e22ce] border border-[#7e22ce] rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] ${
              selectedProcessor === "ryzen"
                ? "ring-2 ring-[#ff3e9d] shadow-lg shadow-[#ff3e9d]/20"
                : "opacity-90 hover:opacity-100"
            }`}
            onClick={() => setSelectedProcessor("ryzen")}
          >
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="text-white mb-3">
                <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto">
                  <circle cx="30" cy="30" r="25" fill="white" fillOpacity="0.1" />
                  <text x="30" y="35" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">
                    AMD
                  </text>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Ryzen 9</h3>
              <p className="text-sm text-gray-200">Máxima de performance para quem precisa mais.</p>
            </div>
          </button>
        </div>

        {/* Processor details section */}
        <div className="mb-16 transition-all duration-500 ease-in-out">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold">
              {selectedProcessor === "intel" ? "Intermediário - Intel i7" : "Avançado - Ryzen 9"}
            </h2>
            {selectedProcessor === "ryzen" && (
              <span className="bg-[#7e22ce] text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 animate-fadeIn">
                <Zap size={12} />
                Velocidades mais altas de núcleo único
              </span>
            )}
          </div>

          {/* Table headers */}
          <div className="grid grid-cols-7 gap-4 mb-4 text-sm text-gray-400 px-4 py-2 border-b border-gray-800">
            <div>Processador</div>
            <div>Memória Ram</div>
            <div>CPU</div>
            <div>Armazenamento</div>
            <div>Internet</div>
            <div>Localização</div>
            <div>Preço</div>
          </div>

          {/* Table rows with animation */}
          <div className={`space-y-4 transition-all duration-500 ${animateRows ? 'opacity-100' : 'opacity-0'}`}>
            {processorPlans[selectedProcessor].map((plan, index) => (
              <div
                key={index}
                className={`grid grid-cols-7 gap-4 bg-[#151922] rounded-xl p-5 items-center transform transition-all duration-300 hover:bg-[#1a1f2a] ${plan.badge === "Recomendado" ? "border border-[#7e22ce]" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                    {selectedProcessor === "intel" ? (
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="12" fill="#0066cc" fillOpacity="0.1" />
                        <text x="15" y="19" textAnchor="middle" fontSize="10" fill="#0066cc" fontWeight="bold">
                          Intel
                        </text>
                      </svg>
                    ) : (
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="12" fill="#ff0000" fillOpacity="0.1" />
                        <text x="15" y="19" textAnchor="middle" fontSize="10" fill="#ff0000" fontWeight="bold">
                          AMD
                        </text>
                      </svg>
                    )}
                  </div>
                  {plan.badge && (
                    <span className={`text-xs mt-2 inline-block px-2 py-0.5 rounded-full ${
                      plan.badge === "Recomendado" 
                        ? "bg-[#7e22ce] text-white" 
                        : plan.badge === "Popular" 
                          ? "bg-blue-500 text-white" 
                          : "bg-gray-700 text-gray-300"
                    }`}>
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div>
                  <div className="font-bold">{plan.ram} RAM</div>
                  <div className="text-xs text-gray-400">DDR4</div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Cpu size={16} className={selectedProcessor === "intel" ? "text-[#0066cc]" : "text-[#7e22ce]"} />
                    <span>{plan.core}</span>
                  </div>
                  <div className="text-xs text-gray-400">{plan.speed}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Server size={16} className={selectedProcessor === "intel" ? "text-[#0066cc]" : "text-[#7e22ce]"} />
                    <span>{plan.storage}GB</span>
                  </div>
                  <div className="text-xs text-gray-400">NVMe</div>
                </div>
                <div className="flex items-center gap-1">
                  <Wifi size={16} className="text-green-500" />
                  <span>1Gbps</span>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Globe size={16} className="text-green-500" />
                    <span>São Paulo</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-400">R$</span>{" "}
                    <span className="text-2xl font-bold text-[#ff3e9d]">{plan.price}</span>
                    <span className="text-xs text-gray-400">/mês</span>
                  </div>
                  {plan.unavailable ? (
                    <button
                      className="bg-red-500/80 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-90 cursor-not-allowed flex items-center gap-1"
                      disabled
                    >
                      Indisponível
                    </button>
                  ) : (
                    <a
                      href={plan.url}
                      className={`${
                        selectedProcessor === "intel" ? "bg-[#0066cc]" : "bg-[#7e22ce]"
                      } text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg ${
                        selectedProcessor === "intel" ? "hover:shadow-[#0066cc]/30" : "hover:shadow-[#7e22ce]/30"
                      } flex items-center gap-1 hover:translate-x-0.5`}
                    >
                      Contratar
                      <ChevronRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Recursos inclusos em todos os planos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Anti-DDoS PRO", desc: "Proteção avançada contra ataques DDoS", icon: Shield },
              { title: "Uptime 99.9%", desc: "Garantia de disponibilidade", icon: Check },
              { title: "Suporte 24/7", desc: "Atendimento técnico especializado", icon: Cpu },
            ].map((feature, index) => (
              <div key={index} className="bg-[#151922] rounded-xl p-6 transition-all duration-300 hover:bg-[#1a1f2a] hover:translate-y-[-5px]">
                <div className="bg-[#2a1a3a] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-[#ff3e9d]" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#151922] border border-gray-800 rounded-xl transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#ff3e9d]/10 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <div className="bg-[#2a1a3a] w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-12">
                  {service.icon === "gamepad" && <Cpu className="text-[#ff3e9d]" size={24} />}
                  {service.icon === "target" && <Server className="text-[#ff3e9d]" size={24} />}
                  {service.icon === "server" && <Server className="text-[#ff3e9d]" size={24} />}
                  {service.icon === "cpu" && <Cpu className="text-[#ff3e9d]" size={24} />}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{service.desc}</p>
                <div className="mb-4">
                  <div>
                    <span className="text-xs text-gray-400">R$</span>{" "}
                    <span className="text-3xl font-bold text-[#ff3e9d]">{service.price}</span>
                    <span className="text-sm text-gray-400">/mensal</span>
                  </div>
                </div>
                <a 
                  href={service.url}
                  className="block w-full bg-[#7e22ce] text-white py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[#6b1eac] hover:shadow-md text-center"
                >
                  Ver todos os planos
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
