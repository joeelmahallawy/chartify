import { showNotification } from "@mantine/notifications";
import { DefaultMantineColor } from "@mantine/styles";

const customNotification = (
  title: string,
  message: string,
  color: DefaultMantineColor
) =>
  showNotification({
    styles: (theme) => ({ root: { zIndex: 999999999 } }),
    disallowClose: true,
    title,
    message,
    color,
  });

export default customNotification;
