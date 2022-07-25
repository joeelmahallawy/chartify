import { showNotification } from "@mantine/notifications";
import { DefaultMantineColor } from "@mantine/styles";

const customNotification = (
  title: string,
  message: string,
  color: DefaultMantineColor
) =>
  showNotification({
    disallowClose: true,
    title,
    message,
    color,
  });

export default customNotification;
