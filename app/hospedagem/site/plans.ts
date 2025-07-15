export interface Plan {
  name: string
  price: string
  link: string | null
  popular?: boolean
  description: {
    storage: string
    bandwidth: string
    domains: string
    emails: string
    attrs: string[]
  }
}

export const plans: Plan[] = [
  {
    name: "Hospedagem Básica",
    price: "7,99",
    link: "https://app.neonhost.com.br/index.php?rp=/store/hospedagem/hospedagem-basica",
    description: {
      storage: "10GB SSD",
      bandwidth: "100GB",
      domains: "1 Domínio",
      emails: "5 E-mails",
      attrs: [
        "SSL Grátis (Let's Encrypt)",
        "Backup Diário Automático",
        "cPanel Brasileiro",
        "PHP 8.2 + MySQL 8.0",
        "WordPress One-Click",
        "Suporte 24/7",
        "99.9% Uptime",
        "Antivírus e Anti-Spam",
      ],
    },
  },
  {
    name: "Hospedagem Profissional",
    price: "14,99",
    link: "https://app.neonhost.com.br/index.php?rp=/store/hospedagem/hospedagem-profissional",
    popular: true,
    description: {
      storage: "25GB SSD",
      bandwidth: "Ilimitado",
      domains: "5 Domínios",
      emails: "25 E-mails",
      attrs: [
        "SSL Grátis (Let's Encrypt)",
        "Backup Diário + Restore",
        "cPanel + Softaculous",
        "PHP 8.2 + MySQL 8.0",
        "WordPress Otimizado",
        "CDN Grátis",
        "Migração Grátis",
        "Suporte Priority",
      ],
    },
  },
  {
    name: "Hospedagem Business",
    price: "24,99",
    link: "https://app.neonhost.com.br/index.php?rp=/store/hospedagem/hospedagem-business",
    description: {
      storage: "50GB SSD",
      bandwidth: "Ilimitado",
      domains: "15 Domínios",
      emails: "100 E-mails",
      attrs: [
        "SSL Grátis + Wildcard",
        "Backup Diário + Versionamento",
        "cPanel + WP Toolkit",
        "PHP 8.2 + MySQL 8.0",
        "WordPress Premium",
        "CDN Premium",
        "E-commerce Ready",
        "Suporte Especializado",
      ],
    },
  },
  {
    name: "Hospedagem Enterprise",
    price: "49,99",
    link: "https://app.neonhost.com.br/index.php?rp=/store/hospedagem/hospedagem-enterprise",
    description: {
      storage: "100GB SSD",
      bandwidth: "Ilimitado",
      domains: "Ilimitados",
      emails: "Ilimitados",
      attrs: [
        "SSL Premium + EV",
        "Backup Hourly + Restore",
        "cPanel + Recursos Avançados",
        "PHP 8.2 + MariaDB",
        "WordPress Gerenciado",
        "CDN Global + WAF",
        "Staging Environment",
        "Account Manager",
      ],
    },
  },
  {
    name: "Hospedagem Unlimited",
    price: "79,99",
    link: "https://app.neonhost.com.br/index.php?rp=/store/hospedagem/hospedagem-unlimited",
    description: {
      storage: "200GB SSD",
      bandwidth: "Ilimitado",
      domains: "Ilimitados",
      emails: "Ilimitados",
      attrs: [
        "SSL Premium + Multi-Domain",
        "Backup Real-time",
        "WHM + cPanel Reseller",
        "Múltiplas versões PHP",
        "WordPress Multi-site",
        "CDN + DDoS Protection",
        "White Label Options",
        "Suporte Dedicado",
      ],
    },
  },
] as const
