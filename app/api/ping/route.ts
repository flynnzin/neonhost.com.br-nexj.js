import { NextResponse } from "next/server";
import { exec } from "node:child_process";
import { promisify } from "node:util";

const execPromise = promisify(exec);

export async function GET() {
	try {
		const { stdout } = await execPromise("ping -c 1 45.146.81.12");

		// Regex para capturar "time=XXX ms"
		const match = stdout.match(/time=(\d+(?:\.\d+)?)\s?ms/);
		const pingTime = match ? parseFloat(match[1]) : null;

		return NextResponse.json({ ping: pingTime });
	} catch (error) {
		return NextResponse.json(
			{ error: "Erro ao executar ping" },
			{ status: 500 },
		);
	}
}
