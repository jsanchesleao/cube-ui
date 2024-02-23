import './component.css'

export type ButtonProps = {
  text: string
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="cube-btn">{props.text}</button>
  )
}