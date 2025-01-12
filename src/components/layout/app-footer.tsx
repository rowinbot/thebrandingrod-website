import { socialButtons } from "@/content/layout";
import { BarButton } from "./bar-button";

export function AppFooter() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-between px-16 py-8">
      <p className="text-center">
        {"© 2024 Rodrigo Flores. All rights reserved."}
      </p>

      <div className="flex flex-row gap-4">
        {socialButtons.map((button) => (
          <BarButton key={button.link} button={button} />
        ))}
      </div>
    </footer>
  );
}
