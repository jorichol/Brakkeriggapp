export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { counts, layout, imageBase64 } = req.body;

    return res.status(200).json({
      ok: true,
      message: 'Data mottatt',
      received: {
        counts,
        layout,
        hasImage: Boolean(imageBase64)
      }
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Serverfeil'
    });
  }
}
