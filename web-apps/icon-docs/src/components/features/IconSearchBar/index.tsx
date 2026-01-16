"use client";

import { TextInput, Select, Group } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

interface IconSearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  sizeFilter?: string;
  onSizeFilterChange?: (value: string | null) => void;
  showSizeFilter?: boolean;
  variantFilter?: string;
  onVariantFilterChange?: (value: string | null) => void;
  showVariantFilter?: boolean;
}

export function IconSearchBar({
  search,
  onSearchChange,
  sizeFilter,
  onSizeFilterChange,
  showSizeFilter = false,
  variantFilter,
  onVariantFilterChange,
  showVariantFilter = false,
}: IconSearchBarProps) {
  return (
    <Group mb="lg" gap="md">
      <TextInput
        placeholder="Search icons..."
        leftSection={<IconSearch size={16} />}
        value={search}
        onChange={(e) => onSearchChange(e.currentTarget.value)}
        className="flex-1"
        styles={{
          input: {
            minWidth: 200,
          },
        }}
      />
      {showSizeFilter && onSizeFilterChange && (
        <Select
          placeholder="Size"
          value={sizeFilter}
          onChange={onSizeFilterChange}
          data={[
            { value: "all", label: "All sizes" },
            { value: "16", label: "16px" },
            { value: "18", label: "18px" },
            { value: "24", label: "24px" },
          ]}
          clearable={false}
          w={120}
        />
      )}
      {showVariantFilter && onVariantFilterChange && (
        <Select
          placeholder="Variant"
          value={variantFilter}
          onChange={onVariantFilterChange}
          data={[
            { value: "all", label: "All variants" },
            { value: "primary", label: "Primary" },
            { value: "secondary", label: "Secondary" },
            { value: "dark", label: "Dark" },
            { value: "light", label: "Light" },
          ]}
          clearable={false}
          w={130}
        />
      )}
    </Group>
  );
}
