import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../../components/Button";

export function Header() {
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 flex items-center justify-between shadow-shape gap-3">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-100" />
        <span className="text-zinc-100">Florianópolis, Brasil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-100" />
          <span className="text-zinc-100">17 a 26 de Agosto</span>
        </div>

        <div className="w-px h-6 bg-zinc-800"></div>
        <Button variant="secondary">
          alterar local/data
          <Settings2 className="size-5 text-zinc-300" />
        </Button>
      </div>
    </div>
  );
}
