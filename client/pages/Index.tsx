import { DemoResponse } from "@shared/api";
import { useEffect, useState } from "react";

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");
  // Fetch users on component mount
  useEffect(() => {
    fetchDemo();
  }, []);

  // Example of how to fetch data from the server (if needed)
  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as DemoResponse;
      setExampleFromServer(data.message);
    } catch (error) {
      console.error("Error fetching hello:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-chill-background">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl font-bold text-white mb-4 font-lato">
          🎬 Chill App Setup Complete!
        </h1>
        <p className="text-chill-secondary mb-6 font-lato">
          Your streaming app is ready. Visit the homepage to see the full experience.
        </p>
        <div className="space-y-2">
          <p className="text-sm text-chill-disabled font-lato">Available routes:</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="/" className="text-chill-primary hover:underline">/ - Homepage</a>
            <a href="/login" className="text-chill-primary hover:underline">/login - Login Page</a>
            <a href="/register" className="text-chill-primary hover:underline">/register - Register Page</a>
          </div>
        </div>
        <p className="mt-4 text-xs text-chill-disabled max-w-md">{exampleFromServer}</p>
      </div>
    </div>
  );
}
