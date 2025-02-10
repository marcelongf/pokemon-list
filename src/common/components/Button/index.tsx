import { twMerge } from "tailwind-merge"

export type ButtonProps = {
  disabled?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default ({
  disabled = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button 
      disabled={disabled}
      className={twMerge('bg-gray-600 text-white rounded-lg p-2 cursor-pointer', disabled && 'opacity-50 cursor-default', className)}
      {...props}
    />
  )
}