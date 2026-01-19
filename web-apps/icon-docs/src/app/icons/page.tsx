"use client";

import { Container, Title, Text, SimpleGrid, Badge, Group, Tabs, Card } from "@mantine/core";
import { useState, useMemo } from "react";
import { IconLayoutGrid, IconPalette, IconPhoto } from "@tabler/icons-react";
import Link from "next/link";
import * as SystemIcons from "@maqsad/icons/system";
import * as IllustrationIcons from "@maqsad/icons/illustrations";

import { IconCard } from "@/components/features/IconCard";
import { IconDetailModal, type IconType } from "@/components/features/IconDetailModal";
import { IconSearchBar } from "@/components/features/IconSearchBar";
import { SYSTEM_ICONS, ILLUSTRATION_ICONS } from "@/data/icons";

// Type definitions
type SystemIconComponent = React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
type IllustrationComponent = React.ComponentType<{ size?: number; variant?: string }>;

const SystemIconsMap = SystemIcons as Record<string, SystemIconComponent>;
const IllustrationIconsMap = IllustrationIcons as Record<string, IllustrationComponent>;

export default function AllIconsPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<string | null>("all");
  const [selectedIcon, setSelectedIcon] = useState<{ name: string; type: IconType } | null>(null);

  const filteredSystemIcons = useMemo(() => {
    return SYSTEM_ICONS.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredIllustrationIcons = useMemo(() => {
    return ILLUSTRATION_ICONS.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalIcons = SYSTEM_ICONS.length + ILLUSTRATION_ICONS.length;
  const filteredTotal = filteredSystemIcons.length + filteredIllustrationIcons.length;

  const renderIcon = (name: string, type: IconType) => (size: number, variant?: string, stroke?: string, fill?: string) => {
    if (type === "system") {
      const IconComponent = SystemIconsMap[name];
      return IconComponent ? <IconComponent size={size} stroke={stroke} fill={fill} /> : null;
    } else {
      const IconComponent = IllustrationIconsMap[name];
      return IconComponent ? <IconComponent size={size} variant={variant || "primary"} /> : null;
    }
  };

  return (
    <Container size="lg" py="xl">
      <div className="mb-8">
        <Group justify="space-between" align="flex-start" mb="md">
          <div>
            <Title order={1} className="mb-2">
              All Icons
            </Title>
            <Text c="dimmed">
              Browse all {totalIcons} icons in the Maqsad icon library
            </Text>
          </div>
          <Badge size="lg" variant="light">
            {filteredTotal} icons
          </Badge>
        </Group>
      </div>

      <IconSearchBar search={search} onSearchChange={setSearch} />

      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List mb="lg">
          <Tabs.Tab value="all" leftSection={<IconLayoutGrid size={16} />}>
            All ({filteredTotal})
          </Tabs.Tab>
          <Tabs.Tab value="system" leftSection={<IconPalette size={16} />}>
            System ({filteredSystemIcons.length})
          </Tabs.Tab>
          <Tabs.Tab value="illustrations" leftSection={<IconPhoto size={16} />}>
            Illustrations ({filteredIllustrationIcons.length})
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="all">
          {filteredSystemIcons.length > 0 && (
            <div className="mb-8">
              <Group justify="space-between" mb="md">
                <Title order={3}>System Icons</Title>
                <Text
                  component={Link}
                  href="/icons/system"
                  size="sm"
                  c="blue"
                  className="hover:underline"
                >
                  View all →
                </Text>
              </Group>
              <SimpleGrid cols={{ base: 2, xs: 3, sm: 4, md: 5, lg: 6 }} spacing="md">
                {filteredSystemIcons.slice(0, 12).map((name) => {
                  const IconComponent = SystemIconsMap[name];
                  return (
                    <IconCard
                      key={name}
                      name={name}
                      icon={IconComponent ? <IconComponent size={24} /> : null}
                      copyText={`import { ${name} } from '@maqsad/icons/system';`}
                      onClick={() => setSelectedIcon({ name, type: "system" })}
                    />
                  );
                })}
              </SimpleGrid>
              {filteredSystemIcons.length > 12 && (
                <Card mt="md" p="sm" withBorder className="text-center">
                  <Text size="sm" c="dimmed">
                    +{filteredSystemIcons.length - 12} more system icons.{" "}
                    <Text component={Link} href="/icons/system" c="blue" inherit>
                      View all
                    </Text>
                  </Text>
                </Card>
              )}
            </div>
          )}

          {filteredIllustrationIcons.length > 0 && (
            <div>
              <Group justify="space-between" mb="md">
                <Title order={3}>Illustration Icons</Title>
                <Text
                  component={Link}
                  href="/icons/illustrations"
                  size="sm"
                  c="blue"
                  className="hover:underline"
                >
                  View all →
                </Text>
              </Group>
              <SimpleGrid cols={{ base: 2, xs: 3, sm: 4, md: 5, lg: 6 }} spacing="md">
                {filteredIllustrationIcons.map((name) => {
                  const IconComponent = IllustrationIconsMap[name];
                  return (
                    <IconCard
                      key={name}
                      name={name}
                      icon={IconComponent ? <IconComponent size={48} /> : null}
                      copyText={`import { ${name} } from '@maqsad/icons/illustrations';`}
                      onClick={() => setSelectedIcon({ name, type: "illustration" })}
                    />
                  );
                })}
              </SimpleGrid>
            </div>
          )}

          {filteredTotal === 0 && (
            <Card p="xl" withBorder className="text-center">
              <Text c="dimmed">No icons found matching &quot;{search}&quot;</Text>
            </Card>
          )}
        </Tabs.Panel>

        <Tabs.Panel value="system">
          {filteredSystemIcons.length > 0 ? (
            <SimpleGrid cols={{ base: 2, xs: 3, sm: 4, md: 5, lg: 6 }} spacing="md">
              {filteredSystemIcons.map((name) => {
                const IconComponent = SystemIconsMap[name];
                return (
                  <IconCard
                    key={name}
                    name={name}
                    icon={IconComponent ? <IconComponent size={24} /> : null}
                    copyText={`import { ${name} } from '@maqsad/icons/system';`}
                    onClick={() => setSelectedIcon({ name, type: "system" })}
                  />
                );
              })}
            </SimpleGrid>
          ) : (
            <Card p="xl" withBorder className="text-center">
              <Text c="dimmed">No system icons found matching &quot;{search}&quot;</Text>
            </Card>
          )}
        </Tabs.Panel>

        <Tabs.Panel value="illustrations">
          {filteredIllustrationIcons.length > 0 ? (
            <SimpleGrid cols={{ base: 2, xs: 3, sm: 4, md: 5, lg: 6 }} spacing="md">
              {filteredIllustrationIcons.map((name) => {
                const IconComponent = IllustrationIconsMap[name];
                return (
                  <IconCard
                    key={name}
                    name={name}
                    icon={IconComponent ? <IconComponent size={48} /> : null}
                    copyText={`import { ${name} } from '@maqsad/icons/illustrations';`}
                    onClick={() => setSelectedIcon({ name, type: "illustration" })}
                  />
                );
              })}
            </SimpleGrid>
          ) : (
            <Card p="xl" withBorder className="text-center">
              <Text c="dimmed">No illustration icons found matching &quot;{search}&quot;</Text>
            </Card>
          )}
        </Tabs.Panel>
      </Tabs>

      {/* Icon Detail Modal */}
      {selectedIcon && (
        <IconDetailModal
          opened={!!selectedIcon}
          onClose={() => setSelectedIcon(null)}
          name={selectedIcon.name}
          type={selectedIcon.type}
          renderIcon={renderIcon(selectedIcon.name, selectedIcon.type)}
        />
      )}
    </Container>
  );
}
