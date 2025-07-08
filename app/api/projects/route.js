export async function GET(request) {
  const projects = [
    {
      name: "OTTR - Over The Top Returns",
      description:
        "A consulting think tank. Whether it be for Financial Arbitrage, Political Consulting, Next-Gen AI Integrations, or Quantitative Research and Modeling, OTTR provides 'Over The Top Returns', regardless of the industry.",
      stack: ["Typescript", "NextJS", "TailwindCSS", "Python", "Solidity", "Rust"],
      link: "https://ottr-seven.vercel.app/",
    },
    {
      name: "Sandbox Research - Test. Tweak. Win.",
      description:
        "Research and Modeling consulting firm. Sandbox Research is a think tank that provides research, modeling, and consulting services to help you achieve your goals, whether they be financial, political, or otherwise.",
      stack: ["Typescript", "NextJS", "Linear Algebra", "Python"],
      link: "https://X.com/SandboxResearch",
    },
    {
      name: "Clickroot - Mission Critical, By Design",
      description:
        "Defense-oriented software solutions and data protection. Clickroot is a software development company focused on building secure, reliable, and mission-critical applications for the <b>general public</b>, not the defense sector.",
      stack: ["Typescript", "NextJS"],
      link: "https://X.com/Clickroot",
    },
    {
      name: "TruthGuard (Early Development) - Decentralized News Verification Platform",
      description:
        "By Clickroot: News verification protocol meant to introduce abstracted information while removing biases and misinformation from the news ecosystem.",
      stack: ["Typescript", "NextJS", "TailwindCSS"],
      link: "https://truthguard-gamma.vercel.app",
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
