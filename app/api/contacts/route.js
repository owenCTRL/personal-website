export async function GET(request) {
  const contactMediums = [
    {
      medium: "Email",
      username: "owentillger@gmail.com",
      link: "mailto:owentillger@gmail.com",
    },
    {
      medium: "Telegram",
      username: "@OwenOTTR",
      link: "https://t.me/OwenOTTR",
    },
    {
      medium: "X.com",
      username: "@0xOwen",
      link: "https://x.com/0xOwen",
    },
    {
      medium: "GitHub",
      username: "OwenCTRL",
      link: "https://github.com/OwenCTRL",
    }
  ];

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
