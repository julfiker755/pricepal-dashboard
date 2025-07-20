"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";


export function AddFieldDialog({ onSave, children }) {
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("option");
  const [price, setPrice] = useState("");
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    onSave({ name: fieldName, type: fieldType, price });
    setFieldName("");
    setFieldType("option");
    setPrice("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-4 rounded-xl overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Add new field</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="fieldName">Field name</Label>
            <Input
              id="fieldName"
              placeholder="Less than 1000 sq ft"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
            />
          </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
         <div className="grid gap-2">
            <Label htmlFor="fieldType">Field type</Label>
            <Select value={fieldType} onValueChange={setFieldType}>
              <SelectTrigger id="fieldType" className="w-full">
                <SelectValue placeholder="Option" />
              </SelectTrigger>
              <SelectContent className={"rounded-xl"}>
                <SelectItem value="option">Option</SelectItem>
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="number">Number</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <div className="relative">
              <Input
                id="price"
                type="number"
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="pr-8"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            </div>
          </div>
         </div>
         <Button
            variant={"main"}
            type="submit"
            onClick={handleSave}
            className={"w-full"}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
