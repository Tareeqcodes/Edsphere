
const tools = [
  {
    title: 'Khan Acedamy',
    category: 'Video',
    description:
      ' Offers free online courses and personalized learning experiences using AI to tailor educational content to individual students needs.',
    link: 'https://www.khanacademy.org/',
  },
  {
    title: 'Cousera',
    category: 'Design',
    description:
      ' Provides online courses from top universities and companies, leveraging AI to recommend courses and create personalized learning pathways.',
    link: 'https://www.coursera.org/',
  },
  {
    title: 'Edmentum',
    category: 'Image',
    description:
      ' Uses AI to deliver personalized learning solutions, offering adaptive curriculum, assessments, and real-time data for educators and students.',
    link: 'https://www.edmentum.com/',
  },
  {
    title: 'Socrative',
    category: 'Design',
    description:
      ' An AI-driven student response system that helps teachers create engaging assessments and gain real-time insights into student understanding.',
    link: 'https://www.socrative.com/',
  },
  {
    title: 'Quizlet',
    category: 'Design',
    description:
      'Employs AI to enhance study tools and flashcards, providing personalized learning activities and adaptive learning techniques.',
    link: 'https://quizlet.com/',
  },
  {
    title: 'Dreambox',
    category: 'Audio',
    description:
      ' Offers an adaptive math program that uses AI to personalize instruction for K-8 students.',
    link: 'https://www.dreambox.com/',
  },
  {
    title: 'Duoling',
    category: 'Writing',
    description:
      'Uses AI to provide personalized language learning experiences, adapting lessons to the user proficiency and progress.',
    link: 'https://www.duolingo.com/',
  },
  {
    title: 'SMART Learning Suite',
    category: 'Image',
    description:
      ' Combines lesson delivery, assessment, and collaborative workspaces, utilizing AI to enhance educational interactions and engagement.',
    link: 'https://www.teq.com/smart-learning-suite/',
  },
  {
    title: 'Newton',
    category: 'Productivity',
    description:
      ' Uses AI-driven adaptive learning technology to provide personalized educational content and improve student outcomes in higher education.',
    link: 'https://www.knewton.com/',
  },
];

// Function to create a card for each tool
export function createToolCard(tool) {
  return `
        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-xl font-bold mb-2">${tool.title}</h2>
          <p class="mb-4">${tool.description}</p>
          <div class="flex justify-between items-center">
            <button class="bg-gray-200 text-gray-700 p-2 rounded">Bookmark</button>
            <a href="${tool.link}" class="bg-blue-500 text-white p-2 rounded">Learn More</a>
          </div>
        </div>
      `;
}

// Function to display tools
export function displayTools(tools) {
  const container = document.getElementById('tools-container');
  container.innerHTML = tools.map(createToolCard).join('');
}

// Function to filter tools based on search query
export function filterTools(query) {
  return tools.filter(
    (tool) =>
      tool.title.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query)
  );
}
