type InputProps = {
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default ({
  label,
  ...props
}: InputProps) => {
  return (
    <label className="flex flex-col gap-2">
      {label}
      <input
        {...props}
      />
    </label>
  )
}