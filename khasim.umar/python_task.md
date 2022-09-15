
# Importing Image class from PIL module
from PIL import Image
 
# Opens a image in original form
im = Image.open('sun.jpeg')
 
# Size of the image in pixels (size of original image)
width, height = im.size
 
# Setting the points for cropped image to be resized
left = 2
top = height / 3
right = 160
bottom = 2 * height / 3
 
# Cropped image of above dimension (orginial image is intact)
image = im.crop((left, top, right, bottom))
newsize = (300, 300)
image = im1.resize(newsize)
# Shows the image in image viewer
image.show()