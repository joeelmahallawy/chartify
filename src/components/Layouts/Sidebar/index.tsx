import React, { useState } from "react";
import {
  Navbar,
  Center,
  Image,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  AppShell,
  Anchor,
} from "@mantine/core";
import {
  TablerIcon,
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconBook,
  IconDoorExit,
  IconChartArea,
  IconChartArcs,
  IconChartAreaLine,
} from "@tabler/icons";
import Logo from "../../../../public/chartify.png";
import { Book } from "tabler-icons-react";
import ChartCreator from "../ChartCreator";

// import Logo from "../../../../public/chartify-logo-trans.png";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.white,
    opacity: 0.85,

    "&:hover": {
      opacity: 1,
      backgroundColor: theme.colors.pink[5],
    },
  },

  active: {
    opacity: 1,
    "&, &:hover": {
      backgroundColor: theme.colors.pink[4],
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}
function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip mt={5} label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home" },
  // { icon: IconBook, label: "Docs" },
  { icon: IconChartAreaLine, label: "Charts" },
];

export default function Page({ children, setPage }) {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        setPage({
          home: false,
          docs: false,
          charts: false,
          [link.label.toLowerCase()]: true,
        });
      }}
    />
  ));

  return (
    <AppShell
      navbar={
        <Navbar
          height={"auto"}
          width={{ base: 90 }}
          p="md"
          sx={(theme) => ({
            minHeight: "100vh",
            background: "#d6336c",
          })}
        >
          <Anchor href="/">
            <Image src={Logo.src} width={70} />
          </Anchor>
          <Navbar.Section grow mt={50}>
            <Stack justify="center" spacing={0}>
              {links}
            </Stack>
          </Navbar.Section>
          <Navbar.Section>
            <Stack justify="center" spacing={0}>
              <NavbarLink icon={IconSwitchHorizontal} label="Exit" />
            </Stack>
          </Navbar.Section>
        </Navbar>
      }
    >
      {children}
    </AppShell>
  );
}
