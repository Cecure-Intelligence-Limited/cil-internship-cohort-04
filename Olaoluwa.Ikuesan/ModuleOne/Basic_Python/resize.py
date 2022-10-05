# If you want to try out this function, please, delete the 'new_image.jpg' and 'new_image.png' files
# so the function can recreate them.


# Import the PIL image processing library
from PIL import Image

# Ask users to enter the name of the picture to be resized

picture = input("Please, enter the name of the image, e.g, 'sample.jpg'. Image must be in current directory: ")

width = int(input("Please, enter width: "))
height = int(input("Please, enter height: "))

# Creating the resize function
def resize(width, height):

    # Open the image in either .png or .jpg formats
    img = Image.open(picture)

    # resizing opened image to desired width
    resized_img = img.resize((width, height))

    # Save in current folder in preferred format
    resized_img.save("new_image.jpg")
    resized_img.save("new_image.png")

resize(width, height)

# Print Success Message
print("Resized image saved successfully in current directory.")