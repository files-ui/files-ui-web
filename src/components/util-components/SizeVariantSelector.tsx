import * as React from "react";
import { ToggleButton, ToggleButtonGroup, Box, Typography } from "@mui/material";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

interface SizeVariantSelectorProps {
  value: "xs" | "small" | "medium" | "large";
  onChange: (value: "xs" | "small" | "medium" | "large") => void;
  label?: string;
}

const SizeVariantSelector: React.FC<SizeVariantSelectorProps> = ({
  value,
  onChange,
  label = "Select Size Variant",
}) => {
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newValue: "xs" | "small" | "medium" | "large" | null
  ) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        {label}
      </Typography>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleChange}
        aria-label="size variant"
        sx={{
          "& .MuiToggleButton-root": {
            padding: "10px 20px",
            border: "2px solid #e0e0e0",
            "&.Mui-selected": {
              backgroundColor: "#1976d2",
              color: "white",
              border: "2px solid #1565c0",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            },
          },
        }}
      >
        <ToggleButton value="xs" aria-label="extra small">
          <AspectRatioIcon sx={{ mr: 1, fontSize: "0.85rem" }} />
          XS
        </ToggleButton>
        <ToggleButton value="small" aria-label="small">
          <AspectRatioIcon sx={{ mr: 1, fontSize: "1rem" }} />
          Small
        </ToggleButton>
        <ToggleButton value="medium" aria-label="medium">
          <AspectRatioIcon sx={{ mr: 1, fontSize: "1.2rem" }} />
          Medium
        </ToggleButton>
        <ToggleButton value="large" aria-label="large">
          <AspectRatioIcon sx={{ mr: 1, fontSize: "1.4rem" }} />
          Large
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default SizeVariantSelector;
