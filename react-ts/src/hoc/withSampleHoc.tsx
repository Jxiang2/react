import React from "react";
import { Heading } from "../App";

type PropsAreEqual<P> = (
  prevProps: Readonly<P>,
  nextProps: Readonly<P>,
) => boolean;

type PropsFromInputComponent = React.ComponentProps<typeof Heading>;

const withSampleHoC = <P extends PropsFromInputComponent>(
  InputComponent: React.ComponentType<P>,
  propsAreEqual?: PropsAreEqual<P> | false,
): React.FC<P> => {
  function WithSampleHoc(props: P) {
    const { title } = props;
    return (
      <>
        <div>HoC {`${title}`}</div>
        <InputComponent {...props} />
      </>
    );
  }

  let OutputComponent =
    propsAreEqual === false
      ? WithSampleHoc
      : React.memo(WithSampleHoc, propsAreEqual);

  return OutputComponent as typeof WithSampleHoc;
};

export default withSampleHoC;
