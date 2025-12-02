"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
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
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Link>
          <h1 className="text-5xl font-bold mb-4">
            Termos de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Serviço
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar os serviços da NeonHost, você concorda em estar vinculado pelos termos e condições
              estabelecidos neste documento. Se você não concorda com qualquer parte destes termos, por favor, não
              utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Descrição dos Serviços</h2>
            <p>
              A NeonHost fornece serviços de hospedagem, incluindo VPS (Servidor Privado Virtual), Servidores Dedicados
              e Proteção DDoS. Todos os serviços são fornecidos "tal como estão" e sujeitos à disponibilidade.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Serviços de hospedagem em nuvem</li>
              <li>Proteção contra ataques DDoS</li>
              <li>Suporte técnico 24/7</li>
              <li>Infraestrutura no Brasil com servidores no Rio de Janeiro e São Paulo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Registro de Conta</h2>
            <p>
              Para utilizar nossos serviços, você deve criar uma conta e fornecer informações precisas, completas e
              atualizadas. Você é responsável por:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Manter a confidencialidade de suas credenciais de acesso</li>
              <li>Todas as atividades que ocorram em sua conta</li>
              <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Pagamentos e Faturamento</h2>
            <p>
              Os preços estão sujeitos a mudanças com aviso prévio de 30 dias. Você concorda em pagar todas as taxas
              associadas à sua conta de acordo com os termos de pagamento apresentados no momento da compra.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Aceitamos cartão de crédito, débito, PIX, boleto e transferência bancária</li>
              <li>Garantia de reembolso de 7 dias para novos clientes</li>
              <li>Sem penalidades por cancelamento após o período de garantia</li>
              <li>Cada GB adicional de SSD será cobrado a R$ 1,00</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Política de Cancelamento</h2>
            <p>
              Você pode cancelar sua conta a qualquer momento. O cancelamento entra em vigor no final do período de
              faturamento atual. Oferecemos garantia de reembolso de 7 dias para novos clientes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Uso Aceitável</h2>
            <p>Você concorda em não utilizar nossos serviços para:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Violar qualquer lei ou regulamentação aplicável</li>
              <li>Infringir direitos de propriedade intelectual de terceiros</li>
              <li>Transmitir malware, spam ou conteúdo malicioso</li>
              <li>Realizar ataques DDoS contra outros servidores (seus servidores podem ser suspensos)</li>
              <li>Alojar conteúdo ilegal ou ofensivo</li>
              <li>Realizar atividades de phishing ou fraude</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Disponibilidade e Garantias</h2>
            <p>
              Oferecemos SLA de 99,9% de uptime. Embora nos esforcemos para manter serviços ininterruptos, não
              garantimos que o serviço será sempre disponível e sem erros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Limitação de Responsabilidade</h2>
            <p>
              A NeonHost não será responsável por danos indiretos, incidentais, especiais, consequentes ou punitivos,
              incluindo perda de dados, lucros ou receitas, mesmo se avisada da possibilidade de tais danos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Suspensão de Conta</h2>
            <p>Reservamos o direito de suspender ou cancelar sua conta se você:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Violar estes termos de serviço</li>
              <li>Não pagar as taxas no prazo</li>
              <li>Usar os serviços para atividades ilegais</li>
              <li>Realizar ataques contra outros usuários ou sistemas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Modificações dos Termos</h2>
            <p>
              A NeonHost se reserva o direito de modificar estes termos a qualquer momento. Mudanças substanciais serão
              notificadas com antecedência. O uso continuado dos serviços implica aceitação das modificações.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil, especificamente a legislação do
              Estado de Rio De Janeiro, sem prejudicar as disposições de qualquer lei de proteção ao consumidor aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Contato</h2>
            <p>Para dúvidas sobre estes Termos de Serviço, entre em contato conosco através de:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Email: contato@neonhost.com.br</li>
              <li>Suporte: 24/7 disponível</li>
              <li>Website: neonhost.com.br</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
