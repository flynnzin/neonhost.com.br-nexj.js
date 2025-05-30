export interface Plan {
  name: string
  price: string
  link: string | null
  description: {
    ram: string
    ssd: string
    cores: string
    attrs: string[]
  }
}

export const plans: Plan[] = [
  {
    name: "NodeJS Starter",
    price: "4,99",
    link: "https://app.neonhost.com.br/index.php?rp=/store/nodejs/service-nodejs-iniciante",
    description: {
      ram: "1GB",
      ssd: "10GB SSD NVMe",
      cores: "2 vCPUs",
      attrs: ["Node.js 18+ LTS", "SSL Grátis", "MySQL 8.0", "FTP/SFTP", "Backup Diário"],
    },
  },
  {
    name: "NodeJS Professional",
    price: "9,99",
    link: "https://app.neonhost.com.br/index.php?rp=/store/nodejs/service-nodejs-professional",
    description: {
      ram: "2GB",
      ssd: "25GB SSD NVMe",
      cores: "2 vCPUs",
      attrs: ["Node.js 18+ LTS", "SSL Grátis", "MySQL + PostgreSQL", "Git Deploy", "CDN Grátis"],
    },
  },
  {
    name: "NodeJS Business",
    price: "19,99",
    link: "https://app.neonhost.com.br/index.php?rp=/store/nodejs/service-nodejs-business",
    description: {
      ram: "4GB",
      ssd: "50GB SSD NVMe",
      cores: "4 vCPUs",
      attrs: ["Node.js 18+ LTS", "SSL Grátis", "Múltiplos DBs", "Auto-scaling", "Monitoramento"],
    },
  },
  {
    name: "NodeJS Enterprise",
    price: "39,99",
    link: "https://app.neonhost.com.br/index.php?rp=/store/nodejs/service-nodejs-enterprise",
    description: {
      ram: "8GB",
      ssd: "100GB SSD NVMe",
      cores: "6 vCPUs",
      attrs: ["Node.js 18+ LTS", "SSL Grátis", "Redis Cache", "Load Balancer", "Suporte Priority"],
    },
  },
  {
    name: "NodeJS Scale",
    price: "79,99",
    link: "https://app.neonhost.com.br/index.php?rp=/store/nodejs/service-nodejs-scale",
    description: {
      ram: "16GB",
      ssd: "200GB SSD NVMe",
      cores: "8 vCPUs",
      attrs: ["Node.js 18+ LTS", "SSL Grátis", "Cluster Redis", "Auto-scaling", "DevOps Dedicado"],
    },
  },
] as const
