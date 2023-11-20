import { StylesButton, Text } from "./SearchBtn.styled";

export default function SearchBtn({ text, onClick, width }) {
  return (
    <StylesButton onClick={onClick} style={{ width: width }}>
      <Text>{text}</Text>
    </StylesButton>
  );
}
