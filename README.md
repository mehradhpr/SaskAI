# SaskAI

SaskAI is a web application featuring an AI-driven chatbot designed to assist users with information about the University of Saskatchewan. It provides instant, accurate answers to questions regarding admissions, programs, courses, campus facilities, and more.

## Project Stack:

- Frontend: Next.js with react
- Backend: Next.js API routes
- AI Chat Bot: DialogFLow
- Database: Postgre SQL
- Hosting: Vercel
- Web Scraping Usask: Puppeteer or Cheerio, since they are Node based
- Prisma as OREM (Optional)

## High level process flow map:

- User Interaction: Chat Interface
- API calls to DialogFlow: Next.js API routes
- DialogFLow Processing
- DialogFLow Response Handling in the API routes: Sent back to the Frontend
- Record the chat history and other useful info in the database for context awareness

## How to train the chatbot:

- Scrape the website
- Store the info in the databse
- Train the model based on that info
- Redo the process every once in a while to keep the info updated

## Software Specifications (current version):

- User enters the website, can interact with the chat bot.
- The chatbot can only input and output text.
- User asks a questions, and gets a response back.
- The Chat can remember the context of the conversation over time.
- There is no authentication, profile management of sorts. All the sessions are public.

More to be added later
