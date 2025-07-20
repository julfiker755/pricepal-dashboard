'use client'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'


export default function DroupDownSelect({
  options = [],
  defaultValue,
  placeholder = 'Select',
  className,
  onChange,
}) {
  return (
    <Select defaultValue={defaultValue} onValueChange={onChange} className="bg-[red]">
      <SelectTrigger className={cn("focus-visible:border focus-visible:ring-input",className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={"rounded-xl"}>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

