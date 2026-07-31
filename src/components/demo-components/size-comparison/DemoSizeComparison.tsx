import * as React from "react";
import {
  FileMosaic,
  FileCard,
  FileMosaicSkeleton,
  FileCardSkeleton,
} from "@files-ui/react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import SizeVariantSelector from "../../util-components/SizeVariantSelector";

const sampleFileProps = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "document.pdf",
};

const DemoSizeComparison: React.FC = () => {
  const [variant, setVariant] = React.useState<
    "xs" | "small" | "medium" | "large"
  >("medium");

  const sizes = {
    xs: { fileMosaic: "88×88px", fileCard: "220×70px" },
    small: { fileMosaic: "110×110px", fileCard: "270×85px" },
    medium: { fileMosaic: "132×132px", fileCard: "320×100px" },
    large: { fileMosaic: "176×176px", fileCard: "420×130px" },
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
        Size Variants Comparison
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        Compare FileMosaic and FileCard components side-by-side. Both components
        scale proportionally with matching visual hierarchy for consistent UI
        density.
      </Typography>

      <SizeVariantSelector value={variant} onChange={setVariant} />

      {/* Size Info */}
      <Paper sx={{ p: 3, mb: 4, backgroundColor: "#f9f9f9" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              FileMosaic
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
              {sizes[variant].fileMosaic}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              FileCard
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
              {sizes[variant].fileCard}
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Side-by-Side Comparison
      </Typography>

      {/* Split View Comparison */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
        }}
      >
        {/* FileMosaic Column */}
        <Box>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                FileMosaic ({variant})
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Box sx={{ textAlign: "center" }}>
                  <FileMosaic
                    {...sampleFileProps}
                    variant={variant}
                    info
                    preview
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Skelton Demo */}
          <Card>
            <CardContent>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                Loading State (Skeleton)
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <FileMosaicSkeleton sizeVariant={variant} />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* FileCard Column */}
        <Box>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                FileCard ({variant})
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <FileCard
                  {...sampleFileProps}
                  variant={variant}
                  elevation={8}
                />
              </Box>
            </CardContent>
          </Card>

          {/* Skeleton Demo */}
          <Card>
            <CardContent>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                Loading State (Skeleton)
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <FileCardSkeleton sizeVariant={variant} />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Size Scale Visualization */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
          Scale Visualization
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: "#f9f9f9" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
              alignItems: "stretch",
              width: "100%",
              "& > .MuiCard-root": {
                // Responsive widths mimicking your 1, 2, and 4 column layout
                width: {
                  xs: "100%", // 1 column
                  sm: "calc(50% - 12px)", // 2 columns (accounting for gap)
                  md: "calc(25% - 18px)", // 4 columns (accounting for gap)
                },
                minWidth: "250px", // Prevents items from squishing too much
              },
            }}
          >
            {(["xs", "small", "medium", "large"] as const).map((size) => (
              <Card key={size} sx={{ textAlign: "center", p: 2 }}>
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    {size === "xs"
                      ? "XS"
                      : size.charAt(0).toUpperCase() + size.slice(1)}
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: 2, justifyContent: "center" }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <Box
                        sx={{
                          fontSize: "0.75rem",
                          mb: 1,
                          color: "text.secondary",
                        }}
                      >
                        FileMosaic
                      </Box>
                      <FileMosaic {...sampleFileProps} variant={size} info />
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Box
                        sx={{
                          fontSize: "0.75rem",
                          mb: 1,
                          color: "text.secondary",
                        }}
                      >
                        FileCard
                      </Box>
                      <FileCard
                        {...sampleFileProps}
                        variant={size}
                        elevation={8}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Paper>
      </Box>

      {/* Use Cases */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
          Recommended Use Cases
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
            gap: 2,
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                XS
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                • Compact inline lists
                <br />
                • Chat attachments
                <br />
                • Minimal space usage
                <br />• Icon-sized previews
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                Small
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                • Thumbnails in galleries
                <br />
                • Mobile-first layouts
                <br />
                • Dense information displays
                <br />• Sidebar listings
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                Medium (Default)
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                • Standard file explorers
                <br />
                • Desktop applications
                <br />
                • Main content areas
                <br />• Balanced density
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                Large
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                • Featured content
                <br />
                • Accessibility focus
                <br />
                • Marketing displays
                <br />• Presentation layouts
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default DemoSizeComparison;
