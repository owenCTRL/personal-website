const COMMANDS = [
  {
    command: "Help",
    icon: `<span class="icon">📌</span>`,
  },
  {
    command: "About",
    icon: `<span class="icon">👤</span>`,
  },
  // {
  //   command: "AI Chat",
  //   icon: `<span class="icon">💬</span>`,
  //   description: "Chat with AI trained to speak like me.",
  // },
  {
    command: "Résumé",
    icon: `<span class="icon">📝</span>`,
  },
  {
    command: "Education",
    icon: `<span class="icon">🎓</span>`,
  },
  {
    command: "Skills",
    icon: `<span class="icon">🛠️</span>`,
  },
  {
    command: "Projects",
    icon: `<span class="icon">📁</span>`,
  },
  {
    command: "Journal",
    icon: `<span class="icon">📓</span>`,
  },
  {
    command: "Contact",
    icon: `<span class="icon">📞</span>`,
  },
  {
    command:
      'Clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
    icon: `<span class="icon">🧹</span>`,
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a><br /><b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div><br />`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    `<br />
    <div class="command" style="font-size: 18px; font-weight: bold; color: var(--primary);">Commands:</div>
    <br />` +
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px;">${command.icon || ""} ${command.command}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. e.g. <span style="color: var(--secondary)">about</span></div><br />`,

  about: () => `
    <br />
    <div class="command" style="font-size: 18px; font-weight: bold; color: var(--primary);">About Me:</div>
    <br />
    I spend every second of my time studying <strong>complexity</strong>.<br /><br /> Whether it be ideologies, technologies, markets, etc., my goal is <i>learning how to <strong>influence systems</strong></i>.<br /><br />I have deep technical experience across disciplines: from capital markets to full-stack development, political theory to protocol design. I build scalable, revolutionary architectures for how the next generation of <i>things</i> should work.<br /><br />

    But what makes me valuable isn’t just the depth of what I know, but the rare way in which I connect it to <i>and</i> with <strong>people</strong>.<br /><br />

    I'm a person everyone seems to enjoy being around. I communicate with clarity, humor, and heart. I make people laugh, disarm egos, dissolve confusion, and align teams that previously couldn’t speak the same language. Whether I’m talking with engineers, founders, investors, or voters, the result is the same: people understand, people engage, and people act.<br /><br />

    That’s where I thrive: at the intersection of ideas and emotion, logic and language. I can write speeches that move a crowd or architect code that moves markets. I can translate technical nuance for a boardroom or turn visionary strategy into a feature roadmap.<br /><br />

    Whether you need a:
    <br />
    <ul>
      <li>Sales leader who can explain deeply technical products with effortless clarity,</li>
      <li>Political aide who can craft narrative and policy with equal power,</li>
      <li>Project manager who can align sales, engineering, and design without a single dropped thread</li>
    </ul>
    <br />
    I don’t just fill roles, I have a certain affinity for multiplying momentum.<br /><br />

    You can hire ten different specialists. Or you can bring on someone who bridges the gaps between <i>all</i> of them. <strong>I make the hard things work, I guarantee it.</strong>
    <br /><br />
  `,

  // chat: () => {
  //   //Show chat modal (toggle a hidden chat container instead of returning text)
  //   document.getElementById("chatModal").style.display = "flex";
  //   return `<div class="command">Opening chat...</div>`;
  // },

  education: () => `
    <br />
    <div class="command" style="font-size: 18px; font-weight: bold; color: var(--primary);">Education:</div>
    <br />
    <a href="https://nyu.edu" target="_blank" style="font-size: 18px; font-weight: bold;">New York University</a><div class="command" style="font-weight: bold;">B.A. in Politics & Computer Science</div><br />
    <b>Courses:</b> Game Theory, Economic Theory, Advanced Data Structures, Constitutional Law, Linear Algebra, Discrete Math, and many more.<br /><br />
    My education lives at the intersection of systems, power, money, and code. I don’t study problems; I model, simulate, and redesign them.
    <br /><br />
  `,

  skills: () => `
    <br />
    <div class="command" style="font-size: 22px; font-weight: bold; color: var(--primary);">
      Core Capabilities & Multidisciplinary Skillset
    </div>
    <br />
    <div class="skill">
      <b>Languages & Frameworks:</b> Solidity, JavaScript, TypeScript, Python, Node.js, React, Next.js, more.
    </div>
    <br />
    <div class="skill">
      <b>Databases:</b> Deep familiarity with SQL and MongoDB, along with Docker, Kubernetes, and more.
    </div>
    <br />
    <div class="skill">
      <b>Analytics & Tooling:</b> From GA4 to AdSense to the newest marketing stacks, I bring clarity to chaos, uncovering patterns that others miss. My analytical mind translates complexity into actionable simplicity.
    </div>
    <br />
    <div class="skill">
      <b>Additional Expertise:</b> Smart contract architecture, DeFi systems, full-stack product strategy, interdisciplinary research and development, and more.
    </div>
    <br />
    <div class="skill" style="font-style: italic; font-size: 16px;">
      I think like an economist, with systems in mind.<br />I write like a philosopher, with clarity and conviction.<br />I build like an engineer, with elegance and purpose.
    </div>
    <br />
    <div class="skill" style="font-size: 16px;">
      But more than the sum of my skills is the force of personality behind them. I am, first and foremost, a people person: an instinctual listener, a born persuader, a bridge between silos.
      <br /><br />
      In rooms of strangers, I leave with friends. Across boardrooms, backchannels, and brainstorms, I’ve learned the difference between good ideas and those that <i>actually</i> move the needle: the ones people believe in, <b>because they believe in you.</b>
      <br /><br />
      The rarest asset in our world of noise is trust. That’s what I bring to the table; alongside a deep technical arsenal and cross-sector fluency in finance, politics, computing, and more.
    </div>
    <br />
    <div class="skill" style="font-weight: bold; font-size: 18px;">
      This isn’t just a 'My Skills:' résumé, but the toolkit of a highly valuable individual built for the moment, and the movements, shaping our future.
    </div>
    <br />
  `,

  projects: async () => {
    return `
    <br />
    <div class="command" style="font-size: 18px; font-weight: bold; color: var(--primary);">Projects:</div>
    <br />
    ${await getProjects()}
    `
  },

  contact: async () => {
    return `
      <br />
      <div class="command" style="font-size: 18px; font-weight: bold; color: var(--primary);">Reach me at:</div>
      <br />
      ${await getContacts()}
      <br />
      <div>I’m not 'looking for work'.<br />I’m looking to help change the world.</div>
      <br />
      <div>Let’s talk.</div>
      <br />
    `;
  },

  resume: () => {
    return `
      <br />
      <div class="command" style="font-size: 18px; font-weight: bold; color: var(--primary);">Résumé:</div>
      <br />
      <div class="pdf-container">
        <img 
          src="images/Resume.png" 
          alt="Resume Preview" 
          class="pdf-thumbnail" 
          onclick="document.getElementById('pdfModal').style.display = 'flex';"
        />
        <div class="pdf-modal" id="pdfModal">
          <div class="pdf-close" onclick="document.getElementById('pdfModal').style.display = 'none'">&times;</div>
          <embed src="Resume.pdf" type="application/pdf" class="pdf-fullscreen" />
        </div>
      </div>

      <style>
        .pdf-container {
          position: relative;
        }

        .pdf-thumbnail {
          cursor: zoom-in;
          border: 1px solid #ccc;
          box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
          max-width: 100%;
          height: auto;
        }

        .pdf-modal {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          justify-content: center;
          align-items: center;
          z-index: 999;
          flex-direction: column;
        }

        .pdf-fullscreen {
          width: 90%;
          height: 90%;
          border: none;
          box-shadow: 0 0 20px #000;
        }

        .pdf-close {
          color: white;
          font-size: 2rem;
          position: absolute;
          top: 20px;
          right: 30px;
          cursor: pointer;
          z-index: 1000;
        }
      </style>
    `;
  },


  journal: () => {
    window.open("https://substack.com/@0xowen", "_blank");
    return "";
  },

  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}