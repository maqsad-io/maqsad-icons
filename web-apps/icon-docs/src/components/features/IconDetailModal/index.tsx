"use client";

import {
  Modal,
  Text,
  Group,
  Stack,
  CopyButton,
  ActionIcon,
  Tooltip,
  Badge,
  SegmentedControl,
  Table,
  Divider,
} from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState, type ReactNode } from "react";
import { ILLUSTRATION_VARIANTS, type IllustrationVariant } from "@/data/icons";

export type IconType = "system" | "illustration";

interface IconDetailModalProps {
  opened: boolean;
  onClose: () => void;
  name: string;
  type: IconType;
  renderIcon: (size: number, variant?: IllustrationVariant) => ReactNode;
}

const SYSTEM_PROPS = [
  { name: "size", type: "number", default: "24", description: "Icon size in pixels" },
  { name: "color", type: "string", default: '"currentColor"', description: "Icon color" },
  { name: "strokeWidth", type: "number", default: "1.5", description: "Stroke width for line icons" },
];

const ILLUSTRATION_PROPS = [
  { name: "size", type: "number", default: "48", description: "Illustration size in pixels" },
  { name: "variant", type: "IllustrationVariant", default: '"primary"', description: "Color variant" },
  { name: "primaryColor", type: "string", default: "-", description: "Custom primary color (filled variant only)" },
  { name: "accentColor", type: "string", default: "-", description: "Custom accent color (filled variant only)" },
];

const SIZE_OPTIONS = {
  system: ["16", "20", "24", "32", "48"],
  illustration: ["32", "48", "64", "96", "128"],
};

export function IconDetailModal({
  opened,
  onClose,
  name,
  type,
  renderIcon,
}: IconDetailModalProps) {
  const [previewSize, setPreviewSize] = useState(type === "system" ? "48" : "96");
  const [variant, setVariant] = useState<IllustrationVariant>("primary");

  const importPath = type === "system" ? "@maqsad/icons/system" : "@maqsad/icons/illustrations";
  const importStatement = `import { ${name} } from '${importPath}';`;

  const usageCode =
    type === "system"
      ? `import { ${name} } from '${importPath}';

// Basic usage
<${name} />

// With custom props
<${name} size={24} color="currentColor" strokeWidth={2} />`
      : `import { ${name} } from '${importPath}';

// Basic usage (primary variant, 48px)
<${name} />

// With variant and size
<${name} variant="primary" size={64} />

// With custom colors (filled variant)
<${name} 
  variant="filled" 
  primaryColor="#5E85BC" 
  accentColor="#F2AE1C" 
/>`;

  const props = type === "system" ? SYSTEM_PROPS : ILLUSTRATION_PROPS;
  const sizeOptions = SIZE_OPTIONS[type];

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Group gap="sm">
          <Text fw={600} size="lg">
            {name}
          </Text>
          <CopyButton value={name}>
            {({ copied, copy }) => (
              <Tooltip label={copied ? "Copied!" : "Copy name"} withArrow>
                <ActionIcon
                  variant="subtle"
                  color={copied ? "teal" : "gray"}
                  onClick={copy}
                  size="sm"
                >
                  {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
          <Badge variant="light" color={type === "system" ? "blue" : "violet"} size="sm">
            {type === "system" ? "System" : "Illustration"}
          </Badge>
        </Group>
      }
      size="lg"
      centered
    >
      <Stack gap="lg">
        {/* Preview Section */}
        <div>
          <Text size="sm" fw={500} mb="xs">
            Preview
          </Text>
          <div
            className="flex items-center justify-center rounded-lg border"
            style={{
              backgroundColor: type === "illustration" && variant === "light" ? "#374151" : "#f9fafb",
              minHeight: 160,
              padding: 24,
            }}
          >
            {renderIcon(parseInt(previewSize, 10), variant)}
          </div>
        </div>

        {/* Size Control */}
        <Group gap="md">
          <Text size="sm" c="dimmed">
            Size:
          </Text>
          <SegmentedControl
            value={previewSize}
            onChange={setPreviewSize}
            data={sizeOptions.map((s) => ({ label: `${s}px`, value: s }))}
            size="xs"
          />
        </Group>

        {/* Variant Control (illustrations only) */}
        {type === "illustration" && (
          <>
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

            {/* Variant Previews */}
            <div>
              <Text size="sm" fw={500} mb="xs">
                All Variants
              </Text>
              <Group gap="lg">
                {ILLUSTRATION_VARIANTS.map((v) => (
                  <div key={v} className="text-center">
                    <div
                      className="flex items-center justify-center rounded-lg cursor-pointer transition-all"
                      style={{
                        backgroundColor: v === "light" ? "#374151" : "#f3f4f6",
                        padding: 12,
                        border: variant === v ? "2px solid #228be6" : "2px solid transparent",
                      }}
                      onClick={() => setVariant(v)}
                    >
                      {renderIcon(48, v)}
                    </div>
                    <Text size="xs" c="dimmed" mt={4}>
                      {v}
                    </Text>
                  </div>
                ))}
              </Group>
            </div>
          </>
        )}

        <Divider />

        {/* Import Section */}
        <div>
          <Group justify="space-between" mb="xs">
            <Text size="sm" fw={500}>
              Import
            </Text>
            <CopyButton value={importStatement} timeout={2000}>
              {({ copied, copy }) => (
                <Tooltip label={copied ? "Copied!" : "Copy import"} withArrow>
                  <ActionIcon color={copied ? "teal" : "gray"} variant="subtle" onClick={copy} size="sm">
                    {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>
          </Group>
          <CodeHighlight language="tsx" code={importStatement} />
        </div>

        {/* Props Table */}
        <div>
          <Text size="sm" fw={500} mb="xs">
            Props
          </Text>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Prop</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Default</Table.Th>
                <Table.Th>Description</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {props.map((prop) => (
                <Table.Tr key={prop.name}>
                  <Table.Td>
                    <Text size="sm" ff="monospace" c="blue">
                      {prop.name}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm" ff="monospace" c="dimmed">
                      {prop.type}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm" ff="monospace">
                      {prop.default}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm">{prop.description}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>

        {/* Usage Example */}
        <div>
          <Group justify="space-between" mb="xs">
            <Text size="sm" fw={500}>
              Usage Example
            </Text>
            <CopyButton value={usageCode} timeout={2000}>
              {({ copied, copy }) => (
                <Tooltip label={copied ? "Copied!" : "Copy code"} withArrow>
                  <ActionIcon color={copied ? "teal" : "gray"} variant="subtle" onClick={copy} size="sm">
                    {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>
          </Group>
          <CodeHighlight language="tsx" code={usageCode} />
        </div>
      </Stack>
    </Modal>
  );
}
