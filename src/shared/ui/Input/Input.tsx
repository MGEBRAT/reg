export const Input = ({ type, placeholder, value, onChange }: { type: string; placeholder: string; value: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return <input value={value} onChange={onChange}  type={type} className='input' placeholder={placeholder} />;
}