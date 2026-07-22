import * as React from "react";
import { FileMosaic, FileCard, 
  //FileMosaicSkeleton, FileCardSkeleton 
} from "@files-ui/react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SizeSpecTable from "../util-components/SizeSpecTable";
import DemoFileMosaicSizeVariants from "../demo-components/filemosaic-demo/DemoFileMosaicSizeVariants";
import DemoFileCardSizeVariants from "../demo-components/filecard-demo/DemoFileCardSizeVariants";
import DemoSizeComparison from "../demo-components/size-comparison/DemoSizeComparison";
import SizeVariantSelector from "../util-components/SizeVariantSelector";

const SizeVariantsPage: React.FC = () => {
  const [expandedDemo, setExpandedDemo] = React.useState<string | false>(false);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fafafa", py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Size Variants Feature
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary", mb: 4 }}>
          Enhanced FileMosaic and FileCard Components with Three Size Options
        </Typography>

        <Box
          sx={{
            display: "inline-block",
            backgroundColor: "#e3f2fd",
            border: "2px solid #2196f3",
            borderRadius: 2,
            px: 3,
            py: 2,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#1976d2" }}>
            ✨ New Feature: The <code>variant</code> prop controls component size
          </Typography>
          <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
            Available: 'small' | 'medium' (default) | 'large'
          </Typography>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
        {/* Size Specifications */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
            📏 Size Specifications
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: 3 }}>
            <Box>
              <SizeSpecTable component="FileMosaic" />
            </Box>
            <Box>
              <SizeSpecTable component="FileCard" />
            </Box>
          </Box>
        </Box>

        {/* Interactive Demos */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            🎨 Interactive Demos
          </Typography>

          <Accordion
            expanded={expandedDemo === "filemosaic"}
            onChange={(_, isExpanded) =>
              setExpandedDemo(isExpanded ? "filemosaic" : false)
            }
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                FileMosaic Size Variants Demo
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ width: "100%" }}>
                <DemoFileMosaicSizeVariants />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expandedDemo === "filecard"}
            onChange={(_, isExpanded) =>
              setExpandedDemo(isExpanded ? "filecard" : false)
            }
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                FileCard Size Variants Demo
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ width: "100%" }}>
                <DemoFileCardSizeVariants />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expandedDemo === "comparison"}
            onChange={(_, isExpanded) =>
              setExpandedDemo(isExpanded ? "comparison" : false)
            }
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Side-by-Side Comparison
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ width: "100%" }}>
                <DemoSizeComparison />
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Code Examples Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            💻 Code Examples
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  FileMosaic - Small
                </Typography>
                <Typography
                  component="pre"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    p: 1.5,
                    borderRadius: 1,
                    overflow: "auto",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                  }}
                >
                  {`import { FileMosaic } from "@files-ui/react";\n\nconst file = {\n  id: "file1",\n  size: 1024,\n  type: "image/jpeg",\n  name: "photo.jpg"\n};\n\nexport default function App() {\n  return (\n    <FileMosaic\n      {...file}\n      variant="small"\n      info\n      preview\n    />\n  );\n}`}
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  FileMosaic - Medium
                </Typography>
                <Typography
                  component="pre"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    p: 1.5,
                    borderRadius: 1,
                    overflow: "auto",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                  }}
                >
                  {`import { FileMosaic } from "@files-ui/react";\n\nexport default function App() {\n  return (\n    <FileMosaic\n      id="file1"\n      size={1024}\n      type="image/jpeg"\n      name="photo.jpg"\n      variant="medium"\n      info\n      preview\n    />\n  );\n}`}
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  FileMosaic - Large
                </Typography>
                <Typography
                  component="pre"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    p: 1.5,
                    borderRadius: 1,
                    overflow: "auto",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                  }}
                >
                  {`import { FileMosaic } from "@files-ui/react";\n\nexport default function App() {\n  return (\n    <FileMosaic\n      id="file1"\n      size={1024}\n      type="image/jpeg"\n      name="photo.jpg"\n      variant="large"\n      info\n      preview\n    />\n  );\n}`}
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  FileCard - Small
                </Typography>
                <Typography
                  component="pre"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    p: 1.5,
                    borderRadius: 1,
                    overflow: "auto",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                  }}
                >
                  {`import { FileCard } from "@files-ui/react";\n\nexport default function App() {\n  return (\n    <FileCard\n      id="file1"\n      size={1024}\n      type="image/jpeg"\n      name="photo.jpg"\n      variant="small"\n      elevation={8}\n    />\n  );\n}`}
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  FileCard - Medium
                </Typography>
                <Typography
                  component="pre"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    p: 1.5,
                    borderRadius: 1,
                    overflow: "auto",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                  }}
                >
                  {`import { FileCard } from "@files-ui/react";\n\nexport default function App() {\n  return (\n    <FileCard\n      id="file1"\n      size={1024}\n      type="image/jpeg"\n      name="photo.jpg"\n      variant="medium"\n      elevation={8}\n    />\n  );\n}`}
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  FileCard - Large
                </Typography>
                <Typography
                  component="pre"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    p: 1.5,
                    borderRadius: 1,
                    overflow: "auto",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                  }}
                >
                  {`import { FileCard } from "@files-ui/react";\n\nexport default function App() {\n  return (\n    <FileCard\n      id="file1"\n      size={1024}\n      type="image/jpeg"\n      name="photo.jpg"\n      variant="large"\n      elevation={8}\n    />\n  );\n}`}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Use Cases & Best Practices */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            🎯 Use Cases & Best Practices
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  When to Use Each Size
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    <strong>Small:</strong> Mobile thumbnails, sidebar listings,
                    gallery grids with high density
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    <strong>Medium:</strong> Default desktop layouts, file managers,
                    standard content areas (most common)
                  </Typography>
                  <Typography component="li" variant="body2">
                    <strong>Large:</strong> Featured content, accessibility-focused
                    interfaces, presentation layouts
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  Best Practices
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    ✅ Use <code>variant="medium"</code> as your default option
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    ✅ Apply the same variant consistently across a feature/page
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    ✅ Combine with responsive design for adaptive layouts
                  </Typography>
                  <Typography component="li" variant="body2">
                    ✅ Test with real content to ensure readability in all sizes
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Accessibility & Performance */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            ♿ Accessibility & Performance
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  Accessibility
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    ✅ All sizes maintain WCAG AA contrast ratios
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    ✅ Text remains readable at all size variants
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    ✅ Icons scale intelligently to maintain clarity
                  </Typography>
                  <Typography component="li" variant="body2">
                    ✅ Touch targets meet minimum 44×44px requirements (medium/large)
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  Performance
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    ✅ Zero runtime performance impact
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    ✅ Styles computed via useMemo for optimization
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    ✅ Bundle size unchanged (styling is inline, no new CSS)
                  </Typography>
                  <Typography component="li" variant="body2">
                    ✅ Compatible with SSR and lazy loading
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* API Reference */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            📚 API Reference
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  FileMosaic Props
                </Typography>
                <Typography component="pre" sx={{ fontSize: "0.85rem", overflow: "auto" }}>
                  {`interface FileMosaicProps {
  // New prop
  variant?: "small" | "medium" | "large";
  // Default: "medium"
  
  // Existing props still work
  id: string;
  size: number;
  type: string;
  name: string;
  // ... other props
}`}
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  FileCard Props
                </Typography>
                <Typography component="pre" sx={{ fontSize: "0.85rem", overflow: "auto" }}>
                  {`interface FileCardProps {
  // New prop
  variant?: "small" | "medium" | "large";
  // Default: "medium"
  
  // Existing props still work
  id: string;
  size: number;
  type: string;
  name: string;
  elevation?: number;
  // ... other props
}`}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Changelog */}
        <Box sx={{ mb: 6 }}>
          <Card sx={{ backgroundColor: "#f0f7ff", border: "2px solid #2196f3" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                📝 What's New in v1.3.0
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                  ✨ Added <code>variant</code> prop to FileMosaic and FileCard
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                  ✨ Three size variants: small (88×88px), medium (132×132px),
                  large (176×176px)
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                  ✨ All dependent elements (icons, text, status) scale
                  proportionally
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                  ✨ New Skeleton components: FileMosaicSkeleton,
                  FileCardSkeleton (with variant support)
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                  ✨ 100% backward compatible (default = medium)
                </Typography>
                <Typography component="li" variant="body2">
                  ✨ 32 new tests covering all size variants and scenarios
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Feedback */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Card sx={{ backgroundColor: "#f3e5f5", border: "2px solid #9c27b0" }}>
            <CardContent>
              <Typography variant="body2" sx={{ color: "#6a1b9a" }}>
                💡 Have feedback or questions about the size variants feature?
                <br />
                Visit the documentation or open an issue on GitHub.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default SizeVariantsPage;
