"use client";

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Badge,
  Group,
  Card,
  SegmentedControl,
} from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { useState, useMemo } from "react";
import * as SystemIcons from "@maqsad/icons/system";

import { IconCard } from "@/components/features/IconCard";
import { IconDetailModal } from "@/components/features/IconDetailModal";
import { IconSearchBar } from "@/components/features/IconSearchBar";
import { SYSTEM_ICONS } from "@/constants/icons";

// Type for the icons module
type IconComponent = React.ComponentType<{ size?: number; stroke?: string; fill?: string; strokeWidth?: number }>;
const IconsMap = SystemIcons as Record<string, IconComponent>;

export default function SystemIconsPage() {
  const [search, setSearch] = useState("");
  const [sizeFilter, setSizeFilter] = useState("24");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const { strokeIcons, filledIcons } = useMemo(() => {
    const searchLower = search.toLowerCase();
    const filtered = SYSTEM_ICONS.filter((name) => name.toLowerCase().includes(searchLower));

    return {
      strokeIcons: filtered.filter((name) => !name.includes("Filled")),
      filledIcons: filtered.filter((name) => name.includes("Filled")),
    };
  }, [search]);

  const totalCount = strokeIcons.length + filledIcons.length;

  const iconSize = parseInt(sizeFilter, 10);

  const createRenderIcon = (name: string) => {
    const IconComponent = IconsMap[name];
    return function renderIconForModal(size: number, _variant?: string, stroke?: string, fill?: string, strokeWidth?: number) {
      return IconComponent ? <IconComponent size={size} stroke={stroke} fill={fill} strokeWidth={strokeWidth} /> : null;
    };
  };

  return (
    <Container size="lg" py="xl">
      <div className="mb-8">
        <Group justify="space-between" align="flex-start" mb="md">
          <div>
            <Title order={1} className="mb-2">
              System Icons
            </Title>
            <Text c="dimmed">
              Line-based UI icons for interfaces, actions, and navigation. Perfect for buttons, menus, and
              general UI elements.
            </Text>
          </div>
          <Badge size="lg" variant="light" color="blue">
            {totalCount} icons
          </Badge>
        </Group>
      </div>

      <IconSearchBar search={search} onSearchChange={setSearch} />

      <Group mb="lg" gap="md">
        <Text size="sm" c="dimmed">
          Preview size:
        </Text>
        <SegmentedControl
          value={sizeFilter}
          onChange={setSizeFilter}
          data={[
            { label: "16px", value: "16" },
            { label: "18px", value: "18" },
            { label: "24px", value: "24" },
            { label: "32px", value: "32" },
          ]}
          size="xs"
        />
      </Group>

      {/* Usage Example */}
      <Card shadow="sm" padding="md" radius="md" withBorder mb="xl">
        <Title order={4} className="mb-3">
          Usage
        </Title>
        <CodeHighlight
          language="tsx"
          code={`import { IconArrowBack, IconCheck } from '@maqsad/icons/system';

// Basic usage
<IconArrowBack />

// With custom props
<IconArrowBack size={${iconSize}} color="currentColor" strokeWidth={2} />`}
        />
      </Card>

      {totalCount > 0 ? (
        <>
          {/* Stroke Icons Section */}
          {strokeIcons.length > 0 && (
            <div className="mb-8">
              <Group mb="md">
                <Title order={3}>Stroke Icons</Title>
                <Badge variant="light" color="gray">
                  {strokeIcons.length}
                </Badge>
              </Group>
              <SimpleGrid cols={{ base: 2, xs: 3, sm: 4, md: 5, lg: 6 }} spacing="md">
                {strokeIcons.map((name) => {
                  const IconComponent = IconsMap[name];
                  return (
                    <IconCard
                      key={name}
                      name={name}
                      icon={IconComponent ? <IconComponent size={iconSize} /> : null}
                      copyText={`import { ${name} } from '@maqsad/icons/system';`}
                      onClick={() => setSelectedIcon(name)}
                    />
                  );
                })}
              </SimpleGrid>
            </div>
          )}

          {/* Filled Icons Section */}
          {filledIcons.length > 0 && (
            <div>
              <Group mb="md">
                <Title order={3}>Filled Icons</Title>
                <Badge variant="light" color="gray">
                  {filledIcons.length}
                </Badge>
              </Group>
              <SimpleGrid cols={{ base: 2, xs: 3, sm: 4, md: 5, lg: 6 }} spacing="md">
                {filledIcons.map((name) => {
                  const IconComponent = IconsMap[name];
                  return (
                    <IconCard
                      key={name}
                      name={name}
                      icon={IconComponent ? <IconComponent size={iconSize} /> : null}
                      copyText={`import { ${name} } from '@maqsad/icons/system';`}
                      onClick={() => setSelectedIcon(name)}
                    />
                  );
                })}
              </SimpleGrid>
            </div>
          )}
        </>
      ) : (
        <Card p="xl" withBorder className="text-center">
          <Text c="dimmed">No icons found matching &quot;{search}&quot;</Text>
        </Card>
      )}

      {/* Icon Detail Modal */}
      {selectedIcon && (
        <IconDetailModal
          opened={!!selectedIcon}
          onClose={() => setSelectedIcon(null)}
          name={selectedIcon}
          type="system"
          renderIcon={createRenderIcon(selectedIcon)}
        />
      )}
    </Container>
  );
}
