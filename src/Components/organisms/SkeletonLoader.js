import styled from "styled-components";

const SkeletonLoaderWrapper = styled.div(props => {
  return {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...props,
  };
});

export default function SkeletonLoader() {
  return <SkeletonLoaderWrapper />;
}
