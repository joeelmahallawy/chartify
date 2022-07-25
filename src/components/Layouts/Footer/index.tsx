import {
  createStyles,
  Anchor,
  Group,
  ActionIcon,
  Image,
  Box,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../../../../public/chartify-logo-trans.png";
const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function Footer() {
  const router = useRouter();
  const { classes } = useStyles();
  const items = [
    {
      link: "mailto:youssef.elmahallawy01@gmail.com",
      label: "Contact",
    },
    {
      link: "/pricing",
      label: "Pricing",
    },
  ].map((link) => (
    <Anchor<"a">
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Anchor
          onClick={() => {
            if (router.pathname === "/" && typeof window !== "undefined")
              window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
            else router.push("/");
          }}
          // href="/"
          sx={{ "&:hover": { cursor: "pointer" } }}
        >
          <Image src={Logo.src} width={100} height={33} />
        </Anchor>
        &copy; Copyright 2022
        <Group spacing="xs" position="right" noWrap>
          <Group className={classes.links}>{items}</Group>
          {/* <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon> */}
        </Group>
      </div>
    </div>
  );
}
