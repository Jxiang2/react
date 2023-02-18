import React from "react";
import { Heading } from "../App";

type Options = {
  title?: string;
  fname?: string;
  lname?: string;
  age?: number;
};

type PropsAreEqual<Props> = (
  prevProps: Readonly<Props>,
  nextProps: Readonly<Props>,
) => boolean;

type PropsFromInputComponent = React.ComponentProps<typeof Heading>;

const withSampleHoC = <P extends PropsFromInputComponent>(
  InputComponent: React.ComponentType<P>,
  options: Options,
  propsAreEqual?: PropsAreEqual<P>,
): React.ComponentType<P> => {
  let toShow: string | undefined = undefined;
  if (options.fname && options.lname && options.age && options.title)
    toShow = `${options.title}-${options.fname}${options.lname}-${options.age}`;

  function WithSampleHoc(props: P) {
    const { title } = props;
    return (
      <div>
        <div>{toShow ? toShow : title}</div>
        <InputComponent {...props} />
      </div>
    );
  }

  WithSampleHoc.displayName = `withSampleHoc(${InputComponent.name})`;

  let OutputComponent = propsAreEqual
    ? React.memo(WithSampleHoc, propsAreEqual)
    : WithSampleHoc;

  return OutputComponent as typeof WithSampleHoc;
};

export default withSampleHoC;
