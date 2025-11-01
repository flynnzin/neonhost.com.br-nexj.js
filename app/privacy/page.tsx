"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Background with grid pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(118,67,201,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(118,67,201,0.08)_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{ maskImage: "linear-gradient(transparent, black, transparent)" }}
          ></div>
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at top left, rgba(126, 34, 206, 0.05) 0%, transparent 50%), radial-gradient(600px circle at bottom right, rgba(255, 62, 157, 0.05) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Link>
          <h1 className="text-5xl font-bold mb-4">
            Política de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Privacidade
            </span>
          </h1>
          <p className="text-xl text-gray-600">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introdução</h2>
            <p>
              A NeonHost ("Empresa", "nós", "nos", "nosso") se compromete em proteger sua privacidade. Esta Política de
              Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informações que Coletamos</h2>
            <p>Coletamos informações de várias formas:</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Informações Fornecidas Voluntariamente:</h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Dados de registro (nome, email, telefone, endereço)</li>
              <li>Informações de pagamento (dados do cartão, através de processadores seguros)</li>
              <li>Informações de perfil e preferências</li>
              <li>Comunicações e suporte ao cliente</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Informações Coletadas Automaticamente:</h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Dados de acesso ao servidor (logs de IP, navegador, sistema operacional)</li>
              <li>Cookies e tecnologias de rastreamento similares</li>
              <li>Dados de utilização de serviço e comportamento</li>
              <li>Localização aproximada (baseado em IP)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Uso das Informações</h2>
            <p>Usamos as informações coletadas para:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar transações e enviar informações relacionadas</li>
              <li>Enviar comunicações de marketing (com seu consentimento)</li>
              <li>Investigar fraude e garantir segurança</li>
              <li>Conformidade com requisitos legais</li>
              <li>Melhorar experiência do usuário e análise de dados</li>
              <li>Responder a solicitações de suporte</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Divulgação de Informações</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing.
              Podemos compartilhar informações:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Com provedores de serviço que nos auxiliam (processadores de pagamento, suporte)</li>
              <li>Quando legalmente obrigado (autoridades, mandados judiciais)</li>
              <li>Para proteção de direitos, privacidade ou segurança</li>
              <li>Em caso de fusão ou aquisição da empresa</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Segurança de Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais para proteger suas informações pessoais contra acesso não
              autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet é
              100% seguro.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Criptografia SSL/TLS para dados em trânsito</li>
              <li>Armazenamento seguro e criptografado de dados sensíveis</li>
              <li>Acesso restrito às informações pessoais</li>
              <li>Monitoramento contínuo de segurança</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pessoais pelo tempo necessário para fornecer serviços e cumprir obrigações
              legais. Você pode solicitar a exclusão de seus dados a qualquer momento, dentro dos limites legais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies e Tecnologias de Rastreamento</h2>
            <p>
              Usamos cookies e tecnologias similares para melhorar sua experiência. Você pode controlar cookies através
              das configurações do seu navegador. A recusa de cookies pode afetar a funcionalidade do site.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Cookies de sessão (necessários para funcionamento)</li>
              <li>Cookies de analytics (rastreamento de uso)</li>
              <li>Cookies de publicidade (personalização de conteúdo)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Direitos do Usuário</h2>
            <p>De acordo com as leis de proteção de dados, você tem direito a:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar exclusão (direito ao esquecimento)</li>
              <li>Restringir processamento</li>
              <li>Portabilidade de dados</li>
              <li>Objetar processamento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacidade de Menores</h2>
            <p>
              Nossos serviços não são destinados a menores de 18 anos. Não coletamos intencionalmente informações de
              menores. Se descobrirmos que coletamos dados de um menor, deletaremos imediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Links Externos</h2>
            <p>
              Nosso website pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de
              privacidade de sites externos. Recomendamos que você revise as políticas de privacidade desses sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Conformidade com LGPD</h2>
            <p>
              A NeonHost está em conformidade com a Lei Geral de Proteção de Dados (LGPD). Processamos dados pessoais
              apenas com base legal apropriada e respeitamos seus direitos de titulares de dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modificações da Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos mudanças significativas por
              email ou através do website. O uso continuado implica aceitação das mudanças.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contato</h2>
            <p>Para perguntas sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Email: contato@neonhost.com.br</li>
              <li>Suporte: support@neonhost.com.br</li>
              <li>Telefone: +55 24 99243-0751 (24/7)</li>
              <li>Endereço: Rio De Janeiro, Brasil</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
