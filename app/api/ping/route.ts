import { NextResponse } from "next/server";
import { exec } from "node:child_process";
import { promisify } from "node:util";

const execPromise = promisify(exec);

export async function GET() {
	try {
		const { stdout } = await execPromise("ping -n 1 45.146.81.12");
		const match = stdout.match(/tempo[=<](\d+)ms/);
		const pingTime = match ? parseInt(match[1]) : null;

		return NextResponse.json({ ping: pingTime });
	} catch (error) {
		return NextResponse.json(
			{ error: "Erro ao executar ping" },
			{ status: 500 },
		);
	}
}
