"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DeleteService } from "../Icon-button";

export function FieldRow({
  fieldName,
  fieldType,
  price,
  onFieldNameChange,
  onFieldTypeChange,
  onPriceChange,
  onDelete,
}) {
  return (
    <>
      <Input
        placeholder="Field name"
        value={fieldName}
        onChange={(e) => onFieldNameChange(e.target.value)}
        className="col-span-2 rounded-full md:col-span-1"
      />
      <Select value={fieldType} onValueChange={onFieldTypeChange}>
        <SelectTrigger className="w-full rounded-full">
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent className={"rounded-xl"}>
          <SelectItem value="option">Option</SelectItem>
          <SelectItem value="text">Text</SelectItem>
          <SelectItem value="number">Number</SelectItem>
        </SelectContent>
      </Select>
      <div className="relative">
        <Input
          type="number"
          placeholder="0.00"
          value={price}
          onChange={(e) => onPriceChange(e.target.value)}
          className="pr-8 rounded-full"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          $
        </span>
      </div>
       <DeleteService  onClick={onDelete}></DeleteService>
    </>
  );
}
