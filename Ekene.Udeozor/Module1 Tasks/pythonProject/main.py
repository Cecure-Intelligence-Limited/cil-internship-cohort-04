
import PIL
from PIL import Image
# function to resize image
# X represents resized image width, y represents desired height
# file_path is the original image directory
def main(file_path, x, y):
    image = Image.open(file_path)
    print(image.size)
    resized_image = image.resize((x, y))
    resized_image.save("resized_image.jpg")
# Calling the main function

main("Image/jumping.jpg", 50, 50)
