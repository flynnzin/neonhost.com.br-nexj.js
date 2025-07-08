import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://cdn.neonhost.com.br/neonhostinger/Termos-NeonHost.pdf", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "application/pdf,*/*",
        "Cache-Control": "no-cache",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.status}`)
    }

    const pdfBuffer = await response.arrayBuffer()

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Termos-NeonHost.pdf"',
        "Cache-Control": "public, max-age=3600",
        "X-Frame-Options": "SAMEORIGIN",
        "Content-Security-Policy": "frame-ancestors 'self'",
      },
    })
  } catch (error) {
    console.error("Error fetching PDF:", error)
    return new NextResponse("PDF não disponível", { status: 404 })
  }
}

export async function HEAD() {
  try {
    const response = await fetch("https://cdn.neonhost.com.br/neonhostinger/Termos-NeonHost.pdf", {
      method: "HEAD",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    return new NextResponse(null, {
      status: response.ok ? 200 : 404,
      headers: {
        "Content-Type": "application/pdf",
      },
    })
  } catch (error) {
    return new NextResponse(null, { status: 404 })
  }
}
