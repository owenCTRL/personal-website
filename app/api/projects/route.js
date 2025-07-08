export async function GET(request) {
  const projects = [
    {
      name: "OTTR - Over The Top Returns",
      description:
        "Venture Capital Group at the intersection of our most influential industries and technologies. Whether it be for Financial Arbitrage, Political Consulting, Next-Gen AI Integrations, or Quantitative Research and Modeling, OTTR provides 'Over The Top Returns', regardless of the industry.",
      stack: ["Software", "Politics", "Finance", "100x Strategy Design"],
      link: "https://x.com/ottrCo",
    },
    {
      name: "Sandbox Research - Test. Tweak. Win.",
      description:
        "Strategy, Research and Modeling consulting firm. Sandbox Research is a think tank that provides services to help you achieve your goals, whatever they may be.",
      stack: ["Growth Strategy", "Predictive Modeling", "Copy/Writing", "and more..."],
      link: "https://sandbox-research.vercel.app/",
    },
    {
      name: "Clickroot - Mission Critical, By Design",
      description:
        "Defense-oriented software solutions. Clickroot is a software development company focused on building secure, reliable, and mission-critical applications for the <b>general public</b>, not the defense sector.",
      stack: ["TruthGuard"],
      link: "https://X.com/Clickroot",
    },
    {
      name: "TruthGuard (Early Development) - Decentralized News Verification Platform",
      description:
        "News verification protocol meant to introduce abstracted information while removing biases and misinformation from the news ecosystem.",
      stack: ["Typescript", "NextJS", "TailwindCSS", "and more..."],
      link: "https://truthguard-clickroot.vercel.app",
    },
  ];

  return Response.json(projects, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
