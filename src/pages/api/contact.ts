export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};

    if (!email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // Log the submission to the server console for local testing
    console.log('[contact] received', { name, email, message });

    // TODO: integrate with an email provider (Resend, nodemailer, etc.) using env vars

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error('[contact] error', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
