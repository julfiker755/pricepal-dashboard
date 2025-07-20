import { Dialog2, DialogContent2, DialogDescription2, DialogHeader2, DialogTitle2, DialogTrigger2 } from "@/components/ui/dialog2";
import { cn } from "@/lib/utils";



export default function Modal2({
  open,
  setIsOpen,
  children,
  className,
  title,
  titleStyle,
  mainStyle
}) {
  return (
    <Dialog2 open={open} onOpenChange={setIsOpen}>
      <DialogTrigger2 asChild />
      <DialogContent2
        className={cn(
          "sm:max-w-md p-0 gap-0 bg-white rounded-2xl overflow-hidden border-none",
          className
        )}
      >
        <DialogHeader2 className="bg-primary text-white p-3">
          <DialogTitle2 className={cn("text-white font-medium",titleStyle)}>
              {title}
          </DialogTitle2>
        </DialogHeader2>
        <DialogDescription2 className="hidden"></DialogDescription2>
         <div className={cn("p-4",mainStyle)}>
            {children}
         </div>
      </DialogContent2>
    </Dialog2>
  );
}
