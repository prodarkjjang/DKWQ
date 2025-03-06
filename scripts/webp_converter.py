import os
import shutil
from PIL import Image
from pillow_heif import open_heif

# Input and output directories
input_folder = r"D:\DKWQ\assets\images\food-ori"  # Change to your folder with images
output_folder = r"D:\DKWQ\assets\images\food-webp"  # Where all files will be stored

# Ensure output directory exists
os.makedirs(output_folder, exist_ok=True)

# Supported formats for conversion
valid_extensions = (".jpg", ".jpeg", ".png", ".heic")
webp_extension = ".webp"

# Process each file in the input folder
for filename in os.listdir(input_folder):
    input_path = os.path.join(input_folder, filename)
    output_path = os.path.join(output_folder, filename)  # Retain original name

    try:
        if filename.lower().endswith(valid_extensions):
            # Define new webp output path
            output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + ".webp")

            # Convert HEIC separately
            if filename.lower().endswith(".heic"):
                heif_file = open_heif(input_path)
                image = Image.frombytes(
                    heif_file.mode, heif_file.size, heif_file.data, "raw", heif_file.mode, heif_file.stride
                )
            else:
                image = Image.open(input_path).convert("RGB")  # Ensure compatibility

            # Save as WebP
            image.save(output_path, "WEBP", quality=90)
            print(f"Converted: {filename} -> {os.path.basename(output_path)}")

        elif filename.lower().endswith(webp_extension):
            # Copy WebP files as they are
            shutil.copy2(input_path, output_path)
            print(f"Copied: {filename}")

    except Exception as e:
        print(f"Error processing {filename}: {e}")

print("✅ Conversion and Copying Complete!")
