import { Button } from "./Button.styled";
import { ButtonCancel } from "./Button.styled";

export const ButtonElem = ({type}) => {
  return (
    <div>
          <Button type={type}>buy</Button>
          <Button as="a" href="#">link</Button>
          <ButtonCancel>Cancel</ButtonCancel>
    </div>
  );
};
