import { redirect } from "next/navigation";

export default function DashboardPage() {
  // Root dashboard skal kun redirecte
  // All faktisk UI ligger på undersider
  redirect("/dashboard/communities");
}
