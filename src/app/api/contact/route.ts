// app/api/contact/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import sgMail from "@sendgrid/mail";

// 1️⃣  Configura la API Key de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? "");

export async function POST(request: NextRequest) {
    try {
        // 2️⃣  Parseamos el body
        const body = await request.json();
        const { name, email, phone = "No proporcionado", message } = body;

        // 3️⃣  Validación mínima
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Nombre, email y mensaje son requeridos" },
                { status: 400 }
            );
        }

        // 4️⃣  Construimos el correo
        const msg = {
            to: process.env.SENDGRID_TO ?? "contacto@mgsi.mx", // Cambia esto por tu email
            from: process.env.SENDGRID_FROM ?? "email-service@amoxtli.tech", // Remitente verificado en SendGrid
            subject: "Contacto desde el sitio web",
            text: `Nuevo mensaje de contacto de MG Servicio Inmobiliario:
Nombre: ${name}
Correo: ${email}
Teléfono: ${phone}
Mensaje: ${message}`,
            html: `
        <div style="font-family:sans-serif;line-height:1.5">
          <h3>Nuevo mensaje de contacto</h3>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Mensaje:</strong><br/>${message}</p>
        </div>
      `,
        };

        // 5️⃣  Enviamos
        await sgMail.send(msg);

        return NextResponse.json(
            {
                success: true,
                message:
                    "Mensaje enviado correctamente. Nos pondremos en contacto pronto.",
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error(
            "Error al enviar email con SendGrid:",
            error.response?.body || error
        );
        return NextResponse.json(
            { error: "Error al procesar la solicitud" },
            { status: 500 }
        );
    }
}
