from PIL import Image

# Image.open() can also open other image types
img = Image.open("File_path\Image_name")
# WIDTH and HEIGHT are integers
resized_img = img.resize((WIDTH, HEIGHT))
# The image is then saved
resized_img=resized_img.save("resized_image.jpg")
