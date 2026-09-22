import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function WelcomeDialog({
  open,
  onOpenChange,
  name,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  name?: string | null;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-2 border-primary/70 bg-parchment-deep text-center shadow-xl">
        <DialogHeader className="items-center">
          <span className="mb-2 grid size-14 place-items-center rounded-full border border-gold-deep/40 bg-gradient-to-br from-gold to-primary">
            <Sparkles className="size-7 text-primary-foreground" aria-hidden />
          </span>
          <DialogTitle className="font-display text-2xl text-ink">
            Chào mừng {name?.trim() ? name.trim() : "Độc giả"}!
          </DialogTitle>
          <DialogDescription className="text-ink/80">
            Bạn đã đăng nhập thành công vào cổng thông tin lịch sử và văn hóa Ấn Độ.
          </DialogDescription>
        </DialogHeader>
        <Button
          onClick={() => onOpenChange(false)}
          className="mx-auto mt-2 w-full bg-gradient-to-r from-gold to-primary font-semibold text-primary-foreground shadow-md hover:opacity-95 sm:w-auto sm:px-8"
        >
          Bắt đầu khám phá
        </Button>
      </DialogContent>
    </Dialog>
  );
}
