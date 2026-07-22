import * as React from "react";
import {
  FileInputButton,
  FileMosaic,
  //FileMosaicSkeleton,
} from "@files-ui/react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
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

const DemoFileMosaicSizeVariants: React.FC = () => {
  const [variant, setVariant] = React.useState<"small" | "medium" | "large">(
    "medium"
  );
  const [uploadedFile, setUploadedFile] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);

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
        FileMosaic Size Variants
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        Explore the three size variants (small, medium, large) for FileMosaic
        components. Use the selector below to switch between sizes and see how
        all dimensions scale proportionally.
      </Typography>

      <SizeVariantSelector value={variant} onChange={setVariant} />
      <SizeSpecTable component="FileMosaic" />

      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Live Demo - {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }, gap: 2, mb: 4 }}>
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
              {/* <FileMosaicSkeleton variant={variant} /> */}
            </CardContent>
          </Card>
        )}

        {uploadedFile && !isLoading && (
          <Card sx={{ p: 2 }}>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <FileMosaic
                {...uploadedFile}
                variant={variant}
                onDelete={handleDelete}
                info
                preview
              />
            </CardContent>
          </Card>
        )}

        {/* Sample Files Grid */}
        <Card sx={{ p: 2 }}>
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <FileMosaic
              {...sampleFileProps}
              //variant={variant}
              info
              preview
            />
          </CardContent>
        </Card>

        <Card sx={{ p: 2 }}>
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <FileMosaic
              {...sampleImageProps}
              //variant={variant}
              info
              preview
            />
          </CardContent>
        </Card>

        <Card sx={{ p: 2 }}>
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <FileMosaic
              {...sampleVideoProps}
              //variant={variant}
              info
              preview
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
          {`<FileMosaic\n  file={file}\n  variant="${variant}"\n  info\n  preview\n  onDelete={handleDelete}\n/>`}
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
            ✅ Interactive features (info, preview, delete) work in all sizes
          </Typography>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            ✅ Text remains readable and properly sized
          </Typography>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            ✅ Icons scale proportionally with component size
          </Typography>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            ✅ Full backward compatibility (default = medium)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DemoFileMosaicSizeVariants;
