import React from "react";
import { Heading } from "../App";

type PropsAreEqual<Props> = (
  prevProps: Readonly<Props>,
  nextProps: Readonly<Props>,
) => boolean;

type PropsFromInputComponent = React.ComponentProps<typeof Heading>;

const withSampleHoC = <P extends PropsFromInputComponent>(
  InputComponent: React.ComponentType<P>,
  propsAreEqual?: PropsAreEqual<P> | false,
): React.ComponentType<P> => {
  function WithSampleHoc(props: P) {
    const { title } = props;
    return (
      <>
        <div>HoC {`${title}`}</div>
        <InputComponent {...props} />
      </>
    );
  }

  WithSampleHoc.displayName = `withSampleHoc(${InputComponent.name})`;

  let OutputComponent =
    propsAreEqual === false
      ? WithSampleHoc
      : React.memo(WithSampleHoc, propsAreEqual);

  return OutputComponent as typeof WithSampleHoc;
};

export default withSampleHoC;
