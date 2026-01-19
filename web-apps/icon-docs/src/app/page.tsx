"use client";

import * as AppMeta from "../../package.json"

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Group,
  Badge,
  ThemeIcon,
  Code,
  Tabs,
  Table,
} from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import {
  IconPalette,
  IconLayoutGrid,
  IconPhoto,
  IconBrandTypescript,
  IconTree,
} from "@tabler/icons-react";
import Link from "next/link";
import {
  IconArrowBack,
  IconSearch,
  IconStar,
  IconCheck,
} from "@maqsad/icons/system";
import {
  IllustrationNotes,
  IllustrationAvatarGeneric,
} from "@maqsad/icons/illustrations";

export default function HomePage() {
  return (
    <Container size="lg" py="xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge size="lg" variant="light" mb="md" style={{ textTransform: "none" }}>
          v{AppMeta.dependencies["@maqsad/icons"].replace(/[^0-9.]/g, "")}
        </Badge>
        <Title order={1} className="mb-4">
          Maqsad Icons
        </Title>
        <Text size="xl" c="dimmed" maw={600} mx="auto" mb="lg">
          A beautiful, consistent icon library designed for Maqsad&apos;s products.
          Featuring both system icons and colorful illustrations.
        </Text>
        <Group justify="center" gap="lg">
          <Badge size="lg" variant="outline" leftSection="📦">
            76 Total Icons
          </Badge>
          <Badge size="lg" variant="outline" leftSection="🎨">
            5 Illustration Variants
          </Badge>
          <Badge size="lg" variant="outline" leftSection="⚡">
            Tree Shakeable
          </Badge>
        </Group>
      </div>

      {/* Icon Preview */}
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
        <Title order={3} className="mb-4 text-center">
          Icon Preview
        </Title>
        <Group justify="center" gap="xl">
          <div className="text-center">
            <IconArrowBack size={32} />
            <Text size="xs" c="dimmed" mt="xs">
              System
            </Text>
          </div>
          <div className="text-center">
            <IconSearch size={32} />
            <Text size="xs" c="dimmed" mt="xs">
              System
            </Text>
          </div>
          <div className="text-center">
            <IconStar size={32} />
            <Text size="xs" c="dimmed" mt="xs">
              System
            </Text>
          </div>
          <div className="text-center">
            <IconCheck size={32} />
            <Text size="xs" c="dimmed" mt="xs">
              System
            </Text>
          </div>
          <div className="text-center">
            <IllustrationNotes size={48} variant="primary" />
            <Text size="xs" c="dimmed" mt="xs">
              Illustration
            </Text>
          </div>
          <div className="text-center">
            <IllustrationAvatarGeneric size={48} variant="primary" />
            <Text size="xs" c="dimmed" mt="xs">
              Illustration
            </Text>
          </div>
        </Group>
      </Card>

      {/* Installation */}
      <Title order={2} className="mb-6">
        Installation
      </Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
        <Tabs defaultValue="pnpm">
          <Tabs.List mb="md">
            <Tabs.Tab value="pnpm">pnpm</Tabs.Tab>
            <Tabs.Tab value="npm">npm</Tabs.Tab>
            <Tabs.Tab value="yarn">yarn</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="pnpm">
            <CodeHighlight code="pnpm add @maqsad/icons" language="bash" />
          </Tabs.Panel>

          <Tabs.Panel value="npm">
            <CodeHighlight code="npm install @maqsad/icons" language="bash" />
          </Tabs.Panel>

          <Tabs.Panel value="yarn">
            <CodeHighlight code="yarn add @maqsad/icons" language="bash" />
          </Tabs.Panel>
        </Tabs>
      </Card>

      {/* Icon Categories */}
      <Title order={2} className="mb-6">
        Icon Categories
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mb="xl">
        <Card
          component={Link}
          href="/icons/system"
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="icon-card cursor-pointer"
        >
          <Group justify="space-between" mb="md">
            <ThemeIcon size="xl" radius="md" color="blue">
              <IconLayoutGrid size={24} stroke={1.5} />
            </ThemeIcon>
            <Badge variant="light" color="blue">
              63 icons
            </Badge>
          </Group>
          <Title order={3} className="mb-2">
            System Icons
          </Title>
          <Text size="sm" c="dimmed">
            Line-based UI icons for interfaces, actions, and navigation. Available in 16px, 18px, and 24px sizes.
          </Text>
        </Card>

        <Card
          component={Link}
          href="/icons/illustrations"
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="icon-card cursor-pointer"
        >
          <Group justify="space-between" mb="md">
            <ThemeIcon size="xl" radius="md" color="violet">
              <IconPhoto size={24} stroke={1.5} />
            </ThemeIcon>
            <Badge variant="light" color="violet">
              13 icons
            </Badge>
          </Group>
          <Title order={3} className="mb-2">
            Illustrations
          </Title>
          <Text size="sm" c="dimmed">
            Detailed, multi-color illustrations with 4 variants: primary, secondary, dark, and light.
          </Text>
        </Card>
      </SimpleGrid>

      {/* Quick Start */}
      <Title order={2} className="mb-6">
        Quick Start
      </Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
        <Title order={4} className="mb-3">
          System Icons
        </Title>
        <CodeHighlight
          language="tsx"
          code={`import { IconArrowBack, IconSearch, IconStar } from '@maqsad/icons';
// or import from system subpath
import { IconArrowBack } from '@maqsad/icons/system';

function App() {
  return (
    <div>
      {/* Default size (24px) */}
      <IconArrowBack />
      
      {/* Custom size */}
      <IconSearch size={18} />
      
      {/* Custom color */}
      <IconStar color="gold" />
      
      {/* Custom stroke width */}
      <IconArrowBack strokeWidth={1.5} />
    </div>
  );
}`}
          mb="lg"
        />

        <Title order={4} className="mb-3">
          Illustration Icons
        </Title>
        <CodeHighlight
          language="tsx"
          code={`import { IllustrationNotes, IllustrationVideoLectures } from '@maqsad/icons';
// or import from illustrations subpath
import { IllustrationNotes } from '@maqsad/icons/illustrations';

function App() {
  return (
    <div>
      {/* Default variant (primary - blue) */}
      <IllustrationNotes />
      
      {/* Secondary variant */}
      <IllustrationNotes variant="secondary" />
      
      {/* Dark variant */}
      <IllustrationNotes variant="dark" />
      
      {/* Light variant */}
      <IllustrationNotes variant="light" />
      
      {/* Custom size */}
      <IllustrationVideoLectures size={64} />
    </div>
  );
}`}
        />
      </Card>

      {/* Props Tables */}
      <Title order={2} className="mb-6">
        Props Reference
      </Title>
      <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg" mb="xl">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4} className="mb-3">
            System Icon Props
          </Title>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Prop</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Default</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td><Code>size</Code></Table.Td>
                <Table.Td>number</Table.Td>
                <Table.Td>24</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td><Code>color</Code></Table.Td>
                <Table.Td>string</Table.Td>
                <Table.Td>currentColor</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td><Code>strokeWidth</Code></Table.Td>
                <Table.Td>number</Table.Td>
                <Table.Td>2</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td><Code>className</Code></Table.Td>
                <Table.Td>string</Table.Td>
                <Table.Td>-</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4} className="mb-3">
            Illustration Props
          </Title>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Prop</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Default</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td><Code>variant</Code></Table.Td>
                <Table.Td>string</Table.Td>
                <Table.Td>primary</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td><Code>size</Code></Table.Td>
                <Table.Td>number</Table.Td>
                <Table.Td>48</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td><Code>primaryColor</Code></Table.Td>
                <Table.Td>string</Table.Td>
                <Table.Td>#3B82F6</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td><Code>accentColor</Code></Table.Td>
                <Table.Td>string</Table.Td>
                <Table.Td>#F59E0B</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Card>
      </SimpleGrid>

      {/* Features */}
      <Title order={2} className="mb-6">
        Features
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group mb="md">
            <ThemeIcon size="lg" radius="md" variant="light" color="blue">
              <IconBrandTypescript size={20} stroke={1.5} />
            </ThemeIcon>
            <Title order={4}>TypeScript</Title>
          </Group>
          <Text size="sm" c="dimmed">
            Full TypeScript support with exported types for all props and variants.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group mb="md">
            <ThemeIcon size="lg" radius="md" variant="light" color="green">
              <IconTree size={20} stroke={1.5} />
            </ThemeIcon>
            <Title order={4}>Tree Shakeable</Title>
          </Group>
          <Text size="sm" c="dimmed">
            Import only the icons you need. Unused icons are automatically removed from your bundle.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group mb="md">
            <ThemeIcon size="lg" radius="md" variant="light" color="violet">
              <IconPalette size={20} stroke={1.5} />
            </ThemeIcon>
            <Title order={4}>Customizable</Title>
          </Group>
          <Text size="sm" c="dimmed">
            Easily customize size, color, stroke width, and variants to match your design.
          </Text>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
