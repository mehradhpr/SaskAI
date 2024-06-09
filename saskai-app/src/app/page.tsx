import ChatBox from "@/components/chatbox";

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Welcome to SaskAI - Under development
        </h1>
        <p className="text-lg text-foreground">
          Your go-to AI chatbot for everything related to the University of Saskatchewan.
        </p>
      </header>
      <main className="mt-8">
        <section className="text-center">
          <p className="mt-4 text-foreground">
            Ask me anything about the University of Saskatchewan, including application processes,
            admissions, programs, and courses.
          </p>
          <ChatBox />
        </section>
      </main>
    </div>
  );
}
