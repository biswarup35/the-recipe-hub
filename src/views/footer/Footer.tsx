import { Stack } from "../../components";
const Footer = () => {
  return (
    <footer className="bg-main py-1">
      <Stack alignItems="center">
        <p>{`Copyright © The Recipe Hub ${new Date().getFullYear()}.`}</p>
      </Stack>
    </footer>
  );
};

export default Footer;
