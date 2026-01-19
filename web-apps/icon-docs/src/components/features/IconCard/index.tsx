"use client";

import { Card, Text, CopyButton, ActionIcon, Tooltip, Group } from "@mantine/core";
import { IconCheck, IconCopy, IconFileImport } from "@tabler/icons-react";
import type { ReactNode } from "react";

interface IconCardProps {
  name: string;
  icon: ReactNode;
  copyText?: string;
  onClick?: () => void;
}

export function IconCard({ name, icon, copyText, onClick }: IconCardProps) {
  const importText = copyText || `import { ${name} } from '@maqsad/icons';`;

  return (
    <Tooltip label={name} withArrow position="top" openDelay={300}>
      <Card
        shadow="sm"
        padding="md"
        radius="md"
        withBorder
        className="icon-card"
        onClick={onClick}
        style={{ cursor: onClick ? "pointer" : "default" }}
      >
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-full flex items-center justify-center bg-gray-50 rounded-md overflow-hidden"
            style={{ height: 100, minHeight: 100 }}
          >
            <div className="flex items-center justify-center" style={{ maxWidth: '100%', maxHeight: '100%' }}>
              {icon}
            </div>
          </div>
          <Group justify="space-between" w="100%" gap="xs" wrap="nowrap">
            <Text size="xs" c="dimmed" className="truncate" style={{ flex: 1, minWidth: 0 }}>
              {name}
            </Text>
            <Group gap={4} wrap="nowrap">
              <CopyButton value={importText} timeout={2000}>
                {({ copied, copy }) => (
                  <Tooltip label={copied ? "Copied!" : "Copy import"} withArrow position="top">
                    <ActionIcon
                      color={copied ? "teal" : "gray"}
                      variant="subtle"
                      onClick={(e) => { e.stopPropagation(); copy(); }}
                      size="sm"
                    >
                      {copied ? <IconCheck size={14} /> : <IconFileImport size={14} />}
                    </ActionIcon>
                  </Tooltip>
                )}
              </CopyButton>
              <CopyButton value={name} timeout={2000}>
                {({ copied, copy }) => (
                  <Tooltip label={copied ? "Copied!" : "Copy name"} withArrow position="top">
                    <ActionIcon
                      color={copied ? "teal" : "gray"}
                      variant="subtle"
                      onClick={(e) => { e.stopPropagation(); copy(); }}
                      size="sm"
                    >
                      {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                    </ActionIcon>
                  </Tooltip>
                )}
              </CopyButton>
            </Group>
          </Group>
        </div>
      </Card>
    </Tooltip>
  );
}
