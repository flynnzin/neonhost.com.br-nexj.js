"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export function AccordionItems() {
	const pathname = usePathname();

	const faqVpsGamer = [
		{
			title: "Qual é a latência média dos servidores?",
			content:
				"Nossos servidores VPS Gamer possuem latência média inferior a 30ms para as principais regiões do Brasil. Utilizamos infraestrutura de alta performance e rotas otimizadas para garantir a melhor experiência em jogos.",
		},
		{
			title: "Como funciona a proteção anti-DDoS?",
			content:
				"Oferecemos proteção anti-DDoS premium em todos os planos, com capacidade de mitigação de até 200 Tbps. Nossa proteção é automática e sempre ativa, garantindo que seu servidor permaneça online mesmo durante ataques.",
		},
		{
			title: "Posso hospedar qualquer tipo de jogo?",
			content:
				"Sim! Nossos servidores são compatíveis com a maioria dos jogos populares como Minecraft, CS:GO, ARK, Rust, entre outros. Cada plano é otimizado para diferentes capacidades de jogadores e recursos necessários.",
		},
		{
			title: "Quanto tempo leva para ativar meu servidor?",
			content:
				"A ativação é instantânea após a confirmação do pagamento. Em poucos minutos você terá acesso ao painel de controle e poderá começar a configurar seu servidor de jogos.",
		},
		{
			title: "Vocês ajudam na configuração inicial?",
			content:
				"Sim! Oferecemos suporte especializado para ajudar na configuração inicial do seu servidor. Nossa equipe pode auxiliar com a instalação de mods, plugins e otimizações específicas para cada jogo.",
		},
		{
			title: "É possível fazer upgrade de plano?",
			content:
				"Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento através do painel de controle. O processo é simples e mantém todos os seus dados e configurações.",
		},
	];

	const faqDedicado = [
		{
			title: "O que é um servidor dedicado?",
			content:
				"Um servidor dedicado é um servidor físico exclusivo para você, oferecendo recursos dedicados como processador, memória RAM e armazenamento. Isso significa que você tem controle total sobre o hardware e não compartilha recursos com outros usuários.",
		},
		{
			title: "Qual a diferença entre servidor dedicado e VPS?",
			content:
				"A principal diferença é que em um servidor dedicado você tem acesso exclusivo a todo o hardware físico, enquanto em uma VPS você compartilha o hardware físico com outros usuários, embora com recursos garantidos. Servidores dedicados oferecem mais poder de processamento e são ideais para aplicações que exigem alto desempenho.",
		},
		{
			title: "Vocês oferecem suporte técnico?",
			content:
				"Sim, oferecemos suporte técnico 24/7 através de chat, e-mail e telefone. Nossa equipe está sempre pronta para ajudar com qualquer problema ou dúvida que você possa ter.",
		},
		{
			title: "Como funciona o backup?",
			content:
				"Realizamos backups automáticos diários de todos os servidores e mantemos as últimas 7 versões. Você também pode criar backups manuais a qualquer momento através do painel de controle.",
		},
		{
			title: "Qual o prazo de ativação?",
			content:
				"A ativação do seu servidor dedicado é feita em até 24 horas após a confirmação do pagamento. Em alguns casos, pode ser necessário um prazo maior dependendo da disponibilidade do hardware solicitado.",
		},
		{
			title: "Posso escolher o sistema operacional?",
			content:
				"Sim, você pode escolher entre várias distribuições Linux (Ubuntu, CentOS, Debian) ou Windows Server. Se precisar de uma distribuição específica, podemos avaliar a possibilidade de instalação.",
		},
	];

	const faqDefault = [
		{
			title: "Como funciona o suporte?",
			content:
				"Nosso suporte técnico está disponível 24 horas por dia, 7 dias por semana. Você pode entrar em contato através do chat, e-mail ou telefone. Nossa equipe está sempre pronta para ajudar com qualquer problema ou dúvida.",
		},
		{
			title: "Qual o prazo de ativação?",
			content:
				"O prazo de ativação varia de acordo com o serviço contratado. VPS e hospedagem compartilhada são ativados instantaneamente após a confirmação do pagamento. Servidores dedicados podem levar até 24 horas.",
		},
		{
			title: "Como funciona o backup?",
			content:
				"Realizamos backups automáticos diários de todos os serviços e mantemos as últimas 7 versões. Você também pode criar backups manuais a qualquer momento através do painel de controle.",
		},
		{
			title: "Quais formas de pagamento?",
			content:
				"Aceitamos diversas formas de pagamento, incluindo cartão de crédito, boleto bancário, PIX e PayPal. Você pode escolher a que for mais conveniente para você.",
		},
		{
			title: "Posso migrar meu site?",
			content:
				"Sim! Oferecemos migração gratuita para nossos serviços. Nossa equipe técnica cuidará de todo o processo, garantindo que sua aplicação seja migrada com segurança e sem perda de dados.",
		},
		{
			title: "Qual a velocidade do link?",
			content:
				"Todos os nossos serviços contam com link de 1Gbps. Além disso, utilizamos as melhores rotas e infraestrutura de rede para garantir baixa latência e alta disponibilidade.",
		},
	];

	const getFaqItems = () => {
		if (pathname === "/vps-gamer") {
			return faqVpsGamer;
		} else if (pathname === "/dedicado") {
			return faqDedicado;
		} else {
			return faqDefault;
		}
	};

	return (
		<Accordion
			variant="bordered"
			className="px-0 max-w-[95%] border-none md:max-w-4xl mx-auto"
		>
			{getFaqItems().map((item, index) => (
				<AccordionItem key={index} title={item.title}>
					{item.content}
				</AccordionItem>
			))}
		</Accordion>
	);
}
