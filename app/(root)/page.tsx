// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/movies"); // Permanent server-side redirect
}
