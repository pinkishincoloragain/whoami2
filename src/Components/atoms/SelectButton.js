import { DarkButton } from "../atoms/MyButton";

export default function SelectButton() {
  const [selected, setSelected] = React.useState(false);

  const handleButtonClick = () => {
    setSelected(!selected);
  };

  return <DarkButton onClick={handleButtonClick} />;
}
