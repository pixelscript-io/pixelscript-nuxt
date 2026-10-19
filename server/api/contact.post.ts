export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody<Record<string, unknown>>(event)

  const clean = (v: unknown, max: number) =>
    typeof v === 'string' ? v.trim().slice(0, max) : ''

  const firstName = clean(body?.firstName, 100)
  const lastName = clean(body?.lastName, 100)
  const email = clean(body?.email, 200)
  const message = clean(body?.message, 5000)

  if (!firstName || !lastName || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid input' })
  }

  if (!config.resendApiKey) {
    throw createError({ statusCode: 503, statusMessage: 'Email disabled' })
  }

  try {
    await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${config.resendApiKey}` },
      body: {
        from: 'PixelScript <contact@pixelscript.io>',
        to: 'joe@pixelscript.io',
        reply_to: `${firstName} ${lastName} <${email}>`,
        subject: 'Website Inquiry',
        text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\n\n${message}`,
      },
    })
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Send failed' })
  }

  return { ok: true }
})