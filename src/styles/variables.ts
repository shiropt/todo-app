import { gray, blackA } from "@radix-ui/colors";

export const theme = {
  colors: {
    active: blackA.blackA12,
    passive: blackA.blackA8,
    gray: gray.gray1,
  },
  background: {
    hover: gray.gray3,
    main: gray.gray1,
  },
  border: `1px solid ${gray.gray3} ;`,
} as const;
