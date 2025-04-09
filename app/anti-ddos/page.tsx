"use client";

import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { Card, Divider } from "@nextui-org/react";
import GameServersSection from "@/components/game-servers-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProtectionDashboard from "@/components/protection-dashboard"
import CookieConsent from "@/components/cookie-consent"
// import HeroBackground from './_components/HeroBackground';

import {
	HeartPulseIcon,
	ServerIcon,
	ShieldCheckIcon,
	ZapIcon,
	CpuIcon,
	GaugeIcon,
	NetworkIcon,
	ShieldIcon,
	Info,
	Gamepad2,
	Cpu,
	CircleCheckBig,
	Server,
} from "lucide-react";
import Link from "next/link";

import React from 'react';
import { useEffect, useState } from "react";


const plans = [
	{
		icon: <Gamepad2 className="w-8 h-8 text-pink-500" />,
		title: "VPS Neon",
		description: "VPS de alta performance no Brasil com Anti-DDoS PRO",
		price: "69.90",
		link: "/vps-neon",
	},
	{
		icon: <CircleCheckBig className="w-8 h-8 text-pink-500" />,
		title: "VPS Trader",
		description: "Servidores para trader com tráfego mensal ilimitado",
		price: "74.90",
		link: "/vps-trader",
	},
	{
		icon: <Server className="w-8 h-8 text-pink-500" />,
		title: "Semi-Dedicados",
		description: "Servidores robustos Windows e Linux no Brasil",
		price: "305.96",
		link: "/semi-dedicado",
	},
	{
		icon: <Cpu className="w-8 h-8 text-pink-500" />,
		title: "Servidores Dedicados",
		description: "Servidores físicos de alta performance no Brasil",
		price: "1550.00",
		link: "/dedicado",
	},
];


export default function Home() {
	return (

		<section className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">


		</section>

	);
}
