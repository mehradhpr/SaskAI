import ChatBox from "@/components/chatbox";

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center">
        <h1 className="text-3xl text-green-600 min-h-fit min-w-fit z-50 tracking-widest xl:text-4xl p-2">
          SaskAI
        </h1>
        <p className="text-lg text-foreground">
          Your go-to AI chatbot for everything related to the University of Saskatchewan.
        </p>
      </header>
      <main className="mt-8">
        <section className="text-center">
          <p className="mt-4 text-foreground">
            Ask me anything about the University of Saskatchewan, including application processes,
            admissions, programs, and academic policies.
          </p>
          <ChatBox />
        </section>
      </main>
    </div>
  );
}
