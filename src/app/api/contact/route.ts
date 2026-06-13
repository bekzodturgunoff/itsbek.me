import {NextResponse} from "next/server";

export async function POST(req: Request) {
  try {
    const {name, email, message} = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({error: "Missing required fields"}, {status: 400});
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceKey) {
      console.error("Missing Supabase env vars");
      return NextResponse.json({error: "Server config error"}, {status: 500});
    }

    const res = await fetch(`${supabaseUrl}/rest/v1/contact_messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": serviceKey,
        "Authorization": `Bearer ${serviceKey}`,
      },
      body: JSON.stringify({
        name,
        email,
        message,
        locale: "en",
        created_at: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Supabase insert error:", errText);
      return NextResponse.json({error: "Failed to save message"}, {status: 500});
    }

    return NextResponse.json({success: true});
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({error: "Internal server error"}, {status: 500});
  }
}
