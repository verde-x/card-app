import { Button, type ButtonProps } from "@chakra-ui/react";
import { memo, type FC, type ReactNode } from "react";

type Props = ButtonProps & {
  children: ReactNode;
};

export const PrimaryButton: FC<Props> = memo(({ children, ...props }) => {
  return (
    <Button bg="blue.500" color="white" variant="solid" {...props}>
      {children}
    </Button>
  );
});
