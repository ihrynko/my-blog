import { Loader } from "./Loader";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Loader",
  component: Loader,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Loader {...args} />;

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
