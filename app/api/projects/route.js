export async function GET(request) {
  const projects = [
    {
      name: "ottrAI - Over The Top Returns",
      description:
        "Your personal Chief Strategist. ottrAI provides 'Over The Top Returns', regardless of the industry.",
      stack: ["Software", "Politics", "Finance", "Personal Life", "100x Strategy Design"],
      link: "https://ottr-company.vercel.app",
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
    {
      name: "Dance Music I've Made",
      description:
        "I like to make music in my free time. Check it out!",
      stack: [""],
      link: "https://soundcloud.com/0xOwen",
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
