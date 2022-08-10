import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { useAtom } from "jotai";
import { filterAtom } from "../store";

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: "unset",
  backgroundColor: "white",
  width: 25,
  height: 25,
  borderRadius: "100%",
  boxShadow: `0 2px 5px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: 11,
    height: 11,
    borderRadius: "50%",
    backgroundColor: violet.violet11,
  },
});

const Flex = styled("div", { display: "flex" });

const Label = styled("label", {
  color: "#242424",
  fontSize: 15,
  lineHeight: 1,
  userSelect: "none",
  paddingLeft: 15,
});

const RadioGroup = styled(RadioGroupPrimitive.Root, {
  display: "flex",
  margin: "0 auto",
  marginBottom: 24,
});
const RadioGroupRadio = StyledRadio;
const RadioGroupIndicator = StyledIndicator;

export default function Filters() {
  const [filter, setFilter] = useAtom(filterAtom);

  const handleChange = (
    value: "all" | "urgent" | "completed" | "incompleted"
  ) => {
    setFilter(value);
  };

  return (
    <RadioGroup
      value={filter}
      onValueChange={handleChange}
      aria-label="View density"
    >
      <Flex css={{ margin: "0 10px", alignItems: "center" }}>
        <RadioGroupRadio value="all" id="all">
          <RadioGroupIndicator />
        </RadioGroupRadio>
        <Label htmlFor="all">All</Label>
      </Flex>
      <Flex css={{ margin: "0 10px", alignItems: "center" }}>
        <RadioGroupRadio value="urgent" id="r3">
          <RadioGroupIndicator />
        </RadioGroupRadio>
        <Label htmlFor="r3">Urgent</Label>
      </Flex>
      <Flex css={{ margin: "0 10px", alignItems: "center" }}>
        <RadioGroupRadio value="incompleted" id="r3">
          <RadioGroupIndicator />
        </RadioGroupRadio>
        <Label htmlFor="r3">Incompleted</Label>
      </Flex>
      <Flex css={{ margin: "0 10px", alignItems: "center" }}>
        <RadioGroupRadio value="completed" id="completed">
          <RadioGroupIndicator />
        </RadioGroupRadio>
        <Label htmlFor="completed">Completed</Label>
      </Flex>
    </RadioGroup>
  );
}
