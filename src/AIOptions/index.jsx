export const arrayItems = [
  {
    name: "Ultimate Solver",
    description: "Solves any thing based on existing knowledge.",
    option: {
      model: "text-davinci-003",
      prompt:"I'm a highly intelligent homework solving bot, who is specified to solve any assingment and follows constructions. Bot: Ask me anything related to your assignment and I'll do my best to assist you.\n Student: ",
      temperature: 0.5,
      max_tokens: 500,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  }, 
  {
    name: "Smart Q&A",
    description: "provides accurate answers based on its extensive knowledge database.",
    option: {
      model: "text-davinci-003",
      prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with Unknown. User:\n",
      temperature: 0,
      max_tokens: 300,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Math Solver",
    description: "Solves math assingments including the calculation path.",
    option: {
      model: "text-davinci-003",
      prompt: "I'm a highly intelligent homework solving bot, who is specified to solve the following math assingments and includes every step of the calculation path like: (step1:2y = -3x; step2:y = -3/2x):\n",
      temperature: 0,
      max_tokens: 500,
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0.0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    },
  },
  {
    name: "Math Solutions",
    description: "Provides just the solution of your math asssingment.",
    option: {
      model: "text-davinci-003",
      prompt:"I'm a highly intelligent homework solving bot, who is specified to solve the following math assingments by just providing the solutions:\n",
      temperature: 0,
      max_tokens: 200,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  }, 
  {
    name: "Scientific Calculator",
    description: "Solves complex mathematical and scientific calculations.",
    option: {
      model: "text-davinci-003",
      prompt: "I'm a highly intelligent homework solving bot who is just specified to solve complex mathematical and scientific calculations.\n Student: ",
      temperature: 0,
      max_tokens: 264,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Text Writing",
    description: "Writes any text you desire!",
    option: {
      model: "text-davinci-003",
      prompt: "I'm a highly intelligent homework solving bot, who is specified to write texts. Write the mainbody with an introduction and conclsion if they fit to the text and do not forget linking words. assingment:\n",
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Text Outlines",
    description: "Provides helpful text outlines for every text you desire.",
    option: {
      model: "text-davinci-003",
      prompt: "I am a highly intelligent outlines generating bot. I create an outline for the text you want to write.\n User: ",
      temperature: 0.3,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Keywords Extracter",
    description: "Extracts, creates keywords from the text.",
    option: {
      model: "text-davinci-003",
      prompt: "I'm a highly intelligent keyword bot, who extracts and creates related keywords from a text. student: ",
      temperature: 0.8,
      max_tokens: 150,
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0.0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    },
  },
  {
    name: "Grammer Correction",
    description: "Corrects sentences into the standard language.",
    option: {
      model: "text-davinci-003",
      prompt: "I'm a grammer correcting bot who is capable of correcting any text or word and who corrects everything just give me the text you want to translate.\n correct this: ",
      temperature: 0.3,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Multilingual Translator",
    description: "Translates every text into the language you desire.",
    option: {
      model: "text-davinci-003",
      prompt: "I'm a multilingual translation bot, who is able to translate every text in any langauge. Student: what is ",
      temperature: 0.3,
      max_tokens: 1000,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Dictionary and Thesaurus",
    description: "Provides definitions and synonyms for words, as well as translations.",
    option: {
      model: "text-davinci-003",
      prompt: "I am a highly intelligent Dictionary and Thesaurus bot. Student:\n",
      temperature: 0,
      max_tokens: 200,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Study Notes",
    description: "Provide a topic and get helpful study notes.",
    option: {
      model: "text-davinci-003",
      prompt: "I'm a study bot, who is able to give some key notes for topics which students have to learn about. student: ",
      temperature: 0.3,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Grid Creation",
    description: "Create tables from long form text by specifying a structure and supplying some examples.",
    option: {
      model: "text-davinci-003",
      prompt: "I'm a highly intelligent table creator bot, who makes tables and categories out of texts. student:  ",
      temperature: 0,
      max_tokens: 250,
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0.0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    },
  },
  {
    name: "Idea Generator",
    description: "Provides helpful ideas on the topic you desire.",
    option: {
      model: "text-davinci-003",
      prompt: "I am a highly intelligent idea generating bot. I create 10 ideas which fit to your topic and which will definitly help you.\n User: ",
      temperature: 0.7,
      max_tokens: 250,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Mindmap Creation",
    description: "creates the branches of your mindmap in bullet points. ",
    option: {
      model: "text-davinci-003",
      prompt: "I am a highly intelligent mindmap generating bot, who lists out the central idea, the main branches and the subbranches of your mindmap in bullet points and explain every subbranch in keywords.\n User: ",
      temperature: 0.8,
      max_tokens: 250,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Learning Companion",
    description: "Helps students with their studies with practise questions and explanations.",
    option: {
      model: "text-davinci-003",
      prompt: "I'm a highly intelligent bot who helps students with their studies by providing explanations, summarizing information, and generating practice questions so your mission is to teach them and help them as much as possible.\n Student: ",
      temperature: 0.5,
      max_tokens: 250,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 1.5,
    },
  },
];

