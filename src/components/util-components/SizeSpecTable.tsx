import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Chip,
} from "@mui/material";

interface SizeSpec {
  property: string;
  small: string;
  medium: string;
  large: string;
}

const FileMosaicSpecs: SizeSpec[] = [
  {
    property: "Container Width",
    small: "88px",
    medium: "132px",
    large: "176px",
  },
  {
    property: "Icon Layer Size",
    small: "88px",
    medium: "132px",
    large: "176px",
  },
  { property: "Font Size", small: "13px", medium: "15px", large: "17px" },
  {
    property: "Size Text Font",
    small: "0.65rem",
    medium: "0.7rem",
    large: "0.8rem",
  },
  {
    property: "Status Font",
    small: "0.7rem",
    medium: "0.8rem",
    large: "0.9rem",
  },
  { property: "Icon Font", small: "0.6rem", medium: "0.7rem", large: "0.8rem" },
  {
    property: "Icon Min Size",
    small: "16px",
    medium: "19px",
    large: "22px",
  },
  {
    property: "Border Radius",
    small: "6px",
    medium: "8px",
    large: "10px",
  },
];

const FileCardSpecs: SizeSpec[] = [
  {
    property: "Container Width",
    small: "240px",
    medium: "320px",
    large: "400px",
  },
  {
    property: "Container Height",
    small: "75px",
    medium: "100px",
    large: "125px",
  },
  { property: "Icon Size", small: "75px", medium: "100px", large: "125px" },
  { property: "Font Size", small: "13px", medium: "15px", large: "17px" },
  {
    property: "Upload Text Font",
    small: "0.7rem",
    medium: "0.8rem",
    large: "0.9rem",
  },
  {
    property: "Border Radius",
    small: "6px",
    medium: "8px",
    large: "10px",
  },
];

interface SizeSpecTableProps {
  component?: "FileMosaic" | "FileCard";
}

const SizeSpecTable: React.FC<SizeSpecTableProps> = ({ component = "FileMosaic" }) => {
  const specs = component === "FileMosaic" ? FileMosaicSpecs : FileCardSpecs;
  const colors = {
    small: "#e3f2fd",
    medium: "#f3e5f5",
    large: "#e8f5e9",
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        {component} Size Specifications
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
        <Table aria-label="size specifications">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell sx={{ fontWeight: 700, width: "30%" }}>
                Property
              </TableCell>
              <TableCell sx={{ fontWeight: 700, backgroundColor: colors.small }}>
                Small
              </TableCell>
              <TableCell sx={{ fontWeight: 700, backgroundColor: colors.medium }}>
                Medium (Default)
              </TableCell>
              <TableCell sx={{ fontWeight: 700, backgroundColor: colors.large }}>
                Large
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {specs.map((spec, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#fafafa",
                  },
                }}
              >
                <TableCell sx={{ fontWeight: 500 }}>{spec.property}</TableCell>
                <TableCell
                  sx={{
                    backgroundColor: colors.small,
                    fontFamily: "monospace",
                    fontSize: "0.9rem",
                  }}
                >
                  {spec.small}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: colors.medium,
                    fontFamily: "monospace",
                    fontSize: "0.9rem",
                  }}
                >
                  <Chip label={spec.medium} size="small" variant="outlined" />
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: colors.large,
                    fontFamily: "monospace",
                    fontSize: "0.9rem",
                  }}
                >
                  {spec.large}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SizeSpecTable;
