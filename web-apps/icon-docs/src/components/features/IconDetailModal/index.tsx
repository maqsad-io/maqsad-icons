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
  ColorSwatch,
  Box,
  Slider,
  ColorPicker,
  Popover,
} from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { IconCheck, IconCopy, IconPalette } from "@tabler/icons-react";
import { useState, type ReactNode } from "react";
import { ILLUSTRATION_VARIANTS, type IllustrationVariant } from "@/data/icons";

export type IconType = "system" | "illustration";

interface IconDetailModalProps {
  opened: boolean;
  onClose: () => void;
  name: string;
  type: IconType;
  renderIcon: (size: number, variant?: IllustrationVariant, stroke?: string, fill?: string, strokeWidth?: number) => ReactNode;
}

const COLOR_OPTIONS = [
  { color: "#646466", label: "Gray" },
  { color: "#F2AE1C", label: "Yellow" },
  { color: "#5E85BC", label: "Light Blue" },
  { color: "#F27781", label: "Pink" },
  { color: "#97C99C", label: "Green" },
  { color: "#05046A", label: "Dark Blue" },
];

const SYSTEM_PROPS = [
  { name: "size", type: "number", default: "24", description: "Icon size in pixels" },
  { name: "stroke", type: "string", default: '"#646466"', description: "Stroke color" },
  { name: "fill", type: "string", default: '"none"', description: "Fill color" },
  { name: "strokeWidth", type: "number", default: "2", description: "Stroke width for line icons" },
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
  const [strokeColor, setStrokeColor] = useState("#646466");
  const [fillColor, setFillColor] = useState("none");
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [strokePickerOpen, setStrokePickerOpen] = useState(false);
  const [fillPickerOpen, setFillPickerOpen] = useState(false);

  const importPath = type === "system" ? "@maqsad/icons/system" : "@maqsad/icons/illustrations";
  const importStatement = `import { ${name} } from '${importPath}';`;

  const usageCode =
    type === "system"
      ? `import { ${name} } from '${importPath}';

// Basic usage
<${name} />

// With custom props
<${name} size={24} stroke="${strokeColor}" fill="${fillColor === "none" ? "none" : fillColor}" strokeWidth={${strokeWidth}} />`
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
      size="xl"
      centered
    >
      <Stack gap="lg">
        {/* Preview and Controls Section */}
        <div style={{ display: "flex", gap: 24 }}>
          {/* Preview - Left Side */}
          <div style={{ flex: "0 0 40%" }}>
            <Text size="sm" fw={500} mb="xs">
              Preview
            </Text>
            <div
              className="flex items-center justify-center rounded-lg border"
              style={{
                backgroundColor: type === "illustration" && variant === "light" ? "#374151" : "#f9fafb",
                minHeight: 200,
                padding: 24,
              }}
            >
              {renderIcon(parseInt(previewSize, 10), variant, strokeColor, fillColor, strokeWidth)}
            </div>
          </div>

          {/* Controls - Right Side */}
          <Stack gap="md" style={{ flex: 1 }}>
            <Text size="sm" fw={500}>Controls</Text>
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

            {/* Color Controls (system icons only) */}
            {type === "system" && (
              <>
                <Group gap="xs" align="center">
                  <Text size="sm" c="dimmed" w={90} style={{ flexShrink: 0 }}>
                    Stroke:
                  </Text>
                  {COLOR_OPTIONS.map((opt) => (
                    <Tooltip key={opt.color} label={opt.label} withArrow>
                      <ColorSwatch
                        color={opt.color}
                        size={24}
                        style={{
                          cursor: "pointer",
                          border: strokeColor === opt.color ? "2px solid #228be6" : "2px solid transparent",
                        }}
                        onClick={() => setStrokeColor(opt.color)}
                      />
                    </Tooltip>
                  ))}
                  <Popover opened={strokePickerOpen} onChange={setStrokePickerOpen} position="bottom" withArrow>
                    <Popover.Target>
                      <Tooltip label="Custom color" withArrow>
                        <ActionIcon
                          variant="light"
                          size={24}
                          radius="xl"
                          style={{ border: !COLOR_OPTIONS.some(o => o.color === strokeColor) ? "2px solid #228be6" : "2px solid transparent" }}
                          onClick={() => setStrokePickerOpen((o) => !o)}
                        >
                          <IconPalette size={14} />
                        </ActionIcon>
                      </Tooltip>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <ColorPicker
                        value={strokeColor}
                        onChange={setStrokeColor}
                        format="hex"
                        swatches={COLOR_OPTIONS.map(o => o.color)}
                      />
                    </Popover.Dropdown>
                  </Popover>
                </Group>

                <Group gap="xs" align="center">
                  <Text size="sm" c="dimmed" w={90} style={{ flexShrink: 0 }}>
                    Fill:
                  </Text>
                  <Tooltip label="None (transparent)">
                    <Box
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        cursor: "pointer",
                        border: fillColor === "none" ? "2px solid #228be6" : "2px solid #dee2e6",
                        background: "linear-gradient(135deg, #fff 45%, #ef4444 45%, #ef4444 55%, #fff 55%)",
                      }}
                      onClick={() => setFillColor("none")}
                    />
                  </Tooltip>
                  {COLOR_OPTIONS.map((opt) => (
                    <Tooltip key={opt.color} label={opt.label} withArrow>
                      <ColorSwatch
                        color={opt.color}
                        size={24}
                        style={{
                          cursor: "pointer",
                          border: fillColor === opt.color ? "2px solid #228be6" : "2px solid transparent",
                        }}
                        onClick={() => setFillColor(opt.color)}
                      />
                    </Tooltip>
                  ))}
                  <Popover opened={fillPickerOpen} onChange={setFillPickerOpen} position="bottom" withArrow>
                    <Popover.Target>
                      <Tooltip label="Custom color" withArrow>
                        <ActionIcon
                          variant="light"
                          size={24}
                          radius="xl"
                          style={{ border: fillColor !== "none" && !COLOR_OPTIONS.some(o => o.color === fillColor) ? "2px solid #228be6" : "2px solid transparent" }}
                          onClick={() => setFillPickerOpen((o) => !o)}
                        >
                          <IconPalette size={14} />
                        </ActionIcon>
                      </Tooltip>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <ColorPicker
                        value={fillColor === "none" ? "#646466" : fillColor}
                        onChange={setFillColor}
                        format="hex"
                        swatches={COLOR_OPTIONS.map(o => o.color)}
                      />
                    </Popover.Dropdown>
                  </Popover>
                </Group>

                <Group gap="xs" align="center">
                  <Text size="sm" c="dimmed" w={90} style={{ flexShrink: 0 }}>
                    Stroke Width:
                  </Text>
                  <Box style={{ flex: 1, maxWidth: 150 }}>
                    <Slider
                      value={strokeWidth}
                      onChange={setStrokeWidth}
                      min={0.1}
                      max={5}
                      step={0.1}
                      marks={[]}
                    />
                  </Box>
                  <Text size="xs" c="dimmed" ff="monospace" w={30}>{strokeWidth}</Text>
                </Group>
              </>
            )}

            {/* Variant Control (illustrations only) */}
            {type === "illustration" && (
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
            )}
          </Stack>
        </div>

        {/* All Variants Preview (illustrations only) */}
        {type === "illustration" && (
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
          <Box style={{ backgroundColor: "#f1f3f5", borderRadius: 8, overflow: "hidden" }}>
            <CodeHighlight language="tsx" code={importStatement} />
          </Box>
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
          <Box style={{ backgroundColor: "#f1f3f5", borderRadius: 8, overflow: "hidden" }}>
            <CodeHighlight language="tsx" code={usageCode} />
          </Box>
        </div>
      </Stack>
    </Modal>
  );
}