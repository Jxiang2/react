import React from "react";

type PropsAreEqual<P> = (
  prevProps: Readonly<P>,
  nextProps: Readonly<P>,
) => boolean;

const withSampleHoC = <P extends {}>(
  // a react function or class component
  InputComponent: React.ComponentType<P>,
  // a function to check if props in 2 renders are equal or not
  propsAreEqual?: PropsAreEqual<P> | false,
): React.FC<P> => {
  function WithSampleHoc(props: P) {
    return (
      <>
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
