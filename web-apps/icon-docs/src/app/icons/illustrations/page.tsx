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
import * as IllustrationIcons from "@maqsad/icons/illustrations";

import { IconCard } from "@/components/features/IconCard";
import { IconDetailModal } from "@/components/features/IconDetailModal";
import { IconSearchBar } from "@/components/features/IconSearchBar";
import { ILLUSTRATION_ICONS, ILLUSTRATION_VARIANTS, type IllustrationVariant } from "@/constants/icons";

// Type for the illustration icons module
type IllustrationComponent = React.ComponentType<{
  size?: number;
  variant?: IllustrationVariant;
  primaryColor?: string;
  accentColor?: string;
}>;
const IconsMap = IllustrationIcons as Record<string, IllustrationComponent>;

export default function IllustrationIconsPage() {
  const [search, setSearch] = useState("");
  const [variant, setVariant] = useState<IllustrationVariant>("primary");
  const [sizeFilter, setSizeFilter] = useState("48");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const filteredIcons = useMemo(() => {
    return ILLUSTRATION_ICONS.filter((name) => name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const iconSize = parseInt(sizeFilter, 10);

  const renderIcon = (name: string) => {
    const IconComponent = IconsMap[name];
    return function IconRenderer(size: number, iconVariant?: string, stroke?: string, fill?: string, strokeWidth?: number) {
      return IconComponent ? <IconComponent size={size} variant={(iconVariant || variant) as IllustrationVariant} /> : null;
    };
  };

  return (
    <Container size="lg" py="xl">
      <div className="mb-8">
        <Group justify="space-between" align="flex-start" mb="md">
          <div>
            <Title order={1} className="mb-2">
              Illustration Icons
            </Title>
            <Text c="dimmed">
              Detailed, multi-color illustrations with multiple variants. Perfect for empty states,
              onboarding, and decorative elements.
            </Text>
          </div>
          <Badge size="lg" variant="light" color="violet">
            {filteredIcons.length} icons
          </Badge>
        </Group>
      </div>

      <IconSearchBar search={search} onSearchChange={setSearch} />

      <Group mb="lg" gap="lg" wrap="wrap">
        <Group gap="md">
          <Text size="sm" c="dimmed">
            Variant:
          </Text>
          <SegmentedControl
            value={variant}
            onChange={(v) => setVariant(v as IllustrationVariant)}
            data={ILLUSTRATION_VARIANTS.map((v) => ({
              label: v.charAt(0).toUpperCase() + v.slice(1),
              value: v,
            }))}
            size="xs"
          />
        </Group>
        <Group gap="md">
          <Text size="sm" c="dimmed">
            Size:
          </Text>
          <SegmentedControl
            value={sizeFilter}
            onChange={setSizeFilter}
            data={[
              { label: "32px", value: "32" },
              { label: "Default (48px)", value: "48" },
              { label: "64px", value: "64" },
              { label: "96px", value: "96" },
            ]}
            size="xs"
          />
        </Group>
      </Group>

      {/* Usage Example */}
      <Card shadow="sm" padding="md" radius="md" withBorder mb="xl">
        <Title order={4} className="mb-3">
          Usage
        </Title>
        <CodeHighlight
          language="tsx"
          code={`import { IllustrationNotes, IllustrationVideoLectures } from '@maqsad/icons/illustrations';

// Basic usage (default: primary variant, 48px)
<IllustrationNotes />

// With variant and size
<IllustrationNotes variant="${variant}" size={${iconSize}} />`}
        />
      </Card>

      {/* Variant Preview */}
      <Card shadow="sm" padding="md" radius="md" withBorder mb="xl">
        <Title order={4} className="mb-3">
          Available Variants
        </Title>
        <Group gap="xl">
          {ILLUSTRATION_VARIANTS.map((v) => {
            const PreviewIcon = IconsMap["IllustrationDoubtsolve"];
            const bgColor = v === "light" ? "#374151" : "#f3f4f6";
            return (
              <div key={v} className="text-center">
                <div
                  style={{
                    backgroundColor: bgColor,
                    borderRadius: 8,
                    padding: 12,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {PreviewIcon && <PreviewIcon size={48} variant={v} />}
                </div>
                <Text size="xs" c="dimmed" mt="xs">
                  {v}
                </Text>
              </div>
            );
          })}
        </Group>
      </Card>

      {filteredIcons.length > 0 ? (
        <SimpleGrid cols={{ base: 2, xs: 3, sm: 4, md: 4, lg: 5 }} spacing="lg">
          {filteredIcons.map((name) => {
            const IconComponent = IconsMap[name];
            return (
              <IconCard
                key={name}
                name={name}
                icon={IconComponent ? <IconComponent size={iconSize} variant={variant} /> : null}
                copyText={`import { ${name} } from '@maqsad/icons/illustrations';`}
                onClick={() => setSelectedIcon(name)}
              />
            );
          })}
        </SimpleGrid>
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
          type="illustration"
          renderIcon={renderIcon(selectedIcon)}
        />
      )}
    </Container>
  );
}
