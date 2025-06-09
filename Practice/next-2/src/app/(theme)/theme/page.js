import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition">
      <h1 className="text-3xl font-bold mb-4">Light/Dark Theme Toggle</h1>
      <ThemeToggleButton />
    </main>
  );
}
