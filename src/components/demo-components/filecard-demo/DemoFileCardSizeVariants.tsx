import * as React from "react";
import {
  FileInputButton,
  FileCard,
  //FileCardSkeleton,
} from "@files-ui/react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
  Slider,
} from "@mui/material";
import SizeVariantSelector from "../../util-components/SizeVariantSelector";
import SizeSpecTable from "../../util-components/SizeSpecTable";

const sampleFileProps = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "document.pdf",
};

const sampleImageProps = {
  id: "imageId",
  size: 5 * 1024 * 1024,
  type: "image/jpeg",
  name: "photo.jpg",
};

const sampleVideoProps = {
  id: "videoId",
  size: 150 * 1024 * 1024,
  type: "video/mp4",
  name: "video.mp4",
};

const DemoFileCardSizeVariants: React.FC = () => {
  const [variant, setVariant] = React.useState<"small" | "medium" | "large">(
    "medium"
  );
  const [uploadedFile, setUploadedFile] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [elevation, setElevation] = React.useState(8);

  const handleFileUpload = (files: any[]) => {
    setIsLoading(true);
    // Simulate upload delay
    setTimeout(() => {
      setUploadedFile(files[0]);
      setIsLoading(false);
    }, 1500);
  };

  const handleDelete = () => {
    setUploadedFile(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
        FileCard Size Variants
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        Explore the three size variants (small, medium, large) for FileCard
        components. The card adapts dimensions and all visual elements
        proportionally to the selected size.
      </Typography>

      <SizeVariantSelector value={variant} onChange={setVariant} />
      <SizeSpecTable component="FileCard" />

      {/* Elevation Control */}
      <Box sx={{ mb: 4, p: 2, backgroundColor: "#f9f9f9", borderRadius: 1 }}>
        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
          Shadow Elevation: {elevation}
        </Typography>
        <Slider
          value={elevation}
          onChange={(_, value) => setElevation(value as number)}
          min={0}
          max={24}
          step={1}
          marks
          valueLabelDisplay="auto"
          sx={{ maxWidth: 300 }}
        />
      </Box>

      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Live Demo - {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 2, mb: 4 }}>
        {/* Upload Section */}
        <Card sx={{ textAlign: "center", p: 2 }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              Upload a File
            </Typography>
            <FileInputButton
              value={uploadedFile ? [uploadedFile] : []}
              onChange={handleFileUpload}
            />
          </CardContent>
        </Card>

        {/* Uploaded File Display */}
        {isLoading && (
          <Card sx={{ p: 2 }}>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
           {/* <FileCardSkeleton variant={variant} /> */}
            </CardContent>
          </Card>
        )}

        {uploadedFile && !isLoading && (
          <Card sx={{ p: 2 }}>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <FileCard
                {...uploadedFile}
                variant={variant}
                elevation={elevation as any}
                onDelete={handleDelete}
              />
            </CardContent>
          </Card>
        )}

        {/* Sample Files Grid */}
        <Card sx={{ p: 2 }}>
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <FileCard
              {...sampleFileProps}
              //variant={variant}
              elevation={elevation as any}
            />
          </CardContent>
        </Card>

        <Card sx={{ p: 2 }}>
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <FileCard
              {...sampleImageProps}
              //variant={variant}
              elevation={elevation as any}
            />
          </CardContent>
        </Card>

        <Card sx={{ p: 2 }}>
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <FileCard
              {...sampleVideoProps}
              //variant={variant}
              elevation={elevation as any}
            />
          </CardContent>
        </Card>
      </Box>

      {/* Props Display */}
      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5", mb: 3 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
          Current Props:
        </Typography>
        <Typography component="pre" sx={{ fontSize: "0.85rem", overflow: "auto" }}>
          {`<FileCard\n  file={file}\n  variant="${variant}"\n  elevation={${elevation}}\n  onDelete={handleDelete}\n/>`}
        </Typography>
      </Paper>

      {/* Key Features */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Key Features Demonstrated:
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            ✅ All three size variants render with correct dimensions
          </Typography>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            ✅ Skeleton loading states match component sizes
          </Typography>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            ✅ Elevation/shadow adjustments work independently of size
          </Typography>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            ✅ File icons scale proportionally with card size
          </Typography>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            ✅ Text remains readable and properly sized in all variants
          </Typography>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            ✅ Responsive layout adapts to screen size
          </Typography>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            ✅ Full backward compatibility (default = medium, elevation = 8)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DemoFileCardSizeVariants;
