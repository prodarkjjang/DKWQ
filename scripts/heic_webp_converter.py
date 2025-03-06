import os
from pillow_heif import open_heif
from PIL import Image

# Define input and output directories
input_folder = r"D:\Downloads\DKWQ-001"
output_folder = r"D:\Downloads\DKWQ-002"

# Ensure output directory exists
os.makedirs(output_folder, exist_ok=True)

# Process each HEIC file in the input folder
for filename in os.listdir(input_folder):
    if filename.lower().endswith(".heic"):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + ".webp")

        try:
            # Open HEIC file and convert to WebP
            heif_file = open_heif(input_path)
            image = Image.frombytes(
                heif_file.mode, heif_file.size, heif_file.data, "raw", heif_file.mode, heif_file.stride
            )
            image.save(output_path, "WEBP", quality=90)

            print(f"Converted: {filename} -> {os.path.basename(output_path)}")
        except Exception as e:
            print(f"Error converting {filename}: {e}")

print("✅ Conversion complete!")
