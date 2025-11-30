"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import React from "react"

const PoPLocation = ({ name, description }: { name: string; description: string }) => (
  <div className="flex flex-col items-center text-center p-4 bg-secondary rounded-lg shadow-md">
    <div className="h-12 w-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full text-xl font-bold mb-2">
      {name.substring(0, 2).toUpperCase()}
    </div>
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
)

const NetworkTopologyDisplay = () => {
  const pops = [
    { name: "São Paulo", description: "Brasil (BR)" },
    { name: "Miami", description: "EUA (US)" },
    { name: "Amsterdã", description: "Holanda (NL)" },
  ]

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-card rounded-lg shadow-xl border border-border">
      <h3 className="text-2xl font-bold mb-8 text-center">Nossa Topologia de Rede</h3>

      {/* Upstream Providers */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col items-center"
      >
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-600 text-white rounded-md font-semibold">Upstream Provider A</div>
          <div className="p-3 bg-blue-600 text-white rounded-md font-semibold">Upstream Provider B</div>
          <div className="p-3 bg-blue-600 text-white rounded-md font-semibold">Upstream Provider C</div>
        </div>
        <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 mt-4" />
        <span className="text-sm text-muted-foreground mt-2">Conexões Múltiplas</span>
      </motion.div>

      {/* Main PoP Row */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 relative w-full max-w-4xl">
        {pops.map((pop, index) => (
          <React.Fragment key={pop.name}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <PoPLocation {...pop} />
            </motion.div>
            {index < pops.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + 0.2 * index }}
                className="hidden md:block absolute h-0.5 bg-primary/50 w-[calc(100%/3)] z-0"
                style={{
                  left: `${(index + 0.5) * (100 / pops.length)}%`,
                  transform: 'translateX(-50%)',
                  top: '50%',
                  width: `${80 / (pops.length -1) }%`
                }}
              >
                  <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
              </motion.div>
            )}
            {index < pops.length - 1 && (
              <div className="md:hidden">
                <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Data Center / Servers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 flex flex-col items-center"
      >
        <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 mb-4" />
        <span className="text-sm text-muted-foreground mb-2">Seus Serviços</span>
        <div className="p-4 bg-green-600 text-white rounded-md font-semibold">Data Centers / Servidores</div>
      </motion.div>
    </div>
  )
}

export default NetworkTopologyDisplay
