import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Rating, RatingValueType } from "./Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rating stories",
  component: Rating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //     backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyStars = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

EmptyStars.args = {
  changeRating: () => {},
  value: 0,
};

export const OneStar = Template.bind({});

OneStar.args = {
  changeRating: () => {},
  value: 1,
};

export const TwoStar = Template.bind({});

TwoStar.args = {
  changeRating: () => {},
  value: 2,
};

export const ThreeStar = Template.bind({});

ThreeStar.args = {
  changeRating: () => {},
  value: 3,
};

export const FourStar = Template.bind({});

FourStar.args = {
  changeRating: () => {},
  value: 4,
};

export const FiveStar = Template.bind({});

FiveStar.args = {
  changeRating: () => {},
  value: 5,
};

export const RatingChanging = () => {
  const [rating, setRating] = useState<RatingValueType>(1);
  return <Rating value={rating} changeRating={setRating} />;
};
