"use client";

import * as AppMeta from "../../../../package.json";

import { AppShell, Burger, Group, NavLink, Text, Title, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLayoutGrid, IconPhoto, IconHome, IconPalette } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { APP_NAME } from "@/constants";

const navItems = [
  { label: "Home", href: "/", icon: IconHome },
  { label: "All Icons", href: "/icons", icon: IconLayoutGrid },
  { label: "System Icons", href: "/icons/system", icon: IconPalette },
  { label: "Illustrations", href: "/icons/illustrations", icon: IconPhoto },
];

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className="border-b border-gray-200 px-3">
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <UnstyledButton component={Link} href="/">
              <Group gap="xs">
                <div className="flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo-no-margins.png"
                    alt="Maqsad Logo"
                    width={70}
                    height={20}
                    priority
                  />
                </div>
                {/* <Title order={4} className="font-semibold">
                  {APP_NAME}
                </Title> */}
              </Group>
            </UnstyledButton>
          </Group>
          <Text size="sm" c="dimmed" visibleFrom="sm">
            v{AppMeta.dependencies["@maqsad/icons"].replace(/[^0-9.a-zA-Z-]/g, "")}
          </Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" className="border-r border-gray-200">
        <AppShell.Section grow>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                component={Link}
                href={item.href}
                label={item.label}
                leftSection={<item.icon size={18} stroke={1.5} />}
                active={pathname === item.href}
                className="rounded-md"
                onClick={() => opened && toggle()}
              />
            ))}
          </nav>
        </AppShell.Section>

        <AppShell.Section>
          <div className="pt-4 border-t border-gray-200">
            <Text size="xs" c="dimmed" className="text-center">
              Built with ❤️ by Maqsad
            </Text>
          </div>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main className="bg-gray-50">{children}</AppShell.Main>
    </AppShell>
  );
}
