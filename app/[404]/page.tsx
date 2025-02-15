import Link from "next/link";
import { AlertCircle } from "lucide-react"; // Importando um ícone do Lucide React

export default function NotFoundPage() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-[#0B0E13]">
			<div className="text-center">
				<div className="flex justify-center mb-4">
					<img src="/svgs/404error.svg" className="h-96" alt="" />
				</div>
				<Link href="/">
					<button
						type="button"
						className="mt-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-center px-6 py-3 text-lg font-semibold text-white transition-all hover:scale-105"
					>
						Voltar para a página inicial
					</button>
				</Link>
			</div>
		</div>
	);
}
