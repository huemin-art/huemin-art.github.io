import os
import random
import string
from PIL import Image, UnidentifiedImageError

def resize_image(image_path, max_resolution):
    try:
        with Image.open(image_path) as img:
            width, height = img.size
            
            if width > max_resolution or height > max_resolution:
                if width > height:
                    new_width = max_resolution
                    new_height = int(height * (max_resolution / width))
                else:
                    new_height = max_resolution
                    new_width = int(width * (max_resolution / height))
                
                img = img.resize((new_width, new_height), Image.ANTIALIAS)
            
            return img
    except (AttributeError, UnidentifiedImageError):
        print(f"Skipping image: {image_path} (unsupported format or corrupted)")
        return None

def generate_random_name(length):
    letters = string.ascii_lowercase + string.digits
    return ''.join(random.choice(letters) for _ in range(length))

def process_images(directory, max_resolution):
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            image_path = os.path.join(directory, filename)
            resized_image = resize_image(image_path, max_resolution)
            
            if resized_image is not None:
                # Generate a random name for the image
                random_name = generate_random_name(8)
                new_filename = f"{random_name}.jpg"
                new_image_path = os.path.join(directory, new_filename)
                
                # Save the resized image as JPEG with the new random name
                resized_image.save(new_image_path, "JPEG", optimize=True, quality=85)
                
                # Remove the original image file
                os.remove(image_path)

# Specify the directory containing the images
image_directory = 'assets/'

# Specify the maximum resolution
max_resolution = 2048

# Process the images
process_images(image_directory, max_resolution)