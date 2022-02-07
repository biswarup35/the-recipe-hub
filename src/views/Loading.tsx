import { Spinner, Stack } from "../components";

const Loading = () => {
  return (
    <Stack
      style={{ minHeight: `90vh` }}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner color="secondary" />
    </Stack>
  );
};

export default Loading;
