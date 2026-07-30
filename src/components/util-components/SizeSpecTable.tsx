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
  xs: string;
  small: string;
  medium: string;
  large: string;
}

const FileMosaicSpecs: SizeSpec[] = [
  {
    property: "Container Width",
    xs: "88px",
    small: "110px",
    medium: "132px",
    large: "176px",
  },
  {
    property: "Icon Layer Size",
    xs: "88px",
    small: "110px",
    medium: "132px",
    large: "176px",
  },
  { property: "Font Size", xs: "10.5px", small: "12.75px", medium: "15px", large: "18px" },
  {
    property: "Size Text Font",
    xs: "0.55rem",
    small: "0.6rem",
    medium: "0.7rem",
    large: "0.8rem",
  },
  {
    property: "Status Font",
    xs: "0.6rem",
    small: "0.7rem",
    medium: "0.8rem",
    large: "0.9rem",
  },
  { property: "Icon Font", xs: "0.5rem", small: "0.6rem", medium: "0.7rem", large: "0.8rem" },
  {
    property: "Icon Min Size",
    xs: "13px",
    small: "16px",
    medium: "19px",
    large: "22px",
  },
  {
    property: "Border Radius",
    xs: "5px",
    small: "6px",
    medium: "8px",
    large: "10px",
  },
];

const FileCardSpecs: SizeSpec[] = [
  {
    property: "Container Width",
    xs: "220px",
    small: "270px",
    medium: "320px",
    large: "420px",
  },
  {
    property: "Container Height",
    xs: "70px",
    small: "85px",
    medium: "100px",
    large: "130px",
  },
  { property: "Icon Size", xs: "70px", small: "85px", medium: "100px", large: "130px" },
  { property: "Font Size", xs: "11.25px", small: "12.75px", medium: "15px", large: "17.25px" },
  {
    property: "Upload Text Font",
    xs: "0.6rem",
    small: "0.7rem",
    medium: "0.8rem",
    large: "0.9rem",
  },
  {
    property: "Border Radius",
    xs: "5px",
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
    xs: "#fff3e0",
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
              <TableCell sx={{ fontWeight: 700, width: "25%" }}>
                Property
              </TableCell>
              <TableCell sx={{ fontWeight: 700, backgroundColor: colors.xs }}>
                XS
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
                    backgroundColor: colors.xs,
                    fontFamily: "monospace",
                    fontSize: "0.9rem",
                  }}
                >
                  {spec.xs}
                </TableCell>
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
