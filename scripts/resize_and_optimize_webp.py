import os
from PIL import Image

# Input and output directories
input_folder = r"D:\DKWQ\assets\images\food-webp"  # Folder with existing webp images
output_folder = r"D:\DKWQ\assets\images\food-webp-resized"  # Where resized images will be stored

# Ensure output directory exists
os.makedirs(output_folder, exist_ok=True)

# Maximum width allowed
max_width = 200

# Process each WebP image in the input folder
for filename in os.listdir(input_folder):
    if filename.lower().endswith(".webp"):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        try:
            # Open the image
            with Image.open(input_path) as img:
                width, height = img.size  # Get current size

                # Resize only if width is greater than max_width
                if width > max_width:
                    new_height = int((max_width / width) * height)  # Maintain aspect ratio
                    img = img.resize((max_width, new_height), Image.LANCZOS)  # High-quality resize
                    print(f"Resized: {filename} -> {max_width}x{new_height}px")

                # Save with optimization
                img.save(output_path, "WEBP", quality=85, optimize=True)  # Adjust quality for compression
                print(f"Optimized: {filename} -> Saved in {output_folder}")

        except Exception as e:
            print(f"Error processing {filename}: {e}")

print("✅ Resizing and Optimization Complete!")
